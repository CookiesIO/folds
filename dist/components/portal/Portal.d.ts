import React, { ReactNode } from "react";
export type PortalProps = {
    container?: Element | DocumentFragment;
    children: ReactNode | ReactNode[];
};
export declare const Portal: ({ container, children }: PortalProps) => React.JSX.Element;
