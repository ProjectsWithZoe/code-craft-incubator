import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Mail,Keyboard, Music, Laugh, Layout, Quote, Film } from "lucide-react";
import allProjects from "../../data/projects.json";
import { useNavigate } from "react-router-dom";
import useProjectData from "../hooks/useProjectData";
import { useEffect, useState } from "react";

//console.log(allProjects[0])

//const projects = allProjects.filter((project)=> project.status==='free')

/*const projects = [
  {
    id: 1,
    title: "Task Management App",
    description: "Build a full-stack task management application with user authentication, task creation, and real-time updates. Learn about database design and API development.",
    category: "Full Stack",
    difficulty: "Intermediate",
    techStack: ["React", "Node.js", "MongoDB", "Express"],
    icon: Globe
  },
  {
    id: 2,
    title: "Weather Dashboard",
    description: "Create a responsive weather dashboard that displays current weather and forecasts using a weather API. Practice working with external APIs and data visualization.",
    category: "Web Development",
    difficulty: "Beginner",
    techStack: ["HTML", "CSS", "JavaScript", "OpenWeather API"],
    icon: Layout
  },
  {
    id: 3,
    title: "Data Analysis Tool",
    description: "Develop a Python application that analyzes and visualizes data from CSV files. Learn about data processing, visualization libraries, and file handling.",
    category: "Python",
    difficulty: "Intermediate",
    techStack: ["Python", "Pandas", "Matplotlib", "NumPy"],
    icon: SquarePi
  },
  {
    id: 4,
    title: "E-commerce Store",
    description: "Build a modern e-commerce store with React, featuring product listings, shopping cart functionality, and checkout process. Master state management and component architecture.",
    category: "React",
    difficulty: "Advanced",
    techStack: ["React", "Redux", "Firebase", "Stripe API"],
    icon: Code2
  }
];*/

const difficultyColors = {
  Beginner: "bg-green-200",
  Intermediate: "bg-yellow-200",
  Advanced: "bg-red-200",
};

const icons = {
    Mail: Mail,
    Keyboard: Keyboard,
    Music: Music,
    Laugh: Laugh,
    Layout:Layout,
    Film:Film,
    Quote: Quote
};

const FreeProjects = () => {
  const { setProjectType, projectType, filteredProjects, setFilteredProjects } = useProjectData();
  const navigate = useNavigate();

  useEffect(() => {
    console.log(allProjects)
    console.log(projectType)
    // Filter projects based on projectType
    let filtered;
    if (projectType!=='all'){
        filtered = allProjects.filter(project => 
            project.category2 === projectType.toLowerCase()
          );
    } else {
        filtered = allProjects
    }
    console.log(filtered)
    console.log(filteredProjects)
    setFilteredProjects(filtered);
  }, [projectType]);

  const handleProjectClick = (projectId) => {
    navigate(`/projects/${projectId}`);
  };

  const handleBackButtonClicked = ()=>{
    navigate('/')
  }

  const allProjectButtonClicked = () => {
    if (projectType !== 'all') {
      setProjectType('all');
    } else {
      // Manually set filteredProjects if already 'all'
      setFilteredProjects(allProjects);
    }
  };
  

  return (
    <div className="container mx-auto py-8 px-4">
        <div className="flex justify-between">
            <button onClick={handleBackButtonClicked} className="rounded-lg text-xl mb-8 border border-blue-800 px-4 py-2 bg-blue-700 text-white">Back</button>
            <button onClick={allProjectButtonClicked} className="rounded-lg text-xl mb-8 border border-blue-800 px-4 py-2 bg-blue-700 text-white">All Projects</button>
        </div>
      {filteredProjects?.length>0 && <h1 className="text-3xl font-bold mb-8">{projectType!=="all" ? filteredProjects[0]['category']: "All" } Projects</h1>}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {filteredProjects.map((project) => {
          const Icon = icons[project.icon]||Mail;
          return (
            <Card
              key={project.id}
              className="hover:shadow-lg transition-shadow"
            >
              <CardHeader>
                <div className="flex items-center gap-2 mb-2">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <Icon className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle>{project.name}</CardTitle>
                </div>
                <CardDescription className="text-lg">{project.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2 mb-4">
                  <Badge className="text-lg border border-blue-200 bg-blue-100 rounded-md" variant="secondary">
                    {project.category}
                  </Badge>
                  <Badge
                    variant="outline"
                    className={difficultyColors[project.difficulty]}
                  >
                    {project.difficulty}
                  </Badge>
                </div>
                
              </CardContent>
              <CardFooter>
                <Button
                  className="w-full bg-blue-700 text-white text-xl px-4 py-2"
                  onClick={() => handleProjectClick(project.id)}
                >
                  View Project
                </Button>
              </CardFooter>
            </Card>
          );
        })}
      </div>
    </div>
  );
};

export default FreeProjects;
