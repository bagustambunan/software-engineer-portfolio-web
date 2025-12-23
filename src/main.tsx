import { Suspense } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./v2/redux/store";
import Avatar from "./shared/components/Avatar";
import LayoutV1 from "./v1/app-layout/Layout";
import LayoutV2 from "./v2/app-layout/Layout";
import { pages as pagesV1 } from "./v1/constants/pages";
import { pages as pagesV2 } from "./v2/constants/pages";
import { getVersion } from "./shared/utils/url";

const version = getVersion();
if (getVersion() === "v1") {
  import("./v1/index.css");
} else if (version === "v2") {
  import("./v2/index.css");
}

createRoot(document.getElementById("root")!).render(
  <Provider store={store}>
    <BrowserRouter>
      <Suspense fallback={<Avatar />}>
        <Routes>
          <Route path="/">
            {version === "v1" && (
              <Route path="/v1" element={<LayoutV1 />}>
                {pagesV1.map((page) => (
                  <Route
                    key={page.route}
                    path={page.route.replace("/v1/", "")}
                    element={<page.component />}
                  />
                ))}
              </Route>
            )}
            {version === "v2" && (
              <Route path="/" element={<LayoutV2 />}>
                {pagesV2.map((page) => (
                  <Route
                    key={page.windowKey}
                    path={page.route.replace("/", "")}
                    element={<page.component />}
                  />
                ))}
              </Route>
            )}
          </Route>
        </Routes>
      </Suspense>
    </BrowserRouter>
  </Provider>
);
