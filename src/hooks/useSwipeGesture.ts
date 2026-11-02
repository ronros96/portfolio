
import { useRef } from "react";

type SwipeDirection = "up" | "down" | "left" | "right";

export const useSwipeGesture = (
  onSwipe: (direction: SwipeDirection) => void,
  threshold = 50
) => {
  const touchStart = useRef({ x: 0, y: 0 });

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStart.current = {
      x: e.changedTouches[0].clientX,
      y: e.changedTouches[0].clientY,
    };
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    const deltaX =
      e.changedTouches[0].clientX - touchStart.current.x;

    const deltaY =
      e.changedTouches[0].clientY - touchStart.current.y;

    if (Math.abs(deltaX) < threshold &&
        Math.abs(deltaY) < threshold) return;

    if (Math.abs(deltaY) > Math.abs(deltaX)) {
      onSwipe(deltaY < 0 ? "up" : "down");
    } else {
      onSwipe(deltaX < 0 ? "left" : "right");
    }
  };

  return {
    onTouchStart: handleTouchStart,
    onTouchEnd: handleTouchEnd,
  };
};
