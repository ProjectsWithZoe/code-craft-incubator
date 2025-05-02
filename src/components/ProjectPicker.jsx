import React, { useState, useEffect, useMemo } from "react";
import allProjects from "/data/htmlcssjsprojects.json";
import useProjectData from "@/hooks/useProjectData";

const ProjectPicker = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const { projects, setProjects } = useProjectData();
  const categories = ["All", "Web Development", "React", "Full Stack"];

  const filteredProjects = useMemo(() => {
    return selectedCategory === "All"
      ? allProjects
      : allProjects.filter((project) => project.category === selectedCategory);
  }, [selectedCategory]);

  useEffect(() => {
    setProjects(filteredProjects);
  }, [filteredProjects, setProjects]);
  return (
    <div>
      <div className="flex justify-content-between justify-center p-4">
        {categories.map((category) => (
          <button
            key={category}
            className={`mr-4 ml-4 p-2 rounded-lg ${
              selectedCategory === category
                ? "bg-white text-blue-500"
                : "bg-blue text-white-500"
            }`}
            onClick={() => setSelectedCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>
    </div>
  );
};

export default ProjectPicker;
