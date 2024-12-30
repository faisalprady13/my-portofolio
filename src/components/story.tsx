import React from 'react';
import BoxReveal from './ui/box-reveal';
import Image from 'next/image';
import me from '../../public/images/me.png';

const Story = () => {
  return (
    <div className="flex flex-row justify-evenly size-full items-start py-12 px-6 md:px-16 gap-20 max-w-4xl mx-auto py-12">
      <div className="hidden md:block w-1/4  relative">
        <Image
          className="rounded-full object-cover mt-12"
          src={me}
          width="400"
          height="400"
          placeholder="blur"
          alt="Picture of the author"
        />
      </div>
      <div className="w-full md:max-w-full md:w-3/4 items-center justify-center overflow-hidden pt-8 ">
        <BoxReveal boxColor={'#5046e6'} duration={0.5}>
          <p className="text-base">
            Greetings, I&apos;m Faisal! Welcome to my portfolio!
            <br />
            <br />I have been a
            <span className="text-primary">{` Fullstack Developer `}</span>
            for nearly <span className="text-primary">{` 4 years `}</span>and
            have worked on multiple projects in various industries. I earned by
            Bachelor's of Computer Science Degree from HTW Berlin in 2019 where
            I studied International Media and Computing. From there on, I worked
            as a fulltime developer on a Digital Agency in Berlin called Gravity
            & Storm.
            <br />
            <br />I specialize in developing sophisticated single-page
            applications (SPAs) and building robust, full-stack applications
            with complex business logic.
          </p>
        </BoxReveal>
      </div>
    </div>
  );
};

export default Story;
