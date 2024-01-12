import React from "react";
export declare const RadioButton: React.ForwardRefExoticComponent<Omit<React.AllHTMLAttributes<HTMLInputElement>, "size" | "type" | "onChange"> & {
    defaultChecked?: boolean | undefined;
    checked?: boolean | undefined;
} & {
    variant?: "Primary" | "Secondary" | "Success" | "Warning" | "Critical" | undefined;
    size?: "100" | "200" | "300" | "400" | "500" | "600" | "Inherit" | "50" | undefined;
} & React.RefAttributes<HTMLInputElement>>;
