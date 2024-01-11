import { ComplexStyleRule } from "@vanilla-extract/css";
import { RecipeVariants } from "@vanilla-extract/recipes";
export declare const Chip: import("@vanilla-extract/recipes").RuntimeFn<{
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
        "400": {
            vars: {
                [x: string]: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
            };
            height: string;
            padding: `0 var(--${string})` | `0 var(--${string}, ${string})` | `0 var(--${string}, ${number})`;
            gap: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
        };
        "500": {
            vars: {
                [x: string]: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
            };
            height: string;
            padding: `0 var(--${string})` | `0 var(--${string}, ${string})` | `0 var(--${string}, ${number})`;
            gap: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
        };
    };
    outlined: {
        true: {
            border: `var(--${string}) solid var(--${string})` | `var(--${string}) solid var(--${string}, ${string})` | `var(--${string}) solid var(--${string}, ${number})` | `var(--${string}, ${string}) solid var(--${string})` | `var(--${string}, ${string}) solid var(--${string}, ${string})` | `var(--${string}, ${string}) solid var(--${string}, ${number})` | `var(--${string}, ${number}) solid var(--${string})` | `var(--${string}, ${number}) solid var(--${string}, ${string})` | `var(--${string}, ${number}) solid var(--${string}, ${number})`;
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
export declare type ChipVariants = RecipeVariants<typeof Chip>;
