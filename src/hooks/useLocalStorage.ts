import { Dispatch, SetStateAction, useEffect, useState } from 'react';

export function useLocalStorage<T>(
  key: string,
  initialState?: T
): [T, Dispatch<SetStateAction<T>>] {
  const [state, setState] = useState<T>(
    () =>
      (process.browser && JSON.parse(localStorage.getItem(key) as string)) ||
      initialState
  );

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(state));
  });

  return [state, setState];
}
