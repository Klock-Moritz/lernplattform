const focusGoals = ["context", "format", "constraints", "role", "qa"] as const;
type FocusGoal = typeof focusGoals[number];

export type BasePromptEvaluation = Record<FocusGoal, number>

export type AdditionalPromptEvaluation = {
  score: number,
  focus: FocusGoal,
};

export function completeEvaluation<T extends BasePromptEvaluation>(base: T):
  T & AdditionalPromptEvaluation {
    return {
      ...base,
      score: focusGoals.map(goal => base[goal]).reduce((prev, cur) => prev + cur),
      focus: focusGoals.map(goal => ({
        goal: goal,
        score: base[goal]
      })).reduce((prev, cur) => prev.score <= cur.score ? prev : cur)
      .goal,
    }
}