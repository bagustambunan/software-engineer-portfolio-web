import { Outlet, useLocation } from "react-router-dom";
import Window from "../../components/Window";
import { pages } from "../../constants/pages";
import WindowsContainer from "../../components/WindowsContainer";

export default function Layout() {
  const pathname = useLocation().pathname;
  const page = pages.find((page) => page.route === pathname) || pages[0];

  return (
    <main>
      <Window
        windowKey={page.windowKey}
        title={page.icon + " " + page.title}
        closable={false}
        customStyle={{ other: { fullWidth: true } }}
      >
        <Outlet />
      </Window>
      <WindowsContainer />
    </main>
  );
}
