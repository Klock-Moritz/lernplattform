import React from "react"
import { Send } from "lucide-react"

export type ChatMessageFieldProps = Omit<React.TextareaHTMLAttributes<HTMLTextAreaElement>, "value" | "defaultValue"> & {
  value?: string,
  defaultValue?: string,
  onSend?: (message: string) => void,
  translationFunction?: (key: string) => string;
}

export const ChatMessageField: React.FC<ChatMessageFieldProps> = ({
  disabled,
  value,
  defaultValue,
  onSend,
  className = "",
  placeholder,
  rows = 3,
  translationFunction = (key: string) => key,
  ...props
}: ChatMessageFieldProps) => {
  const [internalValue, setInternalValue] = React.useState(defaultValue ?? "")

  const isControlled = value !== undefined
  const currentValue = isControlled ? value : internalValue

  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    if (!isControlled) {
      setInternalValue(event.target.value)
    }

    props.onChange?.(event)
  }

  const handleKeyDown = (event: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (event.key === "Enter" && !event.shiftKey) {
      event.preventDefault()
      handleSend()
    }

    props.onKeyDown?.(event)
  }

  const handleSend = () => {
    if (disabled) {
      return
    }

    onSend?.(currentValue)

    if (!isControlled) {
      setInternalValue("")
    }
  }

  return (
    <div className="relative">
      <textarea
        {...props}
        rows={rows}
        disabled={disabled}
        value={currentValue}
        placeholder={placeholder || translationFunction("label.writeMessage")}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
        className={`min-h-[96px] w-full resize-none rounded-xl border border-slate-300 bg-white px-4 py-3 pr-14 text-base leading-6 text-slate-900 outline-none transition-colors placeholder:text-slate-400 focus:border-secondary-500 focus:ring-2 focus:ring-secondary-500/15 disabled:cursor-not-allowed disabled:bg-slate-50 disabled:text-slate-500 ${className}`}
      />
      <button
        type="button"
        onClick={handleSend}
        disabled={disabled}
        aria-label={translationFunction("label.sendMessage")}
        className="absolute right-3 top-1/2 -translate-y-1/2 rounded-lg p-2 text-secondary-500 transition-colors hover:bg-secondary-500/15 disabled:cursor-not-allowed disabled:text-slate-300 disabled:hover:bg-transparent"
      >
        <Send className="h-7 w-7" strokeWidth={1.75} />
      </button>
    </div>
  )
}