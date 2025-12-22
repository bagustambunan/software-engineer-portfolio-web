import { useEffect, useRef } from "react";
import { useDrag } from "../../hooks/useDrag";
import { useAppDispatch, useAppSelector } from "../../../redux/hooks";
import { closeWindow, openWindow } from "../../../redux/slices/windowsSlice";

interface WindowProps {
  windowKey: string;
  title?: string;
  closable?: boolean;
  defaultOpen?: boolean;
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
  windowKey,
  title,
  closable = true,
  defaultOpen = false,
  customStyle,
  onClose,
}: React.PropsWithChildren<WindowProps>) {
  const { openedWindowKeys } = useAppSelector((state) => state.windows);
  const dispatch = useAppDispatch();

  const draggableRef = useRef<HTMLDivElement>(null);
  const { position, handleMouseDown, handleTouchStart } = useDrag({
    ref: draggableRef,
  });

  const handleClose = () => {
    if (!closable) {
      return;
    }
    dispatch(closeWindow(windowKey));
    onClose?.();
  };

  useEffect(() => {
    if (defaultOpen) {
      dispatch(openWindow(windowKey));
    }
  }, [defaultOpen]);

  return (
    <div
      className={`window-container${!openedWindowKeys.includes(windowKey) ? " hidden" : ""}`}
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
