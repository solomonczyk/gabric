import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Kontakt | Gipsarko Subotica — 069 579 1925',
  description:
    'Kontaktirajte nas za besplatnu procenu gipsarskih i molerskih radova u Subotici i okolini.',
};

export default function KontaktLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
