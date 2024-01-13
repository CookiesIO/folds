import { style } from "@vanilla-extract/css";

export const PopOut = style({
  margin: -10,
  padding: 10,
  // prevents flicker when initially opening
  opacity: 0,
});
