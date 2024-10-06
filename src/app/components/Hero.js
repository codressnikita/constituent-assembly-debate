"use client";

import { useEffect, useState } from "react";
import Overlay from "./Overlay";

const Hero = ({ videoSrc, isFocused }) => {
  // Accept isFocused as a prop
  const [overlayOpacity, setOverlayOpacity] = useState(0); // Start with 0 opacity

  const handleScroll = () => {
    const scrollY = window.scrollY; // Get the current scroll position
    const newOpacity = Math.min(scrollY / window.innerHeight, 1); // Calculate new opacity
    setOverlayOpacity(newOpacity); // Update overlay opacity
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll); // Listen for scroll events

    return () => {
      window.removeEventListener("scroll", handleScroll); // Clean up event listener
    };
  }, []);

  return (
    <section className="hero-section fixed inset-0 h-screen overflow-hidden">
      <video
        className="w-full h-full object-cover"
        src={videoSrc}
        autoPlay
        loop
        muted
        playsInline
      />
      <Overlay
        animateIn={!isFocused} // Set animateIn to false if isFocused is true
        animateOut={isFocused} // Set animateOut to true if isFocused is true
        animationDuration={1}
        mainOpacity={overlayOpacity + 0.2} // Set the overlay opacity based on scroll
      />
    </section>
  );
};

export default Hero;
