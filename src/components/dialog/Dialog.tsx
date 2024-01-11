import classNames from "classnames";
import React, { useEffect, useRef } from "react";
import { as } from "../as";
import * as css from "./Dialog.css";
import { useComposeRefs } from "../../hooks/useComposeRefs";

export interface DialogProps {
  open: boolean;
  onClose: () => void;
  onCancel?: never;
  onClick?: never;
}

export const Dialog = as<"dialog", css.DialogVariants & DialogProps>(
  ({ as: AsModal = "dialog", className, variant, open, onClose, ...props }, ref) => {
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
        className={classNames(css.Dialog({ variant }), className)}
        {...props}
        ref={composedRefs}
        onClose={handleClose}
        onCancel={handleClose}
        onClick={onClick}
      />
    );
  }
);
