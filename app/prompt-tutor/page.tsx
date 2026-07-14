"use client"

import { Chat } from "@/stories/Chat";
import { ChatInformationMessage } from "@/stories/ChatInformationMessage";
import { defaultPartRenderers, toolCallPartRenderer } from "@/stories/ChatMessages";
import { StageSidebar } from "@/stories/StageSidebar"
import { useChat } from "@ai-sdk/react";
import { useTranslations } from "next-intl"
import Markdown from "react-markdown";

const partRenderers = defaultPartRenderers.concat(
  (part, message, i) => {
    if (part.type.startsWith("tool-evaluatePrompt")
      && "state" in part && part.state === "output-available"
      && "output" in part && part.output && typeof part.output === "object"
      && "sampleResponse" in part.output && typeof part.output.sampleResponse === "string") {
      return (
        <ChatInformationMessage key={`sample-${message.id}-${part.type}-${i}`} message="Beispielantwort">
          <Markdown>
            {part.output.sampleResponse}
          </Markdown>
        </ChatInformationMessage>
      );
    }
    return null;
  }
);

if (process.env.NODE_ENV !== "production") {
  partRenderers.push(toolCallPartRenderer);
}

export default function Page() {
  const t = useTranslations();

  return (
    <div className="flex flex-row flex-1 h-[calc(100% - theme(spacing.8))] w-full gap-8 mx-auto stretch p-8 items-stretch">
      <StageSidebar translationFunction={key => t(`common.${key}`)}
      sideContent={t("page.prompt-tutor.sideContent")}
      level={"beginner"} scores={{
        role: 8,
        context: 7,
        format: 9,
        constraints: 6,
        qa: 6
      }} learningObjectives={[
        t("page.prompt-tutor.learningObjectives.first"),
        t("page.prompt-tutor.learningObjectives.second"),
        t("page.prompt-tutor.learningObjectives.third")
      ]} tasksCompleted={5} totalTasks={10}
      className="w-80" />
      <div className="flex-1 p-8 overflow-scroll shadow-lg rounded-lg bg-white">
        <Chat {...useChat()} translationFunction={key => t(`common.${key}`)}
          className="h-full" partRenderers={partRenderers} />
      </div>
    </div>
  )
}