import type { Stack } from '../../constants/types'
import styles from './style.module.css'

export default function StackList({ key, stacks }: { key: string, stacks: Stack[] }) {
  if (stacks.length === 0) {
    return null;
  }
  return (
    <div className={styles.stackListContainer}>
      {/* <span>Tech Stacks:</span> */}
      <div>
        {stacks.map((stack, stackIndex) => (
          <img src={stack.icon} alt={stack.name} title={stack.name} key={`${key}-stack-${stackIndex}`} />
        ))}
      </div>
    </div>
  )
}