import PageTitle from "../../components/PageTitle"
import { experiences } from "../../constants/experince"
import styles from "./style.module.css"

export default function ExperiencePage() {
  return (
    <div>
      <PageTitle title="💼 Experience" description="List of experiences I've had." />
      {experiences.map((experience, experienceIndex) => (
        <div key={`experience-${experienceIndex}`} className={styles.experienceContainer}>
          <h3>{experience.company} - <i>{experience.role}</i></h3>
          <span>{experience.description}</span>
          <div className={styles.stacksContainer}>
            {experience.stacks.map((stack) => (
              <img src={stack.icon} alt={stack.name} title={stack.name} />
            ))}
          </div>
          <span>
            {experience.startDate.toLocaleString("en-US", { month: "short", year: "numeric" })}
            {`- ${experience.endDate?.toLocaleString("en-US", { month: "short", year: "numeric" }) || 'present'}`}
          </span>
        </div>
      ))}
    </div>
  )
}