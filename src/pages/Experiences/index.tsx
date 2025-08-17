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
            <i>
              {formatDate(experience.startDate)}
              {` - ${experience.endDate ? formatDate(experience.endDate) : 'Present'}`}
            </i>
            <span>{experience.description}</span>
            {experience.details?.map((detail, detailIndex) => (
              <div key={`experience-${experienceIndex}-detail-${detailIndex}`}>
                {detail.title && <span>{detail.title}</span>}
                <ul>
                  {detail.descriptions.map((description, descriptionIndex) => (
                    <li key={`experience-${experienceIndex}-detail-${detailIndex}-description-${descriptionIndex}`}>{description}</li>
                  ))}
                </ul>
              </div>
            ))}
            <StackList key={`experience-${experienceIndex}-stack-list`} stacks={experience.stacks || []} />
          </div>
        </div>
      ))}
    </div>
  )
}