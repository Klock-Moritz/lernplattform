import React from "react"

export type PageTitleProps = React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> & {
  title: string,
  description?: string,
  backHref?: string,
  backHrefTitle?: string,
}

export const PageTitle: React.FC<PageTitleProps> = ({
  title,
  description,
  backHref,
  backHrefTitle,
  ...props
}: PageTitleProps) => {
  return (
    <hgroup {...props}>
      {backHref && (
        <a href={backHref} rel="back"
          className="text-sm text-gray-500 hover:text-gray-800 transition-colors">
          ← {backHrefTitle}
        </a>
      )}
      <h1 className="text-4xl md:text-5xl font-medium">
        {title}
      </h1>
      {description && (
        <p className="max-w-xl text-gray-800">
          {description}
        </p>
      )}
    </hgroup>
  )
}