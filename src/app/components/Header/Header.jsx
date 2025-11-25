"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import Image from "next/image";
import MobileMenuToggle from "./Menu";
import CtaButton from "../Button";
import { usePathname } from "next/navigation"; // <-- ADDED: Next.js path hook

const updateHeaderHeight = () => {
  const header = document.getElementById("main-header");
  const nav = document.getElementById("main-nav");
  if (!header || !nav) return;

  const root = document.documentElement;

  if (header.classList.contains("nav-only")) {
    root.style.setProperty("--header-height", `${nav.offsetHeight}px`);
  } else {
    root.style.setProperty("--header-height", `${header.offsetHeight}px`);
  }
};

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMenuAnimating, setIsMenuAnimating] = useState(false);
  const [isProgramMenuOpen, setIsProgramMenuOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false);

  // ADDED: Get the current path for active link styling
  const currentPath = usePathname();

  // Set header heights and manage scroll behavior
  useEffect(() => {
    const setHeaderHeights = () => {
      // This now calls the new, smarter function
      updateHeaderHeight();

      const header = document.getElementById("main-header");
      if (header) {
        document.body.style.paddingTop = "var(--header-height)";
      }
    };

    setHeaderHeights();
    window.addEventListener("resize", setHeaderHeights);

    return () => {
      window.removeEventListener("resize", setHeaderHeights);
    };
  }, []);

  // Scroll handler
  useEffect(() => {
    let lastScrollTop = 0;
    const scrollThreshold = 10;

    const handleScroll = () => {
      const scrollTop =
        window.pageYOffset || document.documentElement.scrollTop;
      const header = document.getElementById("main-header");
      const topBar = document.getElementById("top-info-bar");

      // Scroll progress indicator
      const scrollPercent =
        (scrollTop /
          (document.documentElement.scrollHeight - window.innerHeight)) *
        100;
      setScrollProgress(Math.min(Math.max(scrollPercent, 0), 100));

      // Hide/show top bar on scroll
      if (Math.abs(scrollTop - lastScrollTop) <= scrollThreshold) return;

      if (
        scrollTop > lastScrollTop &&
        scrollTop > (topBar?.offsetHeight || 0)
      ) {
        header?.classList.add("nav-only");
        setIsScrolled(true);
      } else {
        header?.classList.remove("nav-only");
        setIsScrolled(false);
      }

      lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;

      // This timeout calls the new function after the CSS transition
      setTimeout(updateHeaderHeight, 400);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Mobile menu functions
  const openMobileMenu = () => {
    setIsMenuAnimating(true);
    setIsMenuOpen(true);
    document.body.classList.add("overflow-hidden");

    // Reset animation state after animation completes
    setTimeout(() => {
      setIsMenuAnimating(false);
    }, 700);
  };

  const closeMobileMenu = () => {
    setIsMenuAnimating(true);
    setIsMenuOpen(false);
    document.body.classList.remove("overflow-hidden");

    // Reset animation state after animation completes
    setTimeout(() => {
      setIsMenuAnimating(false);
    }, 500);
  };

  const toggleProgramMenu = () => {
    setIsProgramMenuOpen(!isProgramMenuOpen);
  };

  // Keyboard navigation support
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape" && isMenuOpen) {
        closeMobileMenu();
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [isMenuOpen]);

  // Staggered animation for menu items
  useEffect(() => {
    if (isMenuOpen) {
      const menuItems = document.querySelectorAll(".mobile-nav-item");
      menuItems.forEach((item, index) => {
        item.style.opacity = "0";
        item.style.transform = "translateX(30px)";
        setTimeout(() => {
          item.style.transition =
            "all 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94)";
          item.style.opacity = "1";
          item.style.transform = "translateX(0)";
        }, 200 + index * 50);
      });
    }
  }, [isMenuOpen]);

  // Smooth scroll function
  const handleSmoothScroll = (e, targetId) => {
    e.preventDefault();
    const target = document.querySelector(targetId);
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <>
      {/* HEADER SECTION */}
      <header
        id="main-header"
        className={`fixed top-0 left-0 right-0 z-50 ${
          typeof document !== "undefined" &&
          document.getElementById("main-header")?.classList.contains("nav-only")
            ? "mt-2 md:mt-0"
            : ""
        }`}
      >
        {/* Top Bar for Contact and Social Media */}
        <div
          id="top-info-bar"
          className="bg-primary backdrop-blur-md transition-all duration-400"
        >
          <div className="section-container md:py-3 py-2 flex justify-between items-stretch text-base">
            <div className="flex items-center md:space-x-6 space-x-3">
              <a
                href="tel:+8801772523070"
                className="contact-link flex items-center space-x-2 text-soft-white hover:text-color-dark-pink transition-all duration-300 hover:translate-x-1"
                aria-label="Phone number"
              >
                <i className="fa-solid fa-phone"></i>
                <span className="hidden md:inline font-medium">
                  +880-1772-523070
                </span>
              </a>
              <a
                href="mailto:info@ikigaibd.com"
                className="contact-link flex items-center space-x-2 text-soft-white hover:text-color-dark-pink transition-all duration-300 hover:translate-x-1"
                aria-label="Email address"
              >
                <i className="fas fa-envelope"></i>
                <span className="hidden md:inline font-medium">
                  info@ikigaibd.com
                </span>
              </a>
            </div>
            <div className="flex items-center md:space-x-4 space-x-2 text-soft-white">
              <a
                href="https://www.facebook.com/Ikigai121"
                aria-label="Facebook"
                className="social-icon  hover:text-color-dark-pink transition-all duration-300 hover:scale-1.1 hover:-translate-y-[0.2px]
"
              >
                <i className="fab fa-facebook-f"></i>
              </a>
              <a
                href="https://www.instagram.com/ikigai_120/"
                aria-label="Instagram"
                className="social-icon  hover:text-color-dark-pink transition-all duration-300 hover:scale-1.1 hover:-translate-y-[0.2px]"
              >
                <i className="fab fa-instagram"></i>
              </a>
              <a
                href="#"
                aria-label="LinkedIn"
                className="social-icon hover:text-color-dark-pink transition-all duration-300 hover:scale-1.1 hover:-translate-y-[0.2px]"
              >
                <i className="fab fa-linkedin-in"></i>
              </a>
              <a
                href="https://www.youtube.com/@ikigaidaycarepre-school"
                aria-label="YouTube"
                className="social-icon hover:text-color-dark-pink transition-all duration-300 hover:scale-1.1 hover:-translate-y-[0.2px]"
              >
                <i className="fab fa-youtube"></i>
              </a>
            </div>
          </div>
        </div>

        {/* Main Navigation Bar */}
        <nav
          id="main-nav"
          className=" backdrop-blur-xl bg-header-transparent transition-all duration-100"
        >
          <div className="section-container ">
            <div className="flex justify-between items-center h-20 md:h-20">
              {/* Logo Link: Always links to the home page route / */}
              <Link
                href="/" // CHANGED: Link to root path
                onClick={(e) => {
                  if (currentPath === "/") {
                    handleSmoothScroll(e, "#hero"); // Smooth scroll only if already on home page
                  }
                }}
                className="logo-container flex-shrink-0 flex items-center logo-float-animation group"
                aria-label="Ikigai Home"
              >
                <div className="relative h-15 w-60 mt-[5px] md:h-13 md:w-50  xl:h-15 xl:w-70 xl:mt-[5px] flex items-center justify-center transition-all duration-150 group-hover:scale-105">
                  <Image
                    src="/images/ikigai.svg"
                    alt="Ikigai daycare and preschool"
                    fill
                    className="object-contain"
                  />
                </div>
              </Link>

              {/* Desktop Navigation Links */}
              <div className="hidden lg:flex items-center space-x-8">
                {/* Home Link */}
                <Link
                  href="/" // CHANGED: Link to root path
                  onClick={(e) => {
                    if (currentPath === "/") {
                      handleSmoothScroll(e, "#hero"); // Smooth scroll only if already on home page
                    }
                  }}
                  className={`nav-link ${currentPath === "/" ? "active" : ""}`} // <-- DYNAMIC ACTIVE
                >
                  Home
                </Link>
                {/* About Us Link */}
                <Link
                  href="/about-us" // Correct Next.js route
                  className={`nav-link ${
                    currentPath === "/about-us" ? "active" : ""
                  }`} // <-- DYNAMIC ACTIVE
                >
                  About Us
                </Link>
                {/* Program Dropdown (Stays as smooth scroll) */}
                <div className={`dropdown relative group z-[2000] nav-link 
                ${
                        currentPath === "/daycare"
                        || currentPath === "/schooling" 
                        || currentPath === "/parenting-program" 
                        || currentPath === "/short-program"
                        ? "active" : ""
                }
                 flex items-center px-5 py-0 text-color-dark-pink hover:bg-pink-white transition-all duration-300 rounded-xl m-2`}>
                  <button
                    className="flex items-center cursor-pointer"
                    aria-haspopup="true"
                  >
                    Program
                    <i className="fas fa-chevron-down ml-2 text-xs transition-transform duration-300 group-hover:rotate-180"></i>
                  </button>
                  <div className="dropdown-menu absolute top-full left-0 mt-3 min-w-[220px] frosted-card">
                    <Link
                      href="/daycare" // Adjusted for clarity: Page / then hash #programs
                      className={`nav-link ${
                        currentPath === "/daycare" ? "active" : ""
                      } flex items-center px-5 py-3 text-color-dark-pink hover:bg-pink-white transition-all duration-300 rounded-xl m-2`}
                    >
                      <i className="fas fa-baby mr-3 "></i>
                      Daycare
                    </Link>
                    <Link
                      href="/schooling"
                      className={`nav-link ${
                        currentPath === "/schooling" ? "active" : ""
                      } flex items-center px-5 py-3 text-color-dark-pink hover:bg-pink-white transition-all duration-300 rounded-xl m-2`}
                    >
                      <i className="fas fa-graduation-cap mr-3 "></i>
                      Schooling
                    </Link>
                    <Link
                      href="/parenting-program"
                      className={`nav-link ${
                        currentPath === "/parenting-program" ? "active" : ""
                      } flex items-center px-5 py-3 text-color-dark-pink hover:bg-pink-white transition-all duration-300 rounded-xl m-2`}
                    >
                      <i className="fas fa-heart mr-3 "></i>
                      Parenting Program
                    </Link>
                    <Link
                      href="/short-program"
                      className={`nav-link ${
                        currentPath === "/short-program" ? "active" : ""
                      } flex items-center px-5 py-3  hover:bg-pink-white transition-all duration-300 rounded-xl m-2`}
                    >
                      <i className="fas fa-clock mr-3 "></i>Short
                      Program
                    </Link>
                  </div>
                </div>
                {/* Remaining Smooth Scroll Links */}
                <Link
                  href="/curriculum"
                  className={`nav-link ${
                    currentPath === "/curriculum" ? "active" : ""
                  }`}
                >
                  Curriculum
                </Link>

                <Link
                  href="/articles"
                  className={`nav-link ${
                    currentPath === "/articles" ? "active" : ""
                  }`}
                >
                  Articles
                </Link>

                <Link
                  href="/activities"
                  className={`nav-link ${
                    currentPath === "/activities" ? "active" : ""
                  }`}
                >
                  Activity
                </Link>
              </div>

              {/* CTA and Mobile Menu Button */}
              <div className="flex items-center space-x-4 ">
                {/* Replaced CTA with the reusable component */}
                <div className="hidden sm:block ">
                  <CtaButton
                    handleSmoothScroll={handleSmoothScroll}
                    className="cta-button inline-block"
                  >
                    {" "}
                     Admissions{" "}
                  </CtaButton>
                </div>

                {/* Replaced Hamburger with the reusable component */}
                <MobileMenuToggle
                  isMenuOpen={isMenuOpen}
                  openMobileMenu={openMobileMenu}
                />
              </div>
            </div>
          </div>
          {/* Scroll Progress Indicator */}
          <div
            className="scroll-indicator h-1 bg-gradient-to-r from-pink-500 to-purple-600 z-[5] transition-all duration-100"
            style={{ width: `${scrollProgress}%` }}
          ></div>
        </nav>
      </header>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 z-[60] mobile-menu-container transition-all duration-500 ease-out ${
          isMenuOpen || isMenuAnimating
            ? "opacity-100 visible"
            : "opacity-0 invisible pointer-events-none"
        }`}
        role="dialog"
        aria-modal="true"
      >
        {/* Overlay */}
        <div
          className={`absolute inset-0 bg-black/60 transition-all duration-500 ease-out ${
            isMenuOpen ? "opacity-100" : "opacity-0"
          }`}
          onClick={closeMobileMenu}
        ></div>

        {/* Menu Panel */}
        <div
          className={`mobile-menu-panel relative z-50 h-full w-4/5 max-w-sm ml-auto transition-all duration-700 ease-[cubic-bezier(0.25,0.46,0.45,0.94)] transform ${
            isMenuOpen
              ? "translate-x-0 opacity-100 scale-100"
              : "translate-x-full opacity-0 scale-95"
          } bg-gradient-to-b from-white/95 to-white/90 backdrop-blur-xl shadow-2xl border-l border-light`}
        >
          <div className="h-full flex flex-col">
            <div className="flex justify-between items-center p-6 border-b border-light">
              <h2 className="font-bold text-xl text-color-gray-dark">Menu</h2>
              <button
                onClick={closeMobileMenu}
                className="p-2 rounded-full text-color-gray-light hover:text-color-dark-pink hover:bg-pink-white transition-colors"
              >
                <i className="fas fa-times text-xl"></i>
              </button>
            </div>
            <div className="flex-grow p-4 space-y-2 overflow-y-auto">
              {/* Mobile Home Link */}
              <Link
                href="/" // CHANGED: Link to root path
                onClick={(e) => {
                  if (currentPath === "/") {
                    handleSmoothScroll(e, "/home"); // Smooth scroll if on home page
                  }
                  closeMobileMenu();
                }}
                // DYNAMIC ACTIVE CLASS FOR MOBILE
                className={`mobile-nav-item block px-4 py-3 rounded-xl text-base font-semibold ${
                  currentPath === "/"
                    ? "text-color-dark-pink bg-pink-white"
                    : "text-color-gray-dark hover:text-color-dark-pink"
                }`}
              >
                <i className="fas fa-home mr-3"></i>Home
              </Link>
              {/* Mobile About Us Link */}
              <Link
                href="/about-us" // Correct Next.js route
                onClick={(e) => {
                  if (currentPath === "/about-us") {
                    handleSmoothScroll(e, "/about-us"); // Smooth scroll if on home page
                  }
                  closeMobileMenu();
                }}
                // DYNAMIC ACTIVE CLASS FOR MOBILE
                className={`mobile-nav-item block px-4 py-3 rounded-xl text-base font-semibold ${
                  currentPath === "/about-us"
                    ? "text-color-dark-pink bg-pink-white"
                    : "text-color-gray-dark hover:text-color-dark-pink"
                }`}
              >
                <i className="fas fa-info-circle mr-3"></i>About Us
              </Link>
              <div>
                <button
                  onClick={toggleProgramMenu}
                  className={`mobile-nav-item w-full flex justify-between items-center px-4 py-3 rounded-xl text-base font-semibold text-color-gray-dark hover:text-color-dark-pink 
                    mobile-nav-item  ${
                      currentPath === "/daycare"
                      || currentPath === "/schooling"
                      || currentPath === "/parenting-program"
                      || currentPath === "/short-program"
                        ? "text-color-dark-pink bg-pink-white"
                        : "text-color-gray-dark hover:text-color-dark-pink"
                    }`}
                >
                  <span>
                    <i className="fas fa-graduation-cap mr-3"></i>Program
                  </span>
                  <i
                    className={`fas fa-chevron-down text-xs transition-transform duration-300 ${
                      isProgramMenuOpen ? "rotate-180" : ""
                    }`}
                  ></i>
                </button>
                <div
                  className={`${
                    isProgramMenuOpen ? "block" : "hidden"
                  } pl-8 mt-2 space-y-2`}
                >
                  {/* Program Sub-links (Use smooth scroll) */}
                  <Link
                    href="/daycare"
                    onClick={(e) => {
                      if (currentPath === "/daycare") {
                        handleSmoothScroll(e, "/daycare"); // Smooth scroll if on home page
                      }
                      closeMobileMenu();
                    }}
                    className={`mobile-nav-item block px-4 py-3 rounded-xl text-base font-semibold ${
                      currentPath === "/daycare"
                        ? "text-color-dark-pink bg-pink-white"
                        : "text-color-gray-dark hover:text-color-dark-pink"
                    }`}
                    // className="block px-4 py-2 rounded-xl text-sm font-medium text-color-gray-light  hover:text-color-dark-pink hover:bg-pink-white transition-colors"
                  >
                    <i className="fas fa-baby mr-3 text-color-dark-pink"></i>
                    Daycare
                  </Link>
                  <Link
                    href="/schooling"
                    onClick={(e) => {
                      if (currentPath === "/schooling") {
                        handleSmoothScroll(e, "/schooling"); // Smooth scroll if on home page
                      }
                      closeMobileMenu();
                    }}
                    className={`mobile-nav-item block px-4 py-3 rounded-xl text-base font-semibold ${
                      currentPath === "/schooling"
                        ? "text-color-dark-pink bg-pink-white"
                        : "text-color-gray-dark hover:text-color-dark-pink"
                    }`}
                  >
                    <i className="fas fa-book mr-3 bg-color-dark-purple"></i>
                    Schooling
                  </Link>
                  <Link
                    href="/parenting-program"
                    onClick={(e) => {
                      if (currentPath === "/parenting-program") {
                        handleSmoothScroll(e, "/parenting-program"); // Smooth scroll if on home page
                      }
                      closeMobileMenu();
                    }}
                    className={`mobile-nav-item block px-4 py-3 rounded-xl text-base font-semibold ${
                      currentPath === "/parenting-program"
                        ? "text-color-dark-pink bg-pink-white"
                        : "text-color-gray-dark hover:text-color-dark-pink"
                    }`}
                  >
                    <i className="fas fa-heart mr-3"></i>Parenting Program
                  </Link>
                  <Link
                    href="/short-program"
                    onClick={(e) => {
                      if (currentPath === "/short-program") {
                        handleSmoothScroll(e, "/short-program"); // Smooth scroll if on home page
                      }
                      closeMobileMenu();
                    }}
                    className={`mobile-nav-item block px-4 py-3 rounded-xl text-base font-semibold ${
                      currentPath === "/short-program"
                        ? "text-color-dark-pink bg-pink-white"
                        : "text-color-gray-dark hover:text-color-dark-pink"
                    }`}
                  >
                    <i className="fas fa-clock mr-3"></i>Short Program
                  </Link>
                </div>
              </div>
              {/* Remaining Mobile Smooth Scroll Links */}
              <Link
                href="/curriculum"
                onClick={(e) => {
                  if (currentPath === "/curriculum") {
                    handleSmoothScroll(e, "/curriculum"); // Smooth scroll if on home page
                  }
                  closeMobileMenu();
                }}
                // DYNAMIC ACTIVE CLASS FOR MOBILE
                className={`mobile-nav-item block px-4 py-3 rounded-xl text-base font-semibold ${
                  currentPath === "/curriculum"
                    ? "text-color-dark-pink bg-pink-white"
                    : "text-color-gray-dark hover:text-color-dark-pink"
                }`}
              >
                <i className="fas fa-list mr-3"></i>Curriculum
              </Link>

              <Link
                href="/articles"
                onClick={() => {
                  closeMobileMenu();
                }}
                className={`mobile-nav-item block px-4 py-3 rounded-xl text-base font-semibold ${
                  currentPath === "/articles"
                    ? "text-color-dark-pink bg-pink-white"
                    : "text-color-gray-dark hover:text-color-dark-pink"
                }`}
              >
                <i className="fas fa-newspaper mr-3"></i>Articles
              </Link>

              <Link
                href="/activities"
                onClick={() => {
                  closeMobileMenu();
                }}
                className={`mobile-nav-item block px-4 py-3 rounded-xl text-base font-semibold ${
                  currentPath === "/activities"
                    ? "text-color-dark-pink bg-pink-white"
                    : "text-color-gray-dark hover:text-color-dark-pink"
                }`}
              >
                <i className="fas fa-play mr-3"></i>Activity
              </Link>
            </div>
            <div className="p-6 border-t border-light">
              {/* Replaced CTA with the reusable component */}
              <CtaButton
                handleSmoothScroll={(e) => {
                  handleSmoothScroll(e, "#contact");
                  closeMobileMenu();
                }}
                className="w-full text-center block cta-button "
              >
                {" "}
                Admissions{" "}
              </CtaButton>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
