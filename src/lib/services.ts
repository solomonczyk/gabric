export interface Service {
  id: string;
  title: string;
  description: string;
  image: string;
  priceLabel: string;
}

export const services: Service[] = [
  {
    id: 'gipsarski',
    title: 'Gipsarski Radovi',
    description:
      'Spušteni plafoni, pregradni zidovi i suvo malterisanje po sistemu Knauf.',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuAjvdZaOFhEaLU4tC9fkmKKjSME87yNJt0kPxEZYwv1s-D8UThISjTVjjseojnFwilWgLtNPCK18z47bdAMZhDDW-CEjkEDCxK1mo1akAqGDRlpMmSh_Yu0iReckILqvkji5QtNSTdaYB2kuDryoAW8VTCm9Wr8DZx6Hk8kg5Z9TiixOQZeZNKSHFrFRaOtFwOqHj9F6ky9UL3OL67KoRanUEcETE3BlLwQG2abCjAf_QbkK5etO0FSwZzM1a6hDGxbMjLV_SJBzjc',
    priceLabel: 'OD 8€/m²',
  },
  {
    id: 'molerski',
    title: 'Molerski Radovi',
    description:
      'Gletovanje, krečenje uz maksimalnu čistoću.',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuC-l3XBxbK3dFHylkS4zxa6469k4OL7M5-kpM3T1H-iC2zfR8N2rcUerZ0-Kg4eWHGEAwz4wWUFAChc1Uws8RS-4gtWZZrryqQ7GngjQDG2ADQr83wueSS8eLE73XgBLVilOLhyseYDtkekP4oShN-3jfc_ynLTSkWmzBWE_LZdVTTXANju-yGFIpTfuN2JJH7ygP9UAXGmIlXpdV6crAFjsoJnp2p3HKJJIDYT4210MQGN-CQmtifUsBEuPEnVWQG7Nf5qOqyc048',
    priceLabel: 'OD 3.5€/m²',
  },
  {
    id: 'termoizolacija',
    title: 'Termoizolacija',
    description:
      'Postavljanje unutrašnje izolacije radi energetske efikasnosti prostora.',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCBSFFEiuBJrRMglqWD180W8gBDzXdPlZ2QPFHsjhEq3Iy0kWQGYeaH0al46hrV5WU98200mjSAlf9nTy3bUbnLK-img4EYbxebAxzNWVNFvq8-_xXHQOx9cYE2SG_WTtjhnym7HLS1l2YmkFOXPM2ZTfiD5pEPhcDd_zIfG218HpvE9rGgoZc3WUzviO_WKnxJS6E89D7RWIUUfkM22GdeGZRj31NQaFlz0svrmrsX8xVq9HN1HjrxVxKObGNlHhb_ipVxpjfMXPQ',
    priceLabel: 'OD 12€/m²',
  },
];
