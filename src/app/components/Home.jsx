'use client';
import React, { Activity, useEffect } from "react";
import Hero from "./Hero";
import About from "./About";
import HomeActivity from "./home-activity";
import LearningModel from "./LearningModel";
import Programs from "./Programs";
import Testimonials from "./Testimonials";
import Contact from "./Contact";
import Gallery from "./Gallery";
import Reel from "./reels";
import SwipeSlide from "./SwipeSlide";

const Home = () => {
  useEffect(() => {
    // Scroll animation observer
    const observerOptions = {
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px",
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
        }
      });
    }, observerOptions);

    const animatedElements = document.querySelectorAll(".animate-on-scroll");
    animatedElements.forEach((el) => observer.observe(el));

    // Accordion functionality
    const accordionItems = document.querySelectorAll(".accordion-item");
    accordionItems.forEach((item) => {
      const header = item.querySelector(".accordion-header");
      if (header) {
        header.addEventListener("click", () => {
          const isActive = item.classList.contains("active");
          if (!isActive) {
            item.classList.add("active");
          } else {
            item.classList.remove("active");
          }
        });
      }
    });

    // Tab functionality for programs
    const navLinks = document.querySelectorAll(".program-nav a");
    const contentPanes = document.querySelectorAll(".program-content");

    navLinks.forEach((link) => {
      link.addEventListener("click", (e) => {
        e.preventDefault();
        const targetId = link.getAttribute("data-tab");

        navLinks.forEach((navLink) => navLink.classList.remove("active"));
        link.classList.add("active");

        contentPanes.forEach((pane) => {
          if (pane.id === targetId) {
            pane.classList.add("active");
          } else {
            pane.classList.remove("active");
          }
        });
      });
    });

    // Testimonial carousel functionality
    const carousel = document.getElementById("testimonialCarousel");
    if (carousel) {
      const slidesContainer = carousel.querySelector("#carouselSlides");
      if (slidesContainer) {
        const originalSlides = Array.from(
          slidesContainer.querySelectorAll(".carousel-slide")
        );
        const dots = Array.from(document.querySelectorAll(".carousel-dot"));
        const prevButton = document.getElementById("prevTestimonial");
        const nextButton = document.getElementById("nextTestimonial");
        let currentIndex = 0;
        let autoScrollInterval;

        const updateCarousel = () => {
          const slideWidth = 100 / Math.min(3, originalSlides.length);
          slidesContainer.style.transform = `translateX(-${
            currentIndex * slideWidth
          }%)`;

          dots.forEach((dot, index) => {
            dot.classList.toggle("bg-ikigai-blue", index === currentIndex);
            dot.classList.toggle(
              "bg-ikigai-blue-light",
              index !== currentIndex
            );
          });
        };

        const nextSlide = () => {
          currentIndex = (currentIndex + 1) % originalSlides.length;
          updateCarousel();
        };

        const prevSlide = () => {
          currentIndex =
            (currentIndex - 1 + originalSlides.length) % originalSlides.length;
          updateCarousel();
        };

        if (nextButton) nextButton.addEventListener("click", nextSlide);
        if (prevButton) prevButton.addEventListener("click", prevSlide);

        dots.forEach((dot, index) => {
          dot.addEventListener("click", () => {
            currentIndex = index;
            updateCarousel();
          });
        });

        // Auto-scroll
        const startAutoScroll = () => {
          autoScrollInterval = setInterval(nextSlide, 5000);
        };

        const stopAutoScroll = () => {
          clearInterval(autoScrollInterval);
        };

        startAutoScroll();
        carousel.addEventListener("mouseenter", stopAutoScroll);
        carousel.addEventListener("mouseleave", startAutoScroll);
      }
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <main>
      <Hero />
      <About />
      <Gallery /> 
      <Reel />
      <HomeActivity />
      <LearningModel />
      <Programs />
      <Testimonials />
      <Contact />
    </main>
  );
};

export default Home;
