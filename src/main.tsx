import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './index.css'
import Layout from './layout'
import HomePage from './pages/Home/index.tsx'
import ProjectPage from './pages/Project/index.tsx'
import ContactPage from './pages/Contact/index.tsx'
import routes from './constants/route.ts'
import ExperiencesPage from './pages/Experiences/index.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path={routes.projects} element={<ProjectPage />} />
          <Route path={routes.experiences} element={<ExperiencesPage />} />
          <Route path={routes.contact} element={<ContactPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
