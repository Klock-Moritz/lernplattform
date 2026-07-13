import React from "react"
import { CheckboxCircle } from "./CheckboxCircle"
import { MediaObjectCard } from "./MediaObjectCard"

export type ModuleCardProps = {
  href: string,
  title: string,
  description?: string,
  type: string,
  index: number,
  completed?: boolean,
  locked?: boolean,
}

export const ModuleCard: React.FC<ModuleCardProps> = ({
  href,
  title,
  description,
  type,
  index,
  completed = false,
  locked = false,
}: ModuleCardProps) => {
  return (
    <MediaObjectCard href={href} disabled={locked}
     mediaObject={<CheckboxCircle checked={completed} locked={locked} className="h-fit" />}
     caption={`${type} ${index}`} title={title} description={description}
     action={<span className="text-gray-800">→</span>}/>
  )
}