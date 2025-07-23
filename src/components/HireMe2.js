import Link from "next/link";
import React from "react";
import Image from "next/image";
import CText from "../../public/images/CircularText.png";

export const HireMe2 = () => {
  return (
    <div className="fixed right-4 bottom-4 flex flex-col items-center justify-center 
    lg:right-8 lg:bottom-4 md:right-4 md:bottom-4 sm:right-4 sm:bottom-4
    overflow-hidden z-50">
      <div className="w-full h-full flex items-center justify-center lg:w-24 md:w-20 sm:w-16">
        <Image
          priority={false}
          src={CText}
          alt="Connect with Emmanuel Dotse Azilafu"
          height={120}
          width={120}
          className="fill-dark dark:fill-light animate-spin-slow duration-200 lg:h-[120px] lg:w-[120px] md:h-[100px] md:w-[100px] sm:h-[80px] sm:w-[80px]"
        />

        <Link
          href="/contact"
          className="flex items-center justify-center absolute left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%]
            bg-primary rounded-full text-light font-semibold 
            hover:bg-light hover:border-primary hover:text-primary border-2 border-transparent
            hover:border-primary transition-all duration-300
            dark:bg-primaryDark dark:text-light dark:hover:bg-dark
            dark:hover:text-light dark:hover:border-light
            w-16 h-16 text-[11px] lg:w-16 lg:h-16 lg:text-[11px] 
            md:w-14 md:h-14 md:text-[10px] sm:w-12 sm:h-12 sm:text-[8px]"
        >
          <span className="font-bold">Contact</span>
        </Link>
      </div>
    </div>
  );
};
