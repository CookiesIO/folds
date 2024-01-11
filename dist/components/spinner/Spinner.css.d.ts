import { ComplexStyleRule } from "@vanilla-extract/css";
import { RecipeVariants } from "@vanilla-extract/recipes";
export declare const Spinner: import("@vanilla-extract/recipes").RuntimeFn<{
    size: {
        Inherit: string;
        "50": string;
        "100": string;
        "200": string;
        "300": string;
        "400": string;
        "500": string;
        "600": string;
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
        };
        Soft: {
            vars: {
                [x: string]: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
            };
        };
    };
}>;
export declare type SpinnerVariants = RecipeVariants<typeof Spinner>;
export declare const SpinnerSvg: string;
export declare const SpinnerOuter: string;
export declare const SpinnerInner: string;
