import { useEffect } from "react";
import Section from "../../components/Section";
import ExperienceList from "../../components/ExperienceList";
import { experiences } from "../../constants/experince";
import { profile } from "../../constants/profile";
import PageTitle from "../../components/PageTitle";
import ProjectList from "../../components/ProjectList";
import { projects } from "../../constants/project";
import styles from "./style.module.css";
import ContactList from "../../components/ContactList";
import { contacts } from "../../constants/contact";

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
        <ContactList contacts={contacts} />
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
