import type { PropsWithChildren } from "react";
import styles from "./style.module.css";

export default function Button({
  key,
  onClick,
  children,
  className,
}: {
  key?: string;
  onClick?: () => void;
  className?: string;
} & PropsWithChildren) {
  return (
    <button key={key} onClick={onClick} className={`${styles.button} ${className}`}>
      {children}
    </button>
  );
}
