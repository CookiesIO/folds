import { style } from "@vanilla-extract/css";
import { config } from "../../theme/config.css";
import { DefaultReset } from "../reset.css";

export const Dialog = style([
  DefaultReset,
  {
    width: "100%",
    maxWidth: config.size.DialogWidth,
  },
]);
