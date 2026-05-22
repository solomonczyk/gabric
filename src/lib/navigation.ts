export interface NavItem {
  href: string;
  label: string;
}

export const navItems: NavItem[] = [
  { href: '/', label: 'Početna' },
  { href: '/usluge', label: 'Usluge' },
  { href: '/cenovnik', label: 'Cenovnik' },
  { href: '/portfolio', label: 'Portfolio' },
  { href: '/o-nama', label: 'O nama' },
  { href: '/kontakt', label: 'Kontakt' },
];
