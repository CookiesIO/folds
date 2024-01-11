import React from "react";
export declare const Spinner: <T extends React.ElementType<any> = "span">(props: Omit<React.PropsWithChildren<React.ComponentPropsWithRef<T>>, "as"> & {
    size?: "100" | "200" | "300" | "400" | "500" | "600" | "Inherit" | "50" | undefined;
    variant?: "Primary" | "Secondary" | "Success" | "Warning" | "Critical" | undefined;
    fill?: "Solid" | "Soft" | undefined;
} & import("..").AsProp<T>) => React.ReactElement<any, string | React.JSXElementConstructor<any>> | null;
