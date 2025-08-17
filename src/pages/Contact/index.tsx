import { Link } from "react-router-dom";
import PageTitle from "../../components/PageTitle";
import { profile } from "../../constants";
import styles from './style.module.css'

export default function ContactPage() {
  return (
    <div>
      <PageTitle title="💬 Contact Me" description="Get in touch with me." />
      <div className={styles.linksContainer}>
        {profile.links.map((link, linkIndex) => (
          <>
            <Link to={link.link} target="_blank">
              {link.name}
            </Link>
            {linkIndex < profile.links.length - 1 && <span className={styles.linkSeparator}>•</span>}
          </>
        ))}
      </div>
    </div>
  )
}