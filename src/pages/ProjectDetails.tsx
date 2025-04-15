
import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getProjectById, Project, Step } from '@/data/projects';
import { Button } from '@/components/ui/button';
import ProjectStep from '@/components/ProjectStep';
import { ArrowLeft, Info } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';

const ProjectDetails = () => {
  const { projectId } = useParams<{ projectId: string }>();
  const navigate = useNavigate();
  const [project, setProject] = useState<Project | null>(null);
  const [activeStepId, setActiveStepId] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    // Simulate API call with a small delay
    const fetchProject = async () => {
      setLoading(true);
      
      setTimeout(() => {
        if (projectId) {
          const foundProject = getProjectById(projectId);
          if (foundProject) {
            setProject(foundProject);
            // Set the first step as active by default
            if (foundProject.steps.length > 0) {
              setActiveStepId(foundProject.steps[0].id);
            }
          }
        }
        setLoading(false);
      }, 500);
    };
    
    fetchProject();
  }, [projectId]);
  
  const toggleStep = (stepId: string) => {
    setActiveStepId(activeStepId === stepId ? null : stepId);
  };
  
  if (loading) {
    return (
      <div className="container min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="spinner h-8 w-8 border-4 border-primary border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p>Loading project details...</p>
        </div>
      </div>
    );
  }
  
  if (!project) {
    return (
      <div className="container min-h-screen flex items-center justify-center">
        <div className="text-center">
          <Info className="h-12 w-12 mx-auto mb-4 text-muted-foreground" />
          <h2 className="text-2xl font-bold mb-2">Project Not Found</h2>
          <p className="text-muted-foreground mb-6">
            We couldn't find the project you're looking for.
          </p>
          <Button onClick={() => navigate("/")}>
            Back to Home
          </Button>
        </div>
      </div>
    );
  }
  
  return (
    <div className="container py-8 px-4 min-h-screen">
      <Button 
        variant="ghost" 
        className="mb-6"
        onClick={() => navigate("/")}
      >
        <ArrowLeft className="h-4 w-4 mr-2" /> Back to Projects
      </Button>
      
      <div className="max-w-3xl mx-auto">
        <header className="mb-8">
          <div className="flex flex-wrap gap-2 justify-between items-start mb-2">
            <h1 className="text-3xl font-bold">{project.title}</h1>
            <div className="flex gap-2">
              <Badge variant="outline" className="capitalize">{project.category}</Badge>
              <Badge variant={
                project.difficulty === 'beginner' ? 'default' : 
                project.difficulty === 'intermediate' ? 'secondary' : 
                'outline'
              }>
                {project.difficulty}
              </Badge>
            </div>
          </div>
          <p className="text-muted-foreground">{project.description}</p>
        </header>
        
        <Separator className="my-6" />
        
        <section>
          <h2 className="text-xl font-semibold mb-6">Project Steps</h2>
          <div className="space-y-4">
            {project.steps.map((step) => (
              <ProjectStep 
                key={step.id}
                step={step}
                isActive={activeStepId === step.id}
                onClick={() => toggleStep(step.id)}
              />
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default ProjectDetails;
