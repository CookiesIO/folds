import React from "react";
export declare const Checkbox: React.ForwardRefExoticComponent<Omit<React.AllHTMLAttributes<HTMLInputElement>, "children" | "type" | "onChange" | "size"> & {
    size?: "100" | "200" | "300" | "400" | "500" | "600" | "Inherit" | "50" | undefined;
    variant?: "Primary" | "Secondary" | "Success" | "Warning" | "Critical" | undefined;
} & {
    defaultChecked?: boolean | undefined;
    checked?: boolean | undefined;
} & React.RefAttributes<HTMLInputElement>>;
