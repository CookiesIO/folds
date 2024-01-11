import { ComplexStyleRule, fallbackVar, keyframes } from "@vanilla-extract/css";
import { recipe, RecipeVariants } from "@vanilla-extract/recipes";
import { color } from "../../theme/color.css";
import { config } from "../../theme/config.css";
import { DefaultReset } from "../reset.css";
import { ContainerColor } from "../types";

const getVariant = (variant: ContainerColor): ComplexStyleRule => ({
  backgroundColor: color[variant].Container,
  color: color[variant].OnContainer,
  border: `${config.borderWidth.B300} solid ${color[variant].ContainerLine}`,
});

const DialogOpenAnime = keyframes({
  "0%": {
    transform: "translateY(5px)",
  },
  "100%": {
    transform: "translateY(0)",
  },
});

const DialogBackdropAnime = keyframes({
  "0%": {
    opacity: "0",
  },
  "100%": {
    opacity: "1",
  },
});

export const Dialog = recipe({
  base: [
    DefaultReset,
    {
      margin: "auto",
      borderRadius: config.radii.R400,
      boxShadow: config.shadow.E400,
      width: "100%",
      maxWidth: config.size.DialogWidth,
      overflow: "hidden",
      animation: `${DialogOpenAnime} 200ms`,
    },
    {
      "::backdrop": {
        backgroundColor: fallbackVar(color.Other.Overlay, "rgba(0 0 0 / 50%)"),
        backdropFilter: "blur(1.5px)",
        animation: `${DialogBackdropAnime} 200ms`,
      },
    },
  ],
  variants: {
    variant: {
      Background: getVariant("Background"),
      Surface: getVariant("Surface"),
      SurfaceVariant: getVariant("SurfaceVariant"),
      Primary: getVariant("Primary"),
      Secondary: getVariant("Secondary"),
      Success: getVariant("Success"),
      Warning: getVariant("Warning"),
      Critical: getVariant("Critical"),
    },
  },
  defaultVariants: {
    variant: "Surface",
  },
});

export type DialogVariants = RecipeVariants<typeof Dialog>;
