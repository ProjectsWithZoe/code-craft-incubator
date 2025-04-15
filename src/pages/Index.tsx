
import React from 'react';
import ProjectIdeas from '@/components/ProjectIdeas';
import { Separator } from '@/components/ui/separator';
import { Code2 } from 'lucide-react';

const Index = () => {
  return (
    <div className="container min-h-screen py-8 px-4">
      <header className="text-center my-12">
        <div className="flex justify-center mb-4">
          <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center">
            <Code2 className="h-8 w-8 text-primary" />
          </div>
        </div>
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Code Craft Incubator</h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Master practical skills by building real projects. Each project is broken down into clear, 
          actionable steps with examples.
        </p>
      </header>
      
      <Separator className="my-8" />
      
      <section>
        <h2 className="text-2xl md:text-3xl font-semibold text-center mb-6">
          Ready to start coding?
        </h2>
        <p className="text-center text-muted-foreground mb-8">
          Click the button below to generate three random project ideas.
        </p>
        
        <ProjectIdeas />
      </section>
    </div>
  );
};

export default Index;
