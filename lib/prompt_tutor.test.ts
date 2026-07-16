import { describe, it, expect } from 'vitest';
import { generateTask, evaluatePrompt } from './prompt_tutor';
import type { PromptTutorScore, PromptTutorLevel, PromptTutorTask } from './prompt_tutor';

const dummyUser = { id: 'u1', name: 'Tester' } as any;

describe('generateTask', () => {
  it('returns a task for the requested level and excludes completed tasks when others available', async () => {
    const level: PromptTutorLevel = 'beginner';
    const score: PromptTutorScore = { role: null, context: null, format: null, constraints: null, qa: null };
    const completed = ['B1'];

    const task = await generateTask(score, dummyUser, completed);
    expect(task.level).toBe(level);
    expect(completed).not.toContain(task.id);
  });

  it('if all tasks for level are completed, returns a task from level (may be a completed one)', async () => {
    const level: PromptTutorLevel = 'beginner';
    const score: PromptTutorScore = { role: null, context: null, format: null, constraints: null, qa: null };
    // all beginner IDs from prompt_tutor.ts
    const allBeginner = ['B1','B6','B2','B7','B3','B8','B4','B9','B5','B10'];

    const task = await generateTask(score, dummyUser, allBeginner);
    expect(task.level).toBe(level);
    expect(allBeginner).toContain(task.id);
  });

  it('filters tasks to the lowest-scoring goal when available', async () => {
    const level: PromptTutorLevel = 'intermediate';
    // make 'role' the lowest non-null score
    const score: PromptTutorScore = { role: 3, context: 5, format: 5, constraints: 5, qa: 5 };
    // ensure availableTasks contains at least one non-role task by marking some role tasks completed
    const completed = ['F5']; // F5 is intermediate role; others remain

    const task = await generateTask(score, dummyUser, completed);
    expect(task.level).toBe(level);
    expect(task.goal).toBe('role');
  });

  it('if no tasks of the lowest-scoring goal are available, does not filter by goal', async () => {
    const level: PromptTutorLevel = 'intermediate';
    // make 'role' the lowest non-null score
    const score: PromptTutorScore = { role: 3, context: 5, format: 5, constraints: 5, qa: 5 };
    // ensure availableTasks contains all role tasks completed
    const completed = ['F5', 'F10'];

    const task = await generateTask(score, dummyUser, completed);
    expect(task.level).toBe(level);
    expect(task.goal).not.toBe('role');
  });

  it('when all goals have null score, does not filter by goal', async () => {
    const level: PromptTutorLevel = 'beginner';
    const score: PromptTutorScore = { role: null, context: null, format: null, constraints: null, qa: null };
    const completed: string[] = [];

    const task = await generateTask(score, dummyUser, completed);
    expect(task.level).toBe(level);
  });
});

describe('evaluatePrompt', () => {
  it('returns evaluation with score, sampleResponse, and level', async () => {
    const task: PromptTutorTask = {
      id: 'B1',
      level: 'beginner',
      goal: 'role',
      scenario: 'Du bist Büromitarbeiter und musst eine E-Mail an deinen Chef schreiben.',
      task: 'Schreibe eine E-Mail an deinen Chef, in der du um eine Gehaltserhöhung bittest. Achte darauf, höflich und professionell zu bleiben.',
    };
    const prompt = 'Du bist ein Experte. Schreibe eine E-Mail.';

    const evaluation = await evaluatePrompt(task, prompt);
    
    expect(evaluation).toBeDefined();
    expect(evaluation.sampleResponse).toBeDefined();
    expect(typeof evaluation.sampleResponse).toBe('string');
    expect(evaluation.score).toBeDefined();
    expect(typeof evaluation.score.role).toBe('number');
    expect(typeof evaluation.score.context).toBe('number');
    expect(typeof evaluation.score.format).toBe('number');
    expect(typeof evaluation.score.constraints).toBe('number');
    expect(typeof evaluation.score.qa).toBe('number');
    expect(evaluation.level).toBeDefined();
    expect(['beginner', 'intermediate', 'expert']).toContain(evaluation.level);
  });
});