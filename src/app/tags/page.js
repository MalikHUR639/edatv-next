import React from "react";

const Page = () => {
  return (
    <>
      <div className="w-full">
        <div className="max-w-[1100px] m-auto">
          <div className="w-full bg-black text-white py-2 pl-10 font-bold text-[20px]">
            <span>TAGS</span>
          </div>
          <div className="grid grid-flow-col-[50%,50%] md:grid-flow-col py-6 px-10">
            <ul>
              <li className="py-1">Alicante</li>
              <li className="py-1">Baleares</li>
              <li className="py-1">Castellón</li>
              <li className="py-1">Ciencia y salud</li>
              <li className="py-1">Economía</li>
              <li className="py-1">Estado de Alarma de Javier Negre</li>
              <li className="py-1">Madrid</li>
            </ul>
            <ul>
              <li className='py-1'>Andalucía</li>
              <li className='py-1'>Canarias</li>
              <li className='py-1'>Castilla y León</li>
              <li className='py-1'>Comunidad Valenciana</li>
              <li className='py-1'>El Tiempo</li>
              <li className='py-1'>Estilo de vida</li>
              <li className='py-1'>Valencia</li>
            </ul>

            <ul>
              <li className='py-1'>Aragón</li>
              <li className='py-1'>Cars&Capital</li>
              <li className='py-1'>Cataluña</li>
              <li className='py-1'> Cultura</li>
              <li className='py-1'>España</li>
              <li className='py-1'>Internacional</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Page;
