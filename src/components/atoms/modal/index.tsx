import {
  FC,
  ReactNode,
  forwardRef,
  useEffect,
  useImperativeHandle,
  useRef,
  useState,
} from 'react';
import { createPortal } from 'react-dom';

interface PortalWrapperProps {
  children: ReactNode;
}

interface ModalProps {
  children: ReactNode;
  open?: boolean;
  onClose?: () => void;
  wrapperClassName?: string;
  containerClassName?: string;
}

const PortalWrapper: FC<PortalWrapperProps> = ({ children }) => {
  let modalRef = useRef<HTMLDivElement | null>(null);
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    modalRef.current = document.createElement('div');
    modalRef.current.className = 'modal';
    document.body.appendChild(modalRef.current);
    setMounted(true);
    return () => {
      modalRef.current && document.body.removeChild(modalRef.current);
    };
  }, []);

  return Boolean(modalRef.current && mounted)
    ? modalRef.current && createPortal(children, modalRef.current)
    : null;
};

export type UnmountStatus = 'mounted' | 'unmounting' | 'unmounted';

export interface ModalRef {
  changeUnmountState: (status: UnmountStatus) => void;
}

const Modal = forwardRef<ModalRef, ModalProps>(
  (
    {
      open,
      wrapperClassName = '',
      containerClassName = 'w-[60%] h-[40%]',
      children,
    },
    ref
  ) => {
    const [unMountStatus, setUnMountStatus] =
      useState<UnmountStatus>('unmounted');

    const changeUnmountState = (status: UnmountStatus) => {
      setUnMountStatus(status);
    };

    useImperativeHandle(
      ref,
      () => ({
        changeUnmountState,
      }),
      [open, unMountStatus]
    );
    useEffect(() => {
      let timeout: any;

      if (open) {
        setUnMountStatus('mounted');
        return;
      }

      if (unMountStatus === 'mounted') return;

      if (unMountStatus === 'unmounting') {
        timeout = setTimeout(() => {
          setUnMountStatus('unmounted');
        }, 500);
        return;
      }

      return () => {
        timeout && clearTimeout(timeout);
      };
    }, [unMountStatus, open]);

    const modalAnimation =
      unMountStatus === 'mounted'
        ? 'animate-show-modal'
        : unMountStatus === 'unmounting'
        ? 'animate-close-modal'
        : 'animate-show-modal';

    return unMountStatus === 'unmounted' ? null : (
      <PortalWrapper>
        <div
          className={`fixed  right-0 top-0 h-[100vh] w-[100vw] bg-[rgb(0,0,0,0.3)] flex items-center justify-center 
        ${wrapperClassName}`}
        >
          <div
            id='modal-container'
            className={` rounded-[8px]  ${modalAnimation}  bg-secondary absolute ${containerClassName}`}
          >
            {children}
          </div>
        </div>
      </PortalWrapper>
    );
  }
);

export default Modal;
