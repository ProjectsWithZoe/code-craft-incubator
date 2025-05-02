import React, { useState } from "react";
import { Step } from "data/NIUprojects";
import CodeBlock from "./CodeBlock";
import { ChevronDown, ChevronUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface ProjectStepProps {
  step: Step;
  isActive: boolean;
  onClick: () => void;
}

const ProjectStep: React.FC<ProjectStepProps> = ({
  step,
  isActive,
  onClick,
}) => {
  return (
    <Card className="mb-4 border-secondary/30 hover:border-secondary step-animation">
      <CardHeader className="cursor-pointer py-3" onClick={onClick}>
        <CardTitle className="text-lg flex justify-between items-center">
          <span>{step.stepTitle}</span>
          <Button
            variant="ghost"
            size="sm"
            className="ml-2 p-0 h-6 w-6"
            onClick={(e) => {
              e.stopPropagation();
              onClick();
            }}
          >
            {isActive ? (
              <ChevronUp className="h-5 w-5" />
            ) : (
              <ChevronDown className="h-5 w-5" />
            )}
          </Button>
        </CardTitle>
      </CardHeader>

      {isActive && (
        <CardContent className="pt-0">
          <p className="mb-4 text-muted-foreground">{step.explanation}</p>
          <CodeBlock code={step.codeSnippet} language={step.codeLanguage} />
        </CardContent>
      )}
    </Card>
  );
};

export default ProjectStep;
