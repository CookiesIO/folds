import React, { MutableRefObject, ReactNode } from "react";
import { Align, Position } from "../util";
export interface PopOutProps {
    open: boolean;
    position?: Position;
    align?: Align;
    offset?: number;
    alignOffset?: number;
    content: ReactNode;
    children: (anchorRef: MutableRefObject<null>) => ReactNode;
}
export declare const PopOut: <T extends React.ElementType<any> = "div">(props: import("..").AsOutProps<T, PopOutProps>) => React.ReactElement<any, string | React.JSXElementConstructor<any>> | null;
