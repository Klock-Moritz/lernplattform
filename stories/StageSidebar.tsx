import { ProgressBar } from "./ProgressBar"
import { ScoreList } from "./ScoreList"

export type StageSidebarProps = {
    title: string,
    description: string,
    level: string,
    scores: Record<string, number | null>,
    learningObjectives: string[],
    tasksCompleted: number,
    totalTasks: number,
    translationFunction?: (key: string) => string
}

export const StageSidebar: React.FC<StageSidebarProps> = ({
    title,
    description,
    level,
    scores,
    learningObjectives,
    tasksCompleted,
    totalTasks,
    translationFunction = (key: string) => key,
}: StageSidebarProps) => {
    return (
        <div>
            <h2>{title}</h2>
            <p>{description}</p>
            <div className="text-lg font-bold mt-4">
                <p>{translationFunction("label.level")}: {translationFunction(`level.${level}`)}</p>
                <p>{translationFunction("label.totalScore")}: {Object.values(scores).reduce((sum, score) => sum ?? 0 + (score ?? 0), 0)}</p>
            </div>
            <ScoreList scores={scores} translationFunction={translationFunction} />
            <div className="bg-secondary-500/15 rounded-3xl p-4">
                <h3 className="text-lg font-bold text-primary-500">{translationFunction("label.learningObjectives")}</h3>
                <ul>
                    {learningObjectives.map((objective, index) => (
                        <li key={index}>{objective}</li>
                    ))}
                </ul>
                <h3 className="text-lg font-bold text-primary-500">{translationFunction("label.tasksCompleted")}</h3>
                <ProgressBar value={tasksCompleted} max={totalTasks} />
            </div>
        </div>
    )
}