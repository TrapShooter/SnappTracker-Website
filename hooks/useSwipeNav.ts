import { useRef } from "react";

export function useSwipeNav(onPrev: () => void, onNext: () => void, threshold = 60) {
  const startX = useRef<number | null>(null);
  const active = useRef(false);

  const start = (x: number) => {
    startX.current = x;
    active.current = true;
  };

  const end = (x: number) => {
    if (!active.current || startX.current === null) return;
    const delta = x - startX.current;
    if (Math.abs(delta) >= threshold) {
      if (delta < 0) onNext();
      else onPrev();
    }
    active.current = false;
    startX.current = null;
  };

  const cancel = () => {
    active.current = false;
    startX.current = null;
  };

  return {
    swipeProps: {
      onMouseDown: (e: React.MouseEvent) => start(e.clientX),
      onMouseUp: (e: React.MouseEvent) => end(e.clientX),
      onMouseLeave: cancel,
      onTouchStart: (e: React.TouchEvent) => start(e.touches[0].clientX),
      onTouchEnd: (e: React.TouchEvent) => end(e.changedTouches[0].clientX),
    },
  };
}
