import { useEffect, useState } from "react";
import { links } from "../../../constants/link";
import { LinkType } from "../../../constants/types";
import Section from "../../components/Section";
import Window from "../../components/Window";
import { useAppSelector } from "../../../redux/hooks";

export default function ContactPage() {
  const [opened, setOpened] = useState<boolean>(false);

  const { openedWindowKeys } = useAppSelector((state) => state.windows);
  useEffect(() => {
    setOpened(openedWindowKeys.includes("contact"));
  }, [openedWindowKeys]);

  if (!opened) return null;

  return (
    <Window windowKey="contact" title="Contact">
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
