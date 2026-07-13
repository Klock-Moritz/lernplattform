import React from "react"
import { Progress } from "radix-ui"

export type ProgressBarProps = React.ComponentPropsWithoutRef<typeof Progress.Root> & {
  className?: string,
}

export const ProgressBar: React.FC<ProgressBarProps> = ({
  value = 0,
  max = 100,
  className = "",
  ...props
}: ProgressBarProps) => {
  const safeMax = max > 0 ? max : 1
  const safeValue = Math.min(Math.max(value ?? 0, 0), safeMax)
  const progressPercent = (safeValue / safeMax) * 100

  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <Progress.Root
        {...props}
        value={safeValue}
        max={safeMax}
        className="h-3 flex-1 overflow-hidden rounded-full bg-slate-400"
      >
        <Progress.Indicator
          className="h-full rounded-full bg-primary-500 transition-transform duration-300 ease-out"
          style={{ transform: `translateX(-${100 - progressPercent}%)` }}
        />
      </Progress.Root>
      <span className="min-w-[3rem] shrink-0 text-right text-sm font-medium">
        {safeValue}/{safeMax}
      </span>
    </div>
  )
}