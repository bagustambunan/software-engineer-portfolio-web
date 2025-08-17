import { Link } from "react-router-dom";
import styles from "./style.module.css";
import type { Project } from "../../constants/types";
import StackList from "../StackList";

export default function ProjectList({ projects }: { projects: Project[] }) {
  return (
    <div className={styles.projectListContainer}>
      {
        projects.length === 0 && (
          <div>🚧 Under construction...</div>
        )
      }
      {projects.map((project) => (
        <div key={project.name} className={styles.projectContainer}>
          <div className={styles.projectImageContainer}>
            <img src={project.image} alt={project.name} title={project.name} />
          </div>
          <div className={styles.projectInfoContainer}>
            <h2>{project.name}</h2>
            <span>{project.description}</span>
            {project.details?.map((detail) => (
              <div key={detail.title}>
                {detail.title && <span>{detail.title}</span>}
                <ul>
                  {detail.descriptions.map((description) => (
                    <li key={description}>{description}</li>
                  ))}
                </ul>
              </div>
            ))}
            <StackList stacks={project.stacks || []} />
            <Link to={project.link} target="_blank">View Project ↗️</Link>
          </div>
        </div>
      ))}
    </div>
  )
}