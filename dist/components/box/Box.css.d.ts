import { RecipeVariants } from "@vanilla-extract/recipes";
export declare const Box: import("@vanilla-extract/recipes").RuntimeFn<{
    display: {
        Flex: {
            display: "flex";
        };
        InlineFlex: {
            display: "inline-flex";
        };
    };
    direction: {
        Inherit: {
            flexDirection: "inherit";
        };
        Row: {
            flexDirection: "row";
        };
        RowReverse: {
            flexDirection: "row-reverse";
        };
        Column: {
            flexDirection: "column";
        };
        ColumnReverse: {
            flexDirection: "column-reverse";
        };
    };
    wrap: {
        Inherit: {
            flexWrap: "inherit";
        };
        NoWrap: {
            flexWrap: "nowrap";
        };
        Wrap: {
            flexWrap: "wrap";
        };
        WrapReverse: {
            flexWrap: "wrap-reverse";
        };
    };
    justifyContent: {
        Inherit: {
            [x: string]: string;
        };
        Start: {
            [x: string]: string;
        };
        End: {
            [x: string]: string;
        };
        Stretch: {
            [x: string]: string;
        };
        Center: {
            [x: string]: string;
        };
        Baseline: {
            [x: string]: string;
        };
        SpaceBetween: {
            [x: string]: string;
        };
        SpaceAround: {
            [x: string]: string;
        };
        SpaceEvenly: {
            [x: string]: string;
        };
    };
    justifyItems: {
        Inherit: {
            [x: string]: string;
        };
        Start: {
            [x: string]: string;
        };
        End: {
            [x: string]: string;
        };
        Stretch: {
            [x: string]: string;
        };
        Center: {
            [x: string]: string;
        };
        Baseline: {
            [x: string]: string;
        };
    };
    justifySelf: {
        Inherit: {
            [x: string]: string;
        };
        Start: {
            [x: string]: string;
        };
        End: {
            [x: string]: string;
        };
        Stretch: {
            [x: string]: string;
        };
        Center: {
            [x: string]: string;
        };
        Baseline: {
            [x: string]: string;
        };
    };
    alignContent: {
        Inherit: {
            [x: string]: string;
        };
        Start: {
            [x: string]: string;
        };
        End: {
            [x: string]: string;
        };
        Stretch: {
            [x: string]: string;
        };
        Center: {
            [x: string]: string;
        };
        Baseline: {
            [x: string]: string;
        };
        SpaceBetween: {
            [x: string]: string;
        };
        SpaceAround: {
            [x: string]: string;
        };
        SpaceEvenly: {
            [x: string]: string;
        };
    };
    alignItems: {
        Inherit: {
            [x: string]: string;
        };
        Start: {
            [x: string]: string;
        };
        End: {
            [x: string]: string;
        };
        Stretch: {
            [x: string]: string;
        };
        Center: {
            [x: string]: string;
        };
        Baseline: {
            [x: string]: string;
        };
    };
    alignSelf: {
        Inherit: {
            [x: string]: string;
        };
        Start: {
            [x: string]: string;
        };
        End: {
            [x: string]: string;
        };
        Stretch: {
            [x: string]: string;
        };
        Center: {
            [x: string]: string;
        };
        Baseline: {
            [x: string]: string;
        };
    };
    gap: {
        Inherit: {
            gap: "inherit";
        };
        "0": {
            gap: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
        };
        "100": {
            gap: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
        };
        "200": {
            gap: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
        };
        "300": {
            gap: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
        };
        "400": {
            gap: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
        };
        "500": {
            gap: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
        };
        "600": {
            gap: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
        };
        "700": {
            gap: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
        };
    };
    grow: {
        No: {
            flexGrow: number;
        };
        Yes: {
            flexGrow: number;
        };
    };
    shrink: {
        No: {
            flexShrink: number;
        };
        Yes: {
            flexShrink: number;
        };
    };
    basis: {
        No: {
            flexBasis: number;
        };
        Yes: {
            flexBasis: "auto";
        };
    };
}>;
export declare type BoxVariants = RecipeVariants<typeof Box>;
