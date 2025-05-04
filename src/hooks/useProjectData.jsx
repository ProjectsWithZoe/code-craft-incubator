import { create } from "zustand";

const useProjectData = create((set) => ({
  projectData: null,
  filteredProjects: [],
  projectType: "all",
  setFilteredProjects: (filtered) => set({filteredProjects: filtered}),
  setProjectData: (data) => set({ projectData: data }),
  setProjectType: (projectType)=> set({projectType})
}));
export default useProjectData;
