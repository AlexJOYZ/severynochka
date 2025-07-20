import { useEffect, useState } from 'react';

export const useFocus = (ref) => {
  const [isFocus, setFocus] = useState(false);

  const onFocus = () => setFocus(true);
  const onBlur = () => setFocus(false);
  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    node.addEventListener('focus', onFocus);
    node.addEventListener('blur', onBlur);
    return () => {
      node.removeEventListener('focus', onFocus);
      node.removeEventListener('blur', onBlur);
    };
  }, []);
  return isFocus;
};
