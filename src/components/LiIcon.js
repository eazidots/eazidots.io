import { motion, useScroll } from "framer-motion";

const LiIcon = ({ reference, time }) => {
  const { scrollYProgress } = useScroll({
    target: reference,
    offset: ["center end", "center center"],
    layoutEffect: false,
  });

  return (
    <figure className="stroke-dark absolute left-0 dark:stroke-light">
      <div className="relative bg-light/40 dark:bg-dark/40 backdrop-blur-xl rounded-full p-2 border border-dark/10 dark:border-light/10 shadow-lg">
        {/* Icon Background Gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-light/30 via-primary/10 to-transparent dark:from-dark/30 dark:via-primaryDark/10 dark:to-transparent z-0 rounded-full"></div>
        
        <svg
          className="-rotate-90 md:w-[60px] md:h-[60px] xs:w-[40px] xs:h-[40px] relative z-10"
          width="75"
          height="75"
          viewBox="0 0 100 100"
        >
          <circle
            cx="75"
            cy="50"
            r="20"
            pathLength="1"
            className="stroke-primary stroke-1 fill-none dark:stroke-primaryDark"
          />
          <motion.circle
            cx="75"
            cy="50"
            r="20"
            pathLength="1"
            className="fill-light/90 dark:fill-dark/90 stroke-[5px] backdrop-blur-sm"
            style={{ pathLength: scrollYProgress }}
          />
          <circle
            cx="75"
            cy="50"
            r="10"
            pathLength="1"
            className="animate-pulse stroke-1 fill-primary/80 dark:fill-primaryDark/80"
          />
        </svg>
      </div>
    </figure>
  );
};

export default LiIcon;
