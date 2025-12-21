import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { openWindow } from "../../redux/slices/windowsSlice";

const useWindowPage = (windowKey: string, route: string) => {
  const isThisPage = useLocation().pathname === route;
  const [opened, setOpened] = useState<boolean>(false);

  const { openedWindowKeys } = useAppSelector((state) => state.windows);
  useEffect(() => {
    setOpened(openedWindowKeys.includes(windowKey));
  }, [openedWindowKeys]);

  const dispatch = useAppDispatch();
  useEffect(() => {
    if (isThisPage) {
      dispatch(openWindow(windowKey));
    }
  }, [isThisPage]);

  return {
    opened,
    isThisPage,
  };
};

export default useWindowPage;