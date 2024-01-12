import React, { ReactNode } from "react";
type ChipProps = {
    before?: ReactNode;
    after?: ReactNode;
};
export declare const Chip: <T extends React.ElementType = "button">(props: import("..").AsOutProps<T, ChipProps & {
    variant?: "Background" | "Surface" | "SurfaceVariant" | "Primary" | "Secondary" | "Success" | "Warning" | "Critical" | undefined;
    size?: "400" | "500" | undefined;
    outlined?: boolean | undefined;
    radii?: "0" | "300" | "400" | "500" | "Pill" | "Inherit" | undefined;
}>) => React.ReactElement<any, string | React.JSXElementConstructor<any>> | null;
export {};
