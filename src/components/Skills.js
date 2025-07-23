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
      <div className={`relative p-6 rounded-2xl border-2 transition-all duration-300 overflow-hidden
        ${isActive 
          ? 'bg-light/80 dark:bg-dark/80 border-primary dark:border-primaryDark shadow-2xl scale-105' 
          : 'bg-light/50 dark:bg-dark/50 border-light/40 dark:border-dark/40 shadow-lg hover:shadow-xl'
        }
        backdrop-blur-xl w-60 lg:w-52 md:w-44 sm:w-36`}
      >
        {/* Enhanced Background Gradients */}
        <div className="absolute inset-0 bg-gradient-to-br from-light/40 via-primary/8 to-transparent dark:from-dark/40 dark:via-primaryDark/8 dark:to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-tl from-transparent via-grey-light/15 to-transparent dark:from-transparent dark:via-grey-dark/15 dark:to-transparent"></div>
        
        {/* Content */}
        <div className="relative z-10">
          <div className="flex items-center mb-3">
            <div className={`w-3 h-3 rounded-full mr-3 ${category === 'core' ? 'bg-primary dark:bg-primaryDark' : 
              category === 'dev' ? 'bg-emerald-500' : 
              category === 'cloud' ? 'bg-blue-500' : 
              category === 'research' ? 'bg-purple-500' : 'bg-amber-500'}`}></div>
            <h3 className="font-bold text-lg lg:text-base md:text-sm text-dark dark:text-light leading-tight">{title}</h3>
          </div>
          
          <div className="space-y-2">
            {skills.slice(0, isActive ? skills.length : 3).map((skill, index) => (
              <div key={index} className="flex items-center">
                <div className="w-2 h-2 rounded-full bg-grey-dark/50 dark:bg-grey-light/50 mr-2 flex-shrink-0"></div>
                <span className="text-sm lg:text-xs text-dark/90 dark:text-light/90 leading-tight">{skill}</span>
              </div>
            ))}
            {!isActive && skills.length > 3 && (
              <div className="text-xs text-primary dark:text-primaryDark font-medium">
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
      <div className="relative w-36 h-36 lg:w-32 lg:h-32 md:w-28 md:h-28 sm:w-24 sm:h-24">
        {/* Outer Orbital Ring */}
        <div className="absolute inset-0 rounded-full border-3 border-dashed border-primary/30 dark:border-primaryDark/30 animate-spin-slow"></div>
        
        {/* Middle Ring */}
        <div className="absolute inset-2 rounded-full border-2 border-dotted border-primary/20 dark:border-primaryDark/20 animate-reverse-spin"></div>
        
        {/* Center Circle */}
        <div className="absolute inset-5 rounded-full bg-light/80 dark:bg-dark/80 backdrop-blur-xl border-2 border-primary dark:border-primaryDark shadow-2xl overflow-hidden">
          {/* Enhanced Background Gradients */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary/30 via-transparent to-primary/15 dark:from-primaryDark/30 dark:via-transparent dark:to-primaryDark/15"></div>
          <div className="absolute inset-0 bg-gradient-to-tl from-transparent via-light/20 to-transparent dark:from-transparent dark:via-dark/20 dark:to-transparent"></div>
          
          {/* Content */}
          <div className="relative z-10 flex flex-col items-center justify-center h-full text-center p-2">
            <div className="text-2xl lg:text-xl md:text-lg sm:text-base font-bold text-dark dark:text-light mb-1">ED</div>
            <div className="text-xs lg:text-xs md:text-xs sm:text-xs text-dark/80 dark:text-light/80 font-medium">Tech Stack</div>
            <div className="text-xs lg:text-xs md:text-xs sm:text-xs text-primary dark:text-primaryDark font-medium">Hub</div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const Skills = () => {
  const [activeCard, setActiveCard] = useState(null);
  const ref = useRef(null);

  // Adjusted orbital radius and positions for better spacing
  const orbitalRadius = 200;
  
  // Calculate positions for 4 cards in perfect circle around center
  const orbitalPositions = [
    { x: 0, y: -orbitalRadius }, // Top - 12 o'clock
    { x: orbitalRadius, y: 0 },  // Right - 3 o'clock  
    { x: 0, y: orbitalRadius },  // Bottom - 6 o'clock
    { x: -orbitalRadius, y: 0 }, // Left - 9 o'clock
  ];

  // Skills data with proper spacing and indexing
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
      x: 320,
      y: -100,
      delay: 1.0,
      isOrbital: false,
      cardIndex: 5
    },
    {
      id: 'research-tools',
      title: 'Research & Documentation',
      category: 'research',
      skills: ['McGill University Projects', 'Technical Documentation', 'Zotero & EndNote', 'iThenticate & Grammarly', 'Project Management', 'Staff Training'],
      x: -320,
      y: 100,
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
    { startX: 0, startY: 0, endX: 320, endY: -100, delay: 1.1, isOrbital: false },
    { startX: 0, startY: 0, endX: -320, endY: 100, delay: 1.3, isOrbital: false },
  ];

  return (
    <div className="w-full relative overflow-hidden py-16">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-light/20 via-grey-light/10 to-transparent dark:from-dark/20 dark:via-grey-dark/10 dark:to-transparent"></div>
      <div className="absolute inset-0 bg-gradient-to-tl from-transparent via-primary/5 to-transparent dark:from-transparent dark:via-primaryDark/5 dark:to-transparent"></div>
      
      <div className="relative z-10 w-full">
        <motion.h2 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="font-bold text-7xl mt-20 mb-8 w-full text-center md:text-6xl sm:text-5xl xs:text-4xl md:mt-12 text-dark dark:text-light"
        >
          Technical Expertise
        </motion.h2>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-center text-lg md:text-base sm:text-sm text-dark/80 dark:text-light/80 mb-16 max-w-3xl mx-auto px-4"
        >
          Core technologies orbiting around the central expertise hub. 
          Click on any skill area to explore in detail.
        </motion.p>
        
        <div
          ref={ref}
          className="w-full h-[110vh] relative flex items-center justify-center 
          mb-20 md:mb-12 lg:h-[100vh] md:h-[90vh] sm:h-[80vh] xs:h-[70vh]
          px-8 sm:px-4"
        >
          {/* Enhanced Container */}
          <div className="absolute inset-6 bg-light/8 dark:bg-dark/8 backdrop-blur-sm rounded-3xl border border-light/20 dark:border-dark/20 overflow-hidden shadow-xl"
               style={{ zIndex: 1 }}>
            <div className="absolute inset-0 bg-gradient-to-br from-light/10 via-transparent to-primary/8 dark:from-dark/10 dark:via-transparent dark:to-primaryDark/8"></div>
            {/* Orbital ring indicator */}
            <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] border border-dashed border-primary/15 dark:border-primaryDark/15 rounded-full"
                 style={{ zIndex: 2 }}></div>
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
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
            style={{ zIndex: 30 }}
          >
            <div className="bg-light/60 dark:bg-dark/60 backdrop-blur-xl rounded-2xl p-4 border border-light/40 dark:border-dark/40 shadow-lg">
              <div className="flex flex-wrap justify-center gap-4 text-xs">
                <div className="flex items-center">
                  <div className="w-3 h-3 rounded-full bg-primary dark:bg-primaryDark mr-2"></div>
                  <span className="text-dark dark:text-light">Core</span>
                </div>
                <div className="flex items-center">
                  <div className="w-3 h-3 rounded-full bg-emerald-500 mr-2"></div>
                  <span className="text-dark dark:text-light">Development</span>
                </div>
                <div className="flex items-center">
                  <div className="w-3 h-3 rounded-full bg-blue-500 mr-2"></div>
                  <span className="text-dark dark:text-light">Infrastructure</span>
                </div>
                <div className="flex items-center">
                  <div className="w-3 h-3 rounded-full bg-purple-500 mr-2"></div>
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
