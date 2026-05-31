import type { OurProcessItem } from '../types';

export const ourprocessItem: OurProcessItem[] = [
  {
    title: 'Our Process',
    description: 'Clear steps. Smart execution. Results you can count on.',
    childitems: [
      {
        childid: 1,
        childtitle: 'Discovery & Consultation',
        childdesc: 'Understand Your Needs & Goals',
      },
      {
        childid: 2,
        childtitle: 'Planning & Strategy',
        childdesc: 'Years Build a Clear, Scalable Roadmap',
      },
      {
        childid: 3,
        childtitle: 'Design & Prototyping',
        childdesc: 'Craft UX That Converts',
      },
      {
        childid: 4,
        childtitle: 'Development & Implementation',
        childdesc: 'Deliver With Speed & Precision',
      },
      {
        childid: 5,
        childtitle: 'Testing & Optimization',
        childdesc: 'Ensure Quality at Every Step',
      },
      {
        childid: 6,
        childtitle: 'Launch & Growth',
        childdesc: 'Scale, Measure & Improve Continuously',
      },
    ],
  },
];
