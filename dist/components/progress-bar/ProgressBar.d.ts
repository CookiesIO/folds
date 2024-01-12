import React from "react";
type ProgressBarProps = {
    value: number;
    min?: number;
    max: number;
};
export declare const ProgressBar: <T extends React.ElementType = "span">(props: import("..").AsOutProps<T, ProgressBarProps & {
    size?: "300" | "400" | "500" | undefined;
    variant?: "Primary" | "Secondary" | "Success" | "Warning" | "Critical" | undefined;
    fill?: "Solid" | "Soft" | "None" | undefined;
    radii?: "0" | "300" | "400" | "500" | "Pill" | "Inherit" | undefined;
    outlined?: boolean | undefined;
}>) => React.ReactElement<any, string | React.JSXElementConstructor<any>> | null;
export {};
