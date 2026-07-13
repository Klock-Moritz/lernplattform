import { Button, TextArea } from "@radix-ui/themes";
import { Send } from "lucide-react";
import React from "react";

export type ChatMessageFieldProps = {
  locked?: boolean;
  defaultMessage?: string;
  message?: string;
  onChange?: (message: string) => void;
  onSend?: (message: string) => void;
}

export const ChatMessageField: React.FC<ChatMessageFieldProps> = ({
  locked,
  defaultMessage,
  message,
  onChange,
  onSend,
}: ChatMessageFieldProps) => {
  const [internalMessage, setInternalMessage] =
    React.useState(defaultMessage ?? "")

  return (
    <div className="flex">
      <TextArea value={message ?? internalMessage}
        onInput={e => {
          if ("value" in e.target && typeof "value" === "string") {
            setInternalMessage(e.target.value);
            if (onChange) {
              onChange(e.target.value)
            };
          }
        }} />
      <Button disabled={locked}
        onClick={onSend ? () => onSend(message ?? internalMessage) : undefined}>
        <Send />
      </Button>
    </div>
  )
}