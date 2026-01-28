import { useEffect } from 'react';

export const useKeyDown = (key, handler, options = {}) => {
  const { enabled = true, ignoreInputs = true } = options;

  useEffect(() => {
    if (!enabled) return;

    const onKeyDown = (event) => {
      if (key && event.key !== key) return;
      if (
        ignoreInputs &&
        event.target instanceof HTMLElement &&
        ['INPUT', 'TEXTAREA'].includes(event.target.tagName)
      )
      return;
      event.preventDefault();
      handler();
    };

    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [key, handler, enabled, ignoreInputs]);
};
