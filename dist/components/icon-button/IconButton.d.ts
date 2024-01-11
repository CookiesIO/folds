import React from "react";
export declare const IconButton: <T extends React.ElementType<any> = "button">(props: Omit<React.PropsWithChildren<React.ComponentPropsWithRef<T>>, "as"> & {
    size?: "300" | "400" | "500" | "600" | undefined;
    variant?: "Background" | "Surface" | "SurfaceVariant" | "Primary" | "Secondary" | "Success" | "Warning" | "Critical" | undefined;
    outlined?: boolean | undefined;
    radii?: "0" | "300" | "400" | "500" | "Pill" | "Inherit" | undefined;
} & import("..").AsProp<T>) => React.ReactElement<any, string | React.JSXElementConstructor<any>> | null;
