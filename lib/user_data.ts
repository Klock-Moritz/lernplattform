import useSession from "./use_session"

export const userDataTypes = [ "industry", "jobTitle" ] as const;

export type UserDataType = typeof userDataTypes[number];

export type UserData = Record<UserDataType, string | null>;

export const useUserData = () => useSession<UserData>("userData",
  Object.fromEntries(userDataTypes.map(key => [key, null])) as UserData
);