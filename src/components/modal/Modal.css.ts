import { recipe, RecipeVariants } from "@vanilla-extract/recipes";
import { config } from "../../theme/config.css";
import { DefaultReset } from "../reset.css";

export const Modal = recipe({
  base: [
    DefaultReset,
    {
      width: "100%",
      height: "100%",
    },
  ],
  variants: {
    size: {
      "300": {
        maxWidth: config.size.ModalWidth300,
        maxHeight: config.size.ModalHeight300,
      },
      "400": {
        maxWidth: config.size.ModalWidth400,
        maxHeight: config.size.ModalHeight400,
      },
      "500": {
        maxWidth: config.size.ModalWidth500,
        maxHeight: config.size.ModalHeight500,
      },
    },
    flexHeight: {
      true: {
        height: "fit-content",
      },
    },
  },
  defaultVariants: {
    size: "400",
  },
});

export type ModalVariants = RecipeVariants<typeof Modal>;
