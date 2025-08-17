import { Link } from "react-router-dom";
import styles from "./style.module.css";
import type { Project } from "../../constants/types";

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
            <p>{project.description}</p>
            <div className={styles.projectStacksContainer}>
              {project.stacks?.map((stack) => (
                <img src={stack.icon} alt={stack.name} title={stack.name} />
              ))}
            </div>
            <Link to={project.link} target="_blank">View Project ↗️</Link>
          </div>
        </div>
      ))}
    </div>
  )
}