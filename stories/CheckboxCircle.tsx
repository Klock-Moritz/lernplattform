import { Circle, CircleCheck, LockIcon } from "lucide-react";
import React from "react";

export type CheckboxCircleProps = React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> & {
  checked?: boolean;
  locked?: boolean;
}

export const CheckboxCircle: React.FC<CheckboxCircleProps> = ({
  checked = false,
  locked = false,
  ...props
}: CheckboxCircleProps) => {
  return (
    <div {...props} className={`inline-block bg-gray-200 p-2 rounded-full ${
      checked && !!!locked ? 'text-primary-500' : 'text-gray-500'
    } ${props.className}`}>
      {checked && !!!locked ? <CircleCheck size={20} /> :
       locked ? <LockIcon size={20} /> : <Circle size={20} />}
    </div>
  )
}