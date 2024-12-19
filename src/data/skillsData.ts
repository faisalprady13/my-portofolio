import { SkillAreaEntry, SkillImage } from '@/types/skillTypes';

export const skillImages: SkillImage[] = [
  {
    alt: 'HTML',
    src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original-wordmark.svg',
  },
  {
    alt: 'CSS',
    src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original-wordmark.svg',
  },
  {
    alt: 'SASS',
    src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/sass/sass-original.svg',
  },
  {
    alt: 'LESS',
    src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/less/less-plain-wordmark.svg',
  },
  {
    alt: 'javascript',
    src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg',
  },
  {
    alt: 'typescript',
    src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg',
  },
  {
    alt: 'react',
    src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original-wordmark.svg',
  },
  {
    alt: 'vue',
    src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vuejs/vuejs-original-wordmark.svg',
  },
  {
    alt: 'nextjs',
    src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original-wordmark.svg',
  },
  {
    alt: 'vite',
    src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vitejs/vitejs-original.svg',
  },
  {
    alt: 'nodejs',
    src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original-wordmark.svg',
  },
  {
    alt: 'nestjs',
    src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nestjs/nestjs-original-wordmark.svg',
  },
  {
    alt: 'expressjs',
    src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original-wordmark.svg',
  },
  {
    alt: 'redux',
    src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/redux/redux-original.svg',
  },
  {
    alt: 'mobx',
    src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mobx/mobx-original.svg',
  },
  {
    alt: 'pinia',
    src: '/images/pinia.svg',
  },
  {
    alt: 'jest',
    src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/jest/jest-plain.svg',
  },
  {
    alt: 'vitest',
    src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vitest/vitest-original.svg',
  },
  {
    alt: 'react bootstrap',
    src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/reactbootstrap/reactbootstrap-original.svg',
  },
  {
    alt: 'material ui',
    src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/materialui/materialui-original.svg',
  },
  {
    alt: 'bootstrap',
    src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bootstrap/bootstrap-original-wordmark.svg',
  },
  {
    alt: 'tailwind',
    src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original-wordmark.svg',
  },
  {
    alt: 'jira',
    src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/jira/jira-original-wordmark.svg',
  },
  {
    alt: 'confluence',
    src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/confluence/confluence-original-wordmark.svg',
  },
  {
    alt: 'graphql',
    src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/graphql/graphql-plain-wordmark.svg',
  },
  {
    alt: 'bitbucket',
    src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bitbucket/bitbucket-original-wordmark.svg',
  },
  {
    alt: 'git',
    src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original-wordmark.svg',
  },
  {
    alt: 'github',
    src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original-wordmark.svg',
  },
  {
    alt: 'gitlab',
    src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/gitlab/gitlab-original-wordmark.svg',
  },
  {
    alt: 'vercel',
    src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vercel/vercel-original-wordmark.svg',
  },
];
const webTech: SkillAreaEntry = {
  title: 'Web Technologies',
  color: 120,
  skillList: [
    { name: 'HTML', level: 5 },
    { name: 'CSS', level: 5 },
  ],
};

const programmingLanguage: SkillAreaEntry = {
  title: 'Programming Languages',
  color: 10,
  skillList: [
    { name: 'Typescript', level: 5 },
    { name: 'Javascript', level: 5 },
  ],
};

const frontendFrameworks: SkillAreaEntry = {
  title: 'Frontend Javascript Frameworks/Library',
  color: 250,
  skillList: [
    { name: 'React', level: 5 },
    { name: 'Vue.js', level: 5 },
    { name: 'Next.js', level: 5 },
  ],
};

const frontendStateManagement: SkillAreaEntry = {
  title: 'Frontend State Management',
  color: 210,
  skillList: [
    { name: 'Pinia', level: 5 },
    { name: 'MobX', level: 5 },
    { name: 'Redux', level: 4 },
  ],
};

const frontendComponentLibraries: SkillAreaEntry = {
  title: 'Frontend Component Libraries',
  color: 280,
  skillList: [
    { name: 'Material UI', level: 5 },
    { name: 'Shadcn/ui', level: 5 },
    { name: 'React Bootstrap', level: 4 },
  ],
};
const cssTech: SkillAreaEntry = {
  title: 'CSS Ecosystem Technologies',
  color: 330,
  skillList: [
    { name: 'Bootstrap', level: 4 },
    { name: 'Tailwind', level: 2 },
    { name: 'LESS', level: 3 },
    { name: 'SASS', level: 5 },
  ],
};

const backendFrameworks: SkillAreaEntry = {
  title: 'Backend Javascript Frameworks',
  color: 180,
  skillList: [
    { name: 'Node.js', level: 4 },
    { name: 'Nest.js', level: 3 },
    { name: 'Express.js', level: 3 },
  ],
};

const testFrameworks: SkillAreaEntry = {
  title: 'Testing Frameworks',
  color: 60,
  skillList: [
    { name: 'Jest', level: 4 },
    { name: 'Vitest', level: 4 },
  ],
};

const otherTech: SkillAreaEntry = {
  title: 'Other Tech Frameworks/Libraries',
  color: 300,
  skillList: [
    { name: 'PixiJs', level: 2 },
    { name: 'Eslint', level: 3 },
    { name: 'Recharts', level: 4 },
  ],
};

const languages: SkillAreaEntry = {
  title: 'Languages',
  color: 0,
  skillList: [
    { name: 'English', level: 5 },
    { name: 'German', level: 4 },
    { name: 'Indonesia', level: 5 },
  ],
};

export const skillsData: SkillAreaEntry[] = [
  webTech,
  programmingLanguage,
  frontendFrameworks,
  cssTech,
  frontendStateManagement,
  frontendComponentLibraries,
  backendFrameworks,
  testFrameworks,
  otherTech,
  languages,
];
