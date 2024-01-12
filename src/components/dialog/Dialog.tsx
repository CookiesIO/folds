import classNames from "classnames";
import React from "react";
import { as } from "../as";
import { BaseDialog, PassthroughDialogProps, BaseDialogVariantProp } from "../base-dialog";
import * as css from "./Dialog.css";

export type DialogProps = PassthroughDialogProps & BaseDialogVariantProp;

export const Dialog = as<"dialog", DialogProps>(({ className, ...props }, ref) => (
  <BaseDialog backdrop className={classNames(css.Dialog, className)} {...props} ref={ref} />
));
