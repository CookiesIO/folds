import React from "react";
export declare const Badge: <T extends React.ElementType<any> = "span">(props: Omit<React.PropsWithChildren<React.ComponentPropsWithRef<T>>, "as"> & {
    size?: "200" | "300" | "400" | "500" | undefined;
    variant?: "Primary" | "Secondary" | "Success" | "Warning" | "Critical" | undefined;
    fill?: "Solid" | "Soft" | "None" | undefined;
    outlined?: boolean | undefined;
    radii?: "0" | "300" | "400" | "500" | "Pill" | "Inherit" | undefined;
} & import("..").AsProp<T>) => React.ReactElement<any, string | React.JSXElementConstructor<any>> | null;
