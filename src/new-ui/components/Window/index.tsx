import { useRef, useState } from "react";
import { useDrag } from "../../hooks/useDrag";

interface WindowProps {
  title?: string;
  closable?: boolean;
  customStyle?: {
    window?: {
      width?: string;
      height?: string;
    };
    other?: {
      fullWidth?: boolean;
      fullHeight?: boolean;
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
}: React.PropsWithChildren<WindowProps>) {
  const draggableRef = useRef<HTMLDivElement>(null);
  const { position, handleMouseDown } = useDrag({
    ref: draggableRef,
  });

  const [isHidden, setIsHidden] = useState(false);

  const handleClose = () => {
    if (!closable) {
      return;
    }
    setIsHidden(true);
    onClose?.();
  };

  return (
    <div
      className={`window-container${isHidden ? " hidden" : ""}`}
      ref={draggableRef}
      style={{
        top: position?.y,
        left: position?.x,
      }}
    >
      <div
        className={`window-body${
          customStyle?.other?.fullWidth ? " full-width" : ""
        }${customStyle?.other?.fullHeight ? " full-height" : ""}`}
        style={customStyle?.window}
      >
        <div className="window-header" onMouseDown={handleMouseDown}>
          <div className="window-title">{title}</div>
          <div className="window-actions">
            <button
              className={`${closable ? "close-button" : "button-disabled"}`}
              onClick={handleClose}
            >
              x
            </button>
          </div>
        </div>
        <div className="window-content">{children}</div>
      </div>
    </div>
  );
}
