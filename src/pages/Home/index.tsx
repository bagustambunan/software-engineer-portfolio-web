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
import ProjectList from "../../components/ProjectList";
import { projects } from "../../constants/project";
import { posts } from "../../constants/post";
import PostList from "../../components/PostList";

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
      <Section>
        <div>
          <Button
            onClick={() => {
              navigate(routes.resume);
            }}
          >
            💾 Download my profile
          </Button>
        </div>
      </Section>
      <Section title="✍️ Writings" level={2}>
        <div className={styles.highlightContainer}>
          <PostList carousel posts={posts} />
        </div>
      </Section>
      <Section title="💼 Highlighted Experiences" level={2}>
        <div className={styles.highlightContainer}>
          <ExperienceList
            carousel
            experiences={experiences.filter(
              (experience) => experience.highlighted
            )}
          />
        </div>
      </Section>
      <Section title="📝 Highlighted Projects" level={2}>
        <div className={styles.highlightContainer}>
          <ProjectList
            carousel
            projects={projects.filter((project) => project.highlighted)}
          />
        </div>
      </Section>
    </div>
  );
}
