import Layout from "@/components/Layout";
import Head from "next/head";
import { useInView, useMotionValue, useSpring, motion } from "framer-motion";
import { useEffect, useRef } from "react";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import AnimatedText from "@/components/AnimatedText";
import TransitionEffect from "@/components/TransitionEffect";
import { HireMe2 } from "@/components/HireMe2";
import ScrollToTop from "@/components/ScrollToTop";

function AnimatedNumberFramerMotion({ value, text }) {
  const ref = useRef(null);
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, { duration: 3000 });
  const isInView = useInView(ref, { once: true });
  useEffect(() => {
    if (isInView) {
      motionValue.set(value);
    }
  }, [motionValue, value, isInView]);

  useEffect(
    () =>
      springValue.on("change", (latest) => {
        if (ref.current && latest.toFixed(0) <= value) {
          ref.current.textContent = latest.toFixed(0);
        }
      }),
    [springValue, value]
  );

  return (
    <div className="flex flex-col items-center justify-center">
      <span className="inline-block text-5xl font-bold md:text-4xl sm:text-3xl xs:text-2xl text-grey-dark dark:text-grey-light">
        <span ref={ref} />+
      </span>
      <h3 className="mb-2 text-base font-medium capitalize text-grey-dark/75 dark:text-grey-light/75 
        text-center md:text-sm sm:text-xs xs:text-xs">
        {text}
      </h3>
    </div>
  );
}

export default function About() {
  return (
    <>
      <Head>
        <title>About Emmanuel Dotse Azilafu - Tech Journey</title>
        <meta
          name="description"
          content="Journey of Emmanuel Dotse Azilafu from computer science student to full-stack developer and IT infrastructure manager."
        />
      </Head>

      <TransitionEffect />
      <main className="flex w-full flex-col items-center justify-center dark:text-light relative overflow-hidden">
        {/* Grey Theme Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-grey-lightest via-grey-light/40 to-grey-dark dark:from-grey-darkest dark:via-grey-dark/40 dark:to-grey-lightest z-0"></div>
        <div className="absolute inset-0 bg-gradient-to-tl from-transparent via-grey-light/15 to-transparent dark:from-transparent dark:via-grey-dark/15 dark:to-transparent z-0"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-grey-light/20 to-transparent dark:from-transparent dark:via-grey-dark/20 dark:to-transparent z-0"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-grey-light/8 to-transparent dark:from-transparent dark:via-grey-dark/8 dark:to-transparent z-0"></div>
        
        {/* About Content */}
        <div className="relative z-10 w-full max-w-4xl mx-auto flex flex-col items-center justify-center px-4 sm:px-3">
          <Layout className="pt-6 md:pt-4 sm:pt-2">
            <AnimatedText
              text="Bridging Technology & Innovation"
              className="mb-8 !text-3xl !leading-tight lg:!text-2xl sm:!text-xl xs:!text-lg sm:mb-4 text-center"
            />
            <div className="flex w-full flex-col items-center justify-center">
              <div className="flex w-full flex-col items-center justify-center text-center max-w-4xl">
                <motion.h2 
                  className="mb-4 text-lg font-bold uppercase text-grey-dark dark:text-grey-light sm:text-base"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  MY JOURNEY
                </motion.h2>
                <div className="font-medium space-y-4 mb-8 sm:space-y-3 sm:mb-6">
                  <motion.p 
                    className="text-grey-dark/90 dark:text-grey-light/90 text-sm sm:text-xs leading-relaxed"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                  >
                    My journey in technology began in the halls of KNUST, where I pursued Computer Science with a 
                    curiosity that would shape my career. Starting in technical support at the Faculty of Allied 
                    Health Science, I gained firsthand experience in maintaining critical systems in an academic 
                    environment. This foundation in IT infrastructure proved invaluable as I progressed through 
                    increasingly challenging roles in healthcare technology and enterprise systems.
                  </motion.p>
                  <motion.p 
                    className="text-grey-dark/90 dark:text-grey-light/90 text-sm sm:text-xs leading-relaxed"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                  >
                    My career evolution reflects my passion for bridging complex technical challenges with practical 
                    solutions. From managing critical healthcare systems at Ruma Fertility Hospital to optimizing 
                    enterprise infrastructure at Clean Team Ghana, each role has added new dimensions to my expertise. 
                    Now, at SASEL Programmers Lab with McGill University, I'm combining my infrastructure knowledge 
                    with advanced development skills, creating scientific computing solutions that push the boundaries 
                    of what's possible with modern technology.
                  </motion.p>
                </div>
                {/* Animated Numbers */}
                <motion.div 
                  className="grid grid-cols-1 sm:grid-cols-3 gap-6 w-full mb-8 sm:gap-4 sm:mb-6"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                >
                  <AnimatedNumberFramerMotion value={4} text="Years of Professional Experience" />
                  <AnimatedNumberFramerMotion value={15} text="Projects Completed" />
                  <AnimatedNumberFramerMotion value={3} text="Research Projects" />
                </motion.div>
                {/* Current Focus Section */}
                <motion.div 
                  className="w-full mb-8 sm:mb-6"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                >
                  <h2 className="font-bold text-xl mb-4 text-grey-dark dark:text-grey-light sm:text-lg">Current Focus</h2>
                  <div className="bg-light/40 dark:bg-dark/40 backdrop-blur-xl rounded-2xl p-4 sm:p-3 border border-grey-light/20 dark:border-grey-dark/20">
                    <p className="text-grey-dark/90 dark:text-grey-light/90 text-sm sm:text-xs leading-relaxed">
                      At SASEL Programmers Lab (McGill University), I'm focused on developing scientific computing solutions 
                      that bridge the gap between complex research requirements and user-friendly applications. Building on my 
                      experience in IT infrastructure and systems management, our projects combine high-performance computing 
                      using Rust with modern web technologies to create powerful tools for researchers and analysts. From 
                      protein analysis systems to supply chain optimization platforms, each project pushes the boundaries of 
                      what's possible in scientific software development.
                    </p>
                  </div>
                </motion.div>
                {/* Research Projects Section */}
                <motion.div 
                  className="w-full"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                >
                  <h2 className="font-bold text-xl mb-6 text-grey-dark dark:text-grey-light sm:text-lg">Research Projects at McGill University</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-4">
                    <div className="bg-light/40 dark:bg-dark/40 backdrop-blur-xl rounded-2xl p-4 sm:p-3 border border-grey-light/20 dark:border-grey-dark/20 mb-4 md:mb-0">
                      <h3 className="text-lg font-bold mb-3 text-grey-dark dark:text-grey-light sm:text-base">PEA Protein Analysis</h3>
                      <p className="text-grey-dark/90 dark:text-grey-light/90 mb-4 leading-relaxed text-sm sm:text-xs">
                        Advanced scientific computing system combining Rust's computational power with modern web technologies for protein analysis.
                        Features complex algorithms, real-time processing, and intuitive data visualization.
                      </p>
                      <div className="flex flex-wrap gap-1 mb-3">
                        <span className="text-xs px-2 py-1 bg-grey-light/30 rounded-full text-grey-dark dark:text-grey-light font-medium backdrop-blur-sm border border-grey-light/20 dark:border-grey-dark/30">Rust</span>
                        <span className="text-xs px-2 py-1 bg-grey-light/30 rounded-full text-grey-dark dark:text-grey-light font-medium backdrop-blur-sm border border-grey-light/20 dark:border-grey-dark/30">Next.js</span>
                        <span className="text-xs px-2 py-1 bg-grey-light/30 rounded-full text-grey-dark dark:text-grey-light font-medium backdrop-blur-sm border border-grey-light/20 dark:border-grey-dark/30">FastAPI</span>
                      </div>
                      <div className="text-xs text-grey-dark/80 dark:text-grey-light/80">
                        SASEL Lab Project • Starting May 2025
                      </div>
                    </div>
                    <div className="bg-light/40 dark:bg-dark/40 backdrop-blur-xl rounded-2xl p-4 sm:p-3 border border-grey-light/20 dark:border-grey-dark/20">
                      <h3 className="text-lg font-bold mb-3 text-grey-dark dark:text-grey-light sm:text-base">Supply Chain Analytics</h3>
                      <p className="text-grey-dark/90 dark:text-grey-light/90 mb-4 leading-relaxed text-sm sm:text-xs">
                        Research-focused platform for analyzing economic, environmental, and quality factors in supply chain operations.
                        Implements advanced analytics and interactive visualization for decision support.
                      </p>
                      <div className="flex flex-wrap gap-1 mb-3">
                        <span className="text-xs px-2 py-1 bg-grey-light/30 rounded-full text-grey-dark dark:text-grey-light font-medium backdrop-blur-sm border border-grey-light/20 dark:border-grey-dark/30">Next.js</span>
                        <span className="text-xs px-2 py-1 bg-grey-light/30 rounded-full text-grey-dark dark:text-grey-light font-medium backdrop-blur-sm border border-grey-light/20 dark:border-grey-dark/30">FastAPI</span>
                        <span className="text-xs px-2 py-1 bg-grey-light/30 rounded-full text-grey-dark dark:text-grey-light font-medium backdrop-blur-sm border border-grey-light/20 dark:border-grey-dark/30">Django</span>
                      </div>
                      <div className="text-xs text-grey-dark/80 dark:text-grey-light/80">
                        SASEL Lab Project • Starting August 2025
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </Layout>
        </div>

        {/* Skills and Experience Components - Full Width */}
        <div className="w-full relative z-10">
          <Skills />
          <Experience />
        </div>

        <HireMe2 />
        <ScrollToTop />
      </main>
    </>
  );
}
