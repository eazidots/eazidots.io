import Link from "next/link";
import React from "react";
import Layout from "./Layout";

const Footer = () => {
  return (
    <footer
      className="w-full border-t border-solid border-grey-light/10 dark:border-grey-dark/10
    font-base text-lg dark:text-light sm:text-base relative overflow-hidden
    bg-light/40 dark:bg-dark/40 backdrop-blur-xl
    "
    >
      {/* Footer Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-light/30 via-coffee-light/15 to-grey-lightest/30 dark:from-dark/30 dark:via-coffee-dark/10 dark:to-grey-darkest/30 z-0"></div>
      <div className="absolute inset-0 bg-gradient-to-tl from-transparent via-primary/4 to-transparent dark:from-transparent dark:via-primaryDark/4 dark:to-transparent z-0"></div>
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-grey-light/8 to-transparent dark:from-transparent dark:via-grey-dark/8 dark:to-transparent z-0"></div>
      
      {/* Footer Content */}
      <div className="relative z-10">
        <Layout className="py-6 flex items-center justify-center lg:flex-col lg:py-4 sm:py-3">
          <span className="text-dark/80 dark:text-light/80 sm:text-sm">&copy; {new Date().getFullYear()} Emmanuel Dotse Azilafu</span>

          <div className="flex items-center lg:py-2 ml-4 lg:ml-0 sm:mt-2 sm:ml-0">
            <span className="text-dark/60 dark:text-light/60 sm:text-sm">Developed by</span>
            <Link
              href="https://eazidots.com"
              className="underline underline-offset-2 text-primary dark:text-primaryDark hover:text-primary/80 dark:hover:text-primaryDark/80 transition-colors ml-1 sm:text-sm"
            >
              eazidots
            </Link>
          </div>
        </Layout>
      </div>
    </footer>
  );
};

export default Footer;
