import { useEffect } from "react";
import styles from "./style.module.css";

export default function PageTitle({
  title,
  description,
}: {
  title: string;
  description?: string;
}) {
  useEffect(() => {
    window.document.title = `${title} | @bagustambunan`;
  }, [title]);

  return (
    <div className={styles.pageTitleContainer}>
      <h1>{title}</h1>
      {description && (
        <i>{description}</i>
      )}
    </div>
  );
}
