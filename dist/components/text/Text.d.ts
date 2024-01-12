import React from "react";
export declare const Text: <T extends React.ElementType = "p">(props: Omit<React.PropsWithChildren<React.ComponentPropsWithRef<T>>, "as"> & {
    size?: "D400" | "H1" | "H2" | "H3" | "H4" | "H5" | "H6" | "T500" | "T400" | "T300" | "T200" | "B500" | "B400" | "B300" | "L400" | "O400" | "C400" | "Inherit" | undefined;
    align?: "Right" | "Left" | "Center" | "Justify" | undefined;
    truncate?: boolean | undefined;
    priority?: "300" | "400" | "500" | "Inherit" | "Initial" | undefined;
} & import("..").AsProp<T>) => React.ReactElement<any, string | React.JSXElementConstructor<any>> | null;
