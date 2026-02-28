import React, { Suspense, lazy, memo } from "react";
import { Routes, Route } from "react-router-dom";
import { motion } from "framer-motion";
import Navbar from "./components/Navbar/Navbar";

/* ========= Lazy load pages (IMPORTANT optimization) ========= */
const HeroSection = lazy(() => import("./components/Hero/HeroSection"));
const About = lazy(() => import("./components/About/About"));
const Tec = lazy(() => import("./components/Tec/Tec"));
const Project = lazy(() => import("./components/Projectmine/Project"));
const Experience = lazy(() => import("./pages/Experience"));
const Skills = lazy(() => import("./pages/Skills"));
const ComponentsPage = lazy(() => import("./pages/Buttonstyle/ComponentsPage"));
const ResumeBuilder = lazy(() => import("./components/Resume/ResumeBuilder"));
const Contact = lazy(() => import("./components/Contact/Contact"));

/* ========= Background component (memo prevents re-render) ========= */
const Background = memo(() => (
  <div className="fixed top-0 -z-10 h-full w-full">
    <div className="absolute top-0 z-[2] h-screen w-screen bg-neutral-950 
    bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]" />
  </div>
));

/* ========= Navbar wrapper ========= */
const DraggableNavbar = memo(() => (
  <motion.div
    drag="y"
    dragConstraints={{ top: 0, bottom: 20 }}
    dragElastic={0.2}
    className="cursor-grab sticky top-0 w-full z-50"
  >
    <Navbar />
  </motion.div>
));

function App() {
  return (
    <div className="overflow-x-hidden text-neutral-300 antialiased selection:bg-cyan-300 selection:text-cyan-900">

      {/* Background */}
      <Background />

      {/* Layout */}
      <div className="container mx-auto px-4 md:px-8">

        <DraggableNavbar />

        {/* Suspense for lazy loading */}
        <Suspense
          fallback={
            <div className="flex justify-center items-center h-screen">
              <div className="animate-spin rounded-full h-10 w-10 border-b-2 border-cyan-400" />
            </div>
          }
        >
          <Routes>

            {/* Home */}
            <Route
              path="/"
              element={
                <>
                  <HeroSection />
                  <About />
                  <Tec />
                  <Project />
                </>
              }
            />

            {/* Other routes */}
            <Route path="/experience" element={<Experience />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/projects" element={<Project />} />
            <Route path="/showcase" element={<ComponentsPage />} />
            <Route path="/resumebuilder" element={<ResumeBuilder />} />

          </Routes>
        </Suspense>

      </div>
    </div>
  );
}

export default App;