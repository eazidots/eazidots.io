import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Show button when page is scrolled down
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      {isVisible && (
        <motion.div
          className="fixed left-4 bottom-4 flex flex-col items-center justify-center 
          lg:left-8 lg:bottom-4 md:left-4 md:bottom-4 sm:left-4 sm:bottom-4
          overflow-visible z-[60]"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.5 }}
          transition={{ duration: 0.3 }}
        >
          <div className="w-full h-full flex items-center justify-center relative">
            {/* Circular rotating background */}
            <div className="absolute animate-spin-slow duration-200 rounded-full border-2 border-dashed border-primary dark:border-primaryDark
            w-[120px] h-[120px] lg:w-[120px] lg:h-[120px] md:w-[100px] md:h-[100px] sm:w-[80px] sm:h-[80px]
            opacity-70"></div>

            <button
              onClick={scrollToTop}
              className="flex items-center justify-center absolute
                bg-primary rounded-full text-light font-semibold 
                hover:bg-light hover:border-primary hover:text-primary border-2 border-transparent
                hover:border-primary transition-all duration-300
                dark:bg-primaryDark dark:text-light dark:hover:bg-dark
                dark:hover:text-light dark:hover:border-light
                w-16 h-16 text-[11px] lg:w-16 lg:h-16 lg:text-[11px] 
                md:w-14 md:h-14 md:text-[10px] sm:w-12 sm:h-12 sm:text-[8px]
                shadow-lg hover:shadow-xl z-10"
              aria-label="Scroll to top"
            >
              <svg 
                className="w-5 h-5 lg:w-5 lg:h-5 md:w-4 md:h-4 sm:w-3 sm:h-3" 
                fill="currentColor" 
                viewBox="0 0 20 20"
              >
                <path 
                  fillRule="evenodd" 
                  d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z" 
                  clipRule="evenodd" 
                />
              </svg>
            </button>
          </div>
        </motion.div>
      )}
    </>
  );
};

export default ScrollToTop; 