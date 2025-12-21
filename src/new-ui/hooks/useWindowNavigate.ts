import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { openWindow } from "../../redux/slices/windowsSlice";

const useWindowNavigate = (windowKey: string) => {
  const { openedWindowKeys } = useAppSelector((state) => state.windows);
  const dispatch = useAppDispatch();

  const handleOpen = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    dispatch(openWindow(windowKey));
  };

  return {
    isOpen: openedWindowKeys.includes(windowKey),
    handleOpen,
  };
};

export default useWindowNavigate;
