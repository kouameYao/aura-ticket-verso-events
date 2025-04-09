
import React from "react";
import { cn } from "@/lib/utils";
import { CheckCircle } from "lucide-react";

interface Step {
  title: string;
  description: string;
}

interface StepsProps {
  steps: Step[];
  currentStep: number;
  className?: string;
}

export function Steps({ steps, currentStep, className }: StepsProps) {
  return (
    <div className={cn("w-full", className)}>
      <div className="flex justify-between">
        {steps.map((step, index) => {
          const isCompleted = index < currentStep;
          const isCurrent = index === currentStep;

          return (
            <div key={index} className="flex flex-col items-center relative">
              {/* Step connector line */}
              {index < steps.length - 1 && (
                <div
                  className={cn(
                    "absolute top-5 w-full h-1 left-1/2",
                    isCompleted ? "bg-gold" : "bg-titanium/30"
                  )}
                ></div>
              )}
              
              {/* Step indicator */}
              <div
                className={cn(
                  "relative z-10 flex items-center justify-center w-10 h-10 rounded-full border-2",
                  isCompleted
                    ? "bg-gold border-gold text-rich-black"
                    : isCurrent
                    ? "bg-bordeaux border-gold text-off-white"
                    : "bg-transparent border-titanium/50 text-titanium/50"
                )}
              >
                {isCompleted ? (
                  <CheckCircle className="h-6 w-6" />
                ) : (
                  <span className="text-sm font-medium">{index + 1}</span>
                )}
              </div>
              
              {/* Step title and description */}
              <div className="mt-3 text-center max-w-[120px] mx-auto">
                <p
                  className={cn(
                    "text-sm font-medium",
                    isCurrent ? "text-gold" : isCompleted ? "text-off-white" : "text-titanium/50"
                  )}
                >
                  {step.title}
                </p>
                <p
                  className={cn(
                    "text-xs mt-1",
                    isCurrent || isCompleted ? "text-off-white/70" : "text-titanium/50"
                  )}
                >
                  {step.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
