import { lazy, Suspense } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./new-ui/index.css";
import Avatar from "./components/Avatar";
import Layout from "./new-ui/app-layout/Layout";
import { store } from "./redux/store";
import { Provider } from "react-redux";
import routes from "./constants/route";

const HomePage = lazy(() => import("./new-ui/pages/Home"));
const ContactPage = lazy(() => import("./new-ui/pages/Contact"));
const FizzBuzzPage = lazy(() => import("./new-ui/pages/FizzBuzz"));

createRoot(document.getElementById("root")!).render(
  <Provider store={store}>
    <BrowserRouter>
      <Suspense fallback={<Avatar />}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path={routes.contact} element={<ContactPage />} />
            <Route path={routes.fizzBuzz} element={<FizzBuzzPage />} />
          </Route>
        </Routes>
      </Suspense>
    </BrowserRouter>
  </Provider>
);
