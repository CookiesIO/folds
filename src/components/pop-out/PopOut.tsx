import React, {
  MutableRefObject,
  ReactNode,
  useCallback,
  useEffect,
  useLayoutEffect,
  useRef,
} from "react";
import { as } from "../as";
import { BaseDialog, PassthroughDialogProps } from "../base-dialog";
import { Align, getRelativeFixedPosition, Position } from "../util";
import { useComposeRefs } from "../../hooks/useComposeRefs";

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

      const css = getRelativeFixedPosition(
        anchor.getBoundingClientRect(),
        position,
        align,
        offset,
        alignOffset,
        baseEl.getBoundingClientRect()
      );
      baseEl.style.top = css.top;
      baseEl.style.bottom = css.bottom;
      baseEl.style.left = css.left;
      baseEl.style.right = css.right;
      baseEl.style.transform = css.transform;
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
        <BaseDialog open={open} {...props} variant="Clear" ref={composedRefs}>
          {content}
        </BaseDialog>
      </>
    );
  }
);
