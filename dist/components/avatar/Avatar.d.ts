import React from "react";
export declare const Avatar: <T extends React.ElementType = "span">(props: Omit<React.PropsWithChildren<React.ComponentPropsWithRef<T>>, "as"> & {
    size?: "200" | "300" | "400" | "500" | undefined;
    radii?: "0" | "300" | "400" | "500" | "Pill" | "Inherit" | undefined;
} & import("..").AsProp<T>) => React.ReactElement<any, string | React.JSXElementConstructor<any>> | null;
export declare const AvatarImage: <T extends React.ElementType = "img">(props: import("..").AsOutProps<T, object>) => React.ReactElement<any, string | React.JSXElementConstructor<any>> | null;
export declare const AvatarFallback: <T extends React.ElementType = "span">(props: import("..").AsOutProps<T, object>) => React.ReactElement<any, string | React.JSXElementConstructor<any>> | null;
