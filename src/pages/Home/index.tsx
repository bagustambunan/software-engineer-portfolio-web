import PageTitle from '../../components/PageTitle'
import { profile } from '../../constants'
import styles from './style.module.css'

export default function Home() {
  return (
    <div>
      <PageTitle title="👋 Hi" />
      <p>Name: Muhammad Bagus Syahputra Tambunan.</p>
      <p>About: A software engineer with a strong foundation in frontend and mobile development, and proven experience in e-commerce and internal tooling. A fast learner who quickly adapts to new technologies, takes initiative, and solves problems proactively.</p>
      <img src={profile.photo} alt={profile.name} title={profile.name} className={styles.avatar} />
    </div>
  )
}