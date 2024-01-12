import { ComplexStyleRule } from "@vanilla-extract/css";
import { RecipeVariants } from "@vanilla-extract/recipes";
export declare const BaseDialogContainer: string;
export declare const BaseDialog: import("@vanilla-extract/recipes").RuntimeFn<{
    variant: {
        Clear: {
            background: "none";
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
    backdrop: {
        true: {
            "::backdrop": {
                backgroundColor: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
                backdropFilter: "blur(1.5px)";
                animation: `${string} 200ms`;
            };
        };
    };
}>;
export type BaseDialogVariants = RecipeVariants<typeof BaseDialog>;
