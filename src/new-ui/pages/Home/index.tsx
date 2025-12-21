import { links } from "../../../constants/link";
import { profile } from "../../../constants/profile";
import { LinkType } from "../../../constants/types";
import Section from "../../components/Section";
import Window from "../../components/Window";
import styles from "./style.module.css";

export default function HomePage() {
  return (
    <div className={styles.homeContainer}>
      <Window
        title="About Me"
        closable={false}
        customStyle={{ other: { fullWidth: true, fullHeight: true } }}
      >
        {profile.longDescription}
      </Window>
      <Window title="Contact">
        <Section title="Contact">
          {links.filter((link) => link.type === LinkType.CONTACT).map((link) => (
            <div key={link.name}>
              <a href={link.link} target="_blank" rel="noopener noreferrer">
                {link.name}
              </a>
            </div>
          ))}
        </Section>
        <Section title="Other Links">
          {links.filter((link) => link.type === LinkType.OTHER).map((link) => (
            <div key={link.name}>
              <a href={link.link} target="_blank" rel="noopener noreferrer">
                {link.name}
              </a>
            </div>
          ))}
        </Section>
      </Window>
    </div>
  );
}
