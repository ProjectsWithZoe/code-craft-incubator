import React, { useEffect } from "react";

import {
  Code2,
 
  Trophy,
  LogIn,
  UserPlus,
 
  Star,
  Clock,
  BookOpen,
  
} from "lucide-react";
import { Button } from "@/components/ui/button";

import useProjectData from "@/hooks/useProjectData";
import { useNavigate } from "react-router-dom";
import ListedProjectTypes from "../components/ListedProjectTypes";
import { useUserId } from "../hooks/useUserId";
import { formatDate } from "date-fns";

const Index = () => {
  const { projectData, setProjectData, projectType, setProjectType, authenticated } =
    useProjectData();
  const navigate = useNavigate();
  const userId = useUserId()
  const date = formatDate(Date.now(), "yyyy-MM-dd HH:mm:ss")
  console.log(userId, date)

  const addUser = async()=>{
    if (!userId) return;
    const res = await fetch('/api/add-user', {
      method: "POST",
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({uuid: userId, date_accessed: date})
    });
    const data = await res.json()
    console.log(data)
  }

  useEffect(()=>{
      addUser()
  }, [userId])

  const handleProjectClick = (projectId) => {
    navigate(`/projects/${projectId}`);
  };

  const handleBrowseFreeClicked = () => {
    navigate('/projects');
  };

  const handleAccessDB = async()=>{
    const res = await fetch('/api/data')
    const data = await res.json()
    console.log(data)
  }

  /*useEffect(()=>{
    setAllProjects(allProjects)
  },[])*/

  return (
    <div className="container min-h-screen mx-auto py-8 px-4">
      {/* Navigation */}
      <div className="flex justify-between items-center mb-12">
        <div className="flex items-center gap-2">
          <Code2 className="h-6 w-6 text-primary text-blue-500" />
          <span className="font-semibold text-xl text-blue-500">CodeCraft</span>
        </div>
        {authenticated && <div className="flex gap-4">
          <Button onClick={()=>{
            navigate('/login')
          }} variant="outline" size="sm" className="gap-2">
            <LogIn className="h-4 w-4" />
            Log In
          </Button>
          <Button size="sm" className="gap-2">
            <UserPlus className="h-4 w-4" />
            Sign Up
          </Button>
        </div>}
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
        <Button onClick={handleBrowseFreeClicked} size="lg" className="gap-2 bg-blue-100 text-md">
          <BookOpen className=" h-4 w-4" />
          Browse Free Projects
        </Button>
        {authenticated && <Button variant="outline" size="lg" className="gap-2 text-md">
          <UserPlus className="h-4 w-4" />
          Sign Up for More
        </Button>}
      </div>

      {/* Project Types Section */}
      <section className="py-12">
        <h2 className="text-2xl md:text-3xl font-semibold text-center mb-8">
          Explore Our Project Categories
        </h2>
        <ListedProjectTypes />
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
            <div className="text-3xl font-bold text-primary">10+</div>
            <div className="text-muted-foreground">Projects</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-primary">2k+</div>
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
