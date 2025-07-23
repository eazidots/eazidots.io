import AnimatedText from "@/components/AnimatedText";
import { motion, useMotionValue } from "framer-motion";
import Head from "next/head";
import Layout from "@/components/Layout";
import Link from "next/link";
import { useRef } from "react";
import TransitionEffect from "@/components/TransitionEffect";
import { HireMe2 } from "@/components/HireMe2";
import ScrollToTop from "@/components/ScrollToTop";

const ArticleCard = ({ title, date, summary, link, category }) => {
  return (
    <motion.article 
      initial={{ y: 50, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
      viewport={{ once: true }}
      className="relative flex flex-col w-full p-3 sm:p-2 rounded-2xl border border-solid border-dark/10 dark:border-light/10 bg-light/40 dark:bg-dark/40 backdrop-blur-xl overflow-hidden"
    >
      {/* Article Card Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-light/30 via-coffee-light/15 to-coffee-dark/30 dark:from-dark/30 dark:via-coffee-dark/10 dark:to-coffee-light/30 z-0"></div>
      <div className="absolute inset-0 bg-gradient-to-tl from-transparent via-coffee-light/4 to-transparent dark:from-transparent dark:via-coffee-dark/4 dark:to-transparent z-0"></div>
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-coffee-light/8 to-transparent dark:from-transparent dark:via-coffee-dark/8 dark:to-transparent z-0"></div>
      
      {/* Article Content */}
      <div className="relative z-10">
        <div className="flex justify-between items-center mb-2 sm:mb-1">
          <span className="text-coffee-dark dark:text-coffee-light font-medium text-sm sm:text-xs">{category}</span>
          <span className="text-dark/60 dark:text-light/60 text-xs">{date}</span>
        </div>

        <Link href={link} className="hover:underline underline-offset-2">
          <h2 className="text-lg font-bold mb-2 hover:text-coffee-dark dark:hover:text-coffee-light transition-colors sm:text-base sm:mb-1">
            {title}
          </h2>
        </Link>

        <p className="text-dark/90 dark:text-light/90 text-sm leading-relaxed mb-3 sm:text-xs sm:mb-2">
          {summary}
        </p>

        <Link 
          href={link}
          className="self-start inline-flex items-center text-coffee-dark dark:text-coffee-light hover:underline transition-colors text-sm sm:text-xs"
        >
          Read More <span className="ml-1">→</span>
        </Link>
      </div>
    </motion.article>
  );
};

const FeaturedArticle = ({ title, date, summary, link, category }) => {
  return (
    <motion.article
      initial={{ y: 50, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
      viewport={{ once: true }}
      className="relative w-full p-4 md:p-3 sm:p-2 rounded-2xl border border-solid border-dark/10 dark:border-light/10 bg-light/40 dark:bg-dark/40 backdrop-blur-xl overflow-hidden"
    >
      {/* Featured Article Card Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-light/30 via-coffee-light/15 to-coffee-dark/30 dark:from-dark/30 dark:via-coffee-dark/10 dark:to-coffee-light/30 z-0"></div>
      <div className="absolute inset-0 bg-gradient-to-tl from-transparent via-coffee-light/4 to-transparent dark:from-transparent dark:via-coffee-dark/4 dark:to-transparent z-0"></div>
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-coffee-light/8 to-transparent dark:from-transparent dark:via-coffee-dark/8 dark:to-transparent z-0"></div>
      
      {/* Featured Article Content */}
      <div className="relative z-10">
        <div className="flex justify-between items-center mb-3 sm:mb-2">
          <span className="bg-coffee-dark dark:bg-coffee-light text-light dark:text-dark px-3 py-1 rounded-full text-sm font-medium sm:px-2 sm:text-xs">Featured</span>
          <span className="text-dark/60 dark:text-light/60 text-sm sm:text-xs">{date}</span>
        </div>

        <Link href={link} className="hover:underline underline-offset-2">
          <h2 className="text-2xl md:text-xl sm:text-lg font-bold mb-2 hover:text-coffee-dark dark:hover:text-coffee-light transition-colors sm:mb-1">
            {title}
          </h2>
        </Link>

        <div className="flex justify-between items-center mb-2 sm:mb-1">
          <span className="text-coffee-dark dark:text-coffee-light font-medium text-sm sm:text-xs">{category}</span>
        </div>

        <p className="text-dark/90 dark:text-light/90 text-base md:text-sm sm:text-xs leading-relaxed mb-3 sm:mb-2">
          {summary}
        </p>

        <Link 
          href={link}
          className="self-start inline-flex items-center text-coffee-dark dark:text-coffee-light hover:underline transition-colors font-medium text-sm sm:text-xs"
        >
          Read Full Article <span className="ml-1">→</span>
        </Link>
      </div>
    </motion.article>
  );
};

export default function Articles() {
  return (
    <>
      <Head>
        <title>Articles | Emmanuel Dotse Azilafu</title>
        <meta
          name="description"
          content="Technical articles and personal journey in technology by Emmanuel Dotse Azilafu"
        />
      </Head>
      <TransitionEffect />
      <main className="w-full mb-8 flex flex-col items-center justify-center dark:text-light overflow-hidden relative">
        {/* Coffee-Brown Theme Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-coffee-lightest via-coffee-light/40 to-coffee-dark dark:from-coffee-darkest dark:via-coffee-dark/35 dark:to-coffee-lightest z-0"></div>
        <div className="absolute inset-0 bg-gradient-to-tl from-transparent via-coffee-light/15 to-transparent dark:from-transparent dark:via-coffee-dark/15 dark:to-transparent z-0"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-coffee-light/20 to-transparent dark:from-transparent dark:via-coffee-dark/20 dark:to-transparent z-0"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-coffee-light/8 to-transparent dark:from-transparent dark:via-coffee-dark/8 dark:to-transparent z-0"></div>
        
        {/* Content */}
        <div className="relative z-10 w-full max-w-6xl mx-auto flex flex-col items-center justify-center">
          <Layout className="pt-4 md:pt-3 sm:pt-2">
            <AnimatedText
              text="Sharing Knowledge & Experience"
              className="mb-6 !text-4xl !leading-tight lg:!text-3xl sm:mb-3 sm:!text-2xl xs:!text-xl text-center"
            />
            
            {/* Articles Grid Container */}
            <div className="flex w-full items-center justify-center">
              <div className="flex w-full flex-col items-center justify-center max-w-6xl space-y-4 sm:space-y-3">
                
                {/* Featured Article - Full Width */}
                <div className="w-full">
                  <FeaturedArticle
                    title="From Infrastructure to Scientific Computing: A Journey in Tech"
                    date="March 2024"
                    category="Career Journey"
                    summary="Exploring my transition from IT infrastructure management to scientific computing development, and the valuable lessons learned along the way. This article details how different roles in healthcare and enterprise systems prepared me for current challenges in scientific software development."
                    link="/articles/infrastructure-to-scientific-computing"
                  />
                </div>

                {/* Regular Articles Grid */}
                <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 md:gap-3 sm:gap-2">
                  <ArticleCard
                    title="Building Scientific Computing Solutions with Rust and Next.js"
                    date="May 2024"
                    category="Technical"
                    summary="Deep dive into combining Rust's computational power with Next.js for scientific applications. Sharing insights from developing the PEA Protein Analysis System."
                    link="/articles/rust-nextjs-scientific-computing"
                  />
                  
                  <ArticleCard
                    title="Healthcare Tech: Balancing Innovation with Reliability"
                    date="February 2024"
                    category="Industry Insights"
                    summary="Reflections on managing critical healthcare systems and the importance of maintaining security while driving innovation in healthcare technology."
                    link="/articles/healthcare-tech-innovation"
                  />
                </div>

                {/* Second Row of Regular Articles */}
                <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 md:gap-3 sm:gap-2">
                  <ArticleCard
                    title="Optimizing Cloud Infrastructure: Lessons from the Field"
                    date="January 2024"
                    category="Cloud & DevOps"
                    summary="Practical insights from implementing and optimizing AWS and GCP solutions, focusing on cost efficiency and performance."
                    link="/articles/cloud-infrastructure-optimization"
                  />
                  
                  <ArticleCard
                    title="The Evolution of Web Development: From Static to Dynamic"
                    date="December 2023"
                    category="Web Development"
                    summary="Exploring the journey from static websites to modern dynamic applications, and what the future holds for web development."
                    link="/articles/web-development-evolution"
                  />
                </div>

                {/* CMS Notice */}
                <motion.div 
                  className="mt-6 text-center w-full sm:mt-4"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                >
                  <div className="bg-light/40 dark:bg-dark/40 backdrop-blur-xl rounded-2xl p-3 sm:p-2 border border-coffee-light/20 dark:border-coffee-dark/20">
                    <p className="text-dark/90 dark:text-light/90 text-sm sm:text-xs">
                      📝 New articles are managed through Sanity.io CMS. Check back regularly for updates on technology, development insights, and career journey stories!
                    </p>
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
