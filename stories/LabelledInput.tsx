import { TextField } from "@radix-ui/themes"
import { RefAttributes } from "react"

export type LabelledInputProps = TextField.RootProps & RefAttributes<HTMLInputElement> & {
  label: string
}

export const LabelledInput: React.FC<LabelledInputProps> = ({
  label,
  ...props
}: LabelledInputProps) => {
  return (
    <label>
      <span className="mb-4 inline-block">{label}</span>
      <TextField.Root {...props} />
    </label>
  )
}