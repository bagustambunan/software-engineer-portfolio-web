import Image from "../../../shared/components/Image";
import { Link } from "react-router-dom";
import styles from "./style.module.css";

export default function Folder({
  children,
  isActive,
  href,
  onClick,
  onOpen,
  type = "folder",
}: {
  isActive: boolean;
  href?: string;
  onClick?: (e: React.MouseEvent) => void;
  onOpen?: (e: React.MouseEvent) => void;
  type?: "folder" | "file"
} & React.PropsWithChildren) {
  const content = (
    <div
      onClick={isActive ? onOpen : onClick}
      // onDoubleClick={onOpen}
      onKeyDown={(e) => {
        if (isActive) {
          if (e.key === "Enter") {
            onOpen?.(e as unknown as React.MouseEvent);
          }
        }
      }}
      className={`${styles.folderContainer} ${isActive ? styles.clicked : ""}`}
    >
      <Image src={type === "folder" ? "/images/folder.png" : "/images/file.png"} className={styles.folderIcon} />
      <div className={styles.folderContent}>{children}</div>
    </div>
  );

  if (href) {
    return <Link to={href}>{content}</Link>;
  }

  return content;
}
