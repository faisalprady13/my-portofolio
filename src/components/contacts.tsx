import Link from 'next/link';
import React from 'react';

const Contacts = () => {
  const buttonStyle =
    'text-white cursor-pointer rounded-3xl border border-transparent hover:border hover:border-gray-400 px-4 py-2 select-none ';
  return (
    <div className="">
      <div className="pt-20 pb-32 px-8 max-w-4xl m-auto">
        <p className="text-center font-bold text-lg mb-24 px-6">CONTACTS</p>
        <div className="flex flex-col md:flex-row flex-wrap items-center justify-evenly w-full gap-4 md:gap-12 max-w-4xl mx-auto py-4 text-2xl">
          <a
            href="mailto:faisalprady@gmail.com"
            className={buttonStyle}
            target="_blank"
          >
            E-mail
          </a>
          <a
            href="https://www.linkedin.com/in/faisalprady/"
            className={buttonStyle}
            target="_blank"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/faisalprady13"
            className={buttonStyle}
            target="_blank"
          >
            Github
          </a>
        </div>
      </div>
      <div className="flex flex-wrap flex-col md:flex-row justify-between items-center w-full gap-4 px-6 text-xs">
        <div className="w-full md:w-1/4 text-center">
          {`© 2024-${new Date().getFullYear()} Muhammad Faisal Ibnu Prady`}
        </div>
        <div className="w-full md:w-1/4 text-center">
          <Link href="/privacy" className="text-center">
            Privacy Policy
          </Link>
        </div>
        <div className="w-full md:w-1/4 text-center">faisalpady@gmail.com</div>
      </div>
    </div>
  );
};

export default Contacts;
