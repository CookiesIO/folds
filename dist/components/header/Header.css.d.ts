import { ComplexStyleRule } from "@vanilla-extract/css";
import { RecipeVariants } from "@vanilla-extract/recipes";
export declare const Header: import("@vanilla-extract/recipes").RuntimeFn<{
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
            height: string;
        };
        "400": {
            height: string;
        };
        "500": {
            height: string;
        };
        "600": {
            height: string;
        };
        "700": {
            height: string;
        };
    };
}>;
export declare type HeaderVariants = RecipeVariants<typeof Header>;
