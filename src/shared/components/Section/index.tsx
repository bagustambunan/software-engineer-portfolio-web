import styles from "./style.module.css";

export default function Section({
  title,
  children,
}: {
  title?: string;
} & React.PropsWithChildren) {
  return <div className={styles.sectionContainer}>
    {title && <h2>{title}</h2>}
    {children}
  </div>;
}
