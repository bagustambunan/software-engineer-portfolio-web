import styles from './style.module.css'

export default function Home() {
    return (
    <div>
      <img src="/src/assets/images/avatar.png" alt="avatar" className={styles.avatar} />
      <br />
      Hi 👋
      <br />
      I'm a software engineer.
    </div>
  )
}