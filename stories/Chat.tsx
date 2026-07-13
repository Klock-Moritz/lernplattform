import { useChat } from "@ai-sdk/react";
import { ChatMessages } from "./ChatMessages";
import { ChatMessageField } from "./ChatMessageField";
import { HTMLAttributes } from "react";

export type ChatProps = ReturnType<typeof useChat> & HTMLAttributes<HTMLDivElement> & {
    translationFunction?: (key: string) => string
};

export const Chat: React.FC<ChatProps> = ({
  messages,
  setMessages,
  sendMessage,
  error,
  clearError,
  resumeStream,
  addToolResult,
  addToolOutput,
  addToolApprovalResponse,
  regenerate,
  stop,
  translationFunction = (key: string) => key,
  className = "",
  ...props
}) => {
  return (
    <div {...props}
      className={`flex flex-col w-full gap-8 mx-auto stretch ${className}`}>
      <ChatMessages messages={messages} error={error} className="flex-1 overflow-auto" />
      <ChatMessageField translationFunction={translationFunction}
        onSend={message => sendMessage({ text: message })}
      />
    </div>
  )
}