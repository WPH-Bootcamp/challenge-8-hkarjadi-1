import type { FAQItem } from '../types';

export const faqItem: FAQItem[] = [
  {
    title: 'Need Help? Start Here.',
    description: 'Everything you need to know — all in one place.',
    childitems: [
      {
        childquestion: 'What services do you offer?',
        childanswer:
          'We provide custom web/app development, cloud solutions, UX/UI design, and more.',
      },
      {
        childquestion: 'How do I know if this is right for my business?',
        childanswer: 'We have experience for many years in this business',
      },
      {
        childquestion: 'How much does a project cost?',
        childanswer: 'Its depend on how big your projects',
      },
      {
        childquestion: 'How long does it take?',
        childanswer: 'Its depend on how big your projects',
      },
      {
        childquestion: 'Can I start with a small project first?',
        childanswer: 'Sure',
      },
    ],
  },
];
