import React from "react";
export interface DialogProps {
    open: boolean;
    onClose: () => void;
    onCancel?: never;
    onClick?: never;
}
export declare const Dialog: <T extends React.ElementType<any> = "dialog">(props: import("..").AsOutProps<T, {
    variant?: "Background" | "Surface" | "SurfaceVariant" | "Primary" | "Secondary" | "Success" | "Warning" | "Critical" | undefined;
} & DialogProps>) => React.ReactElement<any, string | React.JSXElementConstructor<any>> | null;
