import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import TimelineSection from "./components/TimelineSection";
import GallerySection from "./components/GallerySection";
import FlowersSection from "./components/FlowersSection";
import Chatbot from "./components/Chatbot";
import Footer from "./components/Footer";

export default function App() {
  const [activeSection, setActiveSection] = useState("home");
  const [currentDate, setCurrentDate] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentDate(new Date());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const scrollToSection = (sectionId) => {
    setActiveSection(sectionId);
    document.getElementById(sectionId).scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="bg-gray-900 text-white min-h-screen overflow-hidden relative font-sans">
      <Navbar activeSection={activeSection} scrollToSection={scrollToSection} />
      <HeroSection />
      <AboutSection />
      <TimelineSection />
      <GallerySection />
      <FlowersSection />
      <Chatbot />
      <Footer currentDate={currentDate} />
    </div>
  );
}

