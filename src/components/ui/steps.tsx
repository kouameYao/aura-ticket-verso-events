
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
      <div className="flex flex-col md:flex-row justify-between">
        {steps.map((step, index) => {
          const isCompleted = index < currentStep;
          const isCurrent = index === currentStep;

          return (
            <div key={index} className="flex flex-row md:flex-col items-start relative mb-6 md:mb-0 md:items-center">
              {/* Horizontal connector on mobile, vertical on desktop */}
              <div className="flex items-center md:flex-col relative w-full">
                {/* Step indicator */}
                <div
                  className={cn(
                    "relative z-10 flex items-center justify-center w-14 h-14 rounded-full border-2 shrink-0",
                    isCompleted
                      ? "bg-bordeaux border-gold text-white"
                      : isCurrent
                      ? "bg-bordeaux/80 border-gold text-white"
                      : "bg-transparent border-titanium/50 text-titanium/70"
                  )}
                >
                  {isCompleted ? (
                    <CheckCircle className="h-6 w-6 text-gold" />
                  ) : (
                    <span className="text-sm font-bold">{index + 1}</span>
                  )}
                </div>

                {/* Step connector line */}
                {index < steps.length - 1 && (
                  <div 
                    className={cn(
                      "hidden md:block absolute top-7 h-0.5 w-full left-1/2",
                      isCompleted ? "bg-gold" : "bg-titanium/30"
                    )}
                  ></div>
                )}
              </div>
              
              {/* Step content */}
              <div className="ml-4 md:ml-0 md:mt-4 md:text-center max-w-[200px]">
                <p
                  className={cn(
                    "text-sm font-bold",
                    isCurrent ? "text-gold" : isCompleted ? "text-white" : "text-titanium/70"
                  )}
                >
                  {step.title}
                </p>
                <p
                  className={cn(
                    "text-xs mt-1",
                    isCurrent || isCompleted ? "text-white/80" : "text-titanium/50"
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
