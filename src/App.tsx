import { AnimatePresence } from 'framer-motion'
import { useEffect } from 'react'
import { BrowserRouter, Navigate, Route, Routes, useLocation } from 'react-router-dom'
import Footer from '@/components/Footer'
import GooeyNavDock from '@/components/GooeyNavDock'
import Navbar from '@/components/Navbar'
import PageTransition from '@/components/PageTransition'
import About from '@/pages/About'
import Connections from '@/pages/Connections'
import Home from '@/pages/Home'
import Memories from '@/pages/Memories'

function ScrollToTop() {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0 })
  }, [pathname])

  return null
}

function AppRoutes() {
  const location = useLocation()

  return (
    <div className="flex min-h-screen flex-col">
      <ScrollToTop />
      <Navbar />
      <GooeyNavDock />
      <main id="main" className="flex-1">
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route
              path="/"
              element={
                <PageTransition>
                  <Home />
                </PageTransition>
              }
            />
            <Route
              path="/about"
              element={
                <PageTransition>
                  <About />
                </PageTransition>
              }
            />
            <Route
              path="/memories"
              element={
                <PageTransition>
                  <Memories />
                </PageTransition>
              }
            />
            <Route
              path="/connections"
              element={
                <PageTransition>
                  <Connections />
                </PageTransition>
              }
            />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </AnimatePresence>
      </main>
      {location.pathname !== '/' && <Footer />}
    </div>
  )
}

export default function App() {
  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  )
}
