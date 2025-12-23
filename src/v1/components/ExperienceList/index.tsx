import styles from "./style.module.css";
import StackList from "../StackList";
import Empty from "../Empty";
import Carousel from "../Carousel";
import { Link } from "react-router-dom";
import { formatDate } from "../../../shared/utils/datetime";
import type { Experience } from "../../../shared/constants/types";
import routes from "../../../shared/constants/route";

const ExperienceItem = ({
  experienceIndex,
  experience,
}: {
  experienceIndex: number;
  experience: Experience;
}) => {
  return (
    <div className={styles.experienceContainer}>
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
  );
};

export default function ExperienceList({
  experiences,
  carousel,
}: {
  experiences?: Experience[];
  carousel?: boolean;
}) {
  if (!experiences || experiences.length === 0) {
    return <Empty />;
  }
  if (carousel) {
    return (
      <Carousel
        items={experiences.map((experience, experienceIndex) => (
          <ExperienceItem
            key={`experience-${experienceIndex}`}
            experienceIndex={experienceIndex}
            experience={experience}
          />
        ))}
        extra={<Link to={routes.experiences}>View All Experiences ↗️</Link>}
      />
    );
  }
  return (
    <div>
      {experiences.map((experience, experienceIndex) => (
        <ExperienceItem
          key={`experience-${experienceIndex}`}
          experienceIndex={experienceIndex}
          experience={experience}
        />
      ))}
    </div>
  );
}
