import React from 'react';
import BoxReveal from './ui/box-reveal';

const Hero = () => {
  return (
    <div className="flex flex-col justify-center h-full max-w-5xl gap-4 flex-wrap items-center pt-20 pb-10 px-4 m-auto text-center">
      <BoxReveal boxColor={'#5046e6'} duration={0.5}>
        <p className="text-xl">I am</p>
      </BoxReveal>
      <BoxReveal boxColor={'#5046e6'} duration={0.5}>
        <p className="text-4xl sm:text-4xl md:text-4xl lg:text-6xl xl:text-6xl font-semibold">
          Muhammad <span className="text-primary"> Faisal </span>
          Ibnu Prady
          {/* <span className="text-primary">.</span> */}
        </p>
      </BoxReveal>

      <BoxReveal boxColor={'#5046e6'} duration={0.5}>
        <p className="text-lg">
          Berlin based Fullstack Developer.
          <br />I create websites, software, and solutions that make your
          business thrive!
          {/* specializing in crafting responsive and user-friendly websites
          to your needs.
          <br />
          My experience ranges from a simple static webpage to a complex single
          page application. */}
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
          alt="Picture of the author"
        />
      </div> */}
    </div>
  );
};

export default Hero;
