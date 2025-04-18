
import React from 'react';
import ProjectIdeas from '@/components/ProjectIdeas';
import { Separator } from '@/components/ui/separator';
import { Code2, Layout, Globe, Rocket, Book, Target, Trophy } from 'lucide-react';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const Index = () => {
  return (
    <div className="container min-h-screen py-8 px-4">
      <header className="text-center my-12">
        <div className="flex justify-center mb-4">
          <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center">
            <Code2 className="h-8 w-8 text-primary" />
          </div>
        </div>
        <h1 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">Code Craft Incubator</h1>
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
          Choose your technology stack and generate project ideas to start building.
        </p>
        
        <ProjectIdeas />
      </section>

      <Separator className="my-16" />

      <section className="mb-16">
        <h2 className="text-2xl md:text-3xl font-semibold text-center mb-12">
          Why Build Projects?
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card className="border-primary/20 bg-card/50 backdrop-blur">
            <CardHeader>
              <Rocket className="h-8 w-8 text-primary mb-2" />
              <CardTitle>Learn by Doing</CardTitle>
              <CardDescription>
                Practical experience is the fastest way to master programming concepts
              </CardDescription>
            </CardHeader>
            <CardContent>
              Build real applications that you can showcase in your portfolio and to potential employers
            </CardContent>
          </Card>

          <Card className="border-primary/20 bg-card/50 backdrop-blur">
            <CardHeader>
              <Book className="h-8 w-8 text-primary mb-2" />
              <CardTitle>Structured Learning</CardTitle>
              <CardDescription>
                Follow clear, step-by-step instructions with practical examples
              </CardDescription>
            </CardHeader>
            <CardContent>
              No more getting stuck or feeling lost. Each project breaks down complex concepts into manageable steps
            </CardContent>
          </Card>

          <Card className="border-primary/20 bg-card/50 backdrop-blur">
            <CardHeader>
              <Target className="h-8 w-8 text-primary mb-2" />
              <CardTitle>Build Your Portfolio</CardTitle>
              <CardDescription>
                Create impressive projects that demonstrate your skills
              </CardDescription>
            </CardHeader>
            <CardContent>
              Stand out to employers with a portfolio of real-world projects that showcase your abilities
            </CardContent>
          </Card>

          <Card className="border-primary/20 bg-card/50 backdrop-blur">
            <CardHeader>
              <Layout className="h-8 w-8 text-primary mb-2" />
              <CardTitle>Frontend Skills</CardTitle>
              <CardDescription>
                Master HTML, CSS, and JavaScript through hands-on practice
              </CardDescription>
            </CardHeader>
            <CardContent>
              Create responsive, interactive user interfaces using modern web technologies
            </CardContent>
          </Card>

          <Card className="border-primary/20 bg-card/50 backdrop-blur">
            <CardHeader>
              <Globe className="h-8 w-8 text-primary mb-2" />
              <CardTitle>Full Stack Development</CardTitle>
              <CardDescription>
                Build complete applications from frontend to backend
              </CardDescription>
            </CardHeader>
            <CardContent>
              Learn to work with databases, APIs, and server-side code in real-world scenarios
            </CardContent>
          </Card>

          <Card className="border-primary/20 bg-card/50 backdrop-blur">
            <CardHeader>
              <Trophy className="h-8 w-8 text-primary mb-2" />
              <CardTitle>Gain Confidence</CardTitle>
              <CardDescription>
                Build your confidence through successful project completion
              </CardDescription>
            </CardHeader>
            <CardContent>
              Track your progress and see your skills improve with each completed project
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default Index;
