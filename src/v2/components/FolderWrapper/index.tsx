import { useState } from "react";
import Folder from "../Folder";
import styles from "./style.module.css";

export default function FolderWrapper({
  folders,
}: {
  folders: {
    href?: string;
    onOpen?: (e: React.MouseEvent<HTMLButtonElement>) => void;
    children: React.ReactNode;
  }[];
}) {
  const [activeFolderIndex, setActiveFolderIndex] = useState(0);
  return (
    <div className={styles.folderWrapper}>
      {folders.map((folder, index) => (
        <Folder
          key={`folder-${index}`}
          isActive={activeFolderIndex === index}
          href={folder.href}
          onClick={(e) => {
            e.preventDefault();
            setActiveFolderIndex(index)
          }}
          onOpen={folder.onOpen}
        >
          {folder.children}
        </Folder>
      ))}
    </div>
  );
}
