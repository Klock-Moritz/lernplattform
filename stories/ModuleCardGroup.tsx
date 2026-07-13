import React from "react"
import { ModuleCard } from "./ModuleCard"

export type ModuleCardGroupItem = {
  href: string,
  title: string,
  description?: string,
  completed?: boolean,
  locked?: boolean,
}

export type ModuleCardGroupProps = {
  type: string
  items: ModuleCardGroupItem[],
}

export const ModuleCardGroup: React.FC<ModuleCardGroupProps> = ({
  type,
  items,
}: ModuleCardGroupProps) => {
  return (
    <div className="flex flex-col gap-4">
      {items.map((item, index) => (
        <ModuleCard key={`module-card-group-${type}-${index}`} {...item}
          type={type} index={index + 1}/>
      ))}
    </div>
  )
}