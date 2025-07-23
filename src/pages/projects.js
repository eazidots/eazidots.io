import AnimatedText from "@/components/AnimatedText";
import { GithubIcon } from "@/components/Icons";
import Layout from "@/components/Layout";
import Head from "next/head";
import Link from "next/link";
import { useRef } from "react";
import { motion, useMotionValue } from "framer-motion";
import TransitionEffect from "@/components/TransitionEffect";
import { HireMe2 } from "@/components/HireMe2";

const FeaturedProject = ({
  type,
  title,
  summary,
  link,
  github,
  tools,
  status,
}) => {
  return (
    <motion.article
      className="relative w-full rounded-2xl border border-solid border-dark/10 dark:border-light/10 
        bg-light/40 dark:bg-dark/40 backdrop-blur-xl p-8 shadow-lg overflow-hidden"
      whileHover={{ y: -5 }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Project Card Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-light/30 via-dark/15 to-dark/30 dark:from-dark/30 dark:via-light/10 dark:to-light/30 z-0"></div>
      <div className="absolute inset-0 bg-gradient-to-tl from-transparent via-dark/4 to-transparent dark:from-transparent dark:via-light/4 dark:to-transparent z-0"></div>
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-dark/8 to-transparent dark:from-transparent dark:via-light/8 dark:to-transparent z-0"></div>
      
      {/* Project Content */}
      <div className="relative z-10">
        <span className="text-xl font-medium text-dark dark:text-light">
          {type}
        </span>
        <div className="flex flex-wrap gap-2 my-4">
          {tools.split('|').map((tool, index) => (
            <span key={index} className="text-sm px-3 py-1 bg-dark/25 dark:bg-light/25 rounded-full text-dark dark:text-light font-medium backdrop-blur-sm border border-dark/20 dark:border-light/30">
              {tool.trim()}
            </span>
          ))}
        </div>
        <Link href={link} className="underline-offset-2 hover:underline">
          <h2 className="my-4 w-full text-left text-4xl font-bold lg:text-3xl xs:text-2xl text-dark dark:text-light">
            {title}
          </h2>
        </Link>
        <p className="my-4 rounded-md font-medium text-dark/90 dark:text-light/90 sm:text-sm leading-relaxed">
          {summary}
        </p>
        <div className="mt-6 flex items-center justify-between w-full">
          <div className="flex items-center">
            {github && (
              <Link
                href={github}
                target="_blank"
                className="w-10 mr-4"
                aria-label="github link"
              >
                <GithubIcon />
              </Link>
            )}
            <Link
              href={link}
              className="rounded-lg bg-dark/90 dark:bg-light/90 backdrop-blur-xl p-2 px-6 text-lg font-semibold
                capitalize text-light dark:text-dark hover:bg-dark/70 dark:hover:bg-light/70 
                border-2 border-solid border-dark/20 dark:border-light/20 transition-all duration-300
                md:p-2 md:px-4 md:text-base"
              aria-label="Project link"
            >
              View Project
            </Link>
          </div>
          <span className="text-dark/80 dark:text-light/80 font-medium">
            {status}
          </span>
        </div>
      </div>
    </motion.article>
  );
};

const Project = ({ title, type, link, github, tools, status }) => {
  return (
    <motion.article
      className="relative w-full flex flex-col items-center justify-center rounded-2xl 
      border border-solid border-dark/10 dark:border-light/10 bg-light/40 dark:bg-dark/40 backdrop-blur-xl p-6 shadow-lg overflow-hidden"
      whileHover={{ y: -5 }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Project Card Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-light/30 via-dark/15 to-dark/30 dark:from-dark/30 dark:via-light/10 dark:to-light/30 z-0"></div>
      <div className="absolute inset-0 bg-gradient-to-tl from-transparent via-dark/4 to-transparent dark:from-transparent dark:via-light/4 dark:to-transparent z-0"></div>
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-dark/8 to-transparent dark:from-transparent dark:via-light/8 dark:to-transparent z-0"></div>
      
      {/* Project Content */}
      <div className="relative z-10 w-full">
        <div className="mt-4 flex w-full flex-col items-start justify-between">
          <span className="text-xl font-medium text-dark dark:text-light lg:text-lg md:text-base">
            {type}
          </span>
          <div className="flex flex-wrap gap-2 my-4">
            {tools.split('|').map((tool, index) => (
              <span key={index} className="text-sm px-3 py-1 bg-dark/25 dark:bg-light/25 rounded-full text-dark dark:text-light font-medium backdrop-blur-sm border border-dark/20 dark:border-light/30">
                {tool.trim()}
              </span>
            ))}
          </div>
          <Link href={link} className="underline-offset-2 hover:underline">
            <h2 className="my-4 w-full text-left text-3xl font-bold lg:text-2xl text-dark dark:text-light">
              {title}
            </h2>
          </Link>
          <div className="flex w-full items-center justify-between">
            <div className="flex items-center">
              {github && (
                <Link
                  href={github}
                  target="_blank"
                  className="w-8 mr-4"
                  aria-label="github link"
                >
                  <GithubIcon />
                </Link>
              )}
              <Link
                href={link}
                className="rounded-lg bg-dark/90 dark:bg-light/90 backdrop-blur-xl mt-2 px-6 py-2 text-lg font-semibold
                  capitalize text-light dark:text-dark hover:bg-dark/70 dark:hover:bg-light/70
                  border-2 border-solid border-dark/20 dark:border-light/20 transition-all duration-300
                  md:p-2 md:px-4 md:text-base"
                aria-label={title}
              >
                View Project
              </Link>
            </div>
            <span className="text-dark/80 dark:text-light/80 font-medium">
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
        {/* Black Theme Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-dark via-dark/90 to-darkest dark:from-lightest dark:via-light/90 dark:to-light z-0"></div>
        <div className="absolute inset-0 bg-gradient-to-tl from-transparent via-dark/15 to-transparent dark:from-transparent dark:via-light/15 dark:to-transparent z-0"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-dark/20 to-transparent dark:from-transparent dark:via-light/20 dark:to-transparent z-0"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-dark/8 to-transparent dark:from-transparent dark:via-light/8 dark:to-transparent z-0"></div>
        
        {/* Content */}
        <div className="relative z-10 w-full">
          <Layout className="pt-16">
            <AnimatedText
              text="Innovation Through Code"
              className="mb-16 !text-7xl !leading-tight lg:!text-6xl sm:mb-8 sm:!text-5xl xs:!text-4xl text-center"
            />

            <div className="flex w-full items-center justify-center">
              <div className="flex w-full flex-col items-center justify-center max-w-6xl">
                <motion.div 
                  className="w-full mb-16"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <h2 className="font-bold text-4xl mb-8 w-full text-center text-light dark:text-dark">
                    Scientific Computing Projects
                  </h2>
                  <FeaturedProject
                    type="Research & Development"
                    tools="Rust | Next.js | FastAPI | Django"
                    title="PEA Protein Analysis System"
                    summary="Advanced scientific computing platform for protein analysis, featuring complex computational processing in Rust, modern web interface with Next.js, and robust data management with Django."
                    link="/projects/pea-protein-analysis"
                    github="https://github.com/yourusername/pea-analysis"
                    status="In Progress (May 2025)"
                  />
                </motion.div>

                <motion.div 
                  className="w-full mb-16"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <Project
                      type="Data Analytics"
                      tools="Next.js | FastAPI | Django"
                      title="Supply Chain Analytics Platform"
                      link="/projects/supply-chain-analytics"
                      github="https://github.com/yourusername/supply-chain"
                      status="Upcoming (August 2025)"
                    />

                    <Project
                      type="Research Tools"
                      tools="Python | Django | FastAPI | Next.js"
                      title="Scientific Data Collection Tool"
                      link="/projects/research-data-tool"
                      github="https://github.com/yourusername/research-tool"
                      status="Planned (September 2025)"
                    />
                  </div>
                </motion.div>

                <motion.div 
                  className="w-full mb-16"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                >
                  <h2 className="font-bold text-4xl mb-8 w-full text-center text-light dark:text-dark">
                    Infrastructure & Systems
                  </h2>
                  <FeaturedProject
                    type="Enterprise Systems"
                    tools="Python | Django | GCP | AWS"
                    title="HRM System Deployment"
                    summary="Comprehensive HR Management System deployed on Google Cloud Platform, featuring secure user management, automated workflows, and integration with existing enterprise systems."
                    link="/projects/hrm-system"
                    status="Completed (March 2024)"
                  />
                </motion.div>

                <motion.div 
                  className="w-full"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.6 }}
                >
                  <h2 className="font-bold text-4xl mb-8 w-full text-center text-light dark:text-dark">
                    Automation Scripts & Tools
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="bg-light/40 dark:bg-dark/40 backdrop-blur-xl p-8 rounded-2xl border border-dark/10 dark:border-light/10 relative overflow-hidden">
                      {/* Card Gradient Background */}
                      <div className="absolute inset-0 bg-gradient-to-br from-light/30 via-dark/15 to-dark/30 dark:from-dark/30 dark:via-light/10 dark:to-light/30 z-0"></div>
                      <div className="absolute inset-0 bg-gradient-to-tl from-transparent via-dark/4 to-transparent dark:from-transparent dark:via-light/4 dark:to-transparent z-0"></div>
                      
                      {/* Card Content */}
                      <div className="relative z-10">
                        <h3 className="text-2xl font-bold mb-4 text-dark dark:text-light">Network Management</h3>
                        <p className="text-dark/90 dark:text-light/90 mb-6 leading-relaxed">
                          Collection of scripts for automated network monitoring, configuration management, and security auditing.
                        </p>
                        <Link
                          href="https://github.com/yourusername/network-scripts"
                          className="text-dark/80 dark:text-light/80 hover:underline transition-colors"
                        >
                          View Repository →
                        </Link>
                      </div>
                    </div>

                    <div className="bg-light/40 dark:bg-dark/40 backdrop-blur-xl p-8 rounded-2xl border border-dark/10 dark:border-light/10 relative overflow-hidden">
                      {/* Card Gradient Background */}
                      <div className="absolute inset-0 bg-gradient-to-br from-light/30 via-dark/15 to-dark/30 dark:from-dark/30 dark:via-light/10 dark:to-light/30 z-0"></div>
                      <div className="absolute inset-0 bg-gradient-to-tl from-transparent via-dark/4 to-transparent dark:from-transparent dark:via-light/4 dark:to-transparent z-0"></div>
                      
                      {/* Card Content */}
                      <div className="relative z-10">
                        <h3 className="text-2xl font-bold mb-4 text-dark dark:text-light">System Administration</h3>
                        <p className="text-dark/90 dark:text-light/90 mb-6 leading-relaxed">
                          Automation tools for system maintenance, backup management, and security compliance checks.
                        </p>
                        <Link
                          href="https://github.com/yourusername/sysadmin-tools"
                          className="text-dark/80 dark:text-light/80 hover:underline transition-colors"
                        >
                          View Repository →
                        </Link>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </Layout>
        </div>
        <HireMe2 />
      </main>
    </>
  );
}
