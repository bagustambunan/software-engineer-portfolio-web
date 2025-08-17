import { Link } from "react-router-dom";
import PageTitle from "../../components/PageTitle";
import styles from "./style.module.css";
import Empty from "../../components/Empty";
import { contacts } from "../../constants/contact";
import { Fragment } from "react";

export default function ContactPage() {
  return (
    <div>
      <PageTitle title="💬 Contact Me" description="Get in touch with me." />
      <div className={styles.linksContainer}>
        {contacts.length === 0 && <Empty />}
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
    </div>
  );
}
