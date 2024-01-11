import { ComplexStyleRule } from "@vanilla-extract/css";
import { RecipeVariants } from "@vanilla-extract/recipes";
export declare const Modal: import("@vanilla-extract/recipes").RuntimeFn<{
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
            maxWidth: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
            maxHeight: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
        };
        "400": {
            maxWidth: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
            maxHeight: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
        };
        "500": {
            maxWidth: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
            maxHeight: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
        };
    };
    flexHeight: {
        true: {
            height: "unset";
        };
    };
}>;
export declare type ModalVariants = RecipeVariants<typeof Modal>;
