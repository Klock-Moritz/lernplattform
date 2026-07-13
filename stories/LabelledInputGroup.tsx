import { LabelledInput } from "./LabelledInput";
import { FormGroupProps, useFormGroup } from "@/lib/use_form_group";

export type LabelledInputGroupProps<T extends Record<string, string | null>>
  = FormGroupProps<string, T> & {
  translationFunction?: (key: string) => string;
}

export function LabelledInputGroup<T extends Record<string, string | null>>({
  defaultValue,
  translationFunction = (key: string) => key,
  onUpdate,
  value,
}: LabelledInputGroupProps<T>) {
  const [internalValue, updateValue] = useFormGroup<string, T>(defaultValue, onUpdate, value);

  return (
    <div className="flex flex-col gap-4">
      {Object.keys(defaultValue).map(key => (
        <LabelledInput key={`input-${String(key)}`}
          label={translationFunction(`label.${String(key)}`)} name={String(key)}
          placeholder={translationFunction(String(key))}
          value={internalValue[key] ?? ""}
          onChange={e => updateValue(key, e.target.value)} />
      ))}
    </div>
  )
}