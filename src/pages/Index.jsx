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

  /*useEffect(() => {
    setProjects(allProjects);
    console.log(allProjects);
  }, []);*/

  /*useEffect(() => {
    fetch("data/htmlcssjsprojects.json")
      .then((response) => response.json())
      .then((data) => setProjects(data));
  }, []);*/

  const handleProjectClick = (projectId) => {
    navigate(`/projects/${projectId}`);
  };

  /*const openHtmlProjects = async () => {
    const response = await fetch("data/htmlcssjsprojects.json", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await response.json();
    console.log(data);
    setProjectData(data.project);
  };*/

  /*useEffect(() => {
    openHtmlProjects();
  }, []);*/
  // Fetch project data when the component mounts

  return (
    <div className="container min-h-screen py-8 px-4">
      <div className="flex justify-between items-center mb-12">
        <div></div> {/* Empty div for flex spacing */}
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
      <header className="text-center my-12">
        <div className="flex justify-center mb-4">
          <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center">
            <Code2 className="h-8 w-8 text-primary" />
          </div>
        </div>
        <h1 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">
          Code Craft Incubator
        </h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Master practical skills by building real projects. Each project is
          broken down into clear, actionable steps with examples.
        </p>
      </header>

      <section>
        <h2 className="text-2xl md:text-3xl font-semibold text-center mb-4 mt-4">
          Ready to start coding?
        </h2>
        <p className="text-center text-muted-foreground mb-8">
          Choose your technology stack and generate project ideas to start
          building.
        </p>
        {/*<ProjectIdeas />*/}

        <ProjectPicker />
      </section>
      <ListedProjects projects={projects} />
      {/*<section>
        <h2 className="text-2xl md:text-3xl font-semibold text-center mb-6">
          Explore Projects
        </h2>
        <div className="max-w-2xl mx-auto space-y-3">
          {allProjects.map((proj) => (
            <div
              key={proj.id}
              onClick={() => handleProjectClick(proj.id)}
              className="cursor-pointer bg-white p-4 border box-shadow hover:bg-blue-50 transition text-center"
            >
              {proj.name}
            </div>
          ))}
        </div>
      </section>*/}
      {/*{projectData && (
        <section>
          <DetailedProjectViewer projectData={projectData} />
        </section>
      )}*/}
      <section className="">
        <h2 className="text-2xl md:text-3xl font-semibold text-center mt-4 mb-4">
          Why Build Projects?
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card className="border-primary/20 bg-card/50 backdrop-blur">
            <CardHeader>
              <Rocket className="h-8 w-8 text-primary mb-2" />
              <CardTitle>Learn by Doing</CardTitle>
              <CardDescription>
                Practical experience is the fastest way to master programming
                concepts
              </CardDescription>
            </CardHeader>
            <CardContent>
              Build real applications that you can showcase in your portfolio
              and to potential employers
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
              No more getting stuck or feeling lost. Each project breaks down
              complex concepts into manageable steps
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
              Stand out to employers with a portfolio of real-world projects
              that showcase your abilities
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
              Create responsive, interactive user interfaces using modern web
              technologies
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
              Learn to work with databases, APIs, and server-side code in
              real-world scenarios
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
              Track your progress and see your skills improve with each
              completed project
            </CardContent>
          </Card>
        </div>
      </section>
      {/*<section>
        <h2 className="text-2xl md:text-3xl font-semibold text-center mb-12">
          Explore Project Ideas
        </h2>

        <DetailedProjectViewer projectData={projectData} />
        <p className="text-center text-muted-foreground mb-8">
          Explore a variety of project ideas and choose the ones that excite you
          the most. Each project is designed to help you learn and grow as a
          developer.
        </p>
      </section>*/}
    </div>
  );
};

export default Index;
