import React from "react";

export interface FormGroupProps<T, V extends Record<string, T | null>> {
  defaultValue: V,
  onUpdate?: (value: V) => void;
  value?: V,
}

export function useFormGroup<T, V extends Record<string, T | null>>
  (defaultValue: V, onUpdate?: (value: V) => void, value?: V) {

    const [internalValue, setInternalValue] = React.useState<V>(defaultValue);

    function updateValue(key: string, value: T) {
      const newValue = {
        ...internalValue,
        [key]: value,
      };
      setInternalValue(newValue);
      if (onUpdate) {
        onUpdate(newValue);
      }
    }

    return [
      value !== undefined ? value : internalValue,
      updateValue
    ] as [V, (key: string, value: T) => void];
}