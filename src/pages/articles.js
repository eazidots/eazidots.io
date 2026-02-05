import AnimatedText from "@/components/AnimatedText";
import { motion } from "framer-motion";
import Head from "next/head";
import Layout from "@/components/Layout";
import Link from "next/link";
import TransitionEffect from "@/components/TransitionEffect";
import { HireMe2 } from "@/components/HireMe2";
import ScrollToTop from "@/components/ScrollToTop";

const ArticleCard = ({ title, date, summary, link, category, delay = 0 }) => {
  return (
    <motion.article
      initial={{ y: 30, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, delay: delay }}
      whileHover={{ y: -5 }}
      viewport={{ once: true }}
      className="relative flex flex-col w-full rounded-2xl border-2 border-dark/10 dark:border-light/20 bg-light dark:bg-dark shadow-lg hover:border-primary/50 dark:hover:border-primaryDark/50 transition-all duration-300 overflow-hidden"
    >
      {/* Top accent bar */}
      <div className="h-1 bg-gradient-to-r from-primary to-primary/60 dark:from-primaryDark dark:to-primaryDark/60"></div>

      {/* Article Content */}
      <div className="p-5 sm:p-4">
        <div className="flex justify-between items-center mb-3 sm:mb-2">
          <span className="text-xs font-semibold uppercase tracking-wide text-primary dark:text-primaryDark">{category}</span>
          <span className="text-dark/50 dark:text-light/50 text-xs">{date}</span>
        </div>

        <Link href={link} className="group">
          <h2 className="text-lg font-bold mb-2 text-dark dark:text-light group-hover:text-primary dark:group-hover:text-primaryDark transition-colors sm:text-base">
            {title}
          </h2>
        </Link>

        <p className="text-dark/70 dark:text-light/70 text-sm leading-relaxed mb-4 sm:text-xs sm:mb-3">
          {summary}
        </p>

        <Link
          href={link}
          className="inline-flex items-center text-sm font-medium text-primary dark:text-primaryDark hover:underline sm:text-xs"
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
      initial={{ y: 30, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      whileHover={{ y: -5 }}
      viewport={{ once: true }}
      className="relative w-full rounded-2xl border-2 border-primary/30 dark:border-primaryDark/30 bg-light dark:bg-dark shadow-xl hover:border-primary dark:hover:border-primaryDark transition-all duration-300 overflow-hidden"
    >
      {/* Top accent bar */}
      <div className="h-1.5 bg-gradient-to-r from-primary via-primary/80 to-primary/60 dark:from-primaryDark dark:via-primaryDark/80 dark:to-primaryDark/60"></div>

      {/* Featured Article Content */}
      <div className="p-6 md:p-5 sm:p-4">
        <div className="flex justify-between items-center mb-4 sm:mb-3">
          <span className="bg-primary dark:bg-primaryDark text-light px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wide sm:px-2">
            Featured
          </span>
          <span className="text-dark/50 dark:text-light/50 text-sm sm:text-xs">{date}</span>
        </div>

        <Link href={link} className="group">
          <h2 className="text-2xl md:text-xl sm:text-lg font-bold mb-3 text-dark dark:text-light group-hover:text-primary dark:group-hover:text-primaryDark transition-colors sm:mb-2">
            {title}
          </h2>
        </Link>

        <span className="inline-block text-xs font-semibold uppercase tracking-wide text-primary dark:text-primaryDark mb-3 sm:mb-2">
          {category}
        </span>

        <p className="text-dark/70 dark:text-light/70 text-base md:text-sm sm:text-xs leading-relaxed mb-4 sm:mb-3">
          {summary}
        </p>

        <Link
          href={link}
          className="inline-flex items-center text-sm font-medium text-primary dark:text-primaryDark hover:underline sm:text-xs"
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
          content="Technical articles and insights on software development, cloud infrastructure, and career growth by Emmanuel Dotse Azilafu."
        />
      </Head>
      <TransitionEffect />
      <main className="w-full mb-8 flex flex-col items-center justify-center dark:text-light overflow-hidden relative">
        {/* Clean Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-light via-light to-light/95 dark:from-dark dark:via-dark dark:to-dark/95 z-0"></div>
        <div className="absolute inset-0 bg-gradient-to-tl from-primary/5 via-transparent to-primary/10 dark:from-primaryDark/10 dark:via-transparent dark:to-primaryDark/5 z-0"></div>

        {/* Content */}
        <div className="relative z-10 w-full">
          <Layout className="pt-8 md:pt-6 sm:pt-4">
            <div className="max-w-5xl mx-auto">
              <AnimatedText
                text="Sharing Knowledge & Experience"
                className="mb-6 !text-4xl !leading-tight lg:!text-3xl sm:!text-2xl xs:!text-xl text-center"
              />

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="text-center text-dark/70 dark:text-light/70 mb-10 max-w-2xl mx-auto sm:text-sm sm:mb-6"
              >
                Insights on software development, infrastructure, and lessons learned throughout my tech journey.
              </motion.p>

              {/* Featured Article */}
              <div className="mb-8 sm:mb-6">
                <FeaturedArticle
                  title="Building SASEL Lab: From Research Vision to Live Platform"
                  date="January 2026"
                  category="Research & Development"
                  summary="The journey of developing SASEL Lab's digital ecosystem at McGill University - from initial infrastructure planning to deploying sustainable food systems research tools including EcoDish365, ProteinProcess, and the AI-powered Food Vulnerability Index."
                  link="/articles/building-sasel-lab"
                />
              </div>

              {/* Articles Grid */}
              <div className="grid grid-cols-2 gap-6 md:gap-4 sm:grid-cols-1">
                <ArticleCard
                  title="Scientific Computing with Rust: The PEA Protein Analysis Story"
                  date="December 2025"
                  category="Technical"
                  summary="Deep dive into combining Rust's computational power with Next.js and FastAPI for the PEA Protein Analysis System at proteinprocess.io."
                  link="/articles/rust-protein-analysis"
                  delay={0.1}
                />

                <ArticleCard
                  title="Building Food Systems Analytics: Research Data at Scale"
                  date="November 2025"
                  category="Research Tools"
                  summary="How we built a comprehensive analytics platform for food systems research, from supply chain insights to sustainability metrics visualization."
                  link="/articles/food-systems-analytics"
                  delay={0.15}
                />

                <ArticleCard
                  title="Enterprise HRM on Google Cloud: Clean Team's Digital Transformation"
                  date="October 2025"
                  category="Cloud & DevOps"
                  summary="Implementing a scalable HR Management System on GCP for Clean Team Ghana - architecture decisions, security, and lessons learned."
                  link="/articles/enterprise-hrm-gcp"
                  delay={0.2}
                />

                <ArticleCard
                  title="From Infrastructure to Scientific Computing: My Tech Journey"
                  date="September 2025"
                  category="Career Journey"
                  summary="Reflecting on the transition from IT infrastructure management to building scientific computing solutions at McGill University."
                  link="/articles/infrastructure-to-scientific-computing"
                  delay={0.25}
                />
              </div>

              {/* CMS Notice */}
              <motion.div
                className="mt-10 text-center sm:mt-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <div className="bg-light dark:bg-dark rounded-2xl p-4 sm:p-3 border-2 border-dark/10 dark:border-light/20 shadow-md inline-block">
                  <p className="text-dark/70 dark:text-light/70 text-sm sm:text-xs">
                    📝 New articles coming soon via Sanity CMS. Stay tuned for more insights!
                  </p>
                </div>
              </motion.div>
            </div>
          </Layout>
        </div>
        <HireMe2 />
        <ScrollToTop />
      </main>
    </>
  );
}

