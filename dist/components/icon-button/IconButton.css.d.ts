import { ComplexStyleRule } from "@vanilla-extract/css";
import { RecipeVariants } from "@vanilla-extract/recipes";
export declare const IconButton: import("@vanilla-extract/recipes").RuntimeFn<{
    size: {
        "600": {
            padding: string;
        };
        "500": {
            padding: string;
        };
        "400": {
            padding: string;
        };
        "300": {
            padding: string;
        };
    };
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
    outlined: {
        true: {
            boxShadow: `inset 0 0 0 var(--${string}) var(--${string})` | `inset 0 0 0 var(--${string}) var(--${string}, ${string})` | `inset 0 0 0 var(--${string}) var(--${string}, ${number})` | `inset 0 0 0 var(--${string}, ${string}) var(--${string})` | `inset 0 0 0 var(--${string}, ${string}) var(--${string}, ${string})` | `inset 0 0 0 var(--${string}, ${string}) var(--${string}, ${number})` | `inset 0 0 0 var(--${string}, ${number}) var(--${string})` | `inset 0 0 0 var(--${string}, ${number}) var(--${string}, ${string})` | `inset 0 0 0 var(--${string}, ${number}) var(--${string}, ${number})`;
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
export declare type IconButtonVariants = RecipeVariants<typeof IconButton>;
