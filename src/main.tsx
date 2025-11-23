import { lazy, StrictMode, Suspense } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./index.css";
import routes from "./constants/route";
import Layout from "./app-layout/Layout";
import Avatar from "./components/Avatar";

const HomePage = lazy(() => import("./pages/Home"));
const ExperiencesPage = lazy(() => import("./pages/Experiences"));
const ProjectPage = lazy(() => import("./pages/Projects"));
const AchievementsPage = lazy(() => import("./pages/Achievements"));
const ContactPage = lazy(() => import("./pages/Contact"));
const ResumePage = lazy(() => import("./pages/Resume"));

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Suspense fallback={<Avatar />}>
        <Routes>
          <Route path={routes.resume} element={<ResumePage />} />
          <Route path="/" element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path={routes.projects} element={<ProjectPage />} />
            <Route path={routes.experiences} element={<ExperiencesPage />} />
            <Route path={routes.achievements} element={<AchievementsPage />} />
            <Route path={routes.contact} element={<ContactPage />} />
          </Route>
        </Routes>
      </Suspense>
    </BrowserRouter>
  </StrictMode>
);
