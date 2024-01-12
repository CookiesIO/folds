import React from "react";
export declare const Scroll: <T extends React.ElementType = "div">(props: Omit<React.PropsWithChildren<React.ComponentPropsWithRef<T>>, "as"> & {
    variant?: "Background" | "Surface" | "SurfaceVariant" | "Primary" | "Secondary" | "Success" | "Warning" | "Critical" | undefined;
    visibility?: "Always" | "Hover" | undefined;
    hideTrack?: boolean | undefined;
    size?: "0" | "300" | "400" | undefined;
    direction?: "Horizontal" | "Vertical" | "Both" | undefined;
} & import("..").AsProp<T>) => React.ReactElement<any, string | React.JSXElementConstructor<any>> | null;
