import PageTitle from "../../components/PageTitle"
import { experiences } from "../../constants/experince"
import { formatDate } from "../../utils/datetime"
import styles from "./style.module.css"
import StackList from "../../components/StackList"

export default function ExperiencesPage() {
  return (
    <div>
      <PageTitle title="💼 Experiences" description="List of experiences I've had." />
      {experiences.map((experience, experienceIndex) => (
        <div key={`experience-${experienceIndex}`} className={styles.experienceContainer}>
          <div className={styles.experienceLogoContainer}>
            <img src={experience.logo} alt={experience.company} title={experience.company} />
          </div>
          <div className={styles.experienceInfoContainer}>
            <h3>{experience.company} - <i>{experience.role}</i></h3>
            <span>{experience.description}</span>
            {experience.details?.map((detail) => (
              <div key={detail.title}>
                {detail.title && <span>{detail.title}</span>}
                <ul>
                  {detail.descriptions.map((description) => (
                    <li key={description}>{description}</li>
                  ))}
                </ul>
              </div>
            ))}
            <StackList stacks={experience.stacks || []} />
            <span>
              {formatDate(experience.startDate)}
              {` - ${experience.endDate ? formatDate(experience.endDate) : 'Present'}`}
            </span>
          </div>
        </div>
      ))}
    </div>
  )
}