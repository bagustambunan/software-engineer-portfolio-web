import styles from "./style.module.css";

export default function Section({
  title,
  children,
}: { title?: string } & React.PropsWithChildren) {
  return (
    <div className={styles.sectionContainer}>
      {title && <h3>{title}</h3>}
      {children}
    </div>
  );
}
