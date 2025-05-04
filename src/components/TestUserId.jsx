import { useUserId } from '../hooks/useUserId';
import { trackUserProjectView, getUserViewedProjects } from '../routes/api/db';
import { useEffect, useState } from 'react';

export function TestUserId() {
  const userId = useUserId();
  const [viewedProjects, setViewedProjects] = useState([]);

  useEffect(() => {
    async function fetchUserProjects() {
      if (userId) {
        try {
          const projects = await getUserViewedProjects(userId);
          setViewedProjects(projects);
        } catch (error) {
          console.error('Error fetching user projects:', error);
        }
      }
    }
    fetchUserProjects();
  }, [userId]);

  const handleProjectView = async (projectId) => {
    if (userId) {
      try {
        await trackUserProjectView(userId, projectId);
        // Refresh the viewed projects list
        const projects = await getUserViewedProjects(userId);
        setViewedProjects(projects);
      } catch (error) {
        console.error('Error tracking project view:', error);
      }
    }
  };

  return (
    <div className="p-4">
      <div className="mb-4">
        <h2 className="text-xl font-bold">Your User ID</h2>
        <p className="text-gray-600 break-all">{userId}</p>
      </div>

      <div>
        <h2 className="text-xl font-bold mb-4">Recently Viewed Projects</h2>
        <ul className="space-y-2">
          {viewedProjects.map((project) => (
            <li key={project.id} className="p-4 border rounded">
              <h3 className="font-semibold">{project.name}</h3>
              <p className="text-gray-600">{project.description}</p>
              <div className="mt-2">
                <span className="text-sm bg-blue-100 px-2 py-1 rounded">
                  Last viewed: {new Date(project.last_viewed).toLocaleString()}
                </span>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
} 