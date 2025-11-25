import { useNavigate } from "react-router-dom";
import Button from "../../components/Button";
import PageTitle from "../../components/PageTitle";
import Section from "../../components/Section";
import { profile } from "../../constants/profile";
import routes from "../../constants/route";
import styles from "./style.module.css";
import Avatar from "../../components/Avatar";
import { experiences } from "../../constants/experince";
import ExperienceList from "../../components/ExperienceList";

export default function HomePage() {
  const navigate = useNavigate();
  return (
    <div className={styles.homeContainer}>
      <PageTitle title="👋 Hi" />
      <Avatar />
      <Section>
        <p>I'm {profile.name}</p>
        <p>{profile.longDescription}</p>
      </Section>
      {profile.details?.map((detail, detailIndex) => (
        <Section key={`detail-${detailIndex}`} title={detail.title}>
          {detail.content}
        </Section>
      ))}
      <Section title="💼 Highlighted Experiences">
        <div className={styles.highlightContainer}>
          <ExperienceList
            carousel
            experiences={experiences.filter(
              (experience) => experience.highlighted
            )}
          />
        </div>
      </Section>
      <div>
        <Button
          onClick={() => {
            navigate(routes.resume);
          }}
        >
          💾 Download my profile
        </Button>
      </div>
    </div>
  );
}
