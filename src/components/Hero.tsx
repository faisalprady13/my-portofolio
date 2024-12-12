import React from 'react';
import BoxReveal from './ui/box-reveal';
import Image from 'next/image';

const Hero = () => {
  return (
    <div className="flex flex-row justify-between size-full flex-wrap items-center pt-20 pb-10 px-6 md:px-16 gap-2">
      <div className="w-full md:max-w-min md:w-1/2 items-center justify-center overflow-hidden pt-8">
        <BoxReveal boxColor={'#5046e6'} duration={0.5}>
          <p className="text-[2rem] sm:text-[4rem] md:text-[3rem] lg:text-[4.8rem] xl:text-[6rem] font-semibold">
            FRONT-END DEVELOPER<span className="text-[#5046e6]">.</span>
          </p>
        </BoxReveal>

        <BoxReveal boxColor={'#5046e6'} duration={0.5}>
          <p className="mt-[.5rem] text-[1rem]">
            Welcome to my portfolio!
            <br />
            I'm <span className="text-[#5046e6]"> Faisal</span>, a frontend
            developer specializing in crafting engaging, responsive, and
            user-friendly websites.
          </p>
        </BoxReveal>

        {/* <BoxReveal boxColor={"#5046e6"} duration={0.5}>
          <Button className="mt-[1.6rem] bg-[#5046e6]">Explore</Button>
        </BoxReveal> */}
      </div>

      <div className="hidden md:block h-4/6 lg:h-5/6 w-5/12 relative">
        <Image
          className="rounded-2xl object-cover"
          src="/profile.jpg"
          fill
          sizes="(max-width: 767px) 0vw,33vw"
          priority
          alt="Picture of the author"
        />
      </div>
    </div>
  );
};

export default Hero;
