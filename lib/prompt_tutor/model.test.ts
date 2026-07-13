import { expect, test } from 'vitest'
import { completeEvaluation } from "./model";

test('Extracts score and focus correctly', () => {
  const result = completeEvaluation({
    context: 10,
    format: 9,
    constraints: 8,
    role: 8,
    qa: 9
  });

  expect(result.score).toBe(44);
  expect(result.focus).toBe("constraints");
});