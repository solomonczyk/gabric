export interface PortfolioPair {
  id: string;
  title: string;
  category: string;
  before: { image: string; label: string };
  after: { image: string; label: string };
}

export const portfolioPairs: PortfolioPair[] = [
  {
    id: 'plafoni-1',
    title: 'Spušteni plafoni',
    category: 'gips',
    before: {
      image:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuDQB29fXzHMwn92PMODVcGCOGgYXNuuoNv6EyiUBJb5c6i0u6gl6C1YuWbweMVEMivptRZ2oUvcMlXTOuaJhAJIo0QZ84g1_g3IgaDwOyw84NxwIU6ts2kLZckpht_fVtlrq45s9rQeR254n-qCR_LJuFtxr7_u666i6nWFxVWy51szyWcbhH4dORLllwzI1ViFSLQawWSE0qB_l3Bf2NwotopmhtN3DmSL4jsFe0NbPdPLMEgFMs8WCsCSi5Bw1EUv3glEJQaG_6g',
      label: 'PRE (KONSTRUKCIJA)',
    },
    after: {
      image:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuDFu0Oa3zzgIj-Hga2mW7RhJ0qcW_8MtJ0-AfvchAAoZamrFYhITGLc_7xuynPqbYWi-MjOmo7JzIdDwleXI4tqSErb3HhwKqmlUlpZ94Z_n1mSASp9bJzAp3alaLkGrdXOD4KrQkfTsCT1jzXGxv-lkJ7dZmYpyp25FFbXLyo_aoWt1kqACvNNvdKbqMhwT_4LEgw1P0DrqA_O4vPP9OpnVNQ6qALC40-IdhPqWRpLwElQjjrfcxUNhc94FV9g3ZVyqbmHYLPKPOk',
      label: 'POSLE (FINALNI REZULTAT)',
    },
  },
  {
    id: 'gletovanje-1',
    title: 'Gletovanje i bojenje',
    category: 'moler',
    before: {
      image:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuBqdFnku68uovZzkyEh6UJ62EBxFDmDd-q5XbZBvxG2Hv_RXPYr9vMajMeVBb3HX-JIOMIY64535GAb7UBV__9XSUCTiPjoTHsIiEwXuagVt05-T-bgN9hGwMzDPtlu-FhFyZMy93izO2SkHOXlT2lRRXgdIK9uFrBdH74Kp6ntkZ7sUGmv01awbjRDB9Eb1cepOpYevcyhDiJw7DM97sJRyTepcWzXUN-TfdVtQL7-kTg6mJ0K5L2OPJ92sqGjr1mz2yUXrcIYRic',
      label: 'U TOKU (GLETOVANJE)',
    },
    after: {
      image:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuD0qihF6zgtvGSQUACSCNWStDh2SHBgICDpZ2yTDcTp9fgGdbqYSTva0HWNdnj9ViMTCFWGxyn-79kcUjb8ynjdsOQMrkXtpZ8j8lo0mT8juOOi-6aypk8S_nDjsFXWUsGnk2rpkAOrlDkMFcMY6-xCoZoIiQXQFezCFMibbb17gAblsOdeQEgeMsEnWr17nmeSSr-CjwjYavhwixKDwMC43gMExGU9ERpajjdZk3VT_u-Wssnebccg3MWsJbqGzLilpftJ2Ql5vuw',
      label: 'GOTOVO (BOJENJE)',
    },
  },
];
