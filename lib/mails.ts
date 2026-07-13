import useSession from "./use_session";

export const mailsQuestionTypes = [
  "detectAI", "programAI", "learning", "emotionRegulation", "aiEthics",
  "designAI", "applyAI", "aiProblemSolving", "persuationLiteracy", "understandAI",
] as const;

export type MailsQuestionType = typeof mailsQuestionTypes[number];

export type Mails = Record<MailsQuestionType, number | null>;

export const useMails = () => useSession<Mails>("mails",
  Object.fromEntries(mailsQuestionTypes.map(key => [key, null])) as Mails
);