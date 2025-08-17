import { Outlet } from "react-router-dom";
import AppNav from "../AppNav";

export default function Layout() {
  return (
    <div>
      <AppNav />
      <main>
        <Outlet />
      </main>
    </div>
  );
}
