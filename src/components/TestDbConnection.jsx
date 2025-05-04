import { useEffect, useState } from 'react';
import { getProjects } from '../routes/api/db';

export function TestDbConnection() {
  const [projects, setProjects] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchProjects() {
      try {
        const data = await getProjects();
        setProjects(data);
      } catch (err) {
        setError(err.message);
      }
    }
    fetchProjects();
  }, []);

  if (error) {
    return <div className="text-red-500">Error: {error}</div>;
  }

  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Projects from Database</h2>
      <ul className="space-y-2">
        {projects.map((project) => (
          <li key={project.id} className="p-4 border rounded">
            <h3 className="font-semibold">{project.name}</h3>
            <p className="text-gray-600">{project.description}</p>
            <div className="mt-2">
              <span className="text-sm bg-blue-100 px-2 py-1 rounded">
                {project.category}
              </span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
} 