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
import Link from "next/link";

function AnimatedNumber({ value, text }) {
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
    <div className="flex flex-col items-center justify-center p-4 bg-light dark:bg-dark rounded-xl border-2 border-dark/10 dark:border-light/20 shadow-md">
      <span className="inline-block text-4xl font-bold text-primary dark:text-primaryDark md:text-3xl sm:text-2xl">
        <span ref={ref} />+
      </span>
      <span className="text-sm font-medium text-dark/70 dark:text-light/70 text-center mt-1 md:text-xs">
        {text}
      </span>
    </div>
  );
}

export default function About() {
  return (
    <>
      <Head>
        <title>About | Emmanuel Dotse Azilafu</title>
        <meta
          name="description"
          content="Emmanuel Dotse Azilafu - Full-stack developer and IT infrastructure specialist. From KNUST to McGill University research projects."
        />
      </Head>

      <TransitionEffect />
      <main className="flex w-full flex-col items-center justify-center dark:text-light relative overflow-hidden">
        {/* Clean Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-light via-light to-light/95 dark:from-dark dark:via-dark dark:to-dark/95 z-0"></div>
        <div className="absolute inset-0 bg-gradient-to-tl from-primary/5 via-transparent to-primary/10 dark:from-primary/10 dark:via-transparent dark:to-primary/5 z-0"></div>

        {/* About Content */}
        <div className="relative z-10 w-full">
          <Layout className="pt-8 md:pt-6 sm:pt-4">
            <div className="max-w-4xl mx-auto">
              <AnimatedText
                text="Bridging Technology & Innovation"
                className="mb-6 !text-4xl !leading-tight lg:!text-3xl sm:!text-2xl xs:!text-xl text-center"
              />

              {/* Journey Section */}
              <motion.div
                className="text-center mb-10 sm:mb-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <h2 className="text-sm font-semibold uppercase tracking-wide text-primary dark:text-primaryDark mb-4">
                  My Journey
                </h2>
                <div className="space-y-4 text-dark/80 dark:text-light/80 text-base sm:text-sm leading-relaxed max-w-3xl mx-auto">
                  <p>
                    My journey in technology began at KNUST, where I pursued Computer Science with a
                    curiosity that would shape my career. Starting in technical support at the Faculty of Allied
                    Health Science, I gained firsthand experience maintaining critical systems in an academic
                    environment.
                  </p>
                  <p>
                    From managing healthcare systems at Ruma Fertility Hospital to optimizing
                    enterprise infrastructure at Clean Team Ghana, each role has expanded my expertise.
                    Now at SASEL Lab (McGill University), I combine infrastructure knowledge
                    with advanced development skills, creating scientific computing solutions that push
                    the boundaries of modern technology.
                  </p>
                </div>
              </motion.div>

              {/* Stats Grid */}
              <motion.div
                className="grid grid-cols-3 gap-4 mb-10 sm:grid-cols-1 sm:gap-3 sm:mb-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                <AnimatedNumber value={4} text="Years of Experience" />
                <AnimatedNumber value={15} text="Projects Completed" />
                <AnimatedNumber value={5} text="Live Platforms" />
              </motion.div>

              {/* Current Focus */}
              <motion.div
                className="mb-10 sm:mb-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <h2 className="text-xl font-bold mb-4 text-dark dark:text-light text-center sm:text-lg">
                  Current Focus
                </h2>
                <div className="bg-light dark:bg-dark rounded-2xl p-6 sm:p-4 border-2 border-primary/20 dark:border-primaryDark/20 shadow-lg">
                  <p className="text-dark/80 dark:text-light/80 text-base sm:text-sm leading-relaxed text-center">
                    At <span className="font-semibold text-primary dark:text-primaryDark">SASEL Lab (McGill University)</span>,
                    I develop scientific computing solutions that bridge complex research requirements with user-friendly applications.
                    Our projects combine high-performance computing using Rust with modern web technologies to create
                    powerful tools for researchers and analysts worldwide.
                  </p>
                  <div className="flex justify-center mt-4">
                    <Link
                      href="/projects"
                      className="text-sm font-medium text-primary dark:text-primaryDark hover:underline inline-flex items-center gap-1"
                    >
                      View My Projects <span>→</span>
                    </Link>
                  </div>
                </div>
              </motion.div>
            </div>
          </Layout>
        </div>

        {/* Skills and Experience Components */}
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

