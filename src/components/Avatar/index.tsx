import { profile } from "../../constants/profile";
import styles from "./style.module.css";

export default function Avatar() {
  return (
    <img
      src={profile.photo}
      alt={profile.name}
      title={profile.name}
      className={styles.avatar}
    />
  );
}
