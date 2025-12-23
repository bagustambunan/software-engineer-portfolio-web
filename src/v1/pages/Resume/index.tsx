import { useEffect } from "react";
import Section from "../../../shared/components/Section";
import ExperienceList from "../../../shared/components/ExperienceList";
import { experiences } from "../../../shared/constants/experince";
import { profile } from "../../../shared/constants/profile";
import PageTitle from "../../../shared/components/PageTitle";
import ProjectList from "../../../shared/components/ProjectList";
import { projects } from "../../../shared/constants/project";
import styles from "./style.module.css";
import LinkList from "../../../shared/components/LinkList";
import { links } from "../../../shared/constants/link";
import { LinkType } from "../../../shared/constants/types";

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
