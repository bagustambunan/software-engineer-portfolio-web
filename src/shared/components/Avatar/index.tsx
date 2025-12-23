import styles from "./style.module.css";
import { profile } from "../../../shared/constants/profile";

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
