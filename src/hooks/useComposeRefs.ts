import { useCallback, ForwardedRef, MutableRefObject } from "react";

export const useComposeRefs = <T>(refs: Array<ForwardedRef<T> | null | undefined>) =>
  useCallback(
    (element: T) => {
      refs.forEach((ref) => {
        if (!ref) return;
        if (typeof ref === "function") ref(element);
        else {
          const mutableRef = ref as MutableRefObject<T>;
          mutableRef.current = element;
        }
      });
    },
    // exhaustive deps are incorrect to use here, the contents *are* the deps
    // eslint-disable-next-line react-hooks/exhaustive-deps
    refs
  );
