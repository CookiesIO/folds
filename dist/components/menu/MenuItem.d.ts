import React, { ReactNode } from "react";
declare type MenuItemProps = {
    before?: ReactNode;
    after?: ReactNode;
};
export declare const MenuItem: <T extends React.ElementType<any> = "button">(props: import("..").AsOutProps<T, MenuItemProps & {
    variant?: "Background" | "Surface" | "SurfaceVariant" | "Primary" | "Secondary" | "Success" | "Warning" | "Critical" | undefined;
    size?: "300" | "400" | undefined;
    radii?: "0" | "300" | "400" | "500" | "Pill" | "Inherit" | undefined;
}>) => React.ReactElement<any, string | React.JSXElementConstructor<any>> | null;
export {};
