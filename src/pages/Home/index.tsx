import Button from "../../components/Button";
import PageTitle from "../../components/PageTitle";
import Section from "../../components/Section";
import { profile } from "../../constants/profile";
import styles from "./style.module.css";

export default function HomePage() {
  return (
    <div>
      <PageTitle title="👋 Hi" />
      <img
        src={profile.photo}
        alt={profile.name}
        title={profile.name}
        className={styles.avatar}
      />
      {profile.details?.map((detail, detailIndex) => (
        <Section key={`detail-${detailIndex}`} title={detail.title}>
          {detail.content}
        </Section>
      ))}
      <Button>💾 Download my profile</Button>
    </div>
  );
}
