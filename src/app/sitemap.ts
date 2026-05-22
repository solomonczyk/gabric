import type { MetadataRoute } from 'next';

const baseUrl = 'https://gabric.vercel.app';

const routes = [
  '',
  '/usluge',
  '/cenovnik',
  '/portfolio',
  '/o-nama',
  '/kontakt',
  '/politika-privatnosti',
] as const;

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return routes.map((path) => ({
    url: `${baseUrl}${path}`,
    lastModified,
  }));
}
