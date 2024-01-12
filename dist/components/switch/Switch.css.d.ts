import { ComplexStyleRule } from "@vanilla-extract/css";
import { RecipeVariants } from "@vanilla-extract/recipes";
export declare const Switch: import("@vanilla-extract/recipes").RuntimeFn<{
    variant: {
        Primary: ComplexStyleRule;
        Secondary: ComplexStyleRule;
        Success: ComplexStyleRule;
        Warning: ComplexStyleRule;
        Critical: ComplexStyleRule;
    };
}>;
export type SwitchVariants = RecipeVariants<typeof Switch>;
export declare const SwitchThumb: string;
