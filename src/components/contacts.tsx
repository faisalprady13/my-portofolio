import React from 'react';

const Contacts = () => {
  const buttonStyle =
    'text-white cursor-pointer rounded-3xl border border-transparent hover:border hover:border-gray-400 px-4 py-2 select-none ';
  return (
    <div className="">
      <div className="pt-20 pb-32 px-8 max-w-4xl m-auto">
        <p className="text-center font-bold text-lg mb-24 px-6">CONTACTS</p>
        <div className="flex flex-col md:flex-row flex-wrap items-center justify-evenly w-full gap-4 md:gap-12 max-w-4xl mx-auto py-4 text-2xl">
          <a href="mailto:faisalprady@gmail.com" className={buttonStyle}>
            E-mail
          </a>
          <a className={buttonStyle}>LinkedIn</a>
          <a className={buttonStyle}>Github</a>
        </div>
      </div>
      <div className="flex justify-between gap-4 px-12 text-xs">
        <div>© Muhammad Faisal Ibnu Prady {new Date().getFullYear()}</div>
        <div>faisalpady@gmail.com</div>
      </div>
    </div>
  );
};

export default Contacts;
