import { Suspense } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./v2/index.css";
import { Provider } from "react-redux";
import { store } from "./v2/redux/store";
import Avatar from "./v1/components/Avatar";
import Layout from "./v2/app-layout/Layout";
import { pages } from "./v2/constants/pages";

createRoot(document.getElementById("root")!).render(
  <Provider store={store}>
    <BrowserRouter>
      <Suspense fallback={<Avatar />}>
        <Routes>
          <Route path="/" element={<Layout />}>
            {pages.map((page) => (
              <Route key={page.windowKey} path={page.route} element={<page.component />} />
            ))}
          </Route>
        </Routes>
      </Suspense>
    </BrowserRouter>
  </Provider>
);
