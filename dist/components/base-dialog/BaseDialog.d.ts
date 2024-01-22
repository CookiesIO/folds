import React from "react";
import * as css from "./BaseDialog.css";
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
export declare const BaseDialog: <T extends React.ElementType = "dialog">(props: import("..").AsOutProps<T, {
    variant?: "Background" | "Surface" | "SurfaceVariant" | "Primary" | "Secondary" | "Success" | "Warning" | "Critical" | "Clear" | undefined;
    backdrop?: boolean | undefined;
} & BaseDialogProps>) => React.ReactElement<any, string | React.JSXElementConstructor<any>> | null;
