import { ElementType, ReactElement } from "react";
import { AsInProps, AsOutProps, RefOfType } from "./types";
export declare const as: <DefaultType extends ElementType, ExtraProps = object>(fc: (props: AsInProps<DefaultType, ExtraProps>, ref: RefOfType<DefaultType>) => ReactElement | null) => <T extends ElementType = DefaultType>(props: AsOutProps<T, ExtraProps>) => ReactElement<any, string | import("react").JSXElementConstructor<any>> | null;
