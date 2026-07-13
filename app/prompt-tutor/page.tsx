"use client"

import { Chat } from "@/stories/Chat";
import { StageSidebar } from "@/stories/StageSidebar"
import { useChat } from "@ai-sdk/react";
import { useTranslations } from "next-intl"

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
          className="h-full" />
      </div>
    </div>
  )
}