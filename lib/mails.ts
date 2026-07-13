import useSession from "./use_session";

export const mailsQuestionTypes = [
  "useAndApply1", "useAndApply2", "useAndApply3", "useAndApply4",
  "useAndApply5", "useAndApply6", "knowAndUnderstand3", "knowAndUnderstand4"
] as const;

export type MailsQuestionType = typeof mailsQuestionTypes[number];

export type Mails = Record<MailsQuestionType, number | null>;

export const useMails = () => useSession<Mails>("mails",
  Object.fromEntries(mailsQuestionTypes.map(key => [key, null])) as Mails
);