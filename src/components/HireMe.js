import Link from "next/link";
import React from "react";
import Image from "next/image";
import CText from "../../public/images/CircularText.png";

export const HireMe = () => {
  return (
    <div className="fixed left-4 bottom-4 flex flex-col items-center justify-center md:right-8 sm:right-0 
    overflow-hidden md:bottom-auto md:left-auto md:top-0 md:absolute z-50">
      <div className="w-full h-full flex items-center justify-center md:w-24 relative">
        <Image
          priority={false}
          src={CText}
          alt="Connect with Emmanuel"
          height={160}
          width={160}
          className="fill-dark dark:fill-light animate-spin-slow duration-200"
        />

        <Link
          href="/contact"
          className="flex items-center justify-center absolute left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%] 
            bg-primary/90 dark:bg-primaryDark/90 backdrop-blur-xl rounded-full text-light w-24 h-24 text-[15px] font-semibold 
            hover:bg-light/90 hover:border-primary hover:text-primary border-2 border-primary/20 dark:border-primaryDark/20
            hover:border-primary dark:hover:border-light transition-all duration-300 shadow-lg
            dark:hover:bg-dark/90 dark:hover:text-light relative overflow-hidden
            md:w-16 md:h-16 md:text-[12px]"
        >
          {/* Button Gradient Background */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-primaryDark/20 dark:from-primaryDark/20 dark:via-transparent dark:to-primary/20 z-0 rounded-full"></div>
          
          <div className="flex flex-col items-center relative z-10">
            <span className="font-bold">Let's</span>
            <span className="font-bold">Connect</span>
          </div>
        </Link>
      </div>
    </div>
  );
};
