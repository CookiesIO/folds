import classNames from "classnames";
import React, { useEffect, useRef } from "react";
import FocusLock from "react-focus-lock";
import { as } from "../as";
import * as css from "./BaseDialog.css";
import { useComposeRefs } from "../../hooks/useComposeRefs";

export type PassthroughDialogProps = {
  open: boolean;
  onClose: () => void;
  onCancel?: never;
};

export interface BaseDialogVariantProp {
  variant?: NonNullable<css.BaseDialogVariants>["variant"];
}

export interface BaseDialogProps extends PassthroughDialogProps {
  modal?: boolean;
  focusLock?: boolean;
}

export const BaseDialog = as<"dialog", css.BaseDialogVariants & BaseDialogProps>(
  (
    {
      as: AsModal = "dialog",
      className,
      variant,
      backdrop,
      open,
      modal = true,
      focusLock = true,
      onClose,
      onClick: propOnClick,
      children,
      ...props
    },
    ref
  ) => {
    const dialogRef = useRef<HTMLDialogElement | null>(null);
    const composedRefs = useComposeRefs([dialogRef, ref]);

    useEffect(() => {
      if (!dialogRef.current) return;
      if (!dialogRef.current.open && open) {
        if (modal) {
          dialogRef.current.showModal();
        } else {
          dialogRef.current.show();
        }
      } else if (dialogRef.current.open && !open) dialogRef.current.close();
    }, [open, modal]);

    const handleClose = (evt: React.SyntheticEvent) => {
      evt.preventDefault();
      if (open) onClose();
    };

    const onClick = (evt: React.MouseEvent<HTMLDialogElement>) => {
      propOnClick?.(evt);
      if (evt.target !== evt.currentTarget) return;
      const x = evt.clientX;
      const y = evt.clientY;
      const bounds = evt.currentTarget.getBoundingClientRect();
      const outOfBounds =
        x < bounds.left || x > bounds.right || y < bounds.top || y > bounds.bottom;
      if (outOfBounds) onClose();
    };

    const Container = focusLock ? FocusLock : "div";

    return (
      <AsModal
        className={classNames(css.BaseDialog({ variant, backdrop }), className)}
        {...props}
        ref={composedRefs}
        onClose={handleClose}
        onCancel={handleClose}
        onClick={onClick}
      >
        <Container className={css.BaseDialogContainer} disabled={!open}>
          {children}
        </Container>
      </AsModal>
    );
  }
);
