import React, { MutableRefObject, ReactNode } from "react";
import { PassthroughDialogProps } from "../base-dialog";
import { Align, Position } from "../util";
export interface PopOutProps extends PassthroughDialogProps {
    position?: Position;
    align?: Align;
    offset?: number;
    alignOffset?: number;
    content: ReactNode;
    children: (anchorRef: MutableRefObject<null>) => ReactNode;
}
export declare const PopOut: <T extends React.ElementType = "dialog">(props: import("..").AsOutProps<T, PopOutProps>) => React.ReactElement<any, string | React.JSXElementConstructor<any>> | null;
