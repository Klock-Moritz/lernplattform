import React from "react"
import { Stepper } from "./Stepper"
import Markdown from "react-markdown"

export type LayoutProps = Omit<React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>, "title"> & {
  title: string,
  stepCount: number,
  currentStep: number,
  sideContent?: string,
  sideContentPlacement?: "left" | "top"
}

export const Layout: React.FC<LayoutProps> = ({
  title,
  stepCount,
  currentStep,
  sideContent,
  sideContentPlacement = "left",
  children,
  ...props
}: LayoutProps) => {
  return (
    <div {...props} className="min-h-full flex flex-col flex-1 p-8">
      <main className={`flex-1 flex gap-8 ${
        sideContentPlacement === "left" ? "flex-row" : "flex-col"}`}>
        {sideContent && (
          <section className="flex-1">
            <Markdown>
              {sideContent}
            </Markdown>
          </section>
        )}
        <section className="flex-1">
          {children}
        </section>
      </main>
      <footer>
        <Stepper stepCount={stepCount} currentStep={currentStep} />
        <div className="w-fit m-auto text-gray-500 mt-4">{title}</div>
      </footer>
    </div>
  )
}