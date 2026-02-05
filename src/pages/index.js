import AnimatedText from "@/components/AnimatedText";
import { HireMe2 } from "@/components/HireMe2";
import Layout from "@/components/Layout";
import Head from "next/head";
import Link from "next/link";
import TransitionEffect from "@/components/TransitionEffect";
import ScrollToTop from "@/components/ScrollToTop";
import { motion } from "framer-motion";

const SkillTag = ({ children, delay = 0 }) => {
  return (
    <motion.span
      className="inline-block px-3 py-1.5 rounded-lg text-sm font-medium bg-light dark:bg-dark text-primary dark:text-primaryDark border-2 border-primary/20 dark:border-primaryDark/30 shadow-sm sm:px-2 sm:py-1 sm:text-xs"
      whileHover={{ scale: 1.05, y: -2 }}
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: delay * 0.08 }}
    >
      {children}
    </motion.span>
  );
};

const FeaturedProject = ({ title, description, tech, link, delay = 0, isExternal = false }) => {
  const linkProps = isExternal ? { target: "_blank", rel: "noopener noreferrer" } : {};

  return (
    <motion.div
      className="w-full rounded-2xl border-2 border-dark/10 dark:border-light/20 bg-light dark:bg-dark shadow-lg hover:border-primary/50 dark:hover:border-primaryDark/50 transition-all duration-300 overflow-hidden"
      whileHover={{ y: -5 }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: delay * 0.15 }}
    >
      {/* Top accent bar */}
      <div className="h-1 bg-gradient-to-r from-primary to-primary/60 dark:from-primaryDark dark:to-primaryDark/60"></div>

      {/* Project Content */}
      <div className="p-5 sm:p-4">
        <h3 className="text-lg font-bold mb-2 text-dark dark:text-light sm:text-base">{title}</h3>
        <p className="text-sm text-dark/70 dark:text-light/70 mb-3 leading-relaxed sm:text-xs sm:mb-2">{description}</p>
        <div className="flex flex-wrap gap-1.5 mb-3 sm:gap-1 sm:mb-2">
          {tech.map((t, index) => (
            <span key={index} className="text-xs px-2 py-0.5 bg-primary/10 rounded-full text-primary dark:text-primaryDark font-medium border border-primary/20 dark:border-primaryDark/30">
              {t}
            </span>
          ))}
        </div>
        <Link href={link} {...linkProps} className="text-sm font-medium text-primary dark:text-primaryDark hover:underline inline-flex items-center sm:text-xs">
          View Project <span className="ml-1">→</span>
        </Link>
      </div>
    </motion.div>
  );
};

export default function Home() {
  return (
    <>
      <Head>
        <title>Emmanuel Dotse Azilafu | Full-Stack Developer</title>
        <meta
          name="description"
          content="Full-stack developer specializing in Next.js, FastAPI, Django, and Rust. Experienced in IT infrastructure and cloud solutions."
        />
      </Head>

      <TransitionEffect />
      <article className="flex min-h-screen items-center text-dark dark:text-light sm:items-start relative overflow-hidden">
        {/* Clean Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-light via-light to-light/95 dark:from-dark dark:via-dark dark:to-dark/95 z-0"></div>
        <div className="absolute inset-0 bg-gradient-to-tl from-primary/5 via-transparent to-primary/10 dark:from-primaryDark/10 dark:via-transparent dark:to-primaryDark/5 z-0"></div>

        {/* Content */}
        <div className="relative z-10 w-full">
          <Layout className="!pt-8 md:!pt-6 sm:!pt-4">
            <div className="flex w-full items-center justify-center pt-4 pb-6 sm:pt-2 sm:pb-4">
              <div className="flex w-full flex-col items-center justify-center text-center max-w-4xl mx-auto">
                <AnimatedText
                  text="Emmanuel Dotse Azilafu"
                  className="!text-center !text-5xl xl:!text-4xl lg:!text-3xl md:!text-2xl sm:!text-xl"
                />

                <motion.h2
                  className="text-xl font-medium text-primary dark:text-primaryDark mt-3 mb-4 text-center md:text-lg sm:text-base"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  Full-Stack Developer & IT Infrastructure Specialist
                </motion.h2>

                <motion.p
                  className="text-dark/70 dark:text-light/70 max-w-2xl mx-auto text-center text-base leading-relaxed mb-6 md:text-sm sm:text-sm sm:mb-4"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                >
                  Crafting robust full-stack solutions with modern technologies while managing enterprise IT infrastructure and cloud services.
                </motion.p>

                {/* Tech Stack */}
                <motion.div
                  className="w-full mb-8 sm:mb-6"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.4 }}
                >
                  <h3 className="text-sm font-semibold uppercase tracking-wide text-dark/60 dark:text-light/60 mb-4 sm:text-xs sm:mb-3">
                    Tech Stack
                  </h3>
                  <div className="flex flex-wrap justify-center gap-2 sm:gap-1.5">
                    <SkillTag delay={1}>Next.js</SkillTag>
                    <SkillTag delay={2}>FastAPI</SkillTag>
                    <SkillTag delay={3}>Django</SkillTag>
                    <SkillTag delay={4}>Rust</SkillTag>
                    <SkillTag delay={5}>AWS</SkillTag>
                    <SkillTag delay={6}>GCP</SkillTag>
                  </div>
                </motion.div>

                {/* CTA Buttons */}
                <motion.div
                  className="flex items-center gap-4 justify-center flex-wrap sm:gap-3 sm:flex-col sm:w-full"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                >
                  <Link
                    href="/projects"
                    className="flex items-center rounded-xl bg-primary px-6 py-3 text-base font-semibold
                      text-light hover:bg-primary/90 shadow-lg hover:shadow-xl
                      dark:bg-primaryDark dark:hover:bg-primaryDark/90
                      md:px-5 md:py-2.5 md:text-sm sm:w-full sm:justify-center transition-all duration-300"
                  >
                    View Projects
                  </Link>
                  <Link
                    href="/about"
                    className="flex items-center rounded-xl border-2 border-primary px-6 py-3 text-base font-semibold
                      text-primary hover:bg-primary hover:text-light
                      dark:border-primaryDark dark:text-primaryDark dark:hover:bg-primaryDark dark:hover:text-light
                      md:px-5 md:py-2.5 md:text-sm sm:w-full sm:justify-center transition-all duration-300"
                  >
                    About Me
                  </Link>
                </motion.div>
              </div>
            </div>

            {/* Featured Projects Section */}
            <motion.div
              className="w-full mt-10 sm:mt-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              <h2 className="font-bold text-2xl mb-6 text-center text-dark dark:text-light sm:text-xl sm:mb-4">
                Featured Projects
              </h2>
              <div className="grid grid-cols-3 gap-6 lg:grid-cols-2 md:gap-4 sm:grid-cols-1">
                <FeaturedProject
                  title="SASEL Lab - McGill University"
                  description="Research platform for sustainable food systems, environmental nutrition tools, and AI-powered analytics."
                  tech={["Next.js", "FastAPI", "Django"]}
                  link="https://sasellab.com"
                  isExternal={true}
                  delay={1}
                />
                <FeaturedProject
                  title="PEA Protein Analysis System"
                  description="Advanced scientific computing platform for protein analysis with complex computational processing in Rust."
                  tech={["Rust", "Next.js", "FastAPI"]}
                  link="https://proteinprocess.io"
                  isExternal={true}
                  delay={2}
                />
                <FeaturedProject
                  title="Food Systems Analytics"
                  description="Comprehensive analytics platform for food systems research, sustainability metrics, and data visualization."
                  tech={["Python", "Django", "FastAPI"]}
                  link="https://foodsystemsanalytics.com/app/"
                  isExternal={true}
                  delay={3}
                />
              </div>
            </motion.div>

            <motion.div
              className="w-full mt-8 text-center pb-6 sm:mt-6 sm:pb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
            >
              <Link
                href="/projects"
                className="inline-flex items-center text-primary dark:text-primaryDark hover:underline text-base font-semibold sm:text-sm"
              >
                View All Projects <span className="ml-2">→</span>
              </Link>
            </motion.div>
          </Layout>
        </div>
        <HireMe2 />
        <ScrollToTop />
      </article>
    </>
  );
}

