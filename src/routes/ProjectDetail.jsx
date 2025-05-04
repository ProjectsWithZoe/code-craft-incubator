import { useParams } from "react-router-dom";
import DetailedProjectViewer from "../components/DetailedProjectViewer";
import allProjects from "../../data/projects.json";
import useProjectData from "../hooks/useProjectData";


export default function ProjectDetail() {
  const {filteredProjects} = useProjectData()

  const { id } = useParams();
  const project = filteredProjects.find((proj) => proj.id === id);

  if (!project) return <div className="p-6">Project not found.</div>;

  return <DetailedProjectViewer projectData={project} />;
}
