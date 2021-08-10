import { useEffect, useRef, useState } from 'react';

export const useLocalStorage = <T>(
  key: string,
  defaultValue: T,
  { serialize = JSON.stringify, deserialize = JSON.parse } = {},
): [T, (value: T) => void] => {
  const [value, setValue] = useState(() => {
    const storageValue = window.localStorage.getItem(key);
    if (storageValue) {
      return deserialize(storageValue);
    }

    return typeof defaultValue === 'function' ? defaultValue() : defaultValue;
  });

  const prevKeyRef = useRef(key);

  useEffect(() => {
    const prevKey = prevKeyRef.current;

    if (prevKey !== key) {
      window.localStorage.removeItem(prevKey);
    }
    prevKeyRef.current = key;
    window.localStorage.setItem(key, serialize(value));
  }, [key, value, serialize]);

  return [value, setValue];
};
