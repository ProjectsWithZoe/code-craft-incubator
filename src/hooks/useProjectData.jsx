import { create } from "zustand";

const useProjectData = create((set) => ({
  projectData: null,
  projects: [],
  setProjects: (projects) => set({ projects }),
  setProjectData: (data) => set({ projectData: data }),
}));
export default useProjectData;
