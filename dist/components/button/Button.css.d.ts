import { ComplexStyleRule } from "@vanilla-extract/css";
import { RecipeVariants } from "@vanilla-extract/recipes";
export declare const Button: import("@vanilla-extract/recipes").RuntimeFn<{
    size: {
        "300": {
            vars: {
                [x: string]: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
            };
            height: string;
            gap: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
            padding: `0 var(--${string})` | `0 var(--${string}, ${string})` | `0 var(--${string}, ${number})`;
        };
        "400": {
            vars: {
                [x: string]: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
            };
            height: string;
            gap: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
            padding: `0 var(--${string})` | `0 var(--${string}, ${string})` | `0 var(--${string}, ${number})`;
        };
        "500": {
            vars: {
                [x: string]: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
            };
            height: string;
            gap: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
            padding: `0 var(--${string})` | `0 var(--${string}, ${string})` | `0 var(--${string}, ${number})`;
        };
    };
    variant: {
        Primary: ComplexStyleRule;
        Secondary: ComplexStyleRule;
        Success: ComplexStyleRule;
        Warning: ComplexStyleRule;
        Critical: ComplexStyleRule;
    };
    fill: {
        Solid: {
            vars: {
                [x: string]: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
            };
            backgroundColor: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
            color: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
            borderColor: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
        };
        Soft: {
            vars: {
                [x: string]: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
            };
            backgroundColor: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
            color: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
            borderColor: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
        };
        None: {
            vars: {
                [x: string]: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
            };
            backgroundColor: "inherit";
            color: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
            borderColor: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
        };
    };
    outlined: {
        true: {
            borderWidth: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
        };
    };
    radii: {
        Inherit: string;
        "0": string;
        "300": string;
        "400": string;
        "500": string;
        Pill: string;
    };
}>;
export declare type ButtonVariants = RecipeVariants<typeof Button>;
