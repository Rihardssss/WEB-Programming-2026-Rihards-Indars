import { useState } from "react";

function readStored<T>(key: string, initialValue: T, isValid: (value: unknown) => value is T): T {
  try {
    const raw = localStorage.getItem(key);
    if (raw === null) {
      return initialValue;
    }

    const parsed: unknown = JSON.parse(raw);
    if (!isValid(parsed)) {
      return initialValue;
    }

    return parsed;
  } catch {
    return initialValue;
  }
}

export function useLocalStorage<T>(
  key: string,
  initialValue: T,
  isValid: (value: unknown) => value is T,
): readonly [T, (next: T) => void] {
  const [value, setValue] = useState<T>(() => readStored(key, initialValue, isValid));

  function save(next: T): void {
    setValue(next);
    try {
      localStorage.setItem(key, JSON.stringify(next));
    } catch {
      return;
    }
  }

  return [value, save] as const;
}
