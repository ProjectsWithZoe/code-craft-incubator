
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { getRandomProjects, Project } from '@/data/projects';
import ProjectCard from '@/components/ProjectCard';
import { Loader2 } from 'lucide-react';

const ProjectIdeas = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(false);

  const handleGenerateIdeas = () => {
    setLoading(true);
    
    // Simulate API call with a small delay
    setTimeout(() => {
      const randomProjects = getRandomProjects(3);
      setProjects(randomProjects);
      setLoading(false);
    }, 800);
  };

  return (
    <div className="my-8">
      <div className="flex justify-center mb-8">
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
