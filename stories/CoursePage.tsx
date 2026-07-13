import React from "react"
import { ModuleCardGroup, ModuleCardGroupItem } from "./ModuleCardGroup"
import { Layout, LayoutProps } from "./Layout"
import { PageSection } from "./PageSection"
import { Award } from "lucide-react"
import { IconLinkCard } from "./IconLinkCard"

export type CoursePageProps = LayoutProps & {
  title: string,
  description: string,
  modules: ModuleCardGroupItem[],
  completed?: boolean,
}

export const CoursePage: React.FC<CoursePageProps> = ({
  title,
  description,
  modules,
  completed = false,
  ...props
}: CoursePageProps) => {
  return (
    <Layout {...props}
      title={{title, description, backHref: "/", backHrefTitle: "All courses"}}>
      <PageSection title="Modules">
        <ModuleCardGroup type="Module" items={modules} />
        <IconLinkCard icon={<Award size={28} />}
          title="Get your certificate"
          description={completed
            ? "You have completed all modules. Download your PDF now."
            : "Complete all modules to download a certificate."}
          disabled={!!!completed}
          className="mt-8"
          href="/" />
      </PageSection>
    </Layout>
  )
}