import { ProjectEntry, ProjectType } from '@/types/projectTypes';

export const projectData: ProjectEntry[] = [
  {
    title: 'DB Systel',
    description:
      'Fullstack app. A passenger information system for S-Bahn accross Germany. The system allows the data about disruptions and alternative routes to be sent directly to the information systems in the trains.',
    type: ProjectType.PROFESSIONAL,
    role: 'Fullstack Developer',
    image: '/images/db-systel.png',
    techStack: ['vue JS', 'Nest JS'],
  },
  {
    title: 'GOM - Zeiss',
    description:
      'Fullstack app. A passenger information system for S-Bahn accross Germany. The system allows the data about disruptions and alternative routes to be sent directly to the information systems in the trains.',
    type: ProjectType.PROFESSIONAL,
    role: 'Fullstack Developer',
    image: '/images/gom-zeiss.jpg',
    techStack: ['vue JS', 'Nest JS'],
  },
];
