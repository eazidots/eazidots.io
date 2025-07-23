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
      className={`${className} relative group font-medium transition-colors duration-300 lg:text-light lg:dark:text-dark`}
    >
      {title}
      <span
        className={`
              inline-block h-[2px] bg-primary absolute left-0 -bottom-1 
              group-hover:w-full transition-[width] ease duration-300 dark:bg-primaryDark
              ${
                router.asPath === href ? "w-full" : " w-0"
              } lg:bg-primary lg:dark:bg-primaryDark
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
      className={`${className} relative group font-medium transition-colors duration-300 lg:text-light lg:dark:text-dark`}
      onClick={handleClick}
    >
      {title}
      <span
        className={`
              inline-block h-[2px] bg-primary absolute left-0 -bottom-1 
              group-hover:w-full transition-[width] ease duration-300 dark:bg-primaryDark
              ${
                router.asPath === href ? "w-full" : " w-0"
              } lg:bg-primary lg:dark:bg-primaryDark
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
      className={`sticky top-0 w-full flex items-center justify-between px-32 pt-8 pb-6 font-medium dark:text-light
    lg:px-16 z-50 md:px-12 sm:px-8 
    relative transition-all duration-300 ease-in-out
    ${isScrolled 
      ? 'backdrop-blur-xl bg-light/20 dark:bg-dark/20 border-b border-light/10 dark:border-dark/10' 
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
      <div className="flex items-center">
        <TextLogo />
      </div>

      {/* Mobile Menu Button */}
      <button
        type="button"
        className="flex-col items-center justify-center hidden lg:flex z-50"
        aria-controls="mobile-menu"
        aria-expanded={isOpen}
        onClick={handleClick}
      >
        <span className="sr-only">Open main menu</span>
        <span
          className={`bg-primary dark:bg-primaryDark block h-0.5 w-6 rounded-sm transition-all duration-300 ease-out ${
            isOpen ? "rotate-45 translate-y-1" : "-translate-y-0.5"
          }`}
        ></span>
        <span
          className={`bg-primary dark:bg-primaryDark block h-0.5 w-6 rounded-sm transition-all duration-300 ease-out ${
            isOpen ? "opacity-0" : "opacity-100"
          } my-0.5`}
        ></span>
        <span
          className={`bg-primary dark:bg-primaryDark block h-0.5 w-6 rounded-sm transition-all duration-300 ease-out ${
            isOpen ? "-rotate-45 -translate-y-1" : "translate-y-0.5"
          }`}
        ></span>
      </button>

      {/* Desktop Navigation - Centered */}
      <div className="flex items-center justify-center flex-1 lg:hidden">
        <nav className="flex items-center justify-center space-x-8">
          <CustomLink href="/" title="Home" />
          <CustomLink href="/about" title="About" />
          <CustomLink href="/projects" title="Projects" />
          <CustomLink href="/articles" title="Articles" />
          <CustomLink href="/contact" title="Contact" />
        </nav>
      </div>

      {/* Social Links & Theme Switcher - Right Side */}
      <div className="flex items-center justify-center space-x-4 lg:hidden">
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
          href="https://linkedin.com/in/emmanuel-dotse-azilafu"
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
      
      {/* Mobile Menu */}
      {isOpen ? (
        <motion.div
          className="min-w-[70vw] sm:min-w-[90vw] h-[75vh] flex justify-between items-center flex-col fixed top-1/2 left-1/2 -translate-x-1/2
      -translate-y-1/2
      py-32 bg-light/95 dark:bg-dark/95 rounded-2xl z-50 backdrop-blur-md border border-grey-light/20 dark:border-grey-dark/20 shadow-2xl
      "
          initial={{ scale: 0, x: "-50%", y: "-50%", opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
        >
          <nav className="flex items-center justify-center flex-col space-y-6">
            <CustomMobileLink
              toggle={handleClick}
              href="/"
              title="Home"
            />
            <CustomMobileLink
              toggle={handleClick}
              href="/about"
              title="About"
            />
            <CustomMobileLink
              toggle={handleClick}
              href="/projects"
              title="Projects"
            />
            <CustomMobileLink
              toggle={handleClick}
              href="/articles"
              title="Articles"
            />
            <CustomMobileLink
              toggle={handleClick}
              href="/contact"
              title="Contact"
            />
          </nav>
          <nav className="flex items-center justify-center space-x-4 mt-8">
            <motion.a
              target={"_blank"}
              className="w-8 h-8 flex items-center justify-center rounded-full bg-grey-light/20 dark:bg-grey-dark/20 hover:bg-primary/20 dark:hover:bg-primaryDark/20 transition-colors duration-300"
              href="https://github.com/eazidots"
              whileHover={{ y: -2, scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              aria-label="Checkout my Github profile"
            >
              <GithubIcon />
            </motion.a>

            <motion.a
              target={"_blank"}
              className="w-8 h-8 flex items-center justify-center rounded-full bg-grey-light/20 dark:bg-grey-dark/20 hover:bg-primary/20 dark:hover:bg-primaryDark/20 transition-colors duration-300"
              href="https://linkedin.com/in/emmanuel-dotse-azilafu"
              whileHover={{ y: -2, scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              aria-label="Checkout my LinkedIn profile"
            >
              <LinkedInIcon />
            </motion.a>

            <motion.a
              target={"_blank"}
              className="w-8 h-8 flex items-center justify-center rounded-full bg-grey-light/20 dark:bg-grey-dark/20 hover:bg-primary/20 dark:hover:bg-primaryDark/20 transition-colors duration-300"
              href="mailto:dotse@eazidots.com"
              whileHover={{ y: -2, scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              aria-label="Send me an email"
            >
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
              </svg>
            </motion.a>

            <button
              onClick={() => setMode(mode === "light" ? "dark" : "light")}
              className={`w-8 h-8 ease flex items-center justify-center rounded-full p-1 transition-all duration-300
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
          </nav>
        </motion.div>
              ) : null}
      </div>
    </header>
  );
};

export default Navbar;
