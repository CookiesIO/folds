import React, { ReactNode } from "react";
export declare const Input: React.ForwardRefExoticComponent<Omit<React.AllHTMLAttributes<HTMLInputElement>, "size"> & {
    before?: ReactNode;
    after?: ReactNode;
    inputSize?: number | undefined;
} & {
    variant?: "Background" | "Surface" | "SurfaceVariant" | "Primary" | "Secondary" | "Success" | "Warning" | "Critical" | undefined;
    size?: "300" | "400" | "500" | undefined;
    outlined?: boolean | undefined;
    radii?: "0" | "300" | "400" | "500" | "Pill" | "Inherit" | undefined;
} & React.RefAttributes<HTMLInputElement>>;
