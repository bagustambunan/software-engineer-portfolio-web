import { useEffect } from "react";
import Section from "../../components/Section";
import ExperienceList from "../../components/ExperienceList";
import { experiences } from "../../constants/experince";
import { profile } from "../../constants/profile";
import PageTitle from "../../components/PageTitle";
import ProjectList from "../../components/ProjectList";
import { projects } from "../../constants/project";
import styles from "./style.module.css";
import LinkList from "../../components/LinkList";
import { links } from "../../constants/link";
import { LinkType } from "../../constants/types";

export default function ResumePage() {
  useEffect(() => {
    window.print();
  }, []);

  return (
    <div className={styles.mainContainer}>
      <div>
        <PageTitle
          title={profile.name}
          description={profile.shortDescription}
        />
        <span>{profile.longDescription}</span>
        <br /><br />
        <LinkList links={links.filter((link) => link.type === LinkType.CONTACT)} />
      </div>
      <br />
      <Section title="Experiences">
        <ExperienceList experiences={experiences} />
      </Section>
      <Section title="Projects">
        <ProjectList projects={projects} />
      </Section>
    </div>
  );
}
