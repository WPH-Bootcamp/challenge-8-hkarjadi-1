import type { ContactItem } from '../types';

export const contactItem: ContactItem[] = [
  {
    title: 'Ready to Start? Let’s Talk.',
    description: 'Tell us what you need, and we’ll get back to you soon.',
    childitems: [
      { childname: 'Name', childdesc: 'Enter your name' },
      { childname: 'Email', childdesc: 'Enter your email' },
      { childname: 'Message', childdesc: 'Enter your message' },
    ],
  },
];
