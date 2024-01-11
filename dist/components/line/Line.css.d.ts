import { ComplexStyleRule } from "@vanilla-extract/css";
import { RecipeVariants } from "@vanilla-extract/recipes";
export declare const Line: import("@vanilla-extract/recipes").RuntimeFn<{
    variant: {
        Inherit: {
            borderColor: "inherit";
        };
        Background: ComplexStyleRule;
        Surface: ComplexStyleRule;
        SurfaceVariant: ComplexStyleRule;
        Primary: ComplexStyleRule;
        Secondary: ComplexStyleRule;
        Success: ComplexStyleRule;
        Warning: ComplexStyleRule;
        Critical: ComplexStyleRule;
    };
    direction: {
        Horizontal: {
            borderBottomWidth: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
            height: number;
        };
        Vertical: {
            borderLeftWidth: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
            width: number;
            flexDirection: "column";
        };
    };
    size: {
        "300": {
            vars: {
                [x: string]: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
            };
        };
        "400": {
            vars: {
                [x: string]: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
            };
        };
        "500": {
            vars: {
                [x: string]: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
            };
        };
        "600": {
            vars: {
                [x: string]: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
            };
        };
        "700": {
            vars: {
                [x: string]: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
            };
        };
    };
}>;
export declare type LineVariants = RecipeVariants<typeof Line>;
