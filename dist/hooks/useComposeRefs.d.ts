import { ForwardedRef } from "react";
export declare const useComposeRefs: <T>(refs: (ForwardedRef<T> | undefined)[]) => (element: T) => void;
