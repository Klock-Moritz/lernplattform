export type ScoreListProps = {
  scores: Record<string, number | null>,
  translationFunction?: (key: string) => string
}

export const ScoreList: React.FC<ScoreListProps> = ({
  scores,
  translationFunction = (key: string) => key,
}: ScoreListProps) => {
  return (
    <ul className="border-l-4 border-secondary-500 list-none pl-2">
        {Object.entries(scores).map(([key, value]) => (
            <li key={key}>
                {translationFunction(key)}: <strong>{value !== null ? value : "-"}</strong>
            </li>
        ))}
    </ul>
  )
}