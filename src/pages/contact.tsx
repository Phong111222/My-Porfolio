'use client';
import {
  CheckedIcon,
  GmailIcon,
  LinkedInIcon,
  ReactLogo,
  SkypeIcon,
} from '@/components/atoms/icon';
import LoadingIcon from '@/components/atoms/icon/LoadingIcon';
import Modal, { ModalRef } from '@/components/atoms/modal';
import { sendEmail } from '@/configs/email';
import useForm from '@/hooks/useForm';
import { useRef, useState } from 'react';

import z from 'zod';
const formItems = [
  {
    label: 'Name',
    name: 'name',
    type: 'text',
  },
  {
    label: 'Email',
    name: 'email',
    type: 'email',
  },
];

const ContactSchema = z
  .object({
    name: z.string().min(5),
    email: z.string().email('Email is invalid'),
    message: z.string(),
  })
  .required({
    name: true,
    email: true,
  });

interface FormValue {
  name: string;
  email: string;
  message: string;
}

const ContactItems = [
  {
    id: 'gmailAccount',
    title: 'tienphong111222@gmail.com',
    icon: <GmailIcon />,
  },
  {
    id: 'skypeAccount',
    title: 'Phong Nguyen',
    icon: <SkypeIcon />,
  },
  {
    id: 'linkedInAccount',
    title: 'Phong Nguyen',
    icon: <LinkedInIcon />,
  },
];

const neuShadow = `shadow-[28px_28px_56px_#cfc5b4,-28px_-28px_56px_#fffff4]`;

const ContactPage = () => {
  const [showModal, setShowModal] = useState(false);
  const {
    formValues,
    setFormValue,
    handleSubmit,
    errors,
    isSubmitting,
    isValidating,
    resetForm,
  } = useForm<FormValue>(
    {
      name: '',
      email: '',
      message: '',
    },
    ContactSchema
  );

  const modalRef = useRef<ModalRef>(null);
  const onSubmit = handleSubmit(async (values: FormValue) => {
    const response = await sendEmail({
      from_name: values.name,
      from_email: values.email,
      message: values.message,
      to_name: 'Tien Phong',
    });

    if (response.status === 200) {
      setShowModal(true);
    }
  });

  const handleCloseModal = () => {
    modalRef.current?.changeUnmountState('unmounting');
    setShowModal(false);
    resetForm();
  };

  return (
    <>
      <div
        id='contact'
        className='px-[250px] pt-[30px] pb-[50px] h-[calc(100vh - 300px)] box-border'
      >
        <div
          className='rounded-[10px] 
        shadow-[1px_2px_10px_3px_rgba(0,0,0,0.2)]
        flex'
        >
          <div
            id='contact-left '
            className='flex-1 px-[50px] py-[50px] box-border bg-primary rounded-l-[10px] '
          >
            <h4 className='text-center font-bold text-black text-[36px]'>
              Feel Free To Contact Me
            </h4>
            <div className='my-[50px]'>
              <form>
                {formItems.map((ele) => {
                  return (
                    <div
                      className='flex flex-col mb-[20px] relative'
                      key={ele.name}
                    >
                      <label
                        htmlFor={ele.name}
                        className='text-20px font-semibold mb-[10px]'
                      >
                        {ele.label}
                      </label>
                      <input
                        id={ele.name}
                        placeholder={ele.label}
                        name={ele.name}
                        type={ele.type}
                        className='h-[40px] outline-none 
                      px-[5px] rounded-[5px] 
                      focus:outline-secondary 
                      border-none outline-offset-0 
                      transition-all duration-300'
                        value={formValues[ele.name as keyof FormValue]}
                        onChange={(e) =>
                          setFormValue(
                            e.target.name as keyof FormValue,
                            e.target.value
                          )
                        }
                      />
                      {errors[ele.name as keyof FormValue] && (
                        <p className='absolute bottom-0 translate-y-[105%] text-[13px] text-red-500 animate-fade-in-fast'>
                          {errors[ele.name as keyof FormValue]}
                        </p>
                      )}
                    </div>
                  );
                })}
                <div className='flex flex-col mb-[15px]'>
                  <label
                    htmlFor={'message'}
                    className='text-20px font-semibold mb-[10px]'
                  >
                    Message
                  </label>
                  <textarea
                    placeholder='Message...'
                    id={'message'}
                    name={'message'}
                    className=' h-[300px] outline-none px-[5px] rounded-[5px] focus:outline-secondary 
                  border-none outline-offset-0 
                  transition-all duration-300 resize-none'
                    value={formValues['message']}
                    onChange={(e) =>
                      setFormValue(
                        e.target.name as keyof FormValue,
                        e.target.value
                      )
                    }
                  />
                </div>
              </form>
              <div className='my-[20px]'>
                <a
                  onClick={onSubmit}
                  className={`inline-block px-[30px] py-[10px] bg-black text-white text-[18px] rounded-[3px] 
                font-semibold cursor-pointer 
                shadow-[0px_0px_1px_1px_rgba(0,0,0,0.3)]
                transition-all duration-[500ms]
                box-border
                ${isSubmitting || isValidating ? 'pointer-events-none' : ''}`}
                >
                  <div className='flex items-center'>
                    {(isSubmitting || isValidating) && (
                      <span className='w-[18px] h-[18px] mr-[10px]'>
                        <LoadingIcon />
                      </span>
                    )}
                    Send
                  </div>
                </a>
              </div>
            </div>
          </div>
          <div
            id='contact-right'
            className='flex flex-col items-center flex-1 justify-center   py-[50px]'
          >
            <div className='w-[300px] mb-[50px]  animate-spin-slow'>
              <ReactLogo />
            </div>

            <div className=''>
              {ContactItems.map((contact) => {
                return (
                  <div
                    key={contact.id}
                    className='flex justify-center items-center'
                  >
                    <div className='box-content w-[25px] px-[10px] py-[10px] rounded-[9999px]'>
                      {contact.icon}
                    </div>
                    <p className='text-[20px] font-medium'>{contact.title}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
      <Modal
        ref={modalRef}
        open={showModal}
        containerClassName='box-border w-[500px]'
        children={
          <div className='box-border px-[40px] py-[30px] '>
            <p className='text-center font-semibold text-[32px]'>
              Thank you for your contact
            </p>
            <div className='flex items-center justify-center my-[20px]'>
              <div className='inline-block px-[20px] py-[20px] rounded-[9999px] bg-primary'>
                <div className='w-[30px] h-[30px]'>
                  <CheckedIcon />
                </div>
              </div>
            </div>
            <div className='flex items-center justify-center mt-[20px]'>
              <a
                className='text-secondary nline-block px-[30px] py-[10px] bg-black text-[18px] rounded-[3px] 
                font-semibold cursor-pointer 
                shadow-[0px_0px_1px_1px_rgba(0,0,0,0.3)]'
                onClick={handleCloseModal}
              >
                Close
              </a>
            </div>
          </div>
        }
      />
    </>
  );
};

export default ContactPage;
