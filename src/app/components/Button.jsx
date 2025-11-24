
import React from "react";

/**
 * A reusable Call-to-Action button that uses smooth scrolling.
 * The button text is passed as 'children'.
 *
 * @param {function} handleSmoothScroll - Function for navigation.
 * @param {string} className - Optional external classes to merge.
 * @param {React.Node} children - The text/content inside the button (e.g., "Admissions").
 */
const CtaButton = ({ handleSmoothScroll, className = "", children }) => {
  return (
    <a
      href="#contact"
      onClick={(e) => handleSmoothScroll(e, "#contact")}
      className={`
        text-white font-bold rounded-full
        bg-gradient-to-r from-pink-500 to-purple-600
        hover:shadow-lg hover:-translate-y-1 transition-all duration-300
        px-6 py-3 text-base
        sm:px-6 sm:py-3 sm:text-sm
        ${className}
      `}
    >
      {children}
    </a>
  );
};

export default CtaButton;