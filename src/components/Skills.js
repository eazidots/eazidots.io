import { motion } from "framer-motion";
import React, { useRef } from "react";

const Skill = ({ name, x, y }) => {
  const ref = useRef(null);
  return (
    <motion.div
      ref={ref}
      whileHover={{ scale: 1.05 }}
      initial={{ x: 0, y: 0 }}
      whileInView={{ x: x, y: y, transition: { duration: 1.5 } }}
      viewport={{ once: true }}
      className="cursor-default w-max origin-center absolute 
       font-semibold bg-light/40 dark:bg-dark/40 backdrop-blur-xl text-dark dark:text-light py-3 px-6 rounded-full 
       border border-dark/10 dark:border-light/10 shadow-lg
       lg:py-2 lg:px-4 md:text-sm md:py-1.5 md:px-3 xs:bg-transparent xs:dark:bg-transparent xs:text-dark xs:dark:text-light xs:font-bold
       relative overflow-hidden
       "
    >
      {/* Skill Bubble Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-light/30 via-grey-light/15 to-transparent dark:from-dark/30 dark:via-grey-dark/15 dark:to-transparent z-0 xs:hidden"></div>
      <div className="absolute inset-0 bg-gradient-to-tl from-transparent via-primary/4 to-transparent dark:from-transparent dark:via-primaryDark/4 dark:to-transparent z-0 xs:hidden"></div>
      
      {/* Skill Text */}
      <span className="relative z-10">{name}</span>
    </motion.div>
  );
};

const Skills = () => {
  const ref = useRef(null);
  return (
    <div className="relative overflow-hidden">
      {/* Skills Section Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-light/20 via-grey-light/10 to-transparent dark:from-dark/20 dark:via-grey-dark/10 dark:to-transparent z-0"></div>
      <div className="absolute inset-0 bg-gradient-to-tl from-transparent via-primary/3 to-transparent dark:from-transparent dark:via-primaryDark/3 dark:to-transparent z-0"></div>
      
      <div className="relative z-10">
        <h2 className="font-bold text-8xl mt-64 w-full text-center md:text-6xl md:mt-32 text-dark dark:text-light">
          Skills
        </h2>
        <div
          ref={ref}
          className="w-full h-[100vh] relative bg-circularLight dark:bg-circularDark flex items-center justify-center 
        mb-64 md:mb-32 rounded-full backdrop-blur-sm
        lg:bg-circularLightLg lg:dark:bg-circularDarkLg md:bg-circularLightMd md:dark:bg-circularDarkMd 
        sm:bg-circularLightSm sm:dark:bg-circularDarkSm lg:h-[80vh] sm:h-[60vh] xs:h-[50vh] 
        border border-light/10 dark:border-dark/10 overflow-hidden
        "
        >
          {/* Central Hub Gradient Background */}
          <div className="absolute inset-0 bg-gradient-to-br from-light/10 via-transparent to-dark/10 dark:from-dark/10 dark:via-transparent dark:to-light/10 z-0"></div>
          
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="cursor-default flex rounded-full font-semibold bg-light/50 dark:bg-dark/50 backdrop-blur-xl text-dark dark:text-light px-6 py-7 shadow-lg
          border border-dark/20 dark:border-light/20 relative overflow-hidden z-10
          lg:p-6 md:p-4 xs:text-xs xs:p-2
          "
          >
            {/* Central Hub Inner Gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-light/40 via-primary/10 to-transparent dark:from-dark/40 dark:via-primaryDark/10 dark:to-transparent z-0"></div>
            <span className="relative z-10">Tech Stack</span>
          </motion.div>

          {/* Development Skills */}
          <Skill name="Next.js" x="-20vw" y="-15vw" />
          <Skill name="React" x="-25vw" y="18vw" />
          <Skill name="FastAPI" x="20vw" y="6vw" />
          <Skill name="Django" x="0vw" y="12vw" />
          <Skill name="Rust" x="-20vw" y="2vw" />
          <Skill name="Python" x="-5vw" y="-10vw" />

          {/* Infrastructure & Cloud */}
          <Skill name="AWS" x="15vw" y="-12vw" />
          <Skill name="GCP" x="-35vw" y="-5vw" />
          <Skill name="Network Systems" x="32vw" y="-5vw" />

          {/* Databases & Tools */}
          <Skill name="PostgreSQL" x="0vw" y="-20vw" />
          <Skill name="MySQL" x="28vw" y="18vw" />
          <Skill name="Git" x="-15vw" y="-8vw" />

          {/* Scientific Computing */}
          <Skill name="Data Analysis" x="25vw" y="-18vw" />
          <Skill name="Statistical Analysis" x="-28vw" y="8vw" />
          <Skill name="Machine Learning" x="18vw" y="15vw" />

          {/* Additional Skills */}
          <Skill name="API Development" x="-18vw" y="-22vw" />
          <Skill name="System Design" x="22vw" y="-8vw" />
          <Skill name="Security Systems" x="-8vw" y="22vw" />
        </div>
      </div>
    </div>
  );
};

export default Skills;
