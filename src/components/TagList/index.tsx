import styles from "./style.module.css";
export default function TagList({ tags }: { tags: string[] }) {
  return (
    <div className={styles.tagListContainer}>
      {tags.map((tag) => (
        <span key={tag} className={styles.tag}>
          {tag}
        </span>
      ))}
    </div>
  );
}
