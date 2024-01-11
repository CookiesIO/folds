import React from "react";
export declare const Switch: React.ForwardRefExoticComponent<Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, "children" | "role" | "onChange" | "onClick" | "value"> & {
    value?: boolean | undefined;
    onChange?: ((on: boolean) => void) | undefined;
} & {
    variant?: "Primary" | "Secondary" | "Success" | "Warning" | "Critical" | undefined;
} & React.RefAttributes<HTMLButtonElement>>;
