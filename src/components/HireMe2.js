import Link from "next/link";
import React from "react";
import Image from "next/image";
import CText from "../../public/images/CircularText.png";

export const HireMe2 = () => {
  return (
    <div className="fixed right-4 bottom-4 flex flex-col items-center justify-center md:right-8 sm:right-0 
    overflow-hidden md:bottom-auto md:left-auto md:top-0 md:absolute z-50">
      <div className="w-full h-full flex items-center justify-center md:w-20">
        <Image
          priority={false}
          src={CText}
          alt="Connect with Emmanuel Dotse Azilafu"
          height={120}
          width={120}
          className="fill-dark dark:fill-light animate-spin-slow duration-200"
        />

        <Link
          href="/contact"
          className="flex items-center justify-center absolute left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%]
            bg-primary rounded-full text-light w-16 h-16 text-[11px] font-semibold 
            hover:bg-light hover:border-primary hover:text-primary border-2 border-transparent
            hover:border-primary transition-all duration-300
            dark:bg-primaryDark dark:text-light dark:hover:bg-dark
            dark:hover:text-light dark:hover:border-light
            md:w-12 md:h-12 md:text-[9px]"
        >
          <span className="font-bold">Contact</span>
        </Link>
      </div>
    </div>
  );
};
