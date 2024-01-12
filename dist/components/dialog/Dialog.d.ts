import React from "react";
import { PassthroughDialogProps, BaseDialogVariantProp } from "../base-dialog";
export type DialogProps = PassthroughDialogProps & BaseDialogVariantProp;
export declare const Dialog: <T extends React.ElementType = "dialog">(props: import("..").AsOutProps<T, DialogProps>) => React.ReactElement<any, string | React.JSXElementConstructor<any>> | null;
