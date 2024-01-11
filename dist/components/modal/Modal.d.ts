import React from "react";
export interface ModalProps {
    open: boolean;
    onClose: () => void;
    onCancel?: never;
    onClick?: never;
}
export declare const Modal: <T extends React.ElementType<any> = "dialog">(props: import("..").AsOutProps<T, {
    variant?: "Background" | "Surface" | "SurfaceVariant" | "Primary" | "Secondary" | "Success" | "Warning" | "Critical" | undefined;
    size?: "300" | "400" | "500" | undefined;
    flexHeight?: boolean | undefined;
} & ModalProps>) => React.ReactElement<any, string | React.JSXElementConstructor<any>> | null;
