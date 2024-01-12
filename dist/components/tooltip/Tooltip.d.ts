import React, { MutableRefObject, ReactNode } from "react";
import { Align, Position } from "../util";
export declare const Tooltip: <T extends React.ElementType = "div">(props: Omit<React.PropsWithChildren<React.ComponentPropsWithRef<T>>, "as"> & {
    variant?: "Background" | "Surface" | "SurfaceVariant" | "Primary" | "Secondary" | "Success" | "Warning" | "Critical" | undefined;
    radii?: "0" | "300" | "400" | "500" | "Pill" | "Inherit" | undefined;
} & import("..").AsProp<T>) => React.ReactElement<any, string | React.JSXElementConstructor<any>> | null;
interface TooltipProviderProps {
    position?: Position;
    align?: Align;
    offset?: number;
    alignOffset?: number;
    delay?: number;
    tooltip: ReactNode;
    children: (triggerRef: MutableRefObject<null>) => ReactNode;
}
export declare const TooltipProvider: <T extends React.ElementType = "div">(props: import("..").AsOutProps<T, TooltipProviderProps>) => React.ReactElement<any, string | React.JSXElementConstructor<any>> | null;
export {};
