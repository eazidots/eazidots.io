import AnimatedText from "@/components/AnimatedText";
import { GithubIcon } from "@/components/Icons";
import Layout from "@/components/Layout";
import Head from "next/head";
import Link from "next/link";
import { useRef } from "react";
import { motion, useMotionValue } from "framer-motion";
import TransitionEffect from "@/components/TransitionEffect";
import { HireMe2 } from "@/components/HireMe2";
import ScrollToTop from "@/components/ScrollToTop";

const FeaturedProject = ({
  type,
  title,
  summary,
  link,
  github,
  tools,
  status,
  isExternal = false,
}) => {
  const linkProps = isExternal ? { target: "_blank", rel: "noopener noreferrer" } : {};

  return (
    <motion.article
      className="relative w-full rounded-2xl border-2 border-solid border-primary/30 
        bg-light dark:bg-dark p-5 sm:p-4 shadow-xl overflow-hidden
        hover:border-primary/60 transition-all duration-300"
      whileHover={{ y: -5 }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Subtle accent gradient */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary via-primaryDark to-primary"></div>

      {/* Project Content */}
      <div className="relative z-10">
        <span className="text-sm font-semibold text-primary uppercase tracking-wide">
          {type}
        </span>
        <div className="flex flex-wrap gap-2 my-3 sm:my-2">
          {tools.split('|').map((tool, index) => (
            <span key={index} className="text-xs px-3 py-1 bg-primary/10 dark:bg-primary/20 rounded-full text-dark dark:text-light font-medium border border-primary/30">
              {tool.trim()}
            </span>
          ))}
        </div>
        <Link href={link} {...linkProps} className="group">
          <h2 className="my-2 w-full text-left text-2xl font-bold lg:text-xl sm:text-lg text-dark dark:text-light group-hover:text-primary transition-colors">
            {title}
          </h2>
        </Link>
        <p className="my-3 font-medium text-dark/80 dark:text-light/80 text-sm sm:text-xs leading-relaxed">
          {summary}
        </p>
        <div className="mt-4 flex items-center justify-between w-full sm:flex-row sm:items-center sm:gap-2">
          <div className="flex items-center">
            {github && (
              <Link
                href={github}
                target="_blank"
                className="w-8 mr-4 sm:w-6 sm:mr-3 text-dark dark:text-light hover:text-primary transition-colors"
                aria-label="github link"
              >
                <GithubIcon />
              </Link>
            )}
            <Link
              href={link}
              {...linkProps}
              className="rounded-lg bg-primary hover:bg-primaryDark text-light p-2.5 px-5 text-sm font-semibold
                capitalize transition-all duration-300 shadow-md hover:shadow-lg
                md:px-4 md:text-xs sm:text-xs sm:px-3 sm:py-2"
              aria-label="Project link"
            >
              View Project
            </Link>
          </div>
          <span className="text-dark/70 dark:text-light/70 font-medium text-sm sm:text-xs whitespace-nowrap bg-dark/5 dark:bg-light/10 px-3 py-1 rounded-full">
            {status}
          </span>
        </div>
      </div>
    </motion.article>
  );
};

const Project = ({ title, type, link, github, tools, status, isExternal = false }) => {
  const linkProps = isExternal ? { target: "_blank", rel: "noopener noreferrer" } : {};

  return (
    <motion.article
      className="relative w-full flex flex-col items-center justify-center rounded-2xl 
        border-2 border-solid border-dark/10 dark:border-light/20 bg-light dark:bg-dark p-4 sm:p-3 shadow-lg overflow-hidden
        hover:border-primary/50 transition-all duration-300"
      whileHover={{ y: -5 }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Project Content */}
      <div className="relative z-10 w-full">
        <div className="flex w-full flex-col items-start justify-between">
          <span className="text-sm font-semibold text-primary uppercase tracking-wide">
            {type}
          </span>
          <div className="flex flex-wrap gap-2 my-3 sm:my-2">
            {tools.split('|').map((tool, index) => (
              <span key={index} className="text-xs px-3 py-1 bg-primary/10 dark:bg-primary/20 rounded-full text-dark dark:text-light font-medium border border-primary/30">
                {tool.trim()}
              </span>
            ))}
          </div>
          <Link href={link} {...linkProps} className="group">
            <h2 className="my-2 w-full text-left text-xl font-bold lg:text-lg sm:text-base text-dark dark:text-light group-hover:text-primary transition-colors">
              {title}
            </h2>
          </Link>
          <div className="flex w-full items-center justify-between mt-2 sm:flex-row sm:items-center sm:gap-2">
            <div className="flex items-center">
              {github && (
                <Link
                  href={github}
                  target="_blank"
                  className="w-6 mr-3 sm:w-5 sm:mr-2 text-dark dark:text-light hover:text-primary transition-colors"
                  aria-label="github link"
                >
                  <GithubIcon />
                </Link>
              )}
              <Link
                href={link}
                {...linkProps}
                className="rounded-lg bg-primary hover:bg-primaryDark text-light px-4 py-2 text-sm font-semibold
                  capitalize transition-all duration-300 shadow-md hover:shadow-lg
                  md:px-3 md:text-xs sm:text-xs sm:px-2.5 sm:py-1.5"
                aria-label={title}
              >
                View Project
              </Link>
            </div>
            <span className="text-dark/70 dark:text-light/70 font-medium text-sm sm:text-xs whitespace-nowrap bg-dark/5 dark:bg-light/10 px-3 py-1 rounded-full">
              {status}
            </span>
          </div>
        </div>
      </div>
    </motion.article>
  );
};

export default function Projects() {
  return (
    <>
      <Head>
        <title>Projects | Emmanuel Dotse Azilafu</title>
        <meta
          name="description"
          content="Showcase of scientific computing, automation, and infrastructure projects by Emmanuel Dotse Azilafu"
        />
      </Head>

      <TransitionEffect />
      <main className="mb-16 flex w-full flex-col items-center justify-center dark:text-light relative overflow-hidden">
        {/* Clean Light Theme Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-light via-light to-light/95 dark:from-dark dark:via-dark dark:to-dark/95 z-0"></div>
        <div className="absolute inset-0 bg-gradient-to-tl from-primary/5 via-transparent to-primary/10 dark:from-primary/10 dark:via-transparent dark:to-primary/5 z-0"></div>

        {/* Content */}
        <div className="relative z-10 w-full">
          <Layout className="pt-8 md:pt-6 sm:pt-4">
            <div className="flex w-full items-center justify-center">
              <div className="flex w-full flex-col items-center justify-center max-w-6xl mx-auto">
                <AnimatedText
                  text="Innovation Through Code"
                  className="mb-4 !text-5xl !leading-tight lg:!text-4xl sm:mb-3 sm:!text-3xl xs:!text-2xl text-center text-dark dark:text-light"
                />
                <p className="text-dark/70 dark:text-light/70 text-center mb-10 text-lg sm:text-base sm:mb-6 max-w-2xl">
                  Scientific Computing & Research Projects
                </p>

                {/* Live Projects Section */}
                <motion.div
                  className="w-full mb-10 sm:mb-6"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <h2 className="font-bold text-2xl mb-6 w-full text-center text-dark dark:text-light lg:text-xl sm:text-lg sm:mb-4 flex items-center justify-center gap-3">
                    <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                    Live Projects
                  </h2>
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-4">
                    <FeaturedProject
                      type="Research Platform"
                      tools="Next.js | FastAPI | Django"
                      title="SASEL Lab - McGill University"
                      summary="Sustainable Agrifood Systems Engineering Lab at McGill University. Research platform featuring sustainable food systems, environmental nutrition tools (EcoDish365), protein analysis (ProteinProcess), and AI-powered food vulnerability index (FSFVI)."
                      link="https://sasellab.com"
                      isExternal={true}
                      status="Live"
                    />
                    <FeaturedProject
                      type="Corporate Website"
                      tools="Next.js | WordPress"
                      title="Clean Team Toilets"
                      summary="Corporate website for Clean Team Ghana, a social enterprise providing in-home toilet and waste collection services to urban households."
                      link="https://cleanteamtoilets.com"
                      isExternal={true}
                      status="Live"
                    />
                    <FeaturedProject
                      type="Travel & Tourism"
                      tools="Next.js | WordPress"
                      title="Incentive Travel Ghana"
                      summary="Travel and tourism platform showcasing Ghana's destinations, offering customized travel packages and incentive travel experiences."
                      link="https://incentivetravelgh.com"
                      isExternal={true}
                      status="Live"
                    />
                    <FeaturedProject
                      type="Enterprise Systems"
                      tools="Python | Django | GCP"
                      title="Staff HRM Portal"
                      summary="Comprehensive HR Management System deployed on Google Cloud Platform, featuring secure user management, automated workflows, and enterprise integrations."
                      link="https://staff.cleanteamtoilets.com"
                      isExternal={true}
                      status="Live"
                    />
                  </div>
                </motion.div>

                {/* Scientific Computing Projects Section */}
                <motion.div
                  className="w-full mb-10 sm:mb-6"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                >
                  <h2 className="font-bold text-2xl mb-6 w-full text-center text-dark dark:text-light lg:text-xl sm:text-lg sm:mb-4">
                    Scientific Computing
                  </h2>
                  <div>
                    <FeaturedProject
                      type="Research & Development"
                      tools="Rust | Next.js | FastAPI | Django"
                      title="PEA Protein Analysis System"
                      summary="Advanced scientific computing platform for protein analysis, featuring complex computational processing in Rust, modern web interface with Next.js, and robust data management with Django."
                      link="https://proteinprocess.io"
                      isExternal={true}
                      github="https://github.com/yourusername/pea-analysis"
                      status="Live"
                    />
                  </div>
                </motion.div>

                {/* Data Analytics Projects */}
                <motion.div
                  className="w-full mb-10 sm:mb-6"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  <h2 className="font-bold text-2xl mb-6 w-full text-center text-dark dark:text-light lg:text-xl sm:text-lg sm:mb-4">
                    Upcoming Projects
                  </h2>
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-4">
                    <Project
                      type="Data Analytics"
                      tools="Next.js | FastAPI | Django"
                      title="Fontaine Santé Supply Chain"
                      link="https://github.com/Dish365/fontaine_sante_scos"
                      github="https://github.com/Dish365/fontaine_sante_scos"
                      isExternal={true}
                      status="In Development"
                    />
                    <FeaturedProject
                      type="Research Tools"
                      tools="Python | Django | FastAPI | Next.js"
                      title="Food Systems Analytics"
                      summary="Comprehensive analytics platform for food systems research, providing insights into supply chains, sustainability metrics, and agricultural data visualization."
                      link="https://foodsystemsanalytics.com/app/"
                      isExternal={true}
                      status="Live"
                    />
                  </div>
                </motion.div>

                {/* Decommissioned Projects Section */}
                <motion.div
                  className="w-full mb-10 sm:mb-6"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                >
                  <h2 className="font-bold text-2xl mb-6 w-full text-center text-dark/60 dark:text-light/60 lg:text-xl sm:text-lg sm:mb-4">
                    Archived Projects
                  </h2>
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-4">
                    <div className="bg-light dark:bg-dark p-5 sm:p-4 rounded-2xl border-2 border-dark/10 dark:border-light/20 shadow-lg opacity-60">
                      <span className="text-xs font-semibold text-dark/50 dark:text-light/50 uppercase tracking-wide">Chemical Industry</span>
                      <h3 className="text-lg font-bold mt-2 mb-2 text-dark dark:text-light md:text-base sm:text-sm">Ocelot Chemtech</h3>
                      <p className="text-dark/60 dark:text-light/60 mb-3 leading-relaxed text-sm sm:text-xs">
                        Corporate website for a chemical technology company. Currently decommissioned.
                      </p>
                      <span className="text-xs px-3 py-1 bg-dark/10 dark:bg-light/10 rounded-full text-dark/60 dark:text-light/60 font-medium">
                        Decommissioned
                      </span>
                    </div>
                  </div>
                </motion.div>

                {/* Automation Scripts & Tools Section */}
                <motion.div
                  className="w-full pb-4 sm:pb-2"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                >
                  <h2 className="font-bold text-2xl mb-6 w-full text-center text-dark dark:text-light lg:text-xl sm:text-lg sm:mb-4">
                    Automation Scripts & Tools
                  </h2>
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-4">
                    <div className="bg-light dark:bg-dark p-5 sm:p-4 rounded-2xl border-2 border-dark/10 dark:border-light/20 shadow-lg hover:border-primary/50 transition-all duration-300">
                      <h3 className="text-lg font-bold mb-3 text-dark dark:text-light md:text-base sm:text-sm">Network Management</h3>
                      <p className="text-dark/80 dark:text-light/80 leading-relaxed text-sm sm:text-xs">
                        Collection of scripts for automated network monitoring, configuration management, and security auditing.
                      </p>
                    </div>
                    <div className="bg-light dark:bg-dark p-5 sm:p-4 rounded-2xl border-2 border-dark/10 dark:border-light/20 shadow-lg hover:border-primary/50 transition-all duration-300">
                      <h3 className="text-lg font-bold mb-3 text-dark dark:text-light md:text-base sm:text-sm">System Administration</h3>
                      <p className="text-dark/80 dark:text-light/80 leading-relaxed text-sm sm:text-xs">
                        Automation tools for system maintenance, backup management, and security compliance checks.
                      </p>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </Layout>
        </div>
        <HireMe2 />
        <ScrollToTop />
      </main>
    </>
  );
}
