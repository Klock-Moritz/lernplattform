import React from "react";
import { LinkCard, LinkCardProps } from "./LinkCard";
import { MediaObject, MediaObjectContent } from "./MediaObject";

export type MediaObjectCardProps = LinkCardProps & MediaObjectContent;

export const MediaObjectCard: React.FC<MediaObjectCardProps> = ({
  mediaObject,
  caption,
  title,
  description,
  action,
  ...props
}: MediaObjectCardProps) => {
  return (
    <LinkCard {...props}>
      <MediaObject mediaObject={mediaObject}
        caption={caption}
        title={title}
        description={description}
        action={action}
        className="p-2 pl-4 pr-4" />
    </LinkCard>
  )
}