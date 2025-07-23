import AnimatedText from "@/components/AnimatedText";
import { motion, useMotionValue } from "framer-motion";
import Head from "next/head";
import Layout from "@/components/Layout";
import Link from "next/link";
import { useRef } from "react";
import TransitionEffect from "@/components/TransitionEffect";
import { HireMe2 } from "@/components/HireMe2";

const ArticleCard = ({ title, date, summary, link, category }) => {
  return (
    <motion.article 
      initial={{ y: 50, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
      viewport={{ once: true }}
      className="relative flex flex-col w-full p-8 rounded-2xl border border-solid border-dark/10 dark:border-light/10 bg-light/40 dark:bg-dark/40 backdrop-blur-xl overflow-hidden"
    >
      {/* Article Card Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-light/30 via-coffee-light/15 to-coffee-dark/30 dark:from-dark/30 dark:via-coffee-dark/10 dark:to-coffee-light/30 z-0"></div>
      <div className="absolute inset-0 bg-gradient-to-tl from-transparent via-coffee-light/4 to-transparent dark:from-transparent dark:via-coffee-dark/4 dark:to-transparent z-0"></div>
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-coffee-light/8 to-transparent dark:from-transparent dark:via-coffee-dark/8 dark:to-transparent z-0"></div>
      
      {/* Article Content */}
      <div className="relative z-10">
        <div className="flex justify-between items-center mb-4">
          <span className="text-coffee-dark dark:text-coffee-light font-medium">{category}</span>
          <span className="text-dark/60 dark:text-light/60 text-sm">{date}</span>
        </div>

        <Link href={link} className="hover:underline underline-offset-2">
          <h2 className="text-2xl font-bold mb-4 hover:text-coffee-dark dark:hover:text-coffee-light transition-colors">
            {title}
          </h2>
        </Link>

        <p className="text-dark/90 dark:text-light/90 text-base leading-relaxed mb-6">
          {summary}
        </p>

        <Link 
          href={link}
          className="self-start inline-flex items-center text-coffee-dark dark:text-coffee-light hover:underline transition-colors"
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
      className="relative col-span-2 w-full p-8 rounded-2xl border border-solid border-dark/10 dark:border-light/10 bg-light/40 dark:bg-dark/40 backdrop-blur-xl overflow-hidden"
    >
      {/* Featured Article Card Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-light/30 via-coffee-light/15 to-coffee-dark/30 dark:from-dark/30 dark:via-coffee-dark/10 dark:to-coffee-light/30 z-0"></div>
      <div className="absolute inset-0 bg-gradient-to-tl from-transparent via-coffee-light/4 to-transparent dark:from-transparent dark:via-coffee-dark/4 dark:to-transparent z-0"></div>
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-coffee-light/8 to-transparent dark:from-transparent dark:via-coffee-dark/8 dark:to-transparent z-0"></div>
      
      {/* Featured Article Content */}
      <div className="relative z-10">
        <div className="flex justify-between items-center mb-4">
          <span className="text-coffee-dark dark:text-coffee-light font-medium">{category}</span>
          <span className="text-dark/60 dark:text-light/60 text-sm">{date}</span>
        </div>

        <Link href={link} className="hover:underline underline-offset-2">
          <h2 className="text-3xl font-bold mb-4 hover:text-coffee-dark dark:hover:text-coffee-light transition-colors">
            {title}
          </h2>
        </Link>

        <p className="text-dark/90 dark:text-light/90 text-lg leading-relaxed mb-6">
          {summary}
        </p>

        <Link 
          href={link}
          className="self-start inline-flex items-center text-coffee-dark dark:text-coffee-light hover:underline transition-colors"
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
      <main className="w-full mb-16 flex flex-col items-center justify-center dark:text-light overflow-hidden relative">
        {/* Coffee-Brown Theme Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-coffee-lightest via-coffee-light/40 to-coffee-dark dark:from-coffee-darkest dark:via-coffee-dark/35 dark:to-coffee-lightest z-0"></div>
        <div className="absolute inset-0 bg-gradient-to-tl from-transparent via-coffee-light/15 to-transparent dark:from-transparent dark:via-coffee-dark/15 dark:to-transparent z-0"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-coffee-light/20 to-transparent dark:from-transparent dark:via-coffee-dark/20 dark:to-transparent z-0"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-coffee-light/8 to-transparent dark:from-transparent dark:via-coffee-dark/8 dark:to-transparent z-0"></div>
        
        {/* Content */}
        <div className="relative z-10 w-full">
          <Layout className="pt-16">
            <AnimatedText
              text="Sharing Knowledge & Experience"
              className="mb-16 !text-7xl !leading-tight lg:!text-6xl sm:!text-5xl xs:!text-4xl sm:mb-8 text-center"
            />

            <div className="flex w-full items-center justify-center">
              <div className="flex w-full flex-col items-center justify-center max-w-6xl">
                <div className="grid grid-cols-2 gap-8 lg:gap-6 md:grid-cols-1 md:gap-y-8 w-full">
                  <FeaturedArticle
                    title="From Infrastructure to Scientific Computing: A Journey in Tech"
                    date="March 2024"
                    category="Career Journey"
                    summary="Exploring my transition from IT infrastructure management to scientific computing development, and the valuable lessons learned along the way. This article details how different roles in healthcare and enterprise systems prepared me for current challenges."
                    link="/articles/infrastructure-to-scientific-computing"
                  />

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

                  <ArticleCard
                    title="Optimizing Cloud Infrastructure: Lessons from the Field"
                    date="January 2024"
                    category="Cloud & DevOps"
                    summary="Practical insights from implementing and optimizing AWS and GCP solutions, focusing on cost efficiency and performance."
                    link="/articles/cloud-infrastructure-optimization"
                  />
                </div>

                <motion.div 
                  className="mt-16 text-center"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                >
                  <div className="bg-light/40 dark:bg-dark/40 backdrop-blur-xl rounded-2xl p-8 border border-coffee-light/20 dark:border-coffee-dark/20">
                    <p className="text-dark/90 dark:text-light/90 text-lg">
                      New articles are managed through Sanity.io CMS. Check back regularly for updates!
                    </p>
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
