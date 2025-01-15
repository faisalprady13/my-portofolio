import Section, { backgroundType } from '@/components/section';
import React from 'react';

const privacyItems = [
  {
    title: 'No Cookies or Trackers',
    desc: 'This website does not use cookies or any tracking technologies to collect personal data.',
  },
  {
    title: 'Server Logs',
    desc: 'The hosting provider (Vercel) may temporarily collect certain technical information, such as IP addresses, to ensure the site operates securely and efficiently. This information is not stored or used for tracking purposes.',
  },
  {
    title: 'Third-Party Services',
    desc: 'This website does not integrate third-party services (e.g., analytics tools, social media widgets, or embedded content) that process user data.',
  },
  {
    title: 'Contact',
    desc: 'If you have any questions about this privacy policy, please contact  faisalprady@gmail.com.',
  },
];

const Privacy = () => {
  return (
    <Section background={backgroundType.GRAY} isFullWidth isDarkMode>
      <div className="flex flex-wrap flex-col h-full min-h-screen w-full lg:w-10/12 px-6 py-24 m-auto justify-center content-center">
        <p className="font-bold text-2xl mb-12">Privacy Policy </p>
        <p>
          This website is committed to respecting your privacy. Below is an
          outline of how your data is handled:
        </p>
        <ul className="list-decimal ml-8 my-6">
          {privacyItems.map((item, index) => (
            <li className="mb-4" key={index}>
              <p className="font-semibold mb-1">{item.title}</p>
              <p>{item.desc}</p>
            </li>
          ))}
        </ul>
        By visiting this site, you agree to this privacy policy.
      </div>
    </Section>
  );
};

export default Privacy;
