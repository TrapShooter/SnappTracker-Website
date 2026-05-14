import { useRef } from "react";

export function useDragScroll() {
  const ref = useRef<HTMLDivElement>(null);
  const isDown = useRef(false);
  const startX = useRef(0);
  const scrollStart = useRef(0);
  const hasDragged = useRef(false);

  const onMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    isDown.current = true;
    hasDragged.current = false;
    startX.current = e.pageX - (ref.current?.offsetLeft ?? 0);
    scrollStart.current = ref.current?.scrollLeft ?? 0;
  };

  const onMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isDown.current || !ref.current) return;
    const x = e.pageX - ref.current.offsetLeft;
    const delta = x - startX.current;
    if (Math.abs(delta) > 4) {
      hasDragged.current = true;
      ref.current.scrollLeft = scrollStart.current - delta;
    }
  };

  const stop = () => { isDown.current = false; };

  return {
    ref,
    dragProps: {
      onMouseDown,
      onMouseMove,
      onMouseUp: stop,
      onMouseLeave: stop,
    },
    didDrag: () => hasDragged.current,
  };
}
