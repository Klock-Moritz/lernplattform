import { RadioGroup } from "radix-ui"
import React from "react"
import { LikertRadioButton } from "./LikertRadioButton"

export type LikertScaleProps = RadioGroup.RadioGroupProps & React.RefAttributes<HTMLDivElement> & {
  minValue: number,
  maxValue: number,
  label?: string,
}

export const LikertScale: React.FC<LikertScaleProps> = ({
  minValue,
  maxValue,
  label,
  ...props
}) => {
  return (
    <RadioGroup.Root {...props}>
      {label && (
        <div className="mb-4">
          {label}
        </div>
      )}
      <div className="flex gap-4">
        {createNumberArray(minValue, maxValue + 1).map(value => (
          <LikertRadioButton key={value} value={String(value)}>
            {String(value)}
          </LikertRadioButton>
        ))}
      </div>
    </RadioGroup.Root>
  )
}

function createNumberArray(min: number, max: number) {
  return Array.from({ length: max - min }, (v, k) => k + min)
}