import { useNavigate } from "react-router-dom";
import Button from "../../components/Button";
import PageTitle from "../../components/PageTitle";
import Section from "../../components/Section";
import { profile } from "../../constants/profile";
import routes from "../../constants/route";
import styles from "./style.module.css";

export default function HomePage() {
  const navigate = useNavigate();
  return (
    <div className={styles.homeContainer}>
      <PageTitle title="👋 Hi" />
      <img
        src={profile.photo}
        alt={profile.name}
        title={profile.name}
        className={styles.avatar}
      />
      <Section title="Name">
        <p>{profile.name}</p>
      </Section>
      <Section title="About">
        <p>{profile.longDescription}</p>
      </Section>
      {profile.details?.map((detail, detailIndex) => (
        <Section key={`detail-${detailIndex}`} title={detail.title}>
          {detail.content}
        </Section>
      ))}
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
