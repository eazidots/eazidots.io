import AnimatedText from "@/components/AnimatedText";
import Layout from "@/components/Layout";
import TransitionEffect from "@/components/TransitionEffect";
import Head from "next/head";
import Link from "next/link";
import React from "react";

const NotFound = () => {
  return (
    <>
      <Head>
        <title>Emmanuel Dotse Azilafu | 404 Page Not Found</title>
        <meta name="description" content="Page not found - Return to Emmanuel Dotse Azilafu's portfolio" />
      </Head>
      <TransitionEffect />
      <main className="h-[100vh] w-full dark:text-light relative overflow-hidden px-4 sm:px-2">
        {/* 404 Page Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-coffee-lightest via-coffee-light/40 to-coffee-dark dark:from-coffee-darkest dark:via-coffee-dark/35 dark:to-coffee-lightest z-0"></div>
        <div className="absolute inset-0 bg-gradient-to-tl from-transparent via-coffee-light/15 to-transparent dark:from-transparent dark:via-coffee-dark/15 dark:to-transparent z-0"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-coffee-light/20 to-transparent dark:from-transparent dark:via-coffee-dark/20 dark:to-transparent z-0"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-coffee-light/8 to-transparent dark:from-transparent dark:via-coffee-dark/8 dark:to-transparent z-0"></div>
        
        {/* Content */}
        <div className="relative z-10 w-full h-full flex flex-col items-center justify-center px-4 sm:px-2">
          <Layout className="relative !bg-transparent !pt-10 sm:!pt-6 flex flex-col items-center justify-center h-full">
            <div className="bg-light/40 dark:bg-dark/40 backdrop-blur-xl rounded-2xl p-8 sm:p-4 border border-coffee-light/20 dark:border-coffee-dark/20 shadow-lg relative overflow-hidden text-center w-full max-w-lg mx-auto">
              {/* 404 Card Gradient Background */}
              <div className="absolute inset-0 bg-gradient-to-br from-light/30 via-coffee-light/15 to-coffee-dark/30 dark:from-dark/30 dark:via-coffee-dark/10 dark:to-coffee-light/30 z-0"></div>
              <div className="absolute inset-0 bg-gradient-to-tl from-transparent via-coffee-light/4 to-transparent dark:from-transparent dark:via-coffee-dark/4 dark:to-transparent z-0"></div>
              {/* 404 Content */}
              <div className="relative z-10">
                <AnimatedText text="404" className="!text-7xl sm:!text-4xl !text-coffee-dark dark:!text-coffee-light mb-4" />
                <AnimatedText text="Page Not Found." className="!text-2xl sm:!text-lg lg:!text-xl md:!text-lg !text-dark dark:!text-light mb-8" />
                <p className="text-dark/80 dark:text-light/80 text-base sm:text-sm mb-8 max-w-md mx-auto leading-relaxed">
                  The page you're looking for doesn't exist. Let's get you back to exploring my work.
                </p>
                <Link
                  href="/"
                  className="inline-flex items-center rounded-lg border-2 border-solid bg-coffee-light/50 dark:bg-coffee-dark/50 backdrop-blur-xl px-6 py-3 sm:px-4 sm:py-2
                  font-semibold text-dark dark:text-light hover:border-coffee-dark dark:hover:border-coffee-light hover:bg-coffee-dark/20 dark:hover:bg-coffee-light/20 
                  border-coffee-dark/20 dark:border-coffee-light/20 shadow-lg relative overflow-hidden
                  transition-all duration-300 text-base sm:text-sm"
                >
                  {/* Button Gradient Background */}
                  <div className="absolute inset-0 bg-gradient-to-br from-light/40 via-coffee-light/10 to-transparent dark:from-dark/40 dark:via-coffee-dark/10 dark:to-transparent z-0"></div>
                  <span className="relative z-10">← Return Home</span>
                </Link>
              </div>
            </div>
          </Layout>
        </div>
      </main>
    </>
  );
};

export default NotFound;
