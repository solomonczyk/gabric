export interface PriceRow {
  title: string;
  subtitle: string;
  price: string;
}

export interface PriceCategory {
  id: string;
  icon: string;
  title: string;
  rows: PriceRow[];
}

export const priceCategories: PriceCategory[] = [
  {
    id: 'gipsarski',
    icon: 'Hammer',
    title: 'Gipsarski Radovi',
    rows: [
      {
        title: 'Spušteni plafoni na metalnu potkonstrukciju',
        subtitle: 'Standardne ploče 12.5mm',
        price: 'od 1.400 RSD / m²',
      },
      {
        title: 'Pregradni zidovi (obostrano jedna ploča)',
        subtitle: 'Debljina profila 50/75/100mm',
        price: 'od 2.100 RSD / m²',
      },
      {
        title: 'Obloga zida na lepak (suvi malter)',
        subtitle: 'Lepljenje gips tabli direktno na zid',
        price: 'od 950 RSD / m²',
      },
      {
        title: 'Skrivači svetla i kaskade',
        subtitle: 'Izrada dekorativnih elemenata (po m\')',
        price: 'od 1.200 RSD / m',
      },
    ],
  },
  {
    id: 'molerski',
    icon: 'PaintRoller',
    title: 'Molerski Radovi',
    rows: [
      {
        title: 'Gletovanje zidova (dve ruke)',
        subtitle: 'Uključuje brušenje i pripremu za krečenje',
        price: 'od 480 RSD / m²',
      },
      {
        title: 'Krečenje poludisperzijom (dve ruke)',
        subtitle: 'Bela boja, standardni materijali',
        price: 'od 300 RSD / m²',
      },
      {
        title: 'Mašinsko šmirglanje (Žirafa)',
        subtitle: 'Sa upotrebom usisivača (bez prašine)',
        price: 'od 180 RSD / m²',
      },
    ],
  },
];
