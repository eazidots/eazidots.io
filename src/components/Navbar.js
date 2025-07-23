import Link from "next/link";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import {
  MediumIcon,
  DevIcon,
  GithubIcon,
  LinkedInIcon,
  MoonIcon,
  SunIcon,
} from "./Icons";
import { motion } from "framer-motion";
import { useThemeSwitch } from "./Hooks/useThemeSwitch";

const CustomLink = ({ href, title, className = "" }) => {
  const router = useRouter();

  return (
    <Link
      href={href}
      className={`${className} relative group font-medium transition-colors duration-300`}
    >
      {title}
      <span
        className={`
              inline-block h-[2px] bg-primary absolute left-0 -bottom-1 
              group-hover:w-full transition-[width] ease duration-300 dark:bg-primaryDark
              ${
                router.asPath === href ? "w-full" : " w-0"
              }
              `}
      >
        &nbsp;
      </span>
    </Link>
  );
};

const CustomMobileLink = ({ href, title, className = "", toggle }) => {
  const router = useRouter();

  const handleClick = () => {
    toggle();
    router.push(href);
  };

  return (
    <button
      className={`${className} relative group font-medium transition-colors duration-300`}
      onClick={handleClick}
    >
      {title}
      <span
        className={`
              inline-block h-[2px] bg-primary absolute left-0 -bottom-1 
              group-hover:w-full transition-[width] ease duration-300 dark:bg-primaryDark
              ${
                router.asPath === href ? "w-full" : " w-0"
              }
              `}
      >
        &nbsp;
      </span>
    </button>
  );
};

const TextLogo = () => {
  return (
    <Link href="/" className="flex items-center">
      <motion.div
        className="text-2xl font-bold text-primary dark:text-primaryDark"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <span className="text-3xl">e</span>
        <span className="text-2xl">azidots</span>
        <span className="text-lg text-grey-dark dark:text-grey-light">.com</span>
      </motion.div>
    </Link>
  );
};

const Navbar = () => {
  const [mode, setMode] = useThemeSwitch();
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      document.body.style.position = 'fixed';
      document.body.style.top = `-${window.scrollY}px`;
      document.body.style.width = '100%';
    } else {
      const scrollY = document.body.style.top;
      document.body.style.overflow = '';
      document.body.style.position = '';
      document.body.style.top = '';
      document.body.style.width = '';
      if (scrollY) {
        window.scrollTo(0, parseInt(scrollY || '0') * -1);
      }
    }

    // Cleanup on unmount
    return () => {
      document.body.style.overflow = '';
      document.body.style.position = '';
      document.body.style.top = '';
      document.body.style.width = '';
    };
  }, [isOpen]);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 w-full flex items-center justify-between px-6 sm:px-4 pt-6 pb-4 font-medium dark:text-light
    lg:px-10 z-50 md:px-6 sm:px-2 
    relative transition-all duration-300 ease-in-out
    ${isScrolled 
      ? 'backdrop-blur-xl bg-light/80 dark:bg-dark/80 border-b border-light/20 dark:border-dark/20 shadow-sm' 
      : 'bg-transparent'
    }
    `}
    >
      {/* Liquid Glass Background on Scroll */}
      {isScrolled && (
        <div className="absolute inset-0 bg-gradient-to-br from-light/30 via-grey-light/15 to-transparent dark:from-dark/30 dark:via-grey-dark/15 dark:to-transparent"></div>
      )}
      
      {/* Navbar Content */}
      <div className="relative z-10 w-full flex items-center justify-between">
        {/* Logo - Left Side */}
        <div className="flex items-center min-w-[100px]">
          <TextLogo />
        </div>

        {/* Mobile Menu Button - visible ONLY on screens smaller than lg (< 1024px) */}
        <button
          type="button"
          className="flex flex-col items-center justify-center lg:hidden z-50 ml-2 sm:ml-0"
          aria-controls="mobile-menu"
          aria-expanded={isOpen}
          onClick={handleClick}
        >
          <span className="sr-only">Open main menu</span>
          <span
            className={`bg-primary dark:bg-primaryDark block h-0.5 w-7 sm:w-6 rounded-sm transition-all duration-300 ease-out ${
              isOpen ? "rotate-45 translate-y-1" : "-translate-y-0.5"
            }`}
          ></span>
          <span
            className={`bg-primary dark:bg-primaryDark block h-0.5 w-7 sm:w-6 rounded-sm transition-all duration-300 ease-out ${
              isOpen ? "opacity-0" : "opacity-100"
            } my-0.5`}
          ></span>
          <span
            className={`bg-primary dark:bg-primaryDark block h-0.5 w-7 sm:w-6 rounded-sm transition-all duration-300 ease-out ${
              isOpen ? "-rotate-45 -translate-y-1" : "translate-y-0.5"
            }`}
          ></span>
        </button>

        {/* Desktop Navigation - visible ONLY on lg screens and up (>= 1024px) */}
        <div className="hidden lg:flex items-center justify-center flex-1">
          <nav className="flex items-center justify-center space-x-6">
            <CustomLink href="/" title="Home" />
            <CustomLink href="/about" title="About" />
            <CustomLink href="/projects" title="Projects" />
            <CustomLink href="/articles" title="Articles" />
            <CustomLink href="/contact" title="Contact" />
          </nav>
        </div>

        {/* Desktop Social Links & Theme Switcher - visible ONLY on lg screens and up (>= 1024px) */}
        <div className="hidden lg:flex items-center justify-center space-x-3">
          <motion.a
            target={"_blank"}
            className="w-6 h-6 flex items-center justify-center rounded-full bg-grey-light/20 dark:bg-grey-dark/20 hover:bg-primary/20 dark:hover:bg-primaryDark/20 transition-colors duration-300"
            href="https://github.com/eazidots"
            whileHover={{ y: -2, scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            aria-label="Checkout my GitHub profile"
          >
            <GithubIcon />
          </motion.a>

          <motion.a
            target={"_blank"}
            className="w-6 h-6 flex items-center justify-center rounded-full bg-grey-light/20 dark:bg-grey-dark/20 hover:bg-primary/20 dark:hover:bg-primaryDark/20 transition-colors duration-300"
            href="https://linkedin.com/in/eazidots"
            whileHover={{ y: -2, scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            aria-label="Checkout my LinkedIn profile"
          >
            <LinkedInIcon />
          </motion.a>

          <motion.a
            target={"_blank"}
            className="w-6 h-6 flex items-center justify-center rounded-full bg-grey-light/20 dark:bg-grey-dark/20 hover:bg-primary/20 dark:hover:bg-primaryDark/20 transition-colors duration-300"
            href="mailto:dotse@eazidots.com"
            whileHover={{ y: -2, scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            aria-label="Send me an email"
          >
            <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
              <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
            </svg>
          </motion.a>

          <button
            onClick={() => setMode(mode === "light" ? "dark" : "light")}
            className={`w-6 h-6 ease flex items-center justify-center rounded-full p-1 transition-all duration-300
            ${mode === "light" ? "bg-primary text-light" : "bg-primaryDark text-light"}
            hover:scale-110
            `}
            aria-label="theme-switcher"
          >
            {mode === "light" ? (
              <SunIcon className={"fill-light"} />
            ) : (
              <MoonIcon className={"fill-light"} />
            )}
          </button>
        </div>

        {/* Mobile Menu Overlay - visible ONLY on screens smaller than lg when isOpen is true */}
        {isOpen && (
          <motion.div
            className="fixed inset-0 z-[60] flex flex-col items-center justify-center bg-light/98 dark:bg-dark/98 backdrop-blur-xl p-6 sm:p-4 lg:hidden"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.2 }}
          >
            <nav className="flex flex-col items-center space-y-8 text-2xl sm:text-xl">
              <CustomMobileLink toggle={handleClick} href="/" title="Home" />
              <CustomMobileLink toggle={handleClick} href="/about" title="About" />
              <CustomMobileLink toggle={handleClick} href="/projects" title="Projects" />
              <CustomMobileLink toggle={handleClick} href="/articles" title="Articles" />
              <CustomMobileLink toggle={handleClick} href="/contact" title="Contact" />
            </nav>
            
            <div className="flex items-center justify-center space-x-6 mt-12">
              <motion.a
                target={"_blank"}
                className="w-10 h-10 flex items-center justify-center rounded-full bg-grey-light/20 dark:bg-grey-dark/20 hover:bg-primary/20 dark:hover:bg-primaryDark/20 transition-colors duration-300"
                href="https://github.com/eazidots"
                whileHover={{ y: -2, scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                aria-label="Checkout my Github profile"
              >
                <GithubIcon />
              </motion.a>

              <motion.a
                target={"_blank"}
                className="w-10 h-10 flex items-center justify-center rounded-full bg-grey-light/20 dark:bg-grey-dark/20 hover:bg-primary/20 dark:hover:bg-primaryDark/20 transition-colors duration-300"
                href="https://linkedin.com/in/emmanuel-dotse-azilafu"
                whileHover={{ y: -2, scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                aria-label="Checkout my LinkedIn profile"
              >
                <LinkedInIcon />
              </motion.a>

              <motion.a
                target={"_blank"}
                className="w-10 h-10 flex items-center justify-center rounded-full bg-grey-light/20 dark:bg-grey-dark/20 hover:bg-primary/20 dark:hover:bg-primaryDark/20 transition-colors duration-300"
                href="mailto:dotse@eazidots.com"
                whileHover={{ y: -2, scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                aria-label="Send me an email"
              >
                <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                  <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                </svg>
              </motion.a>

              <button
                onClick={() => setMode(mode === "light" ? "dark" : "light")}
                className={`w-10 h-10 ease flex items-center justify-center rounded-full p-1 transition-all duration-300
            ${mode === "light" ? "bg-primary text-light" : "bg-primaryDark text-light"}
            hover:scale-110
            `}
                aria-label="theme-switcher"
              >
                {mode === "light" ? (
                  <SunIcon className={"fill-light"} />
                ) : (
                  <MoonIcon className={"fill-light"} />
                )}
              </button>
            </div>
          </motion.div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
