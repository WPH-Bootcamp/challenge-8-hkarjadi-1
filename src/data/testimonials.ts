import type { TestimonialItem } from '../types';
export const testimonialItem: TestimonialItem[] = [
  {
    title: 'What Partners Say About Working With Us',
    description: 'Trusted voices. Real experiences. Proven results.',
    childitems: [
      {
        childname: 'John Lee',
        childposition: 'Creative Director at Innovate Corp',
        childdesc:
          '“Working with this team was a game-changer for our project. They understood our vision and turned it into reality efficiently and effectively.”',
        childrating: 4,
        childimg: 'john',
      },
      {
        childname: 'Sarah Tan',
        childposition: 'Product Manager at Finovate Page',
        childdesc:
          '“The team delivered exactly what we needed — on time and with outstanding quality. Their attention to detail and communication were top-notch.”',
        childrating: 5,
        childimg: 'sarah',
      },
      {
        childname: 'Emily Chen',
        childposition: 'Marketing Head at Tech Solutions',
        childdesc:
          '“The collaboration was seamless, and the results surpassed our expectations. Their expertise transformed our ideas into a successful product.”',
        childrating: 5,
        childimg: 'emily',
      },
    ],
  },
];
