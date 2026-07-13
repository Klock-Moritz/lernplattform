import React from "react";
import { MediaObjectCard, MediaObjectCardProps } from "./MediaObjectCard";

export type IconLinkCardProps = Omit<MediaObjectCardProps, "mediaObject"> & {
  icon: React.ReactElement<SVGSVGElement>
}

export const IconLinkCard: React.FC<IconLinkCardProps> = ({
  icon,
  ...props
}) => {
  return (
    <MediaObjectCard {...props}
      mediaObject={React.cloneElement(icon, {
        className: "text-primary-500"
      })}
      action={<span className="text-gray-800">→</span>} />
  )
}