import { Link, useLocation } from 'react-router-dom'
import routes from '../../constants/route'
import { profile } from '../../constants'
import styles from './style.module.css'

export default function Header() {
  const location = useLocation()
  const isActive = (link: string) => location.pathname === link
  const links = [
    {
      name: "📝 Proud Projects",
      link: routes.projects,
    },
    {
      name: "💬 Contact",
      link: routes.contact,
    },
  ]
  return (
    <header className={styles.header}>
      <Link to="/">
        <div className={styles.appTitle}>
          <h2>{profile.name}</h2>
          <p>{profile.description}</p>
        </div></Link>
      <div className={styles.appNav}>
        {links.map((link) => (
          <Link to={link.link} className={isActive(link.link) ? styles.activeLink : ''}>{link.name}</Link>
        ))}
      </div>
    </header>
  )
}