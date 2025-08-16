import styles from './style.module.css'

export default function Home() {
    return (
    <div>
      <h1>Hi 👋</h1>
      <br />
      I'm a software engineer.
      <br /><br />
      <img src="/src/assets/images/avatar.png" alt="avatar" className={styles.avatar} />
    </div>
  )
}