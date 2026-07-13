import Markdown from "react-markdown"
import { ProgressBar } from "./ProgressBar"
import { ScoreList } from "./ScoreList"
import { HTMLAttributes } from "react"
import { sumRecordValues } from "@/lib/utils"

export type StageSidebarProps = HTMLAttributes<HTMLDivElement> & {
    sideContent: string,
    level: string,
    scores: Record<string, number | null>,
    learningObjectives: string[],
    tasksCompleted: number,
    totalTasks: number,
    translationFunction?: (key: string) => string
}

export const StageSidebar: React.FC<StageSidebarProps> = ({
    sideContent,
    level,
    scores,
    learningObjectives,
    tasksCompleted,
    totalTasks,
    translationFunction = (key: string) => key,
    ...props
}: StageSidebarProps) => {
    return (
        <div {...props}>
            <Markdown>{sideContent}</Markdown>
            <div className="text-lg font-bold mt-4">
                <p>{translationFunction("label.level")}: {translationFunction(`level.${level}`)}</p>
                <p>{translationFunction("label.totalScore")}: {sumRecordValues(scores)}</p>
            </div>
            <ScoreList scores={scores} translationFunction={translationFunction} />
            <div className="bg-secondary-500/15 rounded-3xl p-4">
                <h3 className="text-lg font-bold text-primary-500">{translationFunction("label.learningObjectives")}</h3>
                <ul>
                    {learningObjectives.map((objective, index) => (
                        <li key={index}>{objective}</li>
                    ))}
                </ul>
                <h3 className="text-lg font-bold text-primary-500">{translationFunction("label.progress")}</h3>
                {translationFunction("label.tasksCompleted")}
                <ProgressBar value={tasksCompleted} max={totalTasks} />
            </div>
        </div>
    )
}