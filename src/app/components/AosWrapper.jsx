"use client";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function AOSWrapper({ children }) {
  useEffect(() => {
    AOS.init({
      duration: 1200, // animation duration in ms
      once: true,     // animation happens only once
      mirror: false,  // animation repeats when scrolling up
    });
  }, []);

  return <>{children}</>;
}
