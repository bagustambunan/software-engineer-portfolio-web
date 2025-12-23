import PageTitle from "../../components/PageTitle";
import { links } from "../../../shared/constants/link";
import LinkList from "../../components/LinkList";
import { LinkType } from "../../../shared/constants/types";
import Section from "../../components/Section";

export default function ContactPage() {
  return (
    <div>
      <PageTitle title="💬 Contact Me" description="Get in touch with me." />
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
