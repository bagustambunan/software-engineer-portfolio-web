import PageTitle from '../../components/PageTitle'
import { profile } from '../../constants'
import styles from './style.module.css'

export default function Home() {
  return (
    <div>
      <PageTitle title="👋 Hi" description={`I'm a ${profile.description}`} />
      <p>Real name: Muhammad Bagus Syahputra Tambunan.</p>
      <br />
      <img src={profile.photo} alt={profile.name} title={profile.name} className={styles.avatar} />
    </div>
  )
}