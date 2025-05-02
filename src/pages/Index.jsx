import React, { useEffect } from "react";
import ProjectIdeas from "@/components/ProjectIdeas";
import DetailedProjectViewer from "@/components/DetailedProjectViewer";
import { useState } from "react";
import { Separator } from "@/components/ui/separator";
import {
  Code2,
  Layout,
  Globe,
  Rocket,
  Book,
  Target,
  Trophy,
  LogIn,
  UserPlus,
  ArrowRight,
  Star,
  Clock,
  BookOpen,
  SquarePi
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import useProjectData from "@/hooks/useProjectData";
import { useNavigate } from "react-router-dom";
import allProjects from "/data/htmlcssjsprojects.json";
import ProjectDetail from "@/routes/ProjectDetail";
import ListedProjects from "../components/ListedProjects";
import ProjectPicker from "@/components/ProjectPicker";

const Index = () => {
  const { projectData, setProjectData, projects, setProjects } =
    useProjectData();
  const navigate = useNavigate();

  const handleProjectClick = (projectId) => {
    navigate(`/projects/${projectId}`);
  };

  const handleBrowseFreeClicked =()=> {
    navigate('/projects')
  }

  return (
    <div className="container min-h-screen mx-auto py-8 px-4">
      {/* Navigation */}
      <div className="flex justify-between items-center mb-12">
        <div className="flex items-center gap-2">
          <Code2 className="h-6 w-6 text-primary" />
          <span className="font-semibold">CodeCraft</span>
        </div>
        <div className="flex gap-4">
          <Button variant="outline" size="sm" className="gap-2">
            <LogIn className="h-4 w-4" />
            Log In
          </Button>
          <Button size="sm" className="gap-2">
            <UserPlus className="h-4 w-4" />
            Sign Up
          </Button>
        </div>
      </div>

      {/* Hero Section */}
      <header className="text-center my-12">
        <div className="flex justify-center mb-4">
          <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center">
            <Code2 className="h-8 w-8 text-primary" />
          </div>
        </div>
        <h1 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">
          Code Craft Incubator
        </h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
          Master practical skills by building real projects. Each project is
          broken down into clear, actionable steps with examples.
        </p>
      </header>

      <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
          <Button onClick={handleBrowseFreeClicked} size="lg" className="gap-2">
            <BookOpen  className="h-4 w-4" />
            Browse Free Projects
          </Button>
          <Button variant="outline" size="lg" className="gap-2">
            <UserPlus className="h-4 w-4" />
            Sign Up for More
          </Button>
        </div>


      {/* Project Types Section */}
      <section className="py-12">
        <h2 className="text-2xl md:text-3xl font-semibold text-center mb-8">
          Explore Our Project Categories
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto">
          <div className="p-6 rounded-lg bg-card border hover:border-primary/50 transition-colors">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-blue-500/10 rounded-lg">
                <SquarePi className="h-5 w-5 text-blue-500" />
              </div>
              <h3 className="font-semibold">Python Projects</h3>
            </div>
            <p className="text-muted-foreground">
              Build automation scripts, data analysis tools, and web applications with Python.
            </p>
          </div>
          <div className="p-6 rounded-lg bg-card border hover:border-primary/50 transition-colors">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-green-500/10 rounded-lg">
                <Layout className="h-5 w-5 text-green-500" />
              </div>
              <h3 className="font-semibold">Web Development</h3>
            </div>
            <p className="text-muted-foreground">
              Create beautiful, responsive websites using HTML, CSS, and JavaScript.
            </p>
          </div>
          <div className="p-6 rounded-lg bg-card border hover:border-primary/50 transition-colors">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-purple-500/10 rounded-lg">
                <Code2 className="h-5 w-5 text-purple-500" />
              </div>
              <h3 className="font-semibold">React Projects</h3>
            </div>
            <p className="text-muted-foreground">
              Develop modern, interactive user interfaces with React.js.
            </p>
          </div>
          <div className="p-6 rounded-lg bg-card border hover:border-primary/50 transition-colors">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-orange-500/10 rounded-lg">
                <Globe className="h-5 w-5 text-orange-500" />
              </div>
              <h3 className="font-semibold">Full Stack</h3>
            </div>
            <p className="text-muted-foreground">
              Build complete applications with frontend and backend integration.
            </p>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-12">
      <h2 className="text-2xl md:text-3xl text-center font-semibold mb-4">
          Why Code Craft Incubator?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="p-6 rounded-lg bg-card border">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-primary/10 rounded-lg">
                <Star className="h-5 w-5 text-primary" />
              </div>
              <h3 className="font-semibold">Project-Based Learning</h3>
            </div>
            <p className="text-muted-foreground">
              Learn by doing with real-world projects that build your portfolio and skills.
            </p>
          </div>
          <div className="p-6 rounded-lg bg-card border">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-primary/10 rounded-lg">
                <Clock className="h-5 w-5 text-primary" />
              </div>
              <h3 className="font-semibold">Step-by-Step Guidance</h3>
            </div>
            <p className="text-muted-foreground">
              Clear instructions and examples for every step of your coding journey.
            </p>
          </div>
          <div className="p-6 rounded-lg bg-card border">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-primary/10 rounded-lg">
                <Trophy className="h-5 w-5 text-primary" />
              </div>
              <h3 className="font-semibold">Skill Progression</h3>
            </div>
            <p className="text-muted-foreground">
              Start with basics and advance to complex projects at your own pace.
            </p>
          </div>
        </div>
      </section>

      

      {/* Stats Section */}
      <section className="py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto text-center">
          <div>
            <div className="text-3xl font-bold text-primary">100+</div>
            <div className="text-muted-foreground">Projects</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-primary">50k+</div>
            <div className="text-muted-foreground">Developers</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-primary">4</div>
            <div className="text-muted-foreground">Categories</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-primary">24/7</div>
            <div className="text-muted-foreground">Support</div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
