import { UIDataTypes, UIMessage, UITools } from "ai"
import { ChatMessage } from "./ChatMessage"
import { DetailedHTMLProps, HTMLAttributes } from "react"

export type ChatMessagesProps = DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> & {
  messages: UIMessage<unknown, UIDataTypes, UITools>[],
  error?: Error | undefined
}

export const ChatMessages: React.FC<ChatMessagesProps> = ({
  messages,
  error,
  className = "",
  ...props
}) => {
  return (
    <div {...props} className={`flex flex-col gap-4 ${className}`}>
      {messages.map(message => (
        <div key={message.id} className="flex flex-col gap-2">
          {message.parts.map((part, i) => {
            switch (part.type) {
              case "text":
                return part.text.split(/(?:\r?\n){2,}/).filter((p) => p.trim()).map((line, j) => (
                  <ChatMessage key={`${message.id}-${i}-${j}`} type={message.role === "user" ? "me" : "other"}>
                    {line}
                  </ChatMessage>
                ));
            }
          })}
        </div>
      ))}
      {error && (
        <ChatMessage type="system">
          {error.message}
        </ChatMessage>
      )}
    </div>
  )
}