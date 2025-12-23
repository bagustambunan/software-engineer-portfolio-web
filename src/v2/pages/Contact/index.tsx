import Section from "../../../shared/components/Section";
import { links } from "../../../shared/constants/link";
import { LinkType } from "../../../shared/constants/types";

export default function ContactPage() {

  return (
    <div className="container">
      <Section title="Contact">
        {links
          .filter((link) => link.type === LinkType.CONTACT)
          .map((link) => (
            <div key={link.name}>
              <a href={link.link} target="_blank" rel="noopener noreferrer">
                {link.name}
              </a>
            </div>
          ))}
      </Section>
      <Section title="Other Links">
        {links
          .filter((link) => link.type === LinkType.OTHER)
          .map((link) => (
            <div key={link.name}>
              <a href={link.link} target="_blank" rel="noopener noreferrer">
                {link.name}
              </a>
            </div>
          ))}
      </Section>
    </div>
  );
}
