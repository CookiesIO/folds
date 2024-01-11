import { ComplexStyleRule } from "@vanilla-extract/css";
import { RecipeVariants } from "@vanilla-extract/recipes";
export declare const Tooltip: import("@vanilla-extract/recipes").RuntimeFn<{
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
    radii: {
        Inherit: string;
        "0": string;
        "300": string;
        "400": string;
        "500": string;
        Pill: string;
    };
}>;
export declare type TooltipVariants = RecipeVariants<typeof Tooltip>;
