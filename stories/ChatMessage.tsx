import React from "react"
import { Markdown } from "./Markdown"

export type ChatMessageProps = {
  type: "me" | "other" | "system",
  children: string | null | undefined,
}

export const ChatMessage: React.FC<ChatMessageProps> = ({
  type,
  children,
}: ChatMessageProps) => {

  return (
    <div className={`flex ${type === "me" ? "justify-end" : type === "other" ? "justify-start" : "justify-center"}`}>
      <div className={`max-w-[64rem] rounded-3xl px-4 py-3 text-sm leading-6 shadow-sm border ${
        type === "me"
          ? "border-primary-500"
          : type === "other"
            ? "border-secondary-500"
            : "border-gray-300"
      }`}>
        <Markdown>
          {children}
        </Markdown>
      </div>
    </div>
  )
}