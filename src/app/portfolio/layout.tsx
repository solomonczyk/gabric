import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Portfolio | Gipsarko — Pre i Posle radova u Subotici',
  description:
    'Pogledajte naše završene projekte: spušteni plafoni, pregradni zidovi, gletovanje i moleraj.',
};

export default function PortfolioLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
