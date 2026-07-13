import { RadioGroup } from "radix-ui"
import React from "react"

export type LikertRadioButtonProps = RadioGroup.RadioGroupItemProps & React.RefAttributes<HTMLButtonElement>

export const LikertRadioButton: React.FC<LikertRadioButtonProps> = ({
  ...props
}: LikertRadioButtonProps) => {
  return (
    <RadioGroup.Item {...props} className="w-7 h-7 box-border cursor-pointer border border-gray-500 rounded-full flex items-center justify-center overflow-hidden relative hover:bg-secondary-500/15">
      <RadioGroup.Indicator className="bg-secondary-500 absolute w-full h-full text-white flex items-center justify-center">
        {props.value}
      </RadioGroup.Indicator>
      {props.value}
    </RadioGroup.Item>
  )
}