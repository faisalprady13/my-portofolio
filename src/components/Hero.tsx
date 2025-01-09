import React from 'react';
import BoxReveal from './ui/box-reveal';
import { ChevronDownIcon } from '@radix-ui/react-icons';
import Link from 'next/link';

const Hero = () => {
  return (
    <div className="relative flex flex-col justify-center h-full max-w-5xl gap-4 flex-wrap items-center pt-20 pb-10 px-4 m-auto text-center">
      <BoxReveal boxColor={'#5046e6'} duration={0.5}>
        <p className="text-xl">I am</p>
      </BoxReveal>
      <BoxReveal boxColor={'#5046e6'} duration={0.5}>
        <p className="text-4xl sm:text-4xl md:text-4xl lg:text-6xl xl:text-6xl font-semibold">
          Muhammad <span className="text-primary"> Faisal </span>
          Ibnu Prady
        </p>
      </BoxReveal>

      <BoxReveal boxColor={'#5046e6'} duration={0.5}>
        <p className="text-lg  tracking-wide">
          Berlin based Fullstack Developer.
          <br />I create websites, software, and solutions that make your
          business thrive!
        </p>
      </BoxReveal>
      <div className="absolute w-full flex justify-center bottom-6 left-0">
        <Link
          href="#story"
          className="bg-foreground rounded-full p-1 animate-bounce cursor-pointer"
        >
          <ChevronDownIcon className="h-9 w-9 text-primary " />
        </Link>
      </div>
    </div>
  );
};

export default Hero;
