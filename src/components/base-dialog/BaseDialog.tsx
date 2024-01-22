import classNames from "classnames";
import React, { useEffect, useRef } from "react";
import FocusLock from "react-focus-lock";
import { as } from "../as";
import * as css from "./BaseDialog.css";
import { useComposeRefs } from "../../hooks/useComposeRefs";

export type PassthroughDialogProps = {
  open?: boolean;
  onClose: () => void;
  allowClose?: () => boolean;
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
      open = true,
      modal = true,
      focusLock = true,
      onClose,
      onClick: propOnClick,
      onKeyDown: propOnKeyDown,
      allowClose = () => true,
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

    const handleClose = () => {
      if (open) onClose();
    };

    const onKeyDown = (evt: React.KeyboardEvent<HTMLDialogElement>) => {
      propOnKeyDown?.(evt);
      if (!evt.defaultPrevented && evt.key === "Escape" && !allowClose()) {
        evt.preventDefault();
      }
    };

    const onClick = (evt: React.MouseEvent<HTMLDialogElement>) => {
      propOnClick?.(evt);
      if (evt.defaultPrevented || evt.target !== evt.currentTarget) return;
      const x = evt.clientX;
      const y = evt.clientY;
      const bounds = evt.currentTarget.getBoundingClientRect();
      const outOfBounds =
        x < bounds.left || x > bounds.right || y < bounds.top || y > bounds.bottom;
      if (outOfBounds && allowClose()) onClose();
    };

    const Container = focusLock ? FocusLock : "div";

    return (
      <AsModal
        className={classNames(css.BaseDialog({ variant, backdrop }), className)}
        {...props}
        ref={composedRefs}
        onClose={handleClose}
        onCancel={handleClose}
        onKeyDown={onKeyDown}
        onClick={onClick}
      >
        <Container className={css.BaseDialogContainer}>{children}</Container>
      </AsModal>
    );
  }
);
