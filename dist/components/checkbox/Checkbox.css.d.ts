import { ComplexStyleRule } from "@vanilla-extract/css";
import { RecipeVariants } from "@vanilla-extract/recipes";
export declare const Checkbox: import("@vanilla-extract/recipes").RuntimeFn<{
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
}>;
export declare type CheckboxVariants = RecipeVariants<typeof Checkbox>;
export declare const CheckboxInput: string;
export declare const CheckboxIcon: string;
