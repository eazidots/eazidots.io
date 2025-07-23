import { motion } from "framer-motion";
import Link from "next/link";
import React from "react";

let MotionLink = motion(Link);

const Logo = () => {
  return (
    <div className="flex flex-col items-center justify-center mt-2">
      <MotionLink
        href="/"
        className="flex items-center justify-center rounded-full w-16 h-18 bg-light/40 dark:bg-dark/40 backdrop-blur-xl text-dark dark:text-light 
        border border-dark/20 dark:border-light/20 shadow-lg relative overflow-hidden"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        {/* Logo Background Gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-light/30 via-primary/10 to-transparent dark:from-dark/30 dark:via-primaryDark/10 dark:to-transparent z-0 rounded-full"></div>
        
        <img
          src="/NexTemp-logo.png"
          alt="Logo"
          className="w-10 h-10 object-contain rounded-full py-2 px-2 relative z-10"
        />
      </MotionLink>
    </div>
  );
};

export default Logo;
