import { links } from "../../../shared/constants/link";
import LinkList from "../../../shared/components/LinkList";
import { LinkType } from "../../../shared/constants/types";
import Section from "../../../shared/components/Section";

export default function ContactPage() {
  return (
    <div>
      <div className="container">
        <Section title="Contact">
          <LinkList
            links={links.filter((link) => link.type === LinkType.CONTACT)}
          />
        </Section>
        <Section title="Other Links">
          <LinkList
            links={links.filter((link) => link.type === LinkType.OTHER)}
          />
        </Section>
      </div>
    </div>
  );
}
