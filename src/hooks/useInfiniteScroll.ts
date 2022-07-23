import { useEffect } from 'react';
import debounce from 'lodash.debounce';

export function useInfiniteScroll(
  callback: React.Dispatch<React.SetStateAction<number>>
) {
  useEffect(() => {
    const handleScroll = debounce(() => {
      const { offsetHeight } = document.body;
      const { innerHeight, scrollY } = window;

      if (innerHeight + scrollY >= offsetHeight - 100) {
        callback((prevState) => prevState + 1);
      }
    }, 200);

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
}
