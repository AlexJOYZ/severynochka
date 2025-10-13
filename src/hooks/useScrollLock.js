import { useLayoutEffect, useRef, useState } from 'react';

let scrollLockCount = 0;
let originStyleGlobal = null

export const useScrollLock = (options = {}) => {
  const { autoLock = true, lockTarget, widthReflow = true } = options;
  const [isLocked, setIsLocked] = useState(false);
  const target = useRef(null);

  const lock = () => {
    if (!target.current) return;
    if (scrollLockCount === 0) {
      const { overflow, paddingRight } = target.current.style;
      originStyleGlobal={overflow, paddingRight}
      if (widthReflow) {
        const offsetWidth =
          target.current === document.body ? window.innerWidth : target.current.offsetWidth;
        const currentPaddingRight =
          parseInt(window.getComputedStyle(target.current).paddingRight, 10) || 0;

        const scrollbarWidth = offsetWidth - target.current.scrollWidth;
        target.current.style.paddingRight = `${scrollbarWidth + currentPaddingRight}px`;
      }
      target.current.style.overflow = 'hidden';
    }
    setIsLocked(true);
    scrollLockCount++;
  };
  const unlock = () => {
    if (!target.current) return;
    scrollLockCount--;
    if (scrollLockCount <= 0) {
      scrollLockCount = 0;
      if (originStyleGlobal) {
        target.current.style.overflow = originStyleGlobal.overflow 
        if (widthReflow) {
          target.current.style.paddingRight = originStyleGlobal.paddingRight;
        }
      }
      setIsLocked(false);
    }
  };
  useLayoutEffect(() => {
    if (lockTarget) {
      target.current =
        typeof lockTarget === 'string' ? document.querySelector(lockTarget) : lockTarget;
    }

    if (!target.current) target.current = document.body;

    if (autoLock) lock();

    return () => unlock();
  }, [autoLock, lockTarget, widthReflow]);

  return { lock, isLocked, unlock };
};
