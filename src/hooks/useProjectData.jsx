import { create } from "zustand";

const useProjectData = create((set) => ({
  projectData: null,
  filteredProjects: [],
  projectType: "all",
  authenticated: false,
  setFilteredProjects: (filtered) => set({filteredProjects: filtered}),
  setProjectData: (data) => set({ projectData: data }),
  setProjectType: (projectType)=> set({projectType}),
  setAuthenticated: (authenticated)=> set({authenticated: true})
}));
export default useProjectData;
