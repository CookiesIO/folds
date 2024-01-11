import React from "react";
export declare const Line: <T extends React.ElementType<any> = "div">(props: Omit<React.PropsWithChildren<React.ComponentPropsWithRef<T>>, "as"> & {
    variant?: "Background" | "Surface" | "SurfaceVariant" | "Primary" | "Secondary" | "Success" | "Warning" | "Critical" | "Inherit" | undefined;
    direction?: "Horizontal" | "Vertical" | undefined;
    size?: "300" | "400" | "500" | "600" | "700" | undefined;
} & import("..").AsProp<T>) => React.ReactElement<any, string | React.JSXElementConstructor<any>> | null;
