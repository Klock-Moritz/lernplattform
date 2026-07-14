import { UIDataTypes, UIMessage, UITools } from "ai"
import { ChatMessage } from "./ChatMessage"
import { DetailedHTMLProps, HTMLAttributes } from "react"
import { ChatInformationMessage } from "./ChatInformationMessage"

export type PartRenderer = (part: UIMessage<unknown, UIDataTypes, UITools>["parts"][number], message: UIMessage<unknown, UIDataTypes, UITools>, i: number) => React.ReactNode | null;

export type ChatMessagesProps = DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> & {
  messages: UIMessage<unknown, UIDataTypes, UITools>[],
  partRenderers?: PartRenderer[],
  error?: Error | undefined,
}

export const defaultPartRenderers: PartRenderer[] = [
  (part, message, i) => {
    if (part.type === "text") {
      // Split the text into paragraphs by double newlines and filter out empty paragraphs
      // Also filter out paragraphs that are just horizontal rules (***, ___, ---)
      return part.text.split(/(?:\r?\n){2,}/)
        .filter((p) => p.trim())
        .filter((p) => p.match(/^[*]{3,}|[_]{3,}|[-]{3,}$/) === null)
        .map((line, j) => (
        <ChatMessage key={`text-${message.id}-${i}-${j}`} type={message.role === "user" ? "me" : "other"}>
          {line}
        </ChatMessage>
      ));
    }
    return null;
  }
];

export const toolCallPartRenderer: PartRenderer = (part, message, i) => {
  if (part.type.startsWith("tool")) {
    return (
      <ChatInformationMessage key={`tool-${message.id}-${i}`} message={`Tool: ${part.type}`}>
        <pre className="text-left whitespace-pre-wrap break-words">{JSON.stringify(part, null, 2)}</pre>
      </ChatInformationMessage>
    );
  }
  return null;
};

export const ChatMessages: React.FC<ChatMessagesProps> = ({
  messages,
  error,
  partRenderers = defaultPartRenderers,
  className = "",
  ...props
}) => {
  return (
    <div {...props} className={`flex flex-col gap-4 ${className}`}>
      {messages.map(message => (
        <div key={message.id} className="flex flex-col gap-2">
          {message.parts.map((part, i) => {
            const renderedPart = partRenderers.flatMap(renderer => renderer(part, message, i)).filter((v): v is React.ReactNode => !!v);
            if (renderedPart.length > 0) {
              return renderedPart;
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