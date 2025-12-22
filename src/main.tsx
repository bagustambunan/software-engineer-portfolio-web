import { Suspense } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./new-ui/index.css";
import Avatar from "./components/Avatar";
import Layout from "./new-ui/app-layout/Layout";
import { store } from "./redux/store";
import { Provider } from "react-redux";
import { pages } from "./new-ui/constants/pages";

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
