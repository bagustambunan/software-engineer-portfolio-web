import Image from "../../../shared/components/Image";
import styles from "./style.module.css";
import { Link } from "react-router-dom";

export default function Folder({
  children,
  isActive,
  href,
  onClick,
  onOpen,
}: {
  isActive: boolean;
  href?: string;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  onOpen?: (e: React.MouseEvent<HTMLButtonElement>) => void;
} & React.PropsWithChildren) {
  const content = (
    <button
      onClick={onClick}
      onDoubleClick={onOpen}
      onKeyDown={(e) => {
        if (isActive) {
          if (e.key === "Enter") {
            onOpen?.(e as unknown as React.MouseEvent<HTMLButtonElement>);
          }
        }
      }}
      className={`${styles.folderContainer} ${isActive ? styles.clicked : ""}`}
    >
      <Image src="/images/folder.png" className={styles.folderIcon} />
      <div className={styles.folderContent}>{children}</div>
    </button>
  );

  if (href) {
    return <Link to={href}>{content}</Link>;
  }

  return content;
}
