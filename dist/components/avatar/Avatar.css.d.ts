import { RecipeVariants } from "@vanilla-extract/recipes";
export declare const Avatar: import("@vanilla-extract/recipes").RuntimeFn<{
    size: {
        "200": {
            vars: {
                [x: string]: string;
            };
        };
        "300": {
            vars: {
                [x: string]: string;
            };
        };
        "400": {
            vars: {
                [x: string]: string;
            };
        };
        "500": {
            vars: {
                [x: string]: string;
            };
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
export type AvatarVariants = RecipeVariants<typeof Avatar>;
export declare const AvatarImage: string;
export declare const AvatarFallback: string;
