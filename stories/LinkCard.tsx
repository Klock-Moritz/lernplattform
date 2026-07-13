import React from "react"

export type LinkCardProps = React.DetailedHTMLProps<React.AnchorHTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement> & {
  disabled?: boolean,
}

export const LinkCard: React.FC<LinkCardProps> = ({
  disabled = false,
  ...props
}: LinkCardProps) => {
  const common = "bg-white border border-gray-200 rounded-2xl block transition"
  return disabled === false ? (
    <a {...props}
      className={`${common} hover:border-primary-50 ${props.className}`} />
  ) : (
      <a {...props} href={undefined} aria-disabled
        className={`${common} opacity-50 cursor-not-allowed pointer-events-none ${props.className}`} />
  )
}