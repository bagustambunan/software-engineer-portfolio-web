import { Link } from 'react-router-dom'
import PageTitle from '../../components/PageTitle'
import { projects } from './constants'
import styles from './style.module.css'

export default function Projects() {
  return (
    <div>
      <PageTitle title="📝 Proud Projects" description="List of projects I'm proud of." />
      <div className={styles.projectListContainer}>
        {projects.map((project) => (
          <div className={styles.projectContainer}>
            <div className={styles.projectImageContainer}>
              <img src={project.image} alt={project.name} />
            </div>
            <div className={styles.projectInfoContainer}>
              <h2>{project.name}</h2>
              <p>{project.description}</p>
              <div className={styles.projectStacksContainer}>
                {project.stacks.map((stack) => (
                  <img src={stack.icon} alt={stack.name} />
                ))}
              </div>
              <Link to={project.link} target="_blank">View Project ↗️</Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}