import { ComplexStyleRule } from "@vanilla-extract/css";
import { RecipeVariants } from "@vanilla-extract/recipes";
export declare const MenuItem: import("@vanilla-extract/recipes").RuntimeFn<{
    variant: {
        Background: ComplexStyleRule;
        Surface: ComplexStyleRule;
        SurfaceVariant: ComplexStyleRule;
        Primary: ComplexStyleRule;
        Secondary: ComplexStyleRule;
        Success: ComplexStyleRule;
        Warning: ComplexStyleRule;
        Critical: ComplexStyleRule;
    };
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
export declare type MenuItemVariants = RecipeVariants<typeof MenuItem>;
