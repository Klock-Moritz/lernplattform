import React, { Fragment } from "react"
import { StepperItem } from "./StepperItem"

export type StepperProps = React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> & {
  stepCount: number,
  currentStep: number,
}

export const Stepper: React.FC<StepperProps> = ({
  stepCount,
  currentStep,
  ...props
}: StepperProps) => {
  const steps = Array.from({ length: stepCount }, (_, i) => i + 1)

  return (
    <div {...props} className="flex flex-row w-full gap-4 justify-center items-center">
      {steps.map((step) => (
        <Fragment key={`stepper-${step}`}>
          {step !== 1 && (
            <div className="h-px bg-gray-300 w-16" />
          )}
          <StepperItem index={step} type={
            step < currentStep ? "finished"
            : step === currentStep ? "current"
            : "next"
          } />
        </Fragment>
      ))}
    </div>
  )
}