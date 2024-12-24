import React from 'react';
import BoxReveal from './ui/box-reveal';

const Hero = () => {
  return (
    <div className="flex flex-col justify-center size-full flex-wrap items-center pt-20 pb-10 px-6 md:px-16">
      <BoxReveal boxColor={'#5046e6'} duration={0.5}>
        <p className="mt-[.5rem] text-xl">I am</p>
      </BoxReveal>
      <BoxReveal boxColor={'#5046e6'} duration={0.5}>
        <p className="text-[2rem] sm:text-[4rem] md:text-[2rem] lg:text-[3.8rem] xl:text-6xl font-semibold">
          Muhammad <span className="text-primary"> Faisal </span>
          Ibnu Prady
          {/* <span className="text-primary">.</span> */}
        </p>
      </BoxReveal>

      <BoxReveal boxColor={'#5046e6'} duration={0.5}>
        <p className="mt-[.5rem] text-[1rem]">
          Welcome to my portfolio!
          <br />
          <br />
          I&apos;m <span className="text-primary"> Faisal</span>, a frontend
          developer specializing in crafting responsive and user-friendly
          websites to your needs.
          {/* My experience ranges from a simple static app to a complex
            single page application. */}
        </p>
      </BoxReveal>

      {/* <BoxReveal boxColor={"#5046e6"} duration={0.5}>
          <Button className="mt-[1.6rem] bg-primary">Explore</Button>
        </BoxReveal> */}
      {/* <div className="hidden md:block h-4/6 lg:h-5/6 w-5/12 relative">
        <Image
          className="rounded-2xl object-cover"
          src="/images/profile.png"
          fill
          sizes="(max-width: 767px) 0vw,33vw"
          placeholder="blur"
          blurDataURL={'/images/profile.png'}
          alt="Picture of the author"
        />
      </div> */}
    </div>
  );
};

export default Hero;
