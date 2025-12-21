import { Outlet } from "react-router-dom";
import ContactPage from "../../pages/Contact";
import HomePage from "../../pages/Home";

export default function Layout() {
  return <main>
    <Outlet />
    <HomePage />
    <ContactPage />
  </main>;
}