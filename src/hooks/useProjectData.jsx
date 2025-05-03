import { create } from "zustand";

const useProjectData = create((set) => ({
  projectData: null,
  //allProjects: [],
  projectType: "all",
  //setAllProjects: (projects) => set({ projects }),
  setProjectData: (data) => set({ projectData: data }),
  setProjectType: (projectType)=> set({projectType})
}));
export default useProjectData;
