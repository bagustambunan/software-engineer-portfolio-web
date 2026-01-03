import type { PropsWithChildren } from "react";
import styles from "./style.module.css";

export default function Button({
  key,
  onClick,
  children,
  className,
  type = "default",
}: {
  key?: string;
  onClick?: (e: React.MouseEvent<HTMLDivElement>) => void;
  className?: string;
  type?: "default" | "primary";
} & PropsWithChildren) {
  return (
    <div key={key} onClick={onClick} className={`${styles.button} ${styles[type]} ${className}`}>
      {children}
    </div>
  );
}
