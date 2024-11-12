import React from "react";
import BoxReveal from "./ui/box-reveal";
import Image from "next/image";

const Hero = () => {
  return (
    <div className="flex flex-row justify-between w-full flex-wrap items-center pt-10 px-16">
      <div className="size-full max-w-2xl items-center justify-center overflow-hidden pt-8">
        <BoxReveal boxColor={"#5046e6"} duration={0.5}>
          <p className="text-[7rem] font-semibold">
            FRONT-END DEVELOPER<span className="text-[#5046e6]">.</span>
          </p>
        </BoxReveal>

        <BoxReveal boxColor={"#5046e6"} duration={0.5}>
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

      <BoxReveal boxColor={"#5046e6"} duration={0.5}>
        <Image
          className="rounded-2xl"
          src="/profile.jpg"
          width={490}
          height={490}
          alt="Picture of the author"
        />
      </BoxReveal>
    </div>
  );
};

export default Hero;
