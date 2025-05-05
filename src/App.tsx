import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";

import NotFound from "./pages/NotFound";
import ProjectDetail from "./routes/ProjectDetail";
import FreeProjects from './pages/FreeProjects';
import {LoginForm} from "./components/Login-form";
import {SignupForm} from "./components/Signup-form"

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/projects/:id" element={<ProjectDetail />} />

          {/*<Route path="/project/:projectId" element={<ProjectDetails />} />*/}
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
          <Route path='/projects' element={<FreeProjects/>} />
          <Route path='/login' element={<LoginForm/>} />
          <Route path='/signup' element={<SignupForm/>} />

          
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
