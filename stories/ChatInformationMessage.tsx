import * as Collapsible from "@radix-ui/react-collapsible";

export type ChatInformationMessageProps =  {
  message: string,
  children?: React.ReactNode,
}

export const ChatInformationMessage: React.FC<ChatInformationMessageProps> = ({
  message,
  children,
}) => {
  return (
    <div className="flex justify-center">
      <Collapsible.Root>
        <div className="max-w-[64rem] min-w-md text-sm text-center bg-gray-200 text-gray-700 rounded-lg p-2">
          <Collapsible.Trigger className="cursor-pointer font-medium">
            {message}
          </Collapsible.Trigger>
          <Collapsible.Content className="mt-2 text-left">
            {children}
          </Collapsible.Content>
        </div>
      </Collapsible.Root>
    </div>
  );
}