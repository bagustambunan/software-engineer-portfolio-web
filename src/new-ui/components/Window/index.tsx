import { useRef } from "react";
import { useDrag } from "../../hooks/useDrag";
import { useAppDispatch } from "../../../redux/hooks";
import { closeWindow } from "../../../redux/slices/windowsSlice";

interface WindowProps {
  windowId?: string;
  windowKey: string;
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
}

export default function Window({
  children,
  windowId,
  windowKey: _windowKey,
  title,
  closable = true,
  customStyle,
  onClose,
}: React.PropsWithChildren<WindowProps>) {
  const dispatch = useAppDispatch();

  const draggableRef = useRef<HTMLDivElement>(null);
  const { position, handleMouseDown, handleTouchStart } = useDrag({
    ref: draggableRef,
  });

  const handleClose = () => {
    if (!closable) {
      return;
    }
    if (windowId) {
      dispatch(closeWindow(windowId));
    }
    onClose?.();
  };

  return (
    <div
      className="window-container"
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
        <div
          className="window-header"
          onMouseDown={handleMouseDown}
          onTouchStart={handleTouchStart}
        >
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
        <div
          className="window-content"
          onTouchStart={(e) => {
            e.stopPropagation();
          }}
        >
          {children}
        </div>
      </div>
    </div>
  );
}
