import React from "react";
export declare const Box: <T extends React.ElementType<any> = "div">(props: Omit<React.PropsWithChildren<React.ComponentPropsWithRef<T>>, "as"> & {
    display?: "Flex" | "InlineFlex" | undefined;
    direction?: "Inherit" | "Row" | "RowReverse" | "Column" | "ColumnReverse" | undefined;
    wrap?: "Inherit" | "NoWrap" | "Wrap" | "WrapReverse" | undefined;
    justifyContent?: "Start" | "Center" | "End" | "Inherit" | "Stretch" | "Baseline" | "SpaceBetween" | "SpaceAround" | "SpaceEvenly" | undefined;
    justifyItems?: "Start" | "Center" | "End" | "Inherit" | "Stretch" | "Baseline" | undefined;
    justifySelf?: "Start" | "Center" | "End" | "Inherit" | "Stretch" | "Baseline" | undefined;
    alignContent?: "Start" | "Center" | "End" | "Inherit" | "Stretch" | "Baseline" | "SpaceBetween" | "SpaceAround" | "SpaceEvenly" | undefined;
    alignItems?: "Start" | "Center" | "End" | "Inherit" | "Stretch" | "Baseline" | undefined;
    alignSelf?: "Start" | "Center" | "End" | "Inherit" | "Stretch" | "Baseline" | undefined;
    gap?: "0" | "100" | "200" | "300" | "400" | "500" | "600" | "700" | "Inherit" | undefined;
    grow?: "No" | "Yes" | undefined;
    shrink?: "No" | "Yes" | undefined;
    basis?: "No" | "Yes" | undefined;
} & import("..").AsProp<T>) => React.ReactElement<any, string | React.JSXElementConstructor<any>> | null;
