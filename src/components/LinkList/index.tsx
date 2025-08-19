import { Link } from "react-router-dom";
import { Fragment } from "react/jsx-runtime";
import styles from "./style.module.css";
import Empty from "../Empty";
import type { Link as LinkType } from "../../constants/types";

export default function LinkList({ links }: { links?: LinkType[] }) {
  if (!links || links.length === 0) {
    return <Empty />;
  }
  return (
    <div className={styles.linksContainer}>
      {links.map((link, linkIndex) => (
        <Fragment key={`link-${linkIndex}`}>
          <Link to={link.link} target="_blank">
            {link.name}
          </Link>
          {linkIndex < links.length - 1 && (
            <span className={styles.linkSeparator}>•</span>
          )}
        </Fragment>
      ))}
    </div>
  );
}
