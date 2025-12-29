import Image from "../../../shared/components/Image";
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
  onClick?: (e: React.MouseEvent) => void;
  onOpen?: (e: React.MouseEvent) => void;
} & React.PropsWithChildren) {
  const content = (
    <div
      onClick={isActive ? onOpen : onClick}
      onDoubleClick={onOpen}
      onKeyDown={(e) => {
        if (isActive) {
          if (e.key === "Enter") {
            onOpen?.(e as unknown as React.MouseEvent);
          }
        }
      }}
      className={`folder-container ${isActive ? "clicked" : ""}`}
    >
      <Image src="/images/folder.png" className="folder-icon" />
      <div className="folder-content">{children}</div>
    </div>
  );

  if (href) {
    return <Link to={href}>{content}</Link>;
  }

  return content;
}
