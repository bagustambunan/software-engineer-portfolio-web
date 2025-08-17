import { Link } from "react-router-dom";
import styles from "./style.module.css";
import type { Project } from "../../constants/types";
import StackList from "../StackList";
import Empty from "../Empty";

export default function ProjectList({ projects }: { projects?: Project[] }) {
  if (!projects || projects.length === 0) {
    return <Empty />;
  }
  return (
    <div className={styles.projectListContainer}>
      {projects.map((project, projectIndex) => (
        <div
          key={`project-${projectIndex}`}
          className={styles.projectContainer}
        >
          <div className={styles.projectImageContainer}>
            <img src={project.image} alt={project.name} title={project.name} />
          </div>
          <div className={styles.projectInfoContainer}>
            <h2>{project.name}</h2>
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
            <Link to={project.link} target="_blank">
              View Project ↗️
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
}
