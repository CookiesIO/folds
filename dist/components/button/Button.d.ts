import React, { ReactNode } from "react";
declare type ButtonProps = {
    before?: ReactNode;
    after?: ReactNode;
};
export declare const Button: <T extends React.ElementType<any> = "button">(props: import("..").AsOutProps<T, {
    size?: "300" | "400" | "500" | undefined;
    variant?: "Primary" | "Secondary" | "Success" | "Warning" | "Critical" | undefined;
    fill?: "Solid" | "Soft" | "None" | undefined;
    outlined?: boolean | undefined;
    radii?: "0" | "300" | "400" | "500" | "Pill" | "Inherit" | undefined;
} & ButtonProps>) => React.ReactElement<any, string | React.JSXElementConstructor<any>> | null;
export {};
