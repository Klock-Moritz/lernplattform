// Source - https://stackoverflow.com/a/79483774
// Posted by EladTal
// Retrieved 2026-06-23, License - CC BY-SA 4.0
// Modified for TypeScript support

'use client';

import { useState, useEffect, SetStateAction, Dispatch } from "react";

function useSession<T = undefined>(key: string): [T | undefined, Dispatch<SetStateAction<T | undefined>>];
function useSession<T>(key: string, initialState: T | (() => T)): [T, Dispatch<SetStateAction<T | undefined>>];

function useSession<T>(key: string, initialState?: T | (() => T)) {
  const [value, setValue] = useState(initialState);

  useEffect(() => {
    const storedValue = sessionStorage.getItem(key);
    if (storedValue) {
      setValue(JSON.parse(storedValue));
    }
  }, [key]);

  const setSessionValue = (value: SetStateAction<T | undefined>) => {
    setValue(value);
    sessionStorage.setItem(key, JSON.stringify(value));
  };

  return [value, setSessionValue];
};

export default useSession;
