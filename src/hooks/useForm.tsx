import {
  Dispatch,
  SetStateAction,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from 'react';
import z, { ZodError } from 'zod';

const generateFunc = <O extends Record<string, any>>(
  set: Dispatch<SetStateAction<any>>
) => {
  return <T extends keyof O>(key: T, value: O[T]) => {
    set((prev: O) => ({ ...prev, [key]: value }));
  };
};

type OnSubmit<V> = (cb: (values: V) => void) => () => Promise<void>;

interface UseForm<T> {
  formValues: T;
  setFormValue: ReturnType<typeof generateFunc>;

  isSubmitting: boolean;
  isValidating: boolean;
  errors: {
    [name in keyof T]?: string;
  };
  handleSubmit: OnSubmit<T>;
  resetForm: () => void;
}

const useForm = <O extends Record<string, any>>(
  initial: O,
  schema?: z.ZodObject<any>
): UseForm<O> => {
  const [formValues, setFormValues] = useState<O>(initial);
  const [errors, setErrors] = useState<UseForm<O>['errors']>({});
  const [isValidating, setIsValidating] = useState<boolean>(false);
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

  const onChangeValue = useMemo(() => generateFunc<O>(setFormValues), []);
  const resetForm = useCallback(() => {
    setFormValues(initial);
  }, []);
  const handleValidateForm = async () => {
    try {
      setIsValidating(true);
      const result = await schema?.parseAsync(formValues);
      setErrors({});
      setIsValidating(false);

      return result;
    } catch (error) {
      setIsValidating(false);
      throw error;
    }
  };

  const handleSubmit: OnSubmit<O> =
    (cb: (values: O) => void | Promise<(values: O) => void>) => async () => {
      try {
        const result = (await handleValidateForm()) as O;
        setIsSubmitting(true);
        await cb(result);
        setIsSubmitting(false);
      } catch (error) {
        const zodError = error as ZodError;
        const errorObj = zodError.issues.reduce(
          (acc: typeof errors, cur: any) => {
            acc[cur.path[0] as keyof O] = cur.message;
            return acc;
          },
          {}
        );
        setErrors(errorObj);
      }
    };

  return {
    formValues: formValues,
    setFormValue: onChangeValue,
    handleSubmit,
    isValidating,
    isSubmitting,
    errors,
    resetForm,
  };
};

export default useForm;
