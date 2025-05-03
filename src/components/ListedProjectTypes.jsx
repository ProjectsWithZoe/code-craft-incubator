import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { SquarePi, Layout, Code2, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Keyboard, Laugh } from "lucide-react";
import useProjectData from "../hooks/useProjectData";

const ListedProjectTypes = () => {
  const { projectType, setProjectType } = useProjectData();

  //const [showAll, setShowAll] = useState(false);
  const navigate = useNavigate();

  //const handleProjectClick = (projectId) => {
  //navigate(`/projects/${projectId}`);
  //};

  const handleProjectTypeClick = (type) => {
    setProjectType(type);
    navigate("/projects");
  };

  const ProjectTypes = [
    {
      id: 1,
      stack: "Python",
      icon: "SquarePi",
      color: "green",
      project: "python",
      description:
        "Build automation scripts, data analysis tools, and web applications with Python.",
    },
    {
      id: 2,
      stack: "Web Development",
      icon: "Layout",
      color: "green",
      project: "webdev",
      description:
        "Create beautiful, responsive websites using HTML, CSS, and JavaScript.",
    },
    {
      id: 3,
      stack: "React",
      icon: "Code2",
      color: "yellow",
      project: "react",
      description: "Develop modern and interactive user interfaces with React.js.",
    },
    {
      id: 4,
      stack: "Full Stack",
      icon: "Globe",
      color: "red",
      project: "fullstack",
      description:
        "Build complete applications with frontend and backend integration.",
    },
  ];

  const icons = {
    SquarePi: SquarePi,
    Layout: Layout,
    Code2: Code2,
    Globe: Globe,
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto ">
      {ProjectTypes.map((project) => {
        const Icon = icons[project.icon];
        const color = icons[project.color];

        return (
          <button
            onClick={() => {
              console.log(project.project);
              handleProjectTypeClick(project.project);
            }}
            key={project.id}
            className="p-4 rounded-lg bg-card border hover:border-primary/50 transition-colors"
          >
            <div className="flex flex-col justify-start">
            <div className="flex items-center gap-3 mb-4 border border-blue-50 bg-blue-50 rounded-lg">
              <div className="p-2 bg-blue-500/10 rounded-lg ">
                <Icon className="h-5 w-5 text-blue-500" />
              </div>
              <h3 className="font-semibold">{project.stack}</h3>
            </div>
            <div>
              <p className="text-muted-foreground items-center ">
                {project.description}
              </p>
            </div>
            </div>
          </button>
        );
      })}
    </div>
  );
};

export default ListedProjectTypes;
