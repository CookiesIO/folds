import React, {
  MutableRefObject,
  ReactNode,
  useCallback,
  useEffect,
  useLayoutEffect,
  useRef,
} from "react";
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
      const baseEl = dialogRef.current;
      if (!baseEl || !anchor) return;

      const offsets = getRelativeFixedPosition(
        anchor.getBoundingClientRect(),
        position,
        align,
        offset,
        alignOffset,
        baseEl.getBoundingClientRect()
      );
      baseEl.style.top = offsets.top;
      baseEl.style.bottom = offsets.bottom;
      baseEl.style.left = offsets.left;
      baseEl.style.right = offsets.right;
      baseEl.style.transform = offsets.transform;
    }, [position, align, offset, alignOffset]);

    useEffect(() => {
      window.addEventListener("resize", positionPopOut);
      return () => {
        window.removeEventListener("resize", positionPopOut);
      };
    }, [positionPopOut]);

    useLayoutEffect(() => {
      if (open) positionPopOut();
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
