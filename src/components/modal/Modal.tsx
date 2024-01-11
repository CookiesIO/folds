import React, { useEffect, useRef } from "react";
import classNames from "classnames";
import * as css from "./Modal.css";
import { as } from "../as";
import { useComposeRefs } from "../../hooks/useComposeRefs";

export interface ModalProps {
  open: boolean;
  onClose: () => void;
  onCancel?: never;
  onClick?: never;
}

export const Modal = as<"dialog", css.ModalVariants & ModalProps>(
  (
    { as: AsModal = "dialog", className, variant, size, flexHeight, open, onClose, ...props },
    ref
  ) => {
    const dialogRef = useRef<HTMLDialogElement | null>(null);
    const composedRefs = useComposeRefs([dialogRef, ref]);

    useEffect(() => {
      if (!dialogRef.current) return;
      if (!dialogRef.current.open && open) dialogRef.current.showModal();
      else if (dialogRef.current.open && !open) dialogRef.current.close();
    }, [open]);

    const handleClose = (evt: React.SyntheticEvent) => {
      evt.preventDefault();
      if (open) onClose();
    };

    const onClick = (evt: React.MouseEvent<HTMLDialogElement>) => {
      if (evt.target !== evt.currentTarget) return;
      const x = evt.clientX;
      const y = evt.clientY;
      const bounds = evt.currentTarget.getBoundingClientRect();
      const outOfBounds =
        x < bounds.left || x > bounds.right || y < bounds.top || y > bounds.bottom;
      if (outOfBounds) onClose();
    };

    return (
      <AsModal
        className={classNames(css.Modal({ variant, size, flexHeight }), className)}
        {...props}
        ref={composedRefs}
        onClose={handleClose}
        onCancel={handleClose}
        onClick={onClick}
      />
    );
  }
);
