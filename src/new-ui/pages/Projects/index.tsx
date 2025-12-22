import { projects } from "../../../constants/project";
import ProjectList from "../../components/ProjectList";
import { RoleEnum } from "../../constants/types";

export default function ProjectsPage() {
  return (
    <ProjectList
      projects={projects.filter(
        (project) => project.role === RoleEnum.SOFTWARE_ENGINEER
      )}
    />
  );
}
