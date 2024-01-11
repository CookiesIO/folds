import { ReactNode } from "react";
export declare type PortalProps = {
    container?: Element | DocumentFragment;
    children: ReactNode | ReactNode[];
};
export declare const Portal: ({ container, children }: PortalProps) => JSX.Element;
