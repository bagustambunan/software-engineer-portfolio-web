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
    <div>
      <h1 className={styles.pageTitle}>{title}</h1>
      {description && (
        <p>
          <i>{description}</i>
        </p>
      )}
    </div>
  );
}
