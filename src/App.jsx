import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import HeroSection from "./components/Hero/HeroSection";
import About from "./components/About/About";
import Tec from "./components/Tec/Tec";
import Project from "./components/Projectmine/Project";
import Experience from "./pages/Experience"; // make sure you created this file
import Skills from "./pages/Skills";

import ComponentsPage from "./pages/Buttonstyle/ComponentsPage";
import ResumeBuilder from "./components/Resume/ResumeBuilder";

function App() {
  return (
    <>
      <div className="overflow-x-hidden text-neutral-300 antialiased selection:bg-cyan-300 selection:text-cyan-900">
        {/* Background */}
        <div className="fixed top-0 -z-10 h-full w-full">
          <div className="absolute top-0 z-[-2] h-screen w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>
        </div>

        {/* Main Layout */}
        <div className="container mx-auto px-8">
          <Navbar />

          <Routes>
            {/* Home Route */}
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

            {/* Experience Route */}
            <Route path="/experience" element={<Experience />} />
            <Route path="/skills" element={<Skills/>} />
            <Route path="/projects" element={<Project/>} />
            <Route path="/showcase" element={<ComponentsPage/>} />
            <Route path="/resumebuilder" element={<ResumeBuilder/>} />
          </Routes>
        </div>
      </div>
    </>
  );
}

export default App;
