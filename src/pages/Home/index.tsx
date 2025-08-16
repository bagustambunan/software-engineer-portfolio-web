import PageTitle from '../../components/PageTitle'
import styles from './style.module.css'

export default function Home() {
    return (
    <div>
      <PageTitle title="👋 Hi" />
      I'm a software engineer.
      <br/>
      Actual name: Muhammad Bagus Syahputra Tambunan.
      <br /><br />
      <img src="/src/assets/images/avatar.png" alt="avatar" className={styles.avatar} />
    </div>
  )
}