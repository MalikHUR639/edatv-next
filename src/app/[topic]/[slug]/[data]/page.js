import PaymentCards from "@/components/paymentCards/page";
import Link from "next/link";
import React from "react";

const menuItems = [
  { title: 'Política', href: '/politica' },
  { title: 'Actualidad', href: '/actualidad' },
];

const page = () => {
  return (
    <div className="max-w-[1200px] mx-auto text-center">
      <div className="text-black text-base font-normal leading-tight tracking-wide block">
        <div className="overflow-x-auto whitespace-nowrap mx-auto my-4">
          <ul className="inline-block">
            {menuItems.map((item, index) => (
              <li key={index} className="inline-block mx-[7px]">
                <Link href={item.href}>
                  <p title={item.title} target="_self">{item.title}</p>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="max-w-[1200px] mx-auto px-5">
        <h1 className="text-3xl md:text-5xl lg:text-7xl font-sans font-bold leading-tight tracking-tighter">Colabora con nosotros</h1>
      </div>
      <hr className="mt-[10px] mb-5 border-[1px] text-[#d9d8dd]" />
      <p className="xl:max-w-[1100px] px-4 xl:px-0 text-left font-sans mx-auto mb-[12px] text-lg font-normal leading-[1.5em]">El PSOE de Pedro Sánchez quiere asfixiarnos económicamente con querellas.
        Nos pide hasta medio millón de euros. Sus terminales mediáticas nos atacan a diario. Muchos de vosotros nos ayudásteis a nacer. Ahora os
        pedimos que nos ayudéis a sobrevivir al acoso del Gobierno. Aquí puedes hacerlo. El trabajo informativo de Javier Negre,
        Javier García Isac o Vito Quiles está en juego.
      </p>
      <PaymentCards />
    </div>
  )
};

export default page;
