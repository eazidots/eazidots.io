import React, { useRef } from "react";
import { motion, useScroll } from "framer-motion";
import LiIcon from "./LiIcon";
import Link from "next/link";

const Details = ({ position, company, companyLink, time, address, work }) => {
  const ref = useRef(null);
  return (
    <li
      ref={ref}
      className="my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-start justify-between md:w-[80%] sm:w-[90%]"
    >
      <LiIcon reference={ref} />
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, type: "spring" }}
        className="bg-light/40 dark:bg-dark/40 backdrop-blur-xl rounded-2xl p-8 border border-dark/10 dark:border-light/10 shadow-lg 
        hover:shadow-2xl transition-all duration-300 w-full relative overflow-hidden
        md:p-6 sm:p-4"
      >
        {/* Experience Card Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-light/30 via-grey-light/15 to-transparent dark:from-dark/30 dark:via-grey-dark/15 dark:to-transparent z-0"></div>
        <div className="absolute inset-0 bg-gradient-to-tl from-transparent via-primary/4 to-transparent dark:from-transparent dark:via-primaryDark/4 dark:to-transparent z-0"></div>
        
        {/* Experience Content */}
        <div className="relative z-10">
          <h3 className="capitalize font-bold text-2xl sm:text-xl xs:text-lg text-dark dark:text-light mb-2">
            {position}{" "}
            <a
              className="capitalize text-primary dark:text-primaryDark hover:underline transition-colors"
              href={companyLink}
              target={"_blank"}
            >
              @{company}
            </a>
          </h3>
          <span className="capitalize text-dark/70 font-medium dark:text-light/70 xs:text-sm block mb-4">
            {time} | {address}
          </span>
          <p className="font-medium w-full md:text-sm text-dark/90 dark:text-light/90 leading-relaxed">
            {work}
          </p>
        </div>
      </motion.div>
    </li>
  );
};

const Experience = () => {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"],
  });

  return (
    <div className="my-64 md:my-32 sm:my-16 relative overflow-hidden">
      {/* Experience Section Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-light/15 via-grey-light/8 to-transparent dark:from-dark/15 dark:via-grey-dark/8 dark:to-transparent z-0"></div>
      <div className="absolute inset-0 bg-gradient-to-tl from-transparent via-primary/2 to-transparent dark:from-transparent dark:via-primaryDark/2 dark:to-transparent z-0"></div>
      
      <div className="relative z-10">
        <h2 className="font-bold text-8xl mb-32 w-full text-center md:text-6xl sm:text-5xl xs:text-4xl md:mb-16 sm:mb-8 text-dark dark:text-light">
          Experience
        </h2>

        <div ref={ref} className="relative w-[75%] mx-auto lg:w-[90%] md:w-full">
          <motion.div
            className="absolute left-9 top-0 w-[4px] md:w-[2px] md:left-[30px] xs:left-[20px] h-full 
            bg-gradient-to-b from-primary via-primary/80 to-primary shadow-lg 
            origin-top dark:from-primaryDark dark:via-primaryDark/80 dark:to-primaryDark dark:shadow-lg backdrop-blur-sm rounded-full"
            style={{ scaleY: scrollYProgress }}
          />

          <ul className="w-full flex flex-col items-start justify-between ml-4 xs:ml-2">
            <Details
              position="Software Developer"
              company="SASEL Programmers Lab, McGill University"
              time="2025 - Present"
              address="Montreal, Canada"
              companyLink="https://mcgill.ca"
              work="Leading development of advanced scientific computing solutions, including a protein analysis system using Rust and Next.js, and a specialized supply chain analysis platform. Implementing complex computational processing, building modern web interfaces, and developing RESTful APIs. Projects focus on combining high-performance computing with user-friendly interfaces for research applications."
            />

            <Details
              position="IT Infrastructure Manager"
              company="Clean Team Ghana Limited"
              time="March 2024 - December 2024"
              address="Kumasi, Ghana"
              companyLink="https://cleanteamtoilets.com"
              work="Led IT infrastructure and cloud initiatives, including Starlink deployment, AWS services optimization, and implementation of security systems. Successfully deployed a Python Django HRM system on GCP, managed Google Workspace administration, and established comprehensive IT documentation practices. Implemented significant cost optimization strategies while maintaining robust security measures."
            />

            <Details
              position="IT Officer"
              company="Ruma Fertility and Specialist Hospital"
              time="January 2022 - March 2024"
              address="Kumasi, Ghana"
              companyLink="#"
              work="Managed critical healthcare systems and data security, including server administration and fire suppression systems. Provided technical support for medical devices and healthcare software. Collaborated with research department on technical aspects of medical research projects. Maintained HIPAA compliance and implemented robust security measures for sensitive patient data."
            />

            <Details
              position="Web Developer"
              company="Onyintech Limited"
              time="October 2021 - December 2021"
              address="Remote, Ghana"
              companyLink="#"
              work="Developed and tested software programs using ReactJS. Led technical projects and collaborated with regulatory bodies for compliance. Contributed to technical specifications and assisted with system administration and database management."
            />

            <Details
              position="Technical Support"
              company="Faculty of Allied Health Science, KNUST"
              time="August 2020 - August 2021"
              address="Kumasi, Ghana"
              companyLink="https://knust.edu.gh"
              work="Managed computer systems maintenance and user support. Handled hardware configuration and technical troubleshooting. Ensured smooth operation of academic computing infrastructure and provided technical assistance to faculty and students."
            />
          </ul>
        </div>

        <div className="mt-32 md:mt-16 sm:mt-8 flex items-center justify-center">
          <Link
            href="/projects/"
            className="flex items-center rounded-lg border-2 border-solid bg-light/50 dark:bg-dark/50 backdrop-blur-xl p-3 px-8 text-lg font-semibold
              capitalize text-dark dark:text-light hover:border-primary dark:hover:border-primaryDark 
              hover:bg-primary/20 dark:hover:bg-primaryDark/20 
              border-dark/20 dark:border-light/20 shadow-lg relative overflow-hidden
              md:p-2 md:px-4 md:text-base sm:text-sm transition-all duration-300"
          >
            {/* Button Gradient Background */}
            <div className="absolute inset-0 bg-gradient-to-br from-light/40 via-primary/10 to-transparent dark:from-dark/40 dark:via-primaryDark/10 dark:to-transparent z-0"></div>
            <span className="relative z-10">View Projects</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Experience;
