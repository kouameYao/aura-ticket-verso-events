
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
            <div key={index} className="flex flex-row md:flex-col items-start relative mb-4 md:mb-0 md:items-center">
              {/* Horizontal connector on mobile, vertical on desktop */}
              <div className="flex items-center md:flex-col relative w-full">
                {/* Step indicator */}
                <div
                  className={cn(
                    "relative z-10 flex items-center justify-center w-12 h-12 rounded-full border-2 shrink-0",
                    isCompleted
                      ? "bg-bordeaux border-bordeaux text-white"
                      : isCurrent
                      ? "bg-bordeaux/80 border-gold text-white"
                      : "bg-transparent border-gray-400/50 text-gray-400/50"
                  )}
                >
                  {isCompleted ? (
                    <CheckCircle className="h-6 w-6" />
                  ) : (
                    <span className="text-sm font-medium">{index + 1}</span>
                  )}
                </div>

                {/* Step connector line */}
                {index < steps.length - 1 && (
                  <div 
                    className={cn(
                      "hidden md:block absolute top-6 h-0.5 w-full left-1/2",
                      isCompleted ? "bg-bordeaux" : "bg-gray-400/30"
                    )}
                  ></div>
                )}
              </div>
              
              {/* Step content */}
              <div className="ml-4 md:ml-0 md:mt-3 md:text-center max-w-[180px]">
                <p
                  className={cn(
                    "text-sm font-bold",
                    isCurrent ? "text-gold" : isCompleted ? "text-white" : "text-gray-400/50"
                  )}
                >
                  {step.title}
                </p>
                <p
                  className={cn(
                    "text-xs mt-1",
                    isCurrent || isCompleted ? "text-white/70" : "text-gray-400/50"
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
