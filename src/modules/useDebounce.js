import { useMemo } from 'react';

function debouncedFunction(func, delay) {
  let timeout;

  return (...args) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => func(...args), delay);
  };
}
export default function useDebounce(func, delay = 300) {
  return useMemo(() => debouncedFunction(func, delay), [func, delay]);
}
