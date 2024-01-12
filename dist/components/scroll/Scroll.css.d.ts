import { ComplexStyleRule } from "@vanilla-extract/css";
import { RecipeVariants } from "@vanilla-extract/recipes";
export declare const Scroll: import("@vanilla-extract/recipes").RuntimeFn<{
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
    visibility: {
        Always: {
            scrollbarColor: `var(--${string}) var(--${string})` | `var(--${string}) var(--${string}, ${string})` | `var(--${string}) var(--${string}, ${number})` | `var(--${string}, ${string}) var(--${string})` | `var(--${string}, ${string}) var(--${string}, ${string})` | `var(--${string}, ${string}) var(--${string}, ${number})` | `var(--${string}, ${number}) var(--${string})` | `var(--${string}, ${number}) var(--${string}, ${string})` | `var(--${string}, ${number}) var(--${string}, ${number})`;
            selectors: {
                "&::-webkit-scrollbar-thumb": {
                    backgroundColor: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
                };
                "&::-webkit-scrollbar-track": {
                    backgroundColor: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
                };
            };
        };
        Hover: {
            selectors: {
                "&:hover": {
                    scrollbarColor: `var(--${string}) var(--${string})` | `var(--${string}) var(--${string}, ${string})` | `var(--${string}) var(--${string}, ${number})` | `var(--${string}, ${string}) var(--${string})` | `var(--${string}, ${string}) var(--${string}, ${string})` | `var(--${string}, ${string}) var(--${string}, ${number})` | `var(--${string}, ${number}) var(--${string})` | `var(--${string}, ${number}) var(--${string}, ${string})` | `var(--${string}, ${number}) var(--${string}, ${number})`;
                };
                "&:hover::-webkit-scrollbar-thumb": {
                    backgroundColor: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
                };
                "&:hover::-webkit-scrollbar-track": {
                    backgroundColor: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
                };
            };
        };
    };
    hideTrack: {
        true: {
            vars: {
                [x: string]: string;
            };
        };
    };
    size: {
        "0": {
            scrollbarWidth: "none";
            selectors: {
                "&::-webkit-scrollbar": {
                    display: "none";
                };
            };
        };
        "300": {
            scrollbarWidth: "thin";
            selectors: {
                "&::-webkit-scrollbar": {
                    width: string;
                    height: string;
                };
                "&::-webkit-scrollbar-thumb, &::-webkit-scrollbar-track": {
                    border: `${string} solid transparent`;
                    backgroundClip: "padding-box";
                };
            };
        };
        "400": {
            scrollbarWidth: "auto";
            selectors: {
                "&::-webkit-scrollbar": {
                    width: string;
                    height: string;
                };
                "&::-webkit-scrollbar-thumb, &::-webkit-scrollbar-track": {
                    border: `${string} solid transparent`;
                    backgroundClip: "padding-box";
                };
            };
        };
    };
    direction: {
        Horizontal: {
            overflowX: "scroll";
        };
        Vertical: {
            overflowY: "scroll";
        };
        Both: {
            overflow: "scroll";
        };
    };
}>;
export type ScrollVariants = RecipeVariants<typeof Scroll>;
