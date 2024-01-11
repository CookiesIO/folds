import React, { SVGAttributes } from "react";
import { IconSrc } from "./Icons";
export declare type IconProps = SVGAttributes<SVGElement> & {
    filled?: boolean;
    src: IconSrc;
};
export declare const Icon: React.ForwardRefExoticComponent<React.SVGAttributes<SVGElement> & {
    filled?: boolean | undefined;
    src: IconSrc;
} & {
    size?: "100" | "200" | "300" | "400" | "500" | "600" | "Inherit" | "50" | undefined;
} & React.RefAttributes<SVGSVGElement>>;
