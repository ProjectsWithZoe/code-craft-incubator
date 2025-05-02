import { useNavigate } from "react-router-dom";
import allProjects from "../data/projects";

export default function ProjectList() {
  const navigate = useNavigate();

  const handleSelect = (project) => {
    navigate(`/projects/${project.id}`);
  };

  return (
    <div className="p-6">
      <h2 className="text-xl font-bold mb-4">All Projects</h2>
      <div className="space-y-4">
        {allProjects.map((proj) => (
          <div
            key={proj.id}
            onClick={() => handleSelect(proj)}
            className="cursor-pointer bg-white p-4 rounded-xl shadow hover:bg-blue-50 transition"
          >
            {proj.name}
          </div>
        ))}
      </div>
    </div>
  );
}
