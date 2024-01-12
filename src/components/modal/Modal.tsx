import React from "react";
import classNames from "classnames";
import * as css from "./Modal.css";
import { as } from "../as";
import { BaseDialog, PassthroughDialogProps, BaseDialogVariantProp } from "../base-dialog";

export type ModalProps = PassthroughDialogProps & BaseDialogVariantProp;

export const Modal = as<"dialog", css.ModalVariants & ModalProps>(
  ({ className, size, flexHeight, ...props }, ref) => (
    <BaseDialog
      backdrop
      className={classNames(css.Modal({ size, flexHeight }), className)}
      {...props}
      ref={ref}
    />
  )
);
