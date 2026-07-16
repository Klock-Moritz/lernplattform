"use client"

import { defaultPromptTutorEvaluation, PromptTutorEvaluation } from "@/lib/prompt_tutor";
import { Chat } from "@/stories/Chat";
import { ChatInformationMessage } from "@/stories/ChatInformationMessage";
import { defaultPartRenderers, toolCallPartRenderer } from "@/stories/ChatMessages";
import { Markdown } from "@/stories/Markdown";
import { StageSidebar } from "@/stories/StageSidebar"
import { useChat } from "@ai-sdk/react";
import { useTranslations } from "next-intl"

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
  const chat = useChat();

  const pushResultInputs: PromptTutorEvaluation[] = chat.messages.flatMap((message) =>
    message.parts.flatMap((part) => {
      if (
        part.type.startsWith("tool-pushResult") &&
        "input" in part &&
        part.input
      ) {
        return [part.input as PromptTutorEvaluation];
      }
      return [];
    })
  );

  const currentResult = pushResultInputs.length > 0 ? pushResultInputs[pushResultInputs.length - 1] : defaultPromptTutorEvaluation;

  return (
    <div className="flex flex-row flex-1 h-[calc(100% - theme(spacing.8))] w-full gap-8 mx-auto stretch p-8 items-stretch">
      <StageSidebar translationFunction={key => t(`common.${key}`)}
      sideContent={t("page.prompt-tutor.sideContent")}
      level={currentResult.level} scores={currentResult.score} learningObjectives={[
        t("page.prompt-tutor.learningObjectives.first"),
        t("page.prompt-tutor.learningObjectives.second"),
        t("page.prompt-tutor.learningObjectives.third")
      ]} tasksCompleted={pushResultInputs.length} totalTasks={10}
      className="w-80" />
      <div className="flex-1 p-8 overflow-scroll shadow-lg rounded-lg bg-white">
        <Chat {...chat} translationFunction={key => t(`common.${key}`)}
          className="h-full" partRenderers={partRenderers} />
      </div>
    </div>
  )
}