export interface PortfolioPair {
  id: string;
  title: string;
  category: string;
  before: { image: string; label: string };
  after: { image: string; label: string };
}

export const portfolioPairs: PortfolioPair[] = [
  {
    id: 'projekat-1',
    title: 'Projekat 1',
    category: 'gips',
    before: {
      image: '/portfolio/ChatGPT Image May 26, 2026, 06_16_58 PM.webp',
      label: 'PRE',
    },
    after: {
      image: '/portfolio/ChatGPT Image May 26, 2026, 06_20_50 PM.webp',
      label: 'POSLE',
    },
  },
  {
    id: 'projekat-2',
    title: 'Projekat 2',
    category: 'moler',
    before: {
      image: '/portfolio/ChatGPT Image May 26, 2026, 06_17_21 PM.webp',
      label: 'PRE',
    },
    after: {
      image: '/portfolio/ChatGPT Image May 26, 2026, 06_22_31 PM.webp',
      label: 'POSLE',
    },
  },
  {
    id: 'projekat-3',
    title: 'Projekat 3',
    category: 'gips',
    before: {
      image: '/portfolio/ChatGPT Image May 26, 2026, 06_17_29 PM.webp',
      label: 'PRE',
    },
    after: {
      image: '/portfolio/ChatGPT Image May 26, 2026, 06_38_46 PM.webp',
      label: 'POSLE',
    },
  },
  {
    id: 'projekat-4',
    title: 'Projekat 4',
    category: 'moler',
    before: {
      image: '/portfolio/ChatGPT Image May 26, 2026, 06_17_35 PM.webp',
      label: 'PRE',
    },
    after: {
      image: '/portfolio/ChatGPT Image May 26, 2026, 06_30_53 PM.webp',
      label: 'POSLE',
    },
  },
  {
    id: 'projekat-5',
    title: 'Projekat 5',
    category: 'gips',
    before: {
      image: '/portfolio/ChatGPT Image May 26, 2026, 06_17_43 PM.webp',
      label: 'PRE',
    },
    after: {
      image: '/portfolio/ChatGPT Image May 26, 2026, 06_37_15 PM.webp',
      label: 'POSLE',
    },
  },
  {
    id: 'projekat-6',
    title: 'Projekat 6',
    category: 'moler',
    before: {
      image: '/portfolio/ChatGPT Image May 26, 2026, 06_23_48 PM.webp',
      label: 'PRE',
    },
    after: {
      image: '/portfolio/ChatGPT Image May 26, 2026, 06_31_43 PM.webp',
      label: 'POSLE',
    },
  },
  {
    id: 'projekat-7',
    title: 'Projekat 7',
    category: 'gips',
    before: {
      image: '/portfolio/ChatGPT Image May 26, 2026, 06_29_30 PM.webp',
      label: 'PRE',
    },
    after: {
      image: '/portfolio/ChatGPT Image May 26, 2026, 06_34_56 PM.webp',
      label: 'POSLE',
    },
  },
  {
    id: 'projekat-8',
    title: 'Projekat 8',
    category: 'moler',
    before: {
      image: '/portfolio/ChatGPT Image May 26, 2026, 06_32_58 PM.webp',
      label: 'PRE',
    },
    after: {
      image: '/portfolio/ChatGPT Image May 26, 2026, 06_33_52 PM.webp',
      label: 'POSLE',
    },
  },
];
