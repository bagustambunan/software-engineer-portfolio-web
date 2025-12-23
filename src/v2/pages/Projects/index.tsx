import { projects } from "../../../shared/constants/project";
import ProjectList from "../../../shared/components/ProjectList";
import { RoleEnum } from "../../../shared/constants/types";

export default function ProjectsPage() {
  return (
    <ProjectList
      projects={projects.filter(
        (project) => project.role === RoleEnum.SOFTWARE_ENGINEER
      )}
    />
  );
}
