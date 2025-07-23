import AnimatedText from "@/components/AnimatedText";
import { HireMe2 } from "@/components/HireMe2";
import Layout from "@/components/Layout";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import TransitionEffect from "@/components/TransitionEffect";
import ScrollToTop from "@/components/ScrollToTop";
import { motion } from "framer-motion";

const TechStack = ({ icon, label }) => {
  return (
    <motion.div 
      className="flex flex-col items-center justify-center p-2 m-2"
      whileHover={{ scale: 1.1 }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <span className="text-3xl mb-1">{icon}</span>
      <span className="text-sm text-center">{label}</span>
    </motion.div>
  );
};

const SkillTag = ({ children, delay = 0 }) => {
  return (
    <motion.span 
      className="inline-block px-3 py-1 rounded-full text-xs font-medium bg-primary/15 text-primary dark:bg-primaryDark/25 dark:text-light mr-1 mb-1 backdrop-blur-sm border border-primary/20 dark:border-primaryDark/30 sm:px-2 sm:py-1"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: delay * 0.1 }}
    >
      {children}
    </motion.span>
  );
};

const FeaturedProject = ({ title, description, tech, link, delay = 0 }) => {
  return (
    <motion.div 
      className="w-full p-4 rounded-xl border border-solid border-dark/10 dark:border-light/10 bg-light/40 dark:bg-dark/40 backdrop-blur-xl shadow-lg relative overflow-hidden sm:p-3"
      whileHover={{ y: -5 }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: delay * 0.2 }}
    >
      {/* Project Card Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-light/30 via-coffee-light/15 to-grey-lightest/30 dark:from-dark/30 dark:via-coffee-dark/10 dark:to-grey-darkest/30 z-0"></div>
      <div className="absolute inset-0 bg-gradient-to-tl from-transparent via-primary/4 to-transparent dark:from-transparent dark:via-primaryDark/4 dark:to-transparent z-0"></div>
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-grey-light/8 to-transparent dark:from-transparent dark:via-grey-dark/8 dark:to-transparent z-0"></div>
      
      {/* Project Content */}
      <div className="relative z-10">
        <h3 className="text-lg font-bold mb-2 text-dark dark:text-light sm:text-base">{title}</h3>
        <p className="text-xs mb-3 text-dark/90 dark:text-light/90 sm:text-xs">{description}</p>
        <div className="flex flex-wrap gap-1 mb-3">
          {tech.map((t, index) => (
            <span key={index} className="text-xs px-2 py-1 bg-primary/30 rounded-full text-primary dark:text-primaryDark font-medium backdrop-blur-sm border border-primary/20 dark:border-primaryDark/30 sm:text-xs">
              {t}
            </span>
          ))}
        </div>
        <Link href={link} className="text-primary dark:text-primaryDark hover:underline inline-flex items-center font-medium text-sm sm:text-xs">
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
        <title>Emmanuel Dotse Azilafu - Full-Stack Developer & IT Infrastructure Manager</title>
        <meta
          name="description"
          content="Full-stack developer specializing in Next.js, FastAPI, Django, and Rust. Experienced in IT infrastructure management and cloud solutions."
        />
      </Head>

      <TransitionEffect />
      <article className="flex min-h-screen items-center text-dark dark:text-light sm:items-start relative overflow-hidden">
        {/* Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-light via-coffee-light/40 to-grey-lightest dark:from-dark dark:via-coffee-dark/35 dark:to-grey-darkest z-0"></div>
        <div className="absolute inset-0 bg-gradient-to-tl from-transparent via-primary/12 to-transparent dark:from-transparent dark:via-primaryDark/12 dark:to-transparent z-0"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-grey-light/20 to-transparent dark:from-transparent dark:via-grey-dark/20 dark:to-transparent z-0"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-coffee-light/8 to-transparent dark:from-transparent dark:via-coffee-dark/8 dark:to-transparent z-0"></div>
        <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-coffee-light/3 to-transparent dark:from-transparent dark:via-coffee-dark/3 dark:to-transparent z-0"></div>
        
        {/* Content */}
        <div className="relative z-10 w-full">
          <Layout className="!pt-6 md:!pt-4 sm:!pt-2">
            <div className="flex w-full items-center justify-center pt-4 pb-6 sm:pt-2 sm:pb-3">
              <div className="flex w-full flex-col items-center justify-center text-center max-w-4xl mx-auto px-4 sm:px-3">
                <AnimatedText
                  text="Emmanuel Dotse Azilafu"
                  className="!text-center !text-5xl xl:!text-4xl lg:!text-3xl md:!text-2xl sm:!text-xl xs:!text-lg"
                />
                
                <motion.h2 
                  className="text-lg font-medium text-primary dark:text-primaryDark mt-3 mb-2 text-center md:text-base sm:text-sm xs:text-xs"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  Full-Stack Developer & IT Infrastructure Manager
                </motion.h2>

                <motion.p 
                  className="my-3 text-sm text-dark/90 dark:text-light/90 max-w-2xl mx-auto text-center font-medium md:text-sm sm:text-xs xs:text-xs leading-relaxed"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                >
                  Crafting robust full-stack solutions with modern technologies while managing enterprise IT infrastructure and cloud services.
                </motion.p>

                <div className="w-full mt-4 mb-6 sm:mt-3 sm:mb-4">
                  <motion.h3 
                    className="text-base font-semibold mb-2 text-center md:text-sm sm:text-xs xs:text-xs"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                  >
                    Tech Stack & Expertise:
                  </motion.h3>
                  <div className="flex flex-wrap justify-center gap-1 sm:gap-1">
                    <SkillTag delay={1}>Next.js</SkillTag>
                    <SkillTag delay={2}>FastAPI</SkillTag>
                    <SkillTag delay={3}>Django</SkillTag>
                    <SkillTag delay={4}>Rust</SkillTag>
                    <SkillTag delay={5}>AWS</SkillTag>
                    <SkillTag delay={6}>GCP</SkillTag>
                  </div>
                </div>

                <div className="mt-2 flex items-center gap-3 justify-center flex-wrap sm:gap-2 sm:flex-col sm:space-y-2 sm:w-full">
                  <Link
                    href="/projects"
                    className="flex items-center rounded-lg border-2 border-solid bg-primary p-2 px-4 text-base font-semibold
                      capitalize text-light hover:bg-transparent hover:text-primary 
                      dark:bg-primaryDark dark:text-light dark:hover:bg-transparent dark:hover:text-light
                      md:p-2 md:px-4 md:text-sm sm:text-xs sm:px-3 sm:py-2 sm:w-full sm:justify-center transition-all duration-300"
                  >
                    View Projects
                  </Link>
                  <Link
                    href="/about"
                    className="flex items-center rounded-lg border-2 border-primary p-2 px-4 text-base font-semibold
                      capitalize text-primary hover:bg-primary hover:text-light
                      dark:text-light dark:hover:bg-primaryDark
                      md:p-2 md:px-4 md:text-sm sm:text-xs sm:px-3 sm:py-2 sm:w-full sm:justify-center transition-all duration-300"
                  >
                    About Me
                  </Link>
                </div>
              </div>
            </div>

            {/* Featured Projects Section - Mobile Optimized */}
            <motion.div 
              className="w-full mt-8 sm:mt-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              <h2 className="font-bold text-xl mb-4 text-center sm:text-lg xs:text-base">Featured Projects</h2>
              <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-4 sm:gap-3 px-4 sm:px-2">
                <FeaturedProject 
                  title="PEA Protein Analysis"
                  description="Advanced protein analysis system with complex computational processing and modern web interface."
                  tech={["Next.js", "FastAPI", "Django", "Rust"]}
                  link="/projects/pea-protein-analysis"
                  delay={1}
                />
                <FeaturedProject 
                  title="Supply Chain Analytics"
                  description="Specialized system for economic, environmental, and quality analysis in supply chain management."
                  tech={["Next.js", "FastAPI", "Django"]}
                  link="/projects/fontaine-sante"
                  delay={2}
                />
                <FeaturedProject 
                  title="Research Data Tool"
                  description="Intelligent data collection and analysis platform with automated statistical processing."
                  tech={["Python", "Django", "ML"]}
                  link="/projects/research-tool"
                  delay={3}
                />
              </div>
            </motion.div>

            <motion.div 
              className="w-full mt-8 sm:mt-4 text-center pb-6 sm:pb-3"
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
