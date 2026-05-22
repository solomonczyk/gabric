'use client';

import { useState } from 'react';
import SectionContainer from '@/components/SectionContainer';

export default function Portfolio() {
  const [activeFilter, setActiveFilter] = useState('all');

  const projects = [
    {
      id: 1,
      category: 'gips',
      title: 'Spušteni plafoni - Rezidencija "Beograd"',
      description: 'Od preciznog postavljanja metalne podkonstrukcije do finalne obrade sa kaskadama i rasvetom.',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAhnNQvsRMfRHoID_lC7owyV9tKfwA3ukjIyh5EO7w1BOBN-Vs-slal95wB2F9-zw-HudN30Km28AfFpu_fSBiVY_SihLnX05GMOFB0mzUOyZ_XZ17eKj2GyN-w0BioHmSZwbLDuiWakGZBfBSgXFtniIlNJXSpZF4OaNMVdSLcSi7QF_Hp6rOe3iHvD8SM1OIAVwO2HN4B9XMvrwGBoaq68oUjqdvtNaLLhWySyVF42IHVcV5IQMrVxqgi6FA1OvdPjj3MfWTMlDE',
      tag: 'GIPSARSKI RADOVI'
    },
    {
      id: 2,
      category: 'gips',
      title: 'Pregradni zidovi - Kancelarijski prostor',
      description: 'Montaža pregradnih zidova sa termoizolacijom za modernu kancelariju.',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDijyq4H3tico8-heJ31Dax43ZAtmipkGxq28uttKIIxcJtZIlezkzzv3GAeEnQsSnGhmR8kYyYxwRy00tknJx7KJ1FHqB6h4HuekMQa_vqH8ncIr3xPuNefhjKRNnfaUmSHqKyEOmhRBsOItbwhY18J19GO0L-Kj5Kq6EE3ARLgajEZJJWSM4wfWaLnZKvYFWHR7_My_ZkVTdBKBi0OJr5t7HTiUcLD9TjRlxMNTrh5YfGqnc6GDzwri7i8AzCpnqlGfuY2kRhl_g',
      tag: 'GIPSARSKI RADOVI'
    },
    {
      id: 3,
      category: 'moler',
      title: 'Fino gletovanje - Stan Subotica',
      description: 'Profesionalno gletovanje zidova u dve ruke za savršeno pripremu za krečenje.',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCSpkGm3BaJM7nTn0gpEwR8N_ivADADHMmp6YEr4SxX7EpKhZ6UhNQp57BqdRk1R_BrOhZP-E9Qtk_Zn1-ZdbGVpYbpJwm_lIPNRTgshS88uihlx6byTMhHN2ML__UuwgcJKvCbHBAEdhI-DrfCtxl34qJrz5vLqApbm6Qw_447pK-k7H2TaajrdCYLO0hprzNPCG2YqSUpOYObEP65cqN9x4FmklAUyl6vHZuNA3a28flHEYPd4JvOF1FPW-Lb91w_8mYKJafdXEQ',
      tag: 'MOLERSKI RADOVI'
    },
    {
      id: 4,
      category: 'poslovni',
      title: 'Poslovni prostor - Tržni centar',
      description: 'Kompletna izrada gipsarskih i molerskih radova za poslovni objekat.',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAfrOAKN85ry8U_Qj2POOWrE8cVHLu58EahG0aFFBB1AnX_AyQajsdnvt257wpYrv_tr9aB1ds_STIl7EaFyweO7-zy5TmpCvirKFEKjQAM4MhWBNJkpCUtoYLmZ8qhgq__EfkqmXj3IPu9gguwLwULM8Q0F5cVvw-pqDDoCDB_5vgLOypZnrtt_X95tjdI7Vls0nEHwlieCr34dm9POP3j90JQRiDH8j-XvBnb26uvnXOZIX3m0UG-qskxyT4O_J1Z6CQTH96SCng',
      tag: 'POSLOVNI PROSTORI'
    },
    {
      id: 5,
      category: 'gips',
      title: 'Dekorativni elementi - Kuća Palić',
      description: 'Izrada lukova i dekorativnih gipsarskih elemenata za modernu kuću.',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBayhFj8w7ier72TiIDvEGCGTEnyKocbfMB_JerPS_fC6nX7g0x3yYzynXKBBsiMBX4iWG_a109jst-pY_txNHujp82HHJpv2kdf40iD4z2N40tSDQoNBerqspcAuPCDAMLmAWG43pntgHmS4tOyw1TvQjG_rSlwJektoAxc2BoI-HPHH-4xKyH6pkkdQ70QAg2zc-Z4yYC3KShs5rtkLrhYs_Ri1SrcGfdpAY0KXkHZCsvf87Dut2jXnb-CpshLNFv_AMid01qy3E',
      tag: 'GIPSARSKI RADOVI'
    },
    {
      id: 6,
      category: 'moler',
      title: 'Krečenje - Renoviranje stana',
      description: 'Krečenje poludisperzijom u tri sloja za savršen izgled enterijera.',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBwzgUztCmboFXSiIBwWJ_Hca0Rv-itVAwmeCVhi84-1qo4AgLVaWiUGKRIaXBLpfD_Laiez44s288fMG8MNeWJflz5sr6--0HMArEL08y4sE_VIZPQu87jJ_6P4tX4ekBAN53JW5-u2bQyVH2HvBpUF6vcHYIVDEzxTJzk24sbRb3k97vQ_W7aFeb-0lCHbG7yhU6DiSZoKSXFmS-ThqiEJyho3wudyKb-kwKr1gwaQ46j4P3RA036Ry3K3ATp8dSlKD-p8p7iro',
      tag: 'MOLERSKI RADOVI'
    }
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(p => p.category === activeFilter);

  return (
    <>
      {/* Header Section */}
      <div className="max-w-container-max mx-auto px-gutter pt-32 pb-12">
        <div className="mb-12 border-l-4 border-construction-amber pl-6">
          <h1 className="font-headline-xl text-headline-xl text-deep-slate mb-4">Portfolio: Pre i Posle</h1>
          <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl">
            Uvid u proces našeg rada. Uporedite fazu metalne konstrukcije sa finalnim izgledom gipsarskih i molerskih rešenja. Kvalitet koji se vidi u svakom koraku.
          </p>
        </div>

        {/* Filter Controls */}
        <div className="flex flex-wrap gap-4 mb-12">
          <button
            onClick={() => setActiveFilter('all')}
            className={`px-6 py-3 font-label text-label border border-concrete-grey rounded transition-all ${
              activeFilter === 'all' ? 'bg-construction-amber text-deep-slate border-construction-amber' : 'hover:border-construction-amber'
            }`}
          >
            Svi projekti
          </button>
          <button
            onClick={() => setActiveFilter('gips')}
            className={`px-6 py-3 font-label text-label border border-concrete-grey rounded transition-all ${
              activeFilter === 'gips' ? 'bg-construction-amber text-deep-slate border-construction-amber' : 'hover:border-construction-amber'
            }`}
          >
            Gipsarski radovi
          </button>
          <button
            onClick={() => setActiveFilter('moler')}
            className={`px-6 py-3 font-label text-label border border-concrete-grey rounded transition-all ${
              activeFilter === 'moler' ? 'bg-construction-amber text-deep-slate border-construction-amber' : 'hover:border-construction-amber'
            }`}
          >
            Molerski radovi
          </button>
          <button
            onClick={() => setActiveFilter('poslovni')}
            className={`px-6 py-3 font-label text-label border border-concrete-grey rounded transition-all ${
              activeFilter === 'poslovni' ? 'bg-construction-amber text-deep-slate border-construction-amber' : 'hover:border-construction-amber'
            }`}
          >
            Poslovni prostori
          </button>
        </div>

        {/* Masonry Gallery */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <div key={project.id} className="bg-plaster-white border border-concrete-grey overflow-hidden transition-transform duration-300 hover:-translate-y-1 group">
              <div className="h-64 overflow-hidden">
                <img
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  src={project.image}
                />
              </div>
              <div className="p-6">
                <span className="font-label text-label bg-surface-container-low px-2 py-1 mb-3 inline-block">
                  {project.tag}
                </span>
                <h3 className="font-headline-md text-headline-md mb-2">{project.title}</h3>
                <p className="font-body-md text-body-md text-on-surface-variant">{project.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
