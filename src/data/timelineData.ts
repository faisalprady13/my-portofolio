import { TimelineEntry, TimelineType } from '@/types/timelineTypes';

export const timelineEntries: TimelineEntry[] = [
  {
    title: 'Full Stack Web Developer',
    organization: 'Gravity and Storm GmbH',
    date: '09/2020 - 06/2024',
    description:
      'A full stack web developer in a Digital Agency, building various products from a dynamic landing page to a complex single page application.',
    type: TimelineType.WORK,
  },
  {
    title: 'Frontend Developer (Working Student)',
    organization: 'Heaven HR GmbH',
    date: '03/2019 - 03/2020',
    description: 'Develop and build frontend components using React.js.',
    type: TimelineType.WORK,
  },
  {
    title: 'XR Engineer (Internship)',
    organization: 'Vonderlabs UG',
    date: '03/2018 - 08/2018',
    description:
      'First work experience in IT industry, develop and testing a VR & AR app as an XR Engineer.',
    type: TimelineType.WORK,
  },
  {
    title: 'Bachelor in International Media and Computing (B.Sc)',
    organization: 'Hochschule für Technik und Wirtschaft (HTW) Berlin',
    date: '10/2015 - 06/2019',
    description:
      'Computer science course with insight of media theory and economics, with specialization on web development.',
    type: TimelineType.EDUCATION,
  },
];
