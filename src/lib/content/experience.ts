import { ExperienceSectionType } from '@/lib/types/sections';

export const experienceSection: ExperienceSectionType = {
  title: "where i've worked",
  experiences: [
    {
      company: 'CostaCloud',
      companyUrl: 'https://www.appolo.com',
      role: 'Software Engineer',
      started: 'Aug 2023',
      upto: 'present',
      tasks: [
        'Implemented UI components with React & Next.js, TypeScript & Tailwind CSS.',
        'Developed and maintained design systems that separates design logic.',
        'Understanding client needs and proposing effective solutions, which also involves strategising and planning.',
        'Lead a cross-functional team of developers and designers in the creation of a SaaS product.',
      ],
    },
    {
      company: 'Tecnics',
      companyUrl: 'https://tecnics.com/',
      role: 'Software Engineer',
      started: 'Feb 2021',
      upto: 'july 2023',
      tasks: [
        'Built trading platform using TradingView library.',
        'Designed SHMTH Capital website with Next.js, TypeScript & TailwindCSS.',
        'Collaborated with diverse nationwide team of developers.',
      ],
    },
    {
      company: 'Sampark Software',
      companyUrl: 'https://webnetic.vercel.app/',
      role: 'frontend developer',
      started: 'Nov 2018',
      upto: 'Dec 2020',
      tasks: [
        'Built static frontend UI from the ground up using Next.js and Figma handover designs.',
        'Architected the folder structure and initial setup of the app.',
        'Reviewed and approved multiple Pull requests.',
        'Worked remotely with a distributed team from around the globe, collaborating closely using screen-sharing.',
      ],
    },
  ],
};
