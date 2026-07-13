import React from "react"
import { LinkCard, LinkCardProps } from "./LinkCard"
import { Progress } from "@radix-ui/themes"

export type CourseCardProps = LinkCardProps & {
  title: string,
  description: string,
  totalModules: number,
  completedModules: number,
}

export const CourseCard: React.FC<CourseCardProps> = ({
  title,
  description,
  totalModules,
  completedModules,
  ...props
}: CourseCardProps) => {
  return (
    <LinkCard {...props}>
      <div className="flex flex-col p-4">
        <div className="flex text-xs text-primary-500">
          <span className="flex-1">{totalModules} Modules</span>
          {completedModules >= totalModules && <span>Completed</span>}
        </div>
        <div className="text-lg font-medium text-gray-800">
          {title}
        </div>
        <div className="pb-2 text-gray-800">
          {description}
        </div>
        <Progress value={completedModules} max={totalModules} />
        <div className="text-xs text-gray-500 pt-1">
          {completedModules} / {totalModules}
        </div>
      </div>
    </LinkCard>
  )
}