import { useState } from "react";
import Image from "../../../shared/components/Image";
import styles from "./style.module.css";

export default function Folder({
  children,
  onOpen,
}: {
  onOpen: (e: React.MouseEvent<HTMLButtonElement>) => void;
} & React.PropsWithChildren) {
  const [isClicked, setIsClicked] = useState(false);
  return (
    <button
      onClick={(e) => {
        e.preventDefault();
        setIsClicked((prev) => !prev);
      }}
      onDoubleClick={onOpen}
      className={`${styles.folderContainer} ${isClicked ? styles.clicked : ""}`}
    >
      <Image src="/images/folder.png" className={styles.folderIcon} />
      <div className={styles.folderContent}>{children}</div>
    </button>
  );
}
