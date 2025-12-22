import { links } from "../../../constants/link";
import { LinkType } from "../../../constants/types";
import Section from "../../components/Section";
import Window from "../../components/Window";
import routes from "../../../constants/route";
import useWindowPage from "../../hooks/useWindowPage";

export default function ContactPage() {
  const windowPage = useWindowPage("contact", routes.contact);
  
  if (!windowPage.isOpened) return null;
  return (
    <Window
      windowKey="contact"
      title="Contact"
      closable={!windowPage.isThisPage}
      defaultOpen={windowPage.isThisPage}
      customStyle={windowPage.isThisPage ? { other: { fullWidth: true, fullHeight: true } } : undefined}
    >
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
    </Window>
  );
}
