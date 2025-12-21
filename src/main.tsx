import { StrictMode, Suspense } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./new-ui/index.css";
import Avatar from "./components/Avatar";
import Layout from "./new-ui/app-layout/Layout";
import { store } from "./redux/store";
import { Provider } from "react-redux";
import routes from "./constants/route";

createRoot(document.getElementById("root")!).render(
  <Provider store={store}>
    <StrictMode>
      <BrowserRouter>
        <Suspense fallback={<Avatar />}>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={null} />
              <Route path={routes.contact} element={null} />
            </Route>
          </Routes>
        </Suspense>
      </BrowserRouter>
    </StrictMode>
  </Provider>
);
