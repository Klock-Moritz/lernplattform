import { ModuleCardGroup, ModuleCardGroupItem } from "./ModuleCardGroup"
import { Layout, LayoutProps } from "./Layout"
import React from "react"
import { CheckmarkText } from "./CheckmarkText"
import { PageSection } from "./PageSection"
import { LearningGoalList } from "./LearningGoalList"
import { MediaObjectCard } from "./MediaObjectCard"
import { BookOpen, BrainCircuit } from "lucide-react"
import { IconLinkCard } from "./IconLinkCard"

export type ModulePageProps = LayoutProps & {
  title: string,
  description: string,
  courseHref: string,
  courseTitle: string,
  learningGoals: string[],
  completed?: boolean,
  selfEvaluationCompleted?: boolean,
  sourcesAvailable?: boolean,
  stages: ModuleCardGroupItem[],
}

export const ModulePage: React.FC<ModulePageProps> = ({
  title,
  description,
  courseHref,
  courseTitle,
  learningGoals,
  completed = false,
  selfEvaluationCompleted = false,
  sourcesAvailable = false,
  stages,
  ...props
}: ModulePageProps) => {
  return (
    <Layout {...props}
      title={{title, description, backHref: courseHref, backHrefTitle: courseTitle}}>
      {completed && <CheckmarkText className="block mb-4">Module completed</CheckmarkText>}

      <PageSection title="Learning Goals">
        <LearningGoalList learningGoals={learningGoals} />

        {selfEvaluationCompleted ? (
          <CheckmarkText className="block mt-2 mb-4">Self-evaluation completed</CheckmarkText>
        ) : (
          <IconLinkCard icon={<BrainCircuit />}
            title="Start self-evaluation"
            description="Please complete self-evaluation before starting."
            className="mt-8 mb-4" />
        )}
      </PageSection>

      <PageSection title="Stages">
        <IconLinkCard icon={<BookOpen />}
          title="Look up sources"
          className="mb-4"
          disabled={!!!sourcesAvailable} />

        <ModuleCardGroup items={stages} type="Stage" />
      </PageSection>
    </Layout>
  )
}