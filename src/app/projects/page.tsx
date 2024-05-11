import ProjectCard from "@/components/project-card";
import { projects } from "@/data/constants";

// May explore creating a version of this in 3d using three.js
export default function Projects() {
  return (
    <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 p-4">
      {projects.map((project, index) => {
        return (
          <ProjectCard
            description={project.description}
            href={project.href}
            key={project.name}
            image={project.image}
            technologies={project.technologies}
            name={project.name}
            projectId={index + 1}
          />
        );
      })}
    </div>
  );
}
