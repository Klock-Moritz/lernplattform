import React from "react"

export type PageSectionProps = React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> & {
  title?: string
}

export const PageSection: React.FC<PageSectionProps> = ({
  title,
  ...props
}: PageSectionProps) => {
  return (
    <section {...props}>
      {title && (
        <h2 className="text-base text-gray-800 font-medium pb-3">{title}</h2>
      )}
      {props.children}
    </section>
  )
}