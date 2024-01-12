import React from "react";
import { PassthroughDialogProps, BaseDialogVariantProp } from "../base-dialog";
export type ModalProps = PassthroughDialogProps & BaseDialogVariantProp;
export declare const Modal: <T extends React.ElementType = "dialog">(props: import("..").AsOutProps<T, {
    size?: "300" | "400" | "500" | undefined;
    flexHeight?: boolean | undefined;
} & PassthroughDialogProps & BaseDialogVariantProp>) => React.ReactElement<any, string | React.JSXElementConstructor<any>> | null;
