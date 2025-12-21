import { Outlet } from "react-router-dom";
import ContactPage from "../../pages/Contact";

export default function Layout() {
  return <main>
    <Outlet />
    <ContactPage />
  </main>;
}