import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './index.css'
import Layout from './layout'
import Home from './pages/Home/index.tsx'
import Projects from './pages/Projects/index.tsx'
import Contact from './pages/Contact/index.tsx'
import routes from './constants/route.ts'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path={routes.projects} element={<Projects />} />
          <Route path={routes.contact} element={<Contact />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
