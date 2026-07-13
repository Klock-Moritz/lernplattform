import { FormGroupProps, useFormGroup } from "@/lib/use_form_group";
import { LikertScale } from "./LikertScale";

export type LikertScaleGroupProps<T extends Record<string, number | null>> =
  FormGroupProps<number, T> & {
  translationFunction?: (key: string) => string;
  minValue: number,
  maxValue: number,
}

export function LikertScaleGroup<T extends Record<string, number | null>>({
  defaultValue,
  translationFunction = (key: string) => key,
  onUpdate,
  minValue,
  maxValue,
  value,
}: LikertScaleGroupProps<T>) {
  const [internalValue, updateValue] = useFormGroup<number, T>(defaultValue, onUpdate, value);

  return (
    <div className="flex flex-col gap-4">
      {Object.keys(defaultValue).map(key => (
        <LikertScale key={`likert-${String(key)}`}
          label={translationFunction(`label.${String(key)}`)}
          minValue={minValue} maxValue={maxValue}
          defaultValue={internalValue[key] ? String(internalValue[key]) : undefined}
          onValueChange={value => updateValue(key, parseInt(value))} />
      ))}
    </div>
  )
}