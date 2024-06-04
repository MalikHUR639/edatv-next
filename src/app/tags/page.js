import React from "react";

const TagFooter = () => {
  const data = [
    [
      "Alicante",
      "Baleares",
      "Castellón",
      "Ciencia y salud",
      "Economía",
      "Estado de Alarma de Javier Negre",
      "Madrid",
    ],
    [
      "Andalucía",
      "Canarias",
      "Castilla y León",
      "Comunidad Valenciana",
      "El Tiempo",
      "Estilo de vida",
      "Valencia",
    ],
    [
      "Aragón",
      "Cars&Capital",
      "Cataluña",
      "Cultura",
      "España",
      "Internacional",
    ],
  ];

  return (
    <>
      <div className="w-full">
        <div className="max-w-[1100px] m-auto p-4">
          <div className="w-full bg-black text-white py-2 pl-10 font-bold text-[20px] m-2">
            <span>TAGS</span>
          </div>
          <div className="grid grid-flow-col-[50%,50%] md:grid-flow-col py-6 px-10">
            {data.map((column, colIndex) => (
              <ul key={colIndex}>
                {column.map((item, itemIndex) => (
                  <li key={itemIndex} className="py-1">
                    {item}
                  </li>
                ))}
              </ul>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default TagFooter;
