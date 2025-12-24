import type { Stack } from "../../constants/types";
import Image from "../Image";
import styles from "./style.module.css";

export default function StackList({
  key,
  stacks,
}: {
  key: string;
  stacks: Stack[];
}) {
  if (stacks.length === 0) {
    return null;
  }
  return <div>Tech Stacks: {stacks.map((stack) => stack.name).join(", ")}</div>
  return (
    <div className={styles.stackListContainer}>
      <div>
        {stacks.map((stack, stackIndex) => (
          <Image
            src={stack.icon}
            alt={stack.name}
            title={stack.name}
            key={`${key}-stack-${stackIndex}`}
          />
        ))}
      </div>
    </div>
  );
}
