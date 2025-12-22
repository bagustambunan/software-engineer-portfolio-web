import { Outlet, useLocation } from "react-router-dom";
import Window from "../../components/Window";
import { pages } from "../../constants/pages";

export default function Layout() {
  const pathname = useLocation().pathname;
  const page = pages.find((page) => page.route === pathname) || pages[0];

  return (
    <main>
      <Window
        windowKey={page.windowKey}
        title={page.title}
        closable={false}
        customStyle={{ other: { fullWidth: true, fullHeight: true } }}
      >
        <Outlet />
      </Window>
    </main>
  );
}
