import Link from 'next/link';
import React from 'react';

const menuItems = [
  { title: 'Política', href: '/politica' },
  { title: 'Actualidad', href: '/actualidad' },
  { title: 'Sociedad', href: '/sociedad' },
  { title: 'Deportes', href: '/deportes' },
  { title: 'Sucesos', href: '/sucesos' },
  { title: 'Corazón y TV', href: '/corazon' },
  { title: 'Madrid', href: '/tags/madrid' },
  { title: 'Comunidad Valenciana', href: '/tags/comunidad-valenciana' },
  { title: 'Alicante', href: '/tags/alicante' },
  { title: 'Castellón', href: '/tags/castellon' },
  { title: 'Valencia', href: '/tags/valencia' },
  { title: 'Canarias', href: '/tags/canarias' },
  { title: 'Andalucía', href: '/tags/andalucia' },
  { title: 'Aragón', href: '/tags/aragon' },
  { title: 'InformaRadio', href: 'https://informaradio.edatv.news' },
  { title: 'Colabora con nosotros', href: '/info/3097/apoya-edatv-news' },
];

const ScrollMenu = () => {
  return (
    <div className="hidden lg:block bg-white">
      <div className="text-black text-base font-normal leading-tight tracking-wide block text-center">
        <ul
          id="m1"
          style={{ width: `calc(100% - 550px)` }}
          className="flex py-[3px] mx-auto tracking-wide my-4 max-w-[1100px] overflow-x-auto overflow-y-hidden whitespace-nowrap"
        >
          {menuItems.map((item, index) => (
            <li key={index} className="inline-block mx-[7px]">
              <Link href={item.href} target="_self">
                <p title={item.title}>{item.title}</p>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ScrollMenu;
