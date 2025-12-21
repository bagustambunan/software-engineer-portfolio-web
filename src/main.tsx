import { lazy, StrictMode, Suspense } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./new-ui/index.css";
import Avatar from "./components/Avatar";
import Layout from "./new-ui/app-layout/Layout";
import ContactPage from "./new-ui/pages/Contact";
import routes from "./constants/route";
import { store } from "./redux/store";
import { Provider } from "react-redux";

const HomePage = lazy(() => import("./new-ui/pages/Home"));

createRoot(document.getElementById("root")!).render(
  <Provider store={store}>
    <StrictMode>
      <BrowserRouter>
        <Suspense fallback={<Avatar />}>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<HomePage />} />
              <Route path={routes.contact} element={<ContactPage />} />
            </Route>
          </Routes>
        </Suspense>
      </BrowserRouter>
    </StrictMode>
  </Provider>
);
