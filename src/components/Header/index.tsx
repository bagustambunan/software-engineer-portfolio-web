import { Link } from 'react-router-dom'
import styles from './style.module.css'

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.appTitle}>
        <h2>@bagustambunan</h2>
        <p>Software Engineer</p>
      </div>
      <div className={styles.appNav}>
        <Link to="/projects">📝 Proud Projects</Link>
        <Link to="/contact">💬 Contact</Link>
      </div>
    </header>
  )
}