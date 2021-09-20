import { debounce } from 'lodash';
import { useEffect, useState } from 'react';

export default function useIsOverHeader(): { isOverHeader: boolean } {
  const [isOverHeader, setIsOverHeader] = useState<boolean>(false);

  const listener = () => {
    setIsOverHeader(window.scrollY > 34);
  };

  const delay = 15;

  useEffect(() => {
    window.addEventListener("scroll", debounce(listener, delay));
    return () => {
      window.removeEventListener("scroll", listener);
    };
  }, []);

  return { 
    isOverHeader
  };
};