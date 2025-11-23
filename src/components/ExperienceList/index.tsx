import styles from "./style.module.css";
import type { Experience } from "../../constants/types";
import StackList from "../StackList";
import { formatDate } from "../../utils/datetime";
import Empty from "../Empty";

export default function ExperienceList({
  experiences,
}: {
  experiences?: Experience[];
}) {
  if (!experiences || experiences.length === 0) {
    return <Empty />;
  }
  return (
    <div>
      {experiences.map((experience, experienceIndex) => (
        <div
          key={`experience-${experienceIndex}`}
          className={styles.experienceContainer}
        >
          <div className={styles.experienceLogoContainer}>
            <img
              src={experience.logo}
              alt={experience.company}
              title={experience.company}
            />
          </div>
          <div className={styles.experienceInfoContainer}>
            <h3>
              {experience.company} - <i>{experience.position}</i>
            </h3>
            <i>
              {formatDate(experience.startDate)}
              {` - ${
                experience.endDate ? formatDate(experience.endDate) : "Present"
              }`}
            </i>
            {experience.description && <span>{experience.description}</span>}
            {experience.details?.map((detail, detailIndex) => (
              <div key={`experience-${experienceIndex}-detail-${detailIndex}`}>
                {detail.title && <span>{detail.title}</span>}
                <ul>
                  {detail.descriptions.map((description, descriptionIndex) => (
                    <li
                      key={`experience-${experienceIndex}-detail-${detailIndex}-description-${descriptionIndex}`}
                    >
                      {description}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
            <StackList
              key={`experience-${experienceIndex}-stack-list`}
              stacks={experience.stacks || []}
            />
          </div>
        </div>
      ))}
    </div>
  );
}
