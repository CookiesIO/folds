import { RecipeVariants } from "@vanilla-extract/recipes";
export declare const Modal: import("@vanilla-extract/recipes").RuntimeFn<{
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
            height: "fit-content";
        };
    };
}>;
export type ModalVariants = RecipeVariants<typeof Modal>;
