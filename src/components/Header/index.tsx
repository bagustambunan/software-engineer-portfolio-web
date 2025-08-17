import { Link, useLocation } from 'react-router-dom'
import routes from '../../constants/route'
import { profile } from '../../constants'
import styles from './style.module.css'

export default function Header() {
  const location = useLocation()
  const isActive = (link: string) => location.pathname === link
  const homeLink = {
    name: "Home",
    icon: "🏠",
    link: routes.home,
  }
  const links = [
    {
      name: "Proud Projects",
      icon: "📝",
      link: routes.projects,
    },
    {
      name: "Experience",
      icon: "💼",
      link: routes.experience,
    },
    {
      name: "Contact Me",
      icon: "💬",
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
      <div className={styles.topNav}>
        {links.map((link) => (
          <div>
            {isActive(link.link) && <span>➡️</span>}
            <Link to={link.link} title={link.name} className={isActive(link.link) ? styles.active : ''}>{link.icon} {link.name}</Link>
          </div>
        ))}
      </div>
      <div className={styles.bottomNav}>
        {[homeLink, ...links].map((link) => (
          <div>
            {isActive(link.link) && <span>➡️</span>}
            <Link to={link.link} title={link.name} className={isActive(link.link) ? styles.active : ''}>{link.icon}</Link>
          </div>
        ))}
      </div>
    </header>
  )
}