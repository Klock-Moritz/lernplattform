import { Check } from "lucide-react"

export type StepperItemProps = {
  index: number,
  type: "finished" | "current" | "next"
}

const additionalClasses = {
  finished: "bg-secondary-500 text-white",
  current: "border-1 border-secondary-500 bg-secondary-500/15",
  next: "bg-gray-300 text-gray-500",
}

export const StepperItem: React.FC<StepperItemProps> = ({
  index,
  type
}: StepperItemProps) => {
  return (

    <div
      className={`h-8 w-8 rounded-full flex justify-center items-center ${
        additionalClasses[type]}`}>
      {type !== "finished" ? index : (
        <Check />
      )}
    </div>
  )
}