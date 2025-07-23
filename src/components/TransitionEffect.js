import { motion } from "framer-motion";
import React from "react";

const TransitionEffect = () => {
  return (
    <>
      {/* Left Curtain Panel */}
      <motion.div
        className="fixed top-0 bottom-0 left-0 w-1/2 h-screen z-30 bg-primary"
        initial={{ x: "0%", width: "50%" }}
        animate={{ x: "-100%", width: "0%" }}
        exit={{ x: ["-100%", "0%"], width: ["0%", "50%"] }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
      />
      <motion.div
        className="fixed top-0 bottom-0 left-0 w-1/2 h-screen z-20 bg-coffee-light"
        initial={{ x: "0%", width: "50%" }}
        animate={{ x: "-100%", width: "0%" }}
        transition={{ delay: 0.1, duration: 0.8, ease: "easeInOut" }}
      />
      <motion.div
        className="fixed top-0 bottom-0 left-0 w-1/2 h-screen z-10 bg-coffee-dark"
        initial={{ x: "0%", width: "50%" }}
        animate={{ x: "-100%", width: "0%" }}
        transition={{ delay: 0.2, duration: 0.8, ease: "easeInOut" }}
      />
      <motion.div
        className="fixed top-0 bottom-0 left-0 w-1/2 h-screen z-5 bg-grey-darkest"
        initial={{ x: "0%", width: "50%" }}
        animate={{ x: "-100%", width: "0%" }}
        transition={{ delay: 0.3, duration: 0.8, ease: "easeInOut" }}
      />

      {/* Right Curtain Panel */}
      <motion.div
        className="fixed top-0 bottom-0 right-0 w-1/2 h-screen z-30 bg-primary"
        initial={{ x: "0%", width: "50%" }}
        animate={{ x: "100%", width: "0%" }}
        exit={{ x: ["100%", "0%"], width: ["0%", "50%"] }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
      />
      <motion.div
        className="fixed top-0 bottom-0 right-0 w-1/2 h-screen z-20 bg-coffee-light"
        initial={{ x: "0%", width: "50%" }}
        animate={{ x: "100%", width: "0%" }}
        transition={{ delay: 0.1, duration: 0.8, ease: "easeInOut" }}
      />
      <motion.div
        className="fixed top-0 bottom-0 right-0 w-1/2 h-screen z-10 bg-coffee-dark"
        initial={{ x: "0%", width: "50%" }}
        animate={{ x: "100%", width: "0%" }}
        transition={{ delay: 0.2, duration: 0.8, ease: "easeInOut" }}
      />
      <motion.div
        className="fixed top-0 bottom-0 right-0 w-1/2 h-screen z-5 bg-grey-darkest"
        initial={{ x: "0%", width: "50%" }}
        animate={{ x: "100%", width: "0%" }}
        transition={{ delay: 0.3, duration: 0.8, ease: "easeInOut" }}
      />
    </>
  );
};

export default TransitionEffect;
