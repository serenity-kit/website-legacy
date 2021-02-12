import { useEffect, MutableRefObject, useRef, useCallback } from "react";

export default function useOutsideClick(
  refs: MutableRefObject<HTMLElement>[],
  handler: (e: MouseEvent) => any
): void {
  const savedHandler = useRef(handler);

  const callback = useCallback((e: MouseEvent) => {
    const outsideClick = refs.every((ref) => {
      return !ref.current?.contains(e.target as Element);
    });
    if (outsideClick) {
      savedHandler.current(e);
    }
  }, []);

  useEffect(() => {
    savedHandler.current = handler;
  });

  useEffect(() => {
    document.addEventListener("click", callback);
    return () => {
      document.removeEventListener("click", callback);
    };
  }, [refs, handler]);
}
