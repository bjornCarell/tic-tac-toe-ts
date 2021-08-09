
import { useEffect, useRef, useState } from "react"
export const useLocalStorage = (
  key: string,
  defaultValue: any,
  {serialize = JSON.stringify, deserialize = JSON.parse} = {}
) => {
  const [value, setValue ] = useState(() => {
    const storageValue = window.localStorage.getItem(key);
    if (storageValue) {
      return deserialize(storageValue);
    }

    return typeof defaultValue === 'function' ? defaultValue() : defaultValue;
  });

  const prevKeyRef = useRef(key);

  useEffect(() => {
    const prevKey = prevKeyRef.current;

    if(prevKey !== key) {
      window.localStorage.removeItem(prevKey);
    }
    prevKeyRef.current = key;
    window.localStorage.setItem(key, serialize(value));
  });

  return [value, setValue];
}