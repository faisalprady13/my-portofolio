import { skillAreaEntry } from '@/types/skillTypes';

const webTech: skillAreaEntry = {
  title: 'Web Technologies',
  color: 120,
  skillList: [
    { name: 'HTML', level: 5 },
    { name: 'CSS', level: 5 },
  ],
};

const programmingLanguage: skillAreaEntry = {
  title: 'Programming Languages',
  color: 10,
  skillList: [
    { name: 'Typescript', level: 5 },
    { name: 'Javascript', level: 5 },
  ],
};

const frontendFrameworks: skillAreaEntry = {
  title: 'Frontend Javascript Frameworks/Library',
  color: 250,
  skillList: [
    { name: 'React', level: 5 },
    { name: 'Vue.js', level: 5 },
    { name: 'Next.js', level: 5 },
  ],
};

const frontendStateManagement: skillAreaEntry = {
  title: 'Frontend State Management',
  color: 210,
  skillList: [
    { name: 'Pinia', level: 5 },
    { name: 'MobX', level: 5 },
    { name: 'Redux', level: 4 },
  ],
};

const frontendComponentLibraries: skillAreaEntry = {
  title: 'Frontend Component Libraries',
  color: 280,
  skillList: [
    { name: 'Material UI', level: 5 },
    { name: 'Shadcn/ui', level: 5 },
    { name: 'React Bootstrap', level: 4 },
  ],
};
const cssTech: skillAreaEntry = {
  title: 'CSS Ecosystem Technologies',
  color: 330,
  skillList: [
    { name: 'Bootstrap', level: 4 },
    { name: 'Tailwind', level: 2 },
    { name: 'LESS', level: 3 },
    { name: 'SASS', level: 5 },
  ],
};

const backendFrameworks: skillAreaEntry = {
  title: 'Backend Javascript Frameworks',
  color: 180,
  skillList: [
    { name: 'Node.js', level: 4 },
    { name: 'Nest.js', level: 3 },
    { name: 'Express.js', level: 3 },
  ],
};

const testFrameworks: skillAreaEntry = {
  title: 'Testing Frameworks',
  color: 60,
  skillList: [
    { name: 'Jest', level: 4 },
    { name: 'Vitest', level: 4 },
  ],
};

const otherTech: skillAreaEntry = {
  title: 'Other Tech Frameworks/Libraries',
  color: 300,
  skillList: [
    { name: 'PixiJs', level: 2 },
    { name: 'Eslint', level: 3 },
    { name: 'Recharts', level: 4 },
  ],
};

const languages: skillAreaEntry = {
  title: 'Languages',
  color: 0,
  skillList: [
    { name: 'English', level: 5 },
    { name: 'German', level: 4 },
    { name: 'Indonesia', level: 5 },
  ],
};

export const skillsData: skillAreaEntry[] = [
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
