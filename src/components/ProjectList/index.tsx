import { Link } from "react-router-dom";
import styles from "./style.module.css";
import type { Project } from "../../constants/types";
import StackList from "../StackList";
import Empty from "../Empty";
import Carousel from "../Carousel";
import routes from "../../constants/route";

const ProjectItem = ({
  project,
  projectIndex,
}: {
  project: Project;
  projectIndex: number;
}) => {
  return (
    <div key={`project-${projectIndex}`} className={styles.projectContainer}>
      <div className={styles.projectImageContainer}>
        <img src={project.image} alt={project.name} title={project.name} />
      </div>
      <div className={styles.projectInfoContainer}>
        <h3>{project.name}</h3>
        <span>{project.description}</span>
        {project.details?.map((detail, detailIndex) => (
          <div key={`project-${projectIndex}-detail-${detailIndex}`}>
            {detail.title && <span>{detail.title}</span>}
            <ul>
              {detail.descriptions.map((description, descriptionIndex) => (
                <li
                  key={`project-${projectIndex}-detail-${detailIndex}-description-${descriptionIndex}`}
                >
                  {description}
                </li>
              ))}
            </ul>
          </div>
        ))}
        <StackList
          key={`project-${projectIndex}-stack-list`}
          stacks={project.stacks || []}
        />
        {project.image_list ? (
          <div className={styles.imageListContainer}>
            {project.image_list?.map((image, imageIndex) => (
              <div key={`project-${projectIndex}-image-${imageIndex}`}>
                <img src={image.url} alt={image.title} title={image.title} className={styles.imageItem} />
              </div>
            ))}
          </div>
        ) : null}
        <Link to={project.link} target="_blank">
          View Project ↗️
        </Link>
      </div>
    </div>
  );
};

export default function ProjectList({
  projects,
  carousel,
}: {
  projects?: Project[];
  carousel?: boolean;
}) {
  if (!projects || projects.length === 0) {
    return <Empty />;
  }
  if (carousel) {
    return (
      <Carousel
        items={projects.map((project, projectIndex) => (
          <ProjectItem
            key={`project-${projectIndex}`}
            project={project}
            projectIndex={projectIndex}
          />
        ))}
        extra={<Link to={routes.projects}>View All Projects ↗️</Link>}
      />
    );
  }
  return (
    <div className={styles.projectListContainer}>
      {projects.map((project, projectIndex) => (
        <ProjectItem
          key={`project-${projectIndex}`}
          project={project}
          projectIndex={projectIndex}
        />
      ))}
    </div>
  );
}
