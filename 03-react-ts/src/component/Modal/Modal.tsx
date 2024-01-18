import React, { forwardRef, ReactNode, useImperativeHandle, useRef } from 'react';
import { createPortal } from 'react-dom';

type Props = {
  children?: ReactNode;
};

export type ModalMethods = {
  open: () => void;
  close: () => void;
};

export const Modal = forwardRef<ModalMethods, Props>(function Modal({ children }, ref) {
  
  const dialog = useRef<HTMLDialogElement>(null);

  useImperativeHandle(ref, () => {
    return {
      open: () => {
        dialog.current?.showModal();
      },
      close: () => {
        dialog.current?.close();
      },
    };
  });

  return createPortal(
    <dialog className="modal" ref={dialog}>
      {children}
    </dialog>,
    document.getElementById('modal') as HTMLElement
  );
});