import { motion } from "framer-motion";
import React, { useState } from "react";

const SkillCard = ({ title, skills, category, delay = 0, isActive, onClick }) => {
  const categoryColors = {
    core: 'bg-primary dark:bg-primaryDark',
    dev: 'bg-emerald-500',
    cloud: 'bg-blue-500',
    research: 'bg-purple-500',
    security: 'bg-amber-500'
  };

  return (
    <motion.div
      onClick={onClick}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: delay, ease: "easeOut" }}
      whileHover={{ y: -5, transition: { duration: 0.2 } }}
      viewport={{ once: true }}
      className="cursor-pointer"
    >
      <div className={`relative p-5 rounded-2xl border-2 transition-all duration-300 h-full
        ${isActive
          ? 'bg-light dark:bg-dark border-primary dark:border-primaryDark shadow-xl'
          : 'bg-light/80 dark:bg-dark/80 border-dark/10 dark:border-light/20 shadow-lg hover:border-primary/50 dark:hover:border-primaryDark/50'
        }`}
      >
        {/* Top accent bar */}
        <div className={`absolute top-0 left-0 right-0 h-1 rounded-t-2xl ${categoryColors[category]}`}></div>

        {/* Content */}
        <div className="relative z-10">
          <div className="flex items-center mb-3">
            <div className={`w-3 h-3 rounded-full mr-2 ${categoryColors[category]}`}></div>
            <h3 className="font-bold text-lg md:text-base text-dark dark:text-light">{title}</h3>
          </div>

          <div className="space-y-2">
            {skills.slice(0, isActive ? skills.length : 4).map((skill, index) => (
              <div key={index} className="flex items-start">
                <div className="w-1.5 h-1.5 rounded-full bg-dark/40 dark:bg-light/40 mr-2 mt-1.5 flex-shrink-0"></div>
                <span className="text-sm text-dark/80 dark:text-light/80">{skill}</span>
              </div>
            ))}
            {!isActive && skills.length > 4 && (
              <div className="text-sm text-primary dark:text-primaryDark font-medium pt-1">
                +{skills.length - 4} more...
              </div>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const Skills = () => {
  const [activeCard, setActiveCard] = useState(null);

  const skillsData = [
    {
      id: 'scientific-computing',
      title: 'Scientific Computing',
      category: 'core',
      skills: ['Rust Programming', 'Python Scientific Libraries', 'Data Analysis & Visualization', 'Statistical Analysis', 'Machine Learning', 'Research Methodology'],
      delay: 0.1
    },
    {
      id: 'backend-dev',
      title: 'Backend Development',
      category: 'dev',
      skills: ['FastAPI', 'Django', 'RESTful APIs', 'Python', 'Database Design', 'API Integration', 'Server Administration'],
      delay: 0.2
    },
    {
      id: 'frontend-dev',
      title: 'Frontend Development',
      category: 'dev',
      skills: ['Next.js', 'React.js', 'JavaScript (ES6+)', 'HTML5/CSS3', 'Tailwind CSS', 'Framer Motion', 'Responsive Design'],
      delay: 0.3
    },
    {
      id: 'cloud-infrastructure',
      title: 'Cloud & Infrastructure',
      category: 'cloud',
      skills: ['Amazon Web Services (AWS)', 'Google Cloud Platform (GCP)', 'Google Workspace', 'Network Administration', 'Remote Access Systems', 'Cost Optimization'],
      delay: 0.4
    },
    {
      id: 'data-security',
      title: 'Data & Security',
      category: 'security',
      skills: ['Database Management (MySQL, PostgreSQL)', 'Healthcare Data Protection', 'CCTV Systems', 'Network Security', 'Active Directory', 'Fire Suppression Systems'],
      delay: 0.5
    },
    {
      id: 'research-tools',
      title: 'Research & Documentation',
      category: 'research',
      skills: ['McGill University Projects', 'Technical Documentation', 'Zotero & EndNote', 'iThenticate & Grammarly', 'Project Management', 'Staff Training'],
      delay: 0.6
    }
  ];

  const categories = [
    { id: 'core', label: 'Core', color: 'bg-primary dark:bg-primaryDark' },
    { id: 'dev', label: 'Development', color: 'bg-emerald-500' },
    { id: 'cloud', label: 'Infrastructure', color: 'bg-blue-500' },
    { id: 'security', label: 'Security', color: 'bg-amber-500' },
    { id: 'research', label: 'Research', color: 'bg-purple-500' }
  ];

  return (
    <div className="w-full relative py-16 md:py-12 sm:py-8">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-light via-light/95 to-light/90 dark:from-dark dark:via-dark/95 dark:to-dark/90"></div>
      <div className="absolute inset-0 bg-gradient-to-tl from-primary/5 via-transparent to-primary/10 dark:from-primaryDark/5 dark:via-transparent dark:to-primaryDark/10"></div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 sm:px-4">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="font-bold text-4xl mb-4 w-full text-center md:text-3xl sm:text-2xl text-dark dark:text-light"
        >
          Technical Expertise
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
          className="text-center text-dark/70 dark:text-light/70 mb-8 max-w-2xl mx-auto sm:text-sm sm:mb-6"
        >
          Full-stack development and infrastructure expertise. Click any skill area to see more details.
        </motion.p>

        {/* Category Legend */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.15 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-4 mb-10 sm:gap-3 sm:mb-8"
        >
          {categories.map((cat) => (
            <div key={cat.id} className="flex items-center">
              <div className={`w-3 h-3 rounded-full ${cat.color} mr-2 sm:w-2 sm:h-2`}></div>
              <span className="text-sm text-dark/80 dark:text-light/80 sm:text-xs">{cat.label}</span>
            </div>
          ))}
        </motion.div>

        {/* Skills Grid */}
        <div className="grid grid-cols-3 gap-6 lg:grid-cols-2 md:gap-4 sm:grid-cols-1">
          {skillsData.map((skill) => (
            <SkillCard
              key={skill.id}
              title={skill.title}
              skills={skill.skills}
              category={skill.category}
              delay={skill.delay}
              isActive={activeCard === skill.id}
              onClick={() => setActiveCard(activeCard === skill.id ? null : skill.id)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;

