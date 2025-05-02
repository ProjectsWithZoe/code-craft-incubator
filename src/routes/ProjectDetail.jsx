import { useParams } from "react-router-dom";
import DetailedProjectViewer from "../components/DetailedProjectViewer";
import allProjects from "../../data/htmlcssjsprojects.json";

export default function ProjectDetail() {
  const { id } = useParams();
  const project = allProjects.find((proj) => proj.id === id);

  if (!project) return <div className="p-6">Project not found.</div>;

  return <DetailedProjectViewer projectData={project} />;
}
