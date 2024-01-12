import { ComplexStyleRule, fallbackVar, keyframes, style } from "@vanilla-extract/css";
import { recipe, RecipeVariants } from "@vanilla-extract/recipes";
import { color } from "../../theme/color.css";
import { config } from "../../theme/config.css";
import { DefaultReset } from "../reset.css";
import { ContainerColor } from "../types";

const getVariant = (variant: ContainerColor): ComplexStyleRule => ({
  backgroundColor: color[variant].Container,
  color: color[variant].OnContainer,
  border: `${config.borderWidth.B300} solid ${color[variant].ContainerLine}`,
  borderRadius: config.radii.R400,
  boxShadow: config.shadow.E400,
});

const BaseDialogOpenAnime = keyframes({
  "0%": {
    transform: "translateY(5px)",
  },
  "100%": {
    transform: "translateY(0)",
  },
});

const BaseDialogBackdropAnime = keyframes({
  "0%": {
    opacity: "0",
  },
  "100%": {
    opacity: "1",
  },
});

export const BaseDialogContainer = style({
  flexGrow: 1,
  background: "none",
});

export const BaseDialog = recipe({
  base: [
    DefaultReset,
    {
      margin: "auto",
      overflow: "hidden",
      animation: `${BaseDialogOpenAnime} 200ms`,
      "::backdrop": {
        backgroundColor: "rgba(0 0 0 / 0%)",
      },
      selectors: {
        "&[open]": {
          display: "flex",
        },
      },
    },
  ],
  variants: {
    variant: {
      Clear: {
        background: "none",
      },
      Background: getVariant("Background"),
      Surface: getVariant("Surface"),
      SurfaceVariant: getVariant("SurfaceVariant"),
      Primary: getVariant("Primary"),
      Secondary: getVariant("Secondary"),
      Success: getVariant("Success"),
      Warning: getVariant("Warning"),
      Critical: getVariant("Critical"),
    },
    backdrop: {
      true: {
        "::backdrop": {
          backgroundColor: fallbackVar(color.Other.Overlay, "rgba(0 0 0 / 50%)"),
          backdropFilter: "blur(1.5px)",
          animation: `${BaseDialogBackdropAnime} 200ms`,
        },
      },
    },
  },
  defaultVariants: {
    variant: "Surface",
    backdrop: false,
  },
});

export type BaseDialogVariants = RecipeVariants<typeof BaseDialog>;
