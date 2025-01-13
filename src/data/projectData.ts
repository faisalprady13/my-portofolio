import { ProjectEntry } from '@/types/projectTypes';

export const projectData: ProjectEntry[] = [
  {
    title: 'Portfolio Website',
    description:
      'Server side rendered personal portfolio, built using the latest version of NextJS and Shadcn/ui to showcase my skills and experience. The website has wonderful animation without costing the performance of the website.',
    extraDesc: 'Personal project',
    role: 'Frontend Developer',
    image: '/images/portfolio.png',
    url: 'https://faisalprady.vercel.app/',
    fullImage: true,
    techStack: ['Next.js', 'React', 'Typescript', 'Shadcn/ui', 'Magic UI'],
  },
  {
    title: 'Train Information System',
    description:
      'Fullstack app. A passenger information system for S-Bahn accross Germany. The system allows the data about disruptions and alternative routes to be sent directly to the information systems in the trains and the train stations.',
    extraDesc: 'Professional project during work at Gravity & Storm GmbH',
    role: 'Fullstack Developer',
    image: '/images/db-systel.png',
    techStack: [
      'Vue.js',
      'Nest.js',
      'Node.js',
      'Pinia',
      'Eslint',
      'Jest',
      'Vitest',
      'Typescript',
    ],
  },
  {
    title: 'Tour Guides Dispatcher App',
    description:
      'A dispatcher web application for the coordination of city tour guides. Authentication and a roles/rights concept and Integration of the business logic in Vercel serverless functions.',
    extraDesc: 'Professional project during work at Gravity & Storm GmbH',
    role: 'Frontend Developer',
    image: '/images/vive-berlin.png',
    techStack: [
      'Next.js',
      'React',
      'MobX',
      'Material UI',
      'Sequelize',
      'Node.js',
      'AuthO',
      'SendGrid',
      'Typescript',
    ],
  },
  {
    title: 'Picture Frame Configurator',
    description:
      'A React-based configurator for custom picture frames. Implementing the integration of the application to AWS S3 to persist the data.',
    extraDesc: 'Professional project during work at Gravity & Storm GmbH',
    role: 'Frontend Developer',
    image: '/images/frameworks-berlin.jpeg',
    techStack: [
      'Next.js',
      'React',
      'Node.js',
      'Mobx',
      'Graphql',
      'Docker',
      'Typescript',
    ],
  },
  {
    title: 'HandsOnMetrology',
    description:
      'Development of a React-based frontend and Drupal-based backend. Including integration of newsletters based on Azure and Sendgrid.',
    extraDesc: 'Professional project during work at Gravity & Storm GmbH',
    role: 'Frontend Developer',
    image: '/images/handsonmetrology.png',
    fullImage: true,
    url: 'https://www.handsonmetrology.com/',
    techStack: [
      'Next.js',
      'React',
      'Node.js',
      'MobX',
      'Graphql',
      'Drupal',
      'Docker',
      'Zeplin',
      'Typescript',
    ],
  },
];
