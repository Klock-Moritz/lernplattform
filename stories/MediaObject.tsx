import React from "react"

export type MediaObjectContent = {
  mediaObject: React.ReactElement,
  caption?: string,
  title: string,
  description?: string,
  action?: React.ReactElement,
}

export type MediaObjectProps = React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>
& MediaObjectContent

export const MediaObject: React.FC<MediaObjectProps> = ({
  mediaObject,
  caption,
  title,
  description,
  action,
  className = "",
  ...props
}: MediaObjectProps) => {
  return (
    <div {...props} className={`flex gap-4 items-center ${className}`}>
      {mediaObject}
      <div className="flex-1">
        {caption && (
          <span className="text-sm text-gray-500 font-light">
            {caption}
          </span>
        )}
        <h3 className="text-base text-gray-800 font-medium">{title}</h3>
        {description && (
          <span className="text-sm text-gray-800">{description}</span>
        )}
      </div>
      {action}
    </div>
  )
}