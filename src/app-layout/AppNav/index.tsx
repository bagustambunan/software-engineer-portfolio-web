import { Link, useLocation } from "react-router-dom";
import { profile } from "../../constants/profile";
import { bottomNavigations, topNavigations } from "../../constants/navigation";
import styles from "./style.module.css";

export default function AppNav() {
  const location = useLocation();
  const isActive = (link: string) => location.pathname === link;

  return (
    <header className={styles.header}>
      <Link to="/">
        <div className={styles.appTitle}>
          <h2>{profile.name}</h2>
          <p>{profile.shortDescription}</p>
        </div>
      </Link>
      <div className={styles.topNav}>
        {topNavigations.map((nav) => (
          <div>
            {isActive(nav.link) && <span>➡️</span>}
            <Link
              to={nav.link}
              title={nav.name}
              className={isActive(nav.link) ? styles.active : ""}
            >
              {nav.icon} {nav.name}
            </Link>
          </div>
        ))}
      </div>
      <div className={styles.bottomNav}>
        {bottomNavigations.map((nav) => (
          <div>
            {isActive(nav.link) && <span>➡️</span>}
            <Link
              to={nav.link}
              title={nav.name}
              className={isActive(nav.link) ? styles.active : ""}
            >
              {nav.icon}
            </Link>
          </div>
        ))}
      </div>
    </header>
  );
}
