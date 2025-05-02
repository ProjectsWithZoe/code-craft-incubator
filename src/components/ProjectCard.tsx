import React from "react";
import { useNavigate } from "react-router-dom";
import { Project } from "data/NIUprojects";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ArrowRight } from "lucide-react";

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/project/${project.id}`);
  };

  return (
    <Card
      className="flex flex-col h-full hover:border-primary transition-all cursor-pointer animate-fade-in"
      onClick={handleClick}
    >
      <CardHeader>
        <CardTitle className="flex justify-between items-center">
          <span>{project.title}</span>
          <Badge
            variant={
              project.difficulty === "beginner"
                ? "default"
                : project.difficulty === "intermediate"
                ? "secondary"
                : "outline"
            }
          >
            {project.difficulty}
          </Badge>
        </CardTitle>
      </CardHeader>
      <CardContent className="flex-grow">
        <p className="text-muted-foreground">{project.description}</p>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Badge variant="outline" className="capitalize">
          {project.category}
        </Badge>
        <span className="text-sm text-muted-foreground flex items-center gap-1 hover:text-primary">
          View Steps <ArrowRight size={14} />
        </span>
      </CardFooter>
    </Card>
  );
};

export default ProjectCard;
