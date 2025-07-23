import { motion } from "framer-motion";
import React, { useRef, useState } from "react";

const SkillCard = ({ title, skills, x, y, delay = 0, category, isActive, onClick, isOrbital = false, cardIndex = 0 }) => {
  // Dynamic z-index based on active state and card index
  const getZIndex = () => {
    if (isActive) return 50; // Active card always on top
    return 20 + cardIndex; // Base z-index + unique index for each card
  };

  return (
    <motion.div
      onClick={onClick}
      initial={{ opacity: 0, scale: 0.8, y: 50 }}
      whileInView={{ 
        opacity: 1, 
        scale: 1, 
        y: 0,
        x: x,
        transition: { duration: 0.6, delay: delay, ease: "easeOut" }
      }}
      whileHover={{ 
        scale: 1.05,
        y: -8,
        zIndex: 45, // Hovered cards get elevated
        transition: { duration: 0.2 }
      }}
      viewport={{ once: true }}
      className="absolute cursor-pointer transition-all duration-300"
      style={{ 
        left: '50%', 
        top: '50%', 
        transform: `translate(-50%, -50%) translate(${x}px, ${y}px)`,
        zIndex: getZIndex()
      }}
    >
      <div className={`relative p-4 rounded-2xl border-2 transition-all duration-300 overflow-hidden
        ${isActive 
          ? 'bg-light/80 dark:bg-dark/80 border-primary dark:border-primaryDark shadow-2xl scale-105' 
          : 'bg-light/50 dark:bg-dark/50 border-light/40 dark:border-dark/40 shadow-lg hover:shadow-xl'
        }
        backdrop-blur-xl w-56 lg:w-48 md:w-40 sm:w-32 xs:w-28`}
      >
        {/* Enhanced Background Gradients */}
        <div className="absolute inset-0 bg-gradient-to-br from-light/40 via-primary/8 to-transparent dark:from-dark/40 dark:via-primaryDark/8 dark:to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-tl from-transparent via-grey-light/15 to-transparent dark:from-transparent dark:via-grey-dark/15 dark:to-transparent"></div>
        
        {/* Content */}
        <div className="relative z-10">
          <div className="flex items-center mb-2 sm:mb-1">
            <div className={`w-3 h-3 rounded-full mr-2 sm:w-2 sm:h-2 sm:mr-1 ${category === 'core' ? 'bg-primary dark:bg-primaryDark' : 
              category === 'dev' ? 'bg-emerald-500' : 
              category === 'cloud' ? 'bg-blue-500' : 
              category === 'research' ? 'bg-purple-500' : 'bg-amber-500'}`}></div>
            <h3 className="font-bold text-base lg:text-sm md:text-xs sm:text-xs text-dark dark:text-light leading-tight">{title}</h3>
          </div>
          
          <div className="space-y-1 sm:space-y-0.5">
            {skills.slice(0, isActive ? skills.length : 3).map((skill, index) => (
              <div key={index} className="flex items-center">
                <div className="w-1.5 h-1.5 rounded-full bg-grey-dark/50 dark:bg-grey-light/50 mr-1.5 sm:mr-1 flex-shrink-0 sm:w-1 sm:h-1"></div>
                <span className="text-xs lg:text-xs md:text-xs sm:text-xs text-dark/90 dark:text-light/90 leading-tight">{skill}</span>
              </div>
            ))}
            {!isActive && skills.length > 3 && (
              <div className="text-xs text-primary dark:text-primaryDark font-medium sm:text-xs">
                +{skills.length - 3} more...
              </div>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const ConnectionLine = ({ startX, startY, endX, endY, delay = 0, isOrbital = false }) => {
  const deltaX = endX - startX;
  const deltaY = endY - startY;
  const length = Math.sqrt(deltaX * deltaX + deltaY * deltaY);
  const angle = Math.atan2(deltaY, deltaX) * (180 / Math.PI);

  return (
    <motion.div
      initial={{ scaleX: 0, opacity: 0 }}
      whileInView={{ scaleX: 1, opacity: isOrbital ? 0.7 : 0.5 }}
      transition={{ duration: 0.8, delay: delay, ease: "easeOut" }}
      viewport={{ once: true }}
      className="absolute pointer-events-none"
      style={{
        left: `calc(50% + ${startX}px)`,
        top: `calc(50% + ${startY}px)`,
        width: `${length}px`,
        height: isOrbital ? '3px' : '2px',
        transform: `rotate(${angle}deg)`,
        transformOrigin: 'left center',
        zIndex: 5 // Keep connection lines below cards
      }}
    >
      <div className={`w-full h-full rounded-full ${
        isOrbital 
          ? 'bg-gradient-to-r from-primary/60 via-primary/40 to-primary/20 dark:from-primaryDark/60 dark:via-primaryDark/40 dark:to-primaryDark/20 shadow-sm' 
          : 'bg-gradient-to-r from-primary/40 via-primary/25 to-transparent dark:from-primaryDark/40 dark:via-primaryDark/25 dark:to-transparent'
      }`}></div>
    </motion.div>
  );
};

const CenterHub = ({ delay = 0 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      whileInView={{ 
        opacity: 1, 
        scale: 1,
        transition: { duration: 0.8, delay: delay, ease: "easeOut" }
      }}
      viewport={{ once: true }}
      className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2"
      style={{ zIndex: 15 }} // Above connection lines but below cards
    >
      <div className="relative w-32 h-32 lg:w-28 lg:h-28 md:w-24 md:h-24 sm:w-20 sm:h-20 xs:w-16 xs:h-16">
        {/* Outer Orbital Ring */}
        <div className="absolute inset-0 rounded-full border-3 border-dashed border-primary/30 dark:border-primaryDark/30 animate-spin-slow sm:border-2"></div>
        
        {/* Middle Ring */}
        <div className="absolute inset-2 rounded-full border-2 border-dotted border-primary/20 dark:border-primaryDark/20 animate-reverse-spin sm:border-1 sm:inset-1"></div>
        
        {/* Center Circle */}
        <div className="absolute inset-4 rounded-full bg-light/80 dark:bg-dark/80 backdrop-blur-xl border-2 border-primary dark:border-primaryDark shadow-2xl overflow-hidden sm:inset-3 sm:border-1">
          {/* Enhanced Background Gradients */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary/30 via-transparent to-primary/15 dark:from-primaryDark/30 dark:via-transparent dark:to-primaryDark/15"></div>
          <div className="absolute inset-0 bg-gradient-to-tl from-transparent via-light/20 to-transparent dark:from-transparent dark:via-dark/20 dark:to-transparent"></div>
          
          {/* Content */}
          <div className="relative z-10 flex flex-col items-center justify-center h-full text-center p-1">
            <div className="text-xl lg:text-lg md:text-base sm:text-sm xs:text-xs font-bold text-dark dark:text-light mb-0.5 sm:mb-0">ED</div>
            <div className="text-xs lg:text-xs md:text-xs sm:text-xs xs:text-xs text-dark/80 dark:text-light/80 font-medium leading-tight">Tech Stack</div>
            <div className="text-xs lg:text-xs md:text-xs sm:text-xs xs:text-xs text-primary dark:text-primaryDark font-medium leading-tight">Hub</div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const Skills = () => {
  const [activeCard, setActiveCard] = useState(null);
  const ref = useRef(null);

  // Responsive orbital radius
  const getOrbitalRadius = () => {
    if (typeof window !== 'undefined') {
      if (window.innerWidth < 375) return 120;  // xs screens
      if (window.innerWidth < 640) return 140;  // sm screens
      if (window.innerWidth < 768) return 160;  // md screens
      if (window.innerWidth < 1024) return 180; // lg screens
    }
    return 200; // default for larger screens
  };

  const orbitalRadius = getOrbitalRadius();
  
  // Calculate positions for 4 cards in perfect circle around center
  const orbitalPositions = [
    { x: 0, y: -orbitalRadius }, // Top - 12 o'clock
    { x: orbitalRadius, y: 0 },  // Right - 3 o'clock  
    { x: 0, y: orbitalRadius },  // Bottom - 6 o'clock
    { x: -orbitalRadius, y: 0 }, // Left - 9 o'clock
  ];

  // Responsive secondary positions
  const getSecondaryPositions = () => {
    if (typeof window !== 'undefined') {
      if (window.innerWidth < 640) {
        return [
          { x: 220, y: -80 },  // Closer for mobile
          { x: -220, y: 80 }
        ];
      }
      if (window.innerWidth < 1024) {
        return [
          { x: 280, y: -90 },
          { x: -280, y: 90 }
        ];
      }
    }
    return [
      { x: 320, y: -100 },
      { x: -320, y: 100 }
    ];
  };

  const secondaryPositions = getSecondaryPositions();

  // Skills data with responsive positioning
  const skillsData = [
    {
      id: 'scientific-computing',
      title: 'Scientific Computing',
      category: 'core',
      skills: ['Rust Programming', 'Python Scientific Libraries', 'Data Analysis & Visualization', 'Statistical Analysis', 'Machine Learning', 'Research Methodology'],
      x: orbitalPositions[0].x, // Top
      y: orbitalPositions[0].y,
      delay: 0.2,
      isOrbital: true,
      cardIndex: 1
    },
    {
      id: 'frontend-dev',
      title: 'Frontend Development',
      category: 'dev',
      skills: ['Next.js', 'React.js', 'JavaScript (ES6+)', 'HTML5/CSS3', 'Tailwind CSS', 'Framer Motion', 'Responsive Design'],
      x: orbitalPositions[1].x, // Right
      y: orbitalPositions[1].y,
      delay: 0.4,
      isOrbital: true,
      cardIndex: 2
    },
    {
      id: 'backend-dev',
      title: 'Backend Development',
      category: 'dev',
      skills: ['FastAPI', 'Django', 'RESTful APIs', 'Python', 'Database Design', 'API Integration', 'Server Administration'],
      x: orbitalPositions[2].x, // Bottom
      y: orbitalPositions[2].y,
      delay: 0.6,
      isOrbital: true,
      cardIndex: 3
    },
    {
      id: 'cloud-infrastructure',
      title: 'Cloud & Infrastructure',
      category: 'cloud',
      skills: ['Amazon Web Services (AWS)', 'Google Cloud Platform (GCP)', 'Google Workspace', 'Network Administration', 'Remote Access Systems', 'Cost Optimization'],
      x: orbitalPositions[3].x, // Left
      y: orbitalPositions[3].y,
      delay: 0.8,
      isOrbital: true,
      cardIndex: 4
    },
    {
      id: 'data-security',
      title: 'Data & Security',
      category: 'cloud',
      skills: ['Database Management (MySQL, PostgreSQL)', 'Healthcare Data Protection', 'CCTV Systems', 'Network Security', 'Active Directory', 'Fire Suppression Systems'],
      x: secondaryPositions[0].x,
      y: secondaryPositions[0].y,
      delay: 1.0,
      isOrbital: false,
      cardIndex: 5
    },
    {
      id: 'research-tools',
      title: 'Research & Documentation',
      category: 'research',
      skills: ['McGill University Projects', 'Technical Documentation', 'Zotero & EndNote', 'iThenticate & Grammarly', 'Project Management', 'Staff Training'],
      x: secondaryPositions[1].x,
      y: secondaryPositions[1].y,
      delay: 1.2,
      isOrbital: false,
      cardIndex: 6
    }
  ];

  const connections = [
    // Orbital connections (stronger/thicker)
    { startX: 0, startY: 0, endX: orbitalPositions[0].x, endY: orbitalPositions[0].y, delay: 0.3, isOrbital: true },
    { startX: 0, startY: 0, endX: orbitalPositions[1].x, endY: orbitalPositions[1].y, delay: 0.5, isOrbital: true },
    { startX: 0, startY: 0, endX: orbitalPositions[2].x, endY: orbitalPositions[2].y, delay: 0.7, isOrbital: true },
    { startX: 0, startY: 0, endX: orbitalPositions[3].x, endY: orbitalPositions[3].y, delay: 0.9, isOrbital: true },
    
    // Additional connections (standard)
    { startX: 0, startY: 0, endX: secondaryPositions[0].x, endY: secondaryPositions[0].y, delay: 1.1, isOrbital: false },
    { startX: 0, startY: 0, endX: secondaryPositions[1].x, endY: secondaryPositions[1].y, delay: 1.3, isOrbital: false },
  ];

  return (
    <div className="w-full relative overflow-hidden py-12 sm:py-8">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-light/20 via-grey-light/10 to-transparent dark:from-dark/20 dark:via-grey-dark/10 dark:to-transparent"></div>
      <div className="absolute inset-0 bg-gradient-to-tl from-transparent via-primary/5 to-transparent dark:from-transparent dark:via-primaryDark/5 dark:to-transparent"></div>
      
      <div className="relative z-10 w-full">
        <motion.h2 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="font-bold text-7xl mt-16 mb-6 w-full text-center md:text-6xl sm:text-5xl xs:text-4xl md:mt-8 sm:mt-6 sm:mb-4 text-dark dark:text-light"
        >
          Technical Expertise
        </motion.h2>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-center text-lg md:text-base sm:text-sm text-dark/80 dark:text-light/80 mb-12 max-w-3xl mx-auto px-4 sm:mb-8 sm:px-2"
        >
          Core technologies orbiting around the central expertise hub. 
          Click on any skill area to explore in detail.
        </motion.p>
        
        <div
          ref={ref}
          className="w-full h-[100vh] relative flex items-center justify-center 
          mb-16 md:mb-8 lg:h-[90vh] md:h-[80vh] sm:h-[70vh] xs:h-[60vh]
          px-6 sm:px-2"
        >
          {/* Enhanced Container */}
          <div className="absolute inset-4 bg-light/8 dark:bg-dark/8 backdrop-blur-sm rounded-3xl border border-light/20 dark:border-dark/20 overflow-hidden shadow-xl sm:inset-2"
               style={{ zIndex: 1 }}>
            <div className="absolute inset-0 bg-gradient-to-br from-light/10 via-transparent to-primary/8 dark:from-dark/10 dark:via-transparent dark:to-primaryDark/8"></div>
            {/* Orbital ring indicator */}
            <div className={`absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 border border-dashed border-primary/15 dark:border-primaryDark/15 rounded-full`}
                 style={{ 
                   width: `${orbitalRadius * 2}px`, 
                   height: `${orbitalRadius * 2}px`,
                   zIndex: 2 
                 }}></div>
          </div>
          
          {/* Connection Lines */}
          {connections.map((connection, index) => (
            <ConnectionLine
              key={index}
              startX={connection.startX}
              startY={connection.startY}
              endX={connection.endX}
              endY={connection.endY}
              delay={connection.delay}
              isOrbital={connection.isOrbital}
            />
          ))}
          
          {/* Center Hub */}
          <CenterHub delay={0.1} />
          
          {/* Skill Cards */}
          {skillsData.map((skill) => (
            <SkillCard
              key={skill.id}
              title={skill.title}
              skills={skill.skills}
              x={skill.x}
              y={skill.y}
              delay={skill.delay}
              category={skill.category}
              isActive={activeCard === skill.id}
              onClick={() => setActiveCard(activeCard === skill.id ? null : skill.id)}
              isOrbital={skill.isOrbital}
              cardIndex={skill.cardIndex}
            />
          ))}
          
          {/* Legend */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.4 }}
            viewport={{ once: true }}
            className="absolute bottom-6 left-1/2 transform -translate-x-1/2 sm:bottom-4"
            style={{ zIndex: 30 }}
          >
            <div className="bg-light/60 dark:bg-dark/60 backdrop-blur-xl rounded-2xl p-3 border border-light/40 dark:border-dark/40 shadow-lg sm:p-2">
              <div className="flex flex-wrap justify-center gap-3 text-xs sm:gap-2 sm:text-xs">
                <div className="flex items-center">
                  <div className="w-2.5 h-2.5 rounded-full bg-primary dark:bg-primaryDark mr-1.5 sm:w-2 sm:h-2 sm:mr-1"></div>
                  <span className="text-dark dark:text-light">Core</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 mr-1.5 sm:w-2 sm:h-2 sm:mr-1"></div>
                  <span className="text-dark dark:text-light">Development</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2.5 h-2.5 rounded-full bg-blue-500 mr-1.5 sm:w-2 sm:h-2 sm:mr-1"></div>
                  <span className="text-dark dark:text-light">Infrastructure</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2.5 h-2.5 rounded-full bg-purple-500 mr-1.5 sm:w-2 sm:h-2 sm:mr-1"></div>
                  <span className="text-dark dark:text-light">Research</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
