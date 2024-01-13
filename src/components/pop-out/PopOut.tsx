import React, { MutableRefObject, ReactNode, useCallback, useEffect, useRef } from "react";
import classNames from "classnames";
import { as } from "../as";
import { BaseDialog, PassthroughDialogProps } from "../base-dialog";
import { Align, getRelativeFixedPosition, Position } from "../util";
import { useComposeRefs } from "../../hooks/useComposeRefs";
import * as css from "./PopOut.css";

export interface PopOutProps extends PassthroughDialogProps {
  position?: Position;
  align?: Align;
  offset?: number;
  alignOffset?: number;
  content: ReactNode;
  children: (anchorRef: MutableRefObject<null>) => ReactNode;
}

export const PopOut = as<"dialog", PopOutProps>(
  (
    {
      className,
      open,
      position = "Bottom",
      align = "Center",
      offset = 10,
      alignOffset = 0,
      content,
      children,
      ...props
    },
    ref
  ) => {
    const anchorRef = useRef<HTMLElement | null>(null);
    const dialogRef = useRef<HTMLDialogElement | null>(null);
    const composedRefs = useComposeRefs([dialogRef, ref]);

    const positionPopOut = useCallback(() => {
      const anchor = anchorRef.current;
      const dialog = dialogRef.current;
      if (!dialog || !anchor) return;

      const offsets = getRelativeFixedPosition(
        anchor.getBoundingClientRect(),
        position,
        align,
        offset,
        alignOffset,
        dialog.getBoundingClientRect()
      );
      dialog.style.top = offsets.top;
      dialog.style.bottom = offsets.bottom;
      dialog.style.left = offsets.left;
      dialog.style.right = offsets.right;
      dialog.style.transform = offsets.transform;
      // prevent flicker when initially opening
      dialog.style.opacity = "1";
    }, [position, align, offset, alignOffset]);

    useEffect(() => {
      window.addEventListener("resize", positionPopOut);
      return () => {
        window.removeEventListener("resize", positionPopOut);
      };
    }, [positionPopOut]);

    useEffect(() => {
      // Required because the bounding client rect hasn't updated before after useLayoutEffect
      const timeout = setTimeout(() => {
        if (open) positionPopOut();
      }, 0);
      return () => clearTimeout(timeout);
    }, [open, positionPopOut]);

    return (
      <>
        {children(anchorRef as MutableRefObject<null>)}
        <BaseDialog
          className={classNames(css.PopOut, className)}
          open={open}
          {...props}
          variant="Clear"
          ref={composedRefs}
        >
          {content}
        </BaseDialog>
      </>
    );
  }
);
