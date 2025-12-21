import { useRef } from "react";
import { useDrag } from "../../hooks/useDrag";

interface WindowProps {
  title?: string;
  closable?: boolean;
  customStyle?: {
    window?: {
      width?: string;
      height?: string;
    };
  };
  onClose?: () => void;
  onMinimize?: () => void;
  onMaximize?: () => void;
  onRestore?: () => void;
}

export default function Window({
  children,
  title,
  closable = true,
  customStyle,
  onClose,
  onMinimize,
  onMaximize,
  onRestore,
}: React.PropsWithChildren<WindowProps>) {
  const draggableRef = useRef<HTMLDivElement>(null);
  const { position, handleMouseDown } = useDrag({
    ref: draggableRef,
  });
  return (
    <div
      className="window-container"
      ref={draggableRef}
      style={{
        top: position?.y,
        left: position?.x,
      }}
    >
      <div className="window-body" style={customStyle?.window}>
        <div className="window-header" onMouseDown={handleMouseDown}>
          <div className="window-title">{title}</div>
          <div className="window-actions">
            <button>x</button>
          </div>
        </div>
        <div className="window-content">{children}</div>
      </div>
    </div>
  );
}
