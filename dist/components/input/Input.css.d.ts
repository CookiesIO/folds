import { ComplexStyleRule } from "@vanilla-extract/css";
import { RecipeVariants } from "@vanilla-extract/recipes";
export declare const Input: import("@vanilla-extract/recipes").RuntimeFn<{
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
            padding: `0 var(--${string})` | `0 var(--${string}, ${string})` | `0 var(--${string}, ${number})`;
            gap: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
            height: string;
        };
        "400": {
            vars: {
                [x: string]: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
            };
            padding: `0 var(--${string})` | `0 var(--${string}, ${string})` | `0 var(--${string}, ${number})`;
            gap: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
            height: string;
        };
        "500": {
            vars: {
                [x: string]: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
            };
            padding: `0 var(--${string})` | `0 var(--${string}, ${string})` | `0 var(--${string}, ${number})`;
            gap: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
            height: string;
        };
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
export type InputVariants = RecipeVariants<typeof Input>;
export declare const InputInput: string;
