import React from "react"

export type LearningGoalListProps = {
  learningGoals: string[]
}

export const LearningGoalList: React.FC<LearningGoalListProps> = ({
  learningGoals
}: LearningGoalListProps) => {
  return (
    <div className="flex flex-col gap-2">
      {learningGoals.map((learningGoal, index) => (
        <div key={`learning-goal-${index}`}
          className="bg-white border border-gray-200 rounded-2xl block p-1 pl-2 pr-2 text-sm">
          {index + 1}. {learningGoal}
        </div>
      ))}
    </div>
  )
}