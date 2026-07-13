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
                <div key={message.id} className="flex flex-col gap-2 whitespace-pre-wrap">
                    {message.parts.map((part, i) => {
                        switch (part.type) {
                            case "text":
                                return <ChatMessage key={`${message.id}-${i}`} type={message.role === "user" ? "me" : "other"}>
                                    {part.text}
                                </ChatMessage>;
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