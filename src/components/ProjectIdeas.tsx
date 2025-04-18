import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { getRandomProjects, Project } from '@/data/projects';
import ProjectCard from '@/components/ProjectCard';
import { Loader2, Code2, Code, Globe } from 'lucide-react';
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";

type ProjectType = 'all' | 'frontend' | 'react' | 'fullstack';

const ProjectIdeas = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(false);
  const [projectType, setProjectType] = useState<ProjectType>('all');

  const handleGenerateIdeas = () => {
    setLoading(true);
    
    setTimeout(() => {
      const randomProjects = getRandomProjects(projectType);
      setProjects(randomProjects);
      setLoading(false);
    }, 800);
  };

  return (
    <div className="my-8">
      <div className="flex flex-col items-center gap-6">
        <ToggleGroup type="single" value={projectType} onValueChange={(value: ProjectType) => setProjectType(value || 'all')}>
          <ToggleGroupItem value="all" aria-label="All projects">
            <Code2 className="mr-2" />
            All
          </ToggleGroupItem>
          <ToggleGroupItem value="frontend" aria-label="HTML/CSS/JS projects">
            <Code className="mr-2" />
            HTML/CSS/JS
          </ToggleGroupItem>
          <ToggleGroupItem value="react" aria-label="React projects">
            <Code2 className="mr-2" />
            React
          </ToggleGroupItem>
          <ToggleGroupItem value="fullstack" aria-label="Fullstack projects">
            <Globe className="mr-2" />
            Fullstack
          </ToggleGroupItem>
        </ToggleGroup>

        <Button 
          onClick={handleGenerateIdeas}
          size="lg"
          disabled={loading}
          className="gap-2"
        >
          {loading && <Loader2 className="animate-spin h-4 w-4" />}
          Generate 3 Project Ideas
        </Button>
      </div>
      
      {projects.length > 0 && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      )}
    </div>
  );
};

export default ProjectIdeas;
