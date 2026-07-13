import { useChat } from "@ai-sdk/react";
import { ChatMessages } from "./ChatMessages";
import { ChatMessageField } from "./ChatMessageField";

export type ChatProps = ReturnType<typeof useChat> & {
    translationFunction?: (key: string) => string
};

export const Chat: React.FC<ChatProps> = ({
  messages,
  sendMessage,
  error,
  translationFunction = (key: string) => key,
}) => {
  return (
    <div className="flex flex-col w-full gap-8 mx-auto stretch">
      <ChatMessages messages={messages} error={error} className="flex-1" />
      <ChatMessageField translationFunction={translationFunction}
        onSend={message => sendMessage({ text: message })}
      />
    </div>
  )
}