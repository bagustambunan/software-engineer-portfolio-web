import { Link } from "react-router-dom";
import { Fragment } from "react/jsx-runtime";
import styles from "./style.module.css";
import Empty from "../Empty";
import type { Contact } from "../../constants/types";

export default function ContactList({ contacts }: { contacts?: Contact[] }) {
  if (!contacts || contacts.length === 0) {
    return <Empty />;
  }
  return (
    <div className={styles.linksContainer}>
      {contacts.map((contact, contactIndex) => (
        <Fragment key={`contact-${contactIndex}`}>
          <Link to={contact.link} target="_blank">
            {contact.name}
          </Link>
          {contactIndex < contacts.length - 1 && (
            <span className={styles.linkSeparator}>•</span>
          )}
        </Fragment>
      ))}
    </div>
  );
}
