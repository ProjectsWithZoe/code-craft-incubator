import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ArrowRight, Circle, Mailbox } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Keyboard, Laugh } from "lucide-react";

const ListedProjects = ({ projects }) => {
  const [showAll, setShowAll] = useState(false);
  const navigate = useNavigate();

  const handleProjectClick = (projectId) => {
    navigate(`/projects/${projectId}`);
  };

  const displayedProjects = showAll ? projects : projects.slice(0, 3);
  return (
    <div>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {displayedProjects.map((project) => {
          // Determine the background color based on the project category
          const backgroundColor =
            project.category === "Web Development"
              ? "webdev"
              : project.category === "React"
              ? "react"
              : "fullstack";

          return (
            <Card key={project.id} className="w-full">
              <CardHeader>
                <CardTitle>{project.name}</CardTitle>
                <p className="text-sm text-gray-500 inline-flex items-center">
                  {/* Apply the dynamic color to the Circle */}
                  <Circle className={`h-4 w-4 ${backgroundColor}`} />
                </p>
              </CardHeader>
              <CardContent>
                <p>{project.description}</p>
              </CardContent>
              <CardFooter>
                <Button
                  variant="link"
                  className="text-blue-500 hover:text-green-700"
                  onClick={() => handleProjectClick(project.id)}
                >
                  View Project
                  <ArrowRight className="ml-2" />
                </Button>
              </CardFooter>
            </Card>
          );
        })}
      </div>

      {projects.length > 3 && (
        <div className="flex justify-center m-12">
          <Button
            variant="outline"
            className="mt-4"
            onClick={() => setShowAll(!showAll)}
          >
            {showAll ? "Show Less" : "Show More"}
          </Button>
        </div>
      )}
    </div>
  );
};

export default ListedProjects;
