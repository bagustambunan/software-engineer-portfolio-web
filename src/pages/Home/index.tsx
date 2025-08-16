import PageTitle from '../../components/PageTitle'
import styles from './style.module.css'

export default function Home() {
    return (
    <div>
      <PageTitle title="👋 Hi" description="I'm a software engineer." />
      <p>Actual name: Muhammad Bagus Syahputra Tambunan.</p>
      <br />
      <img src="/src/assets/images/avatar.png" alt="avatar" className={styles.avatar} />
    </div>
  )
}