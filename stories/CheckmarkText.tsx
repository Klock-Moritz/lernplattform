import React from "react"

export type CheckmarkTextProps = React.DetailedHTMLProps<React.HTMLAttributes<HTMLSpanElement>, HTMLSpanElement> & {
  children: string
}

export const CheckmarkText: React.FC<CheckmarkTextProps> = ({
  children,
  className = "",
  ...props
}: CheckmarkTextProps) => {
  return (
    <span {...props} className={`text-sm text-primary-600 ${className}`}>
      ✓ {children}
    </span>
  )
}