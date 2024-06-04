import Link from "next/link";
import React from "react";

const SiteMapFooter = () => {
  const categories = [
    { title: "Política", link: "" },
    { title: "Actualidad", link: "" },
    { title: "Sociedad", link: "" },
    { title: "Deportes", link: "" },
    { title: "Sucesos", link: "" },
    { title: "Corazón", link: "" },
    { title: "Motor", link: "" },
    { title: "Ofertas de empleo", link: "" },
  ];
  const tags = [
    { title: "Alicante", link: "" },
    { title: "Madrid", link: "" },
    { title: "Castellón", link: "" },
    { title: "Comunidad Valenciana", link: "" },
    { title: "España", link: "" },
    { title: "Internacional", link: "" },
    { title: "Cultura", link: "" },
    { title: "El tiempo", link: "" },
  ];
  

  return (
    <>
      <div className="w-full">
        <div className="max-w-[1100px] m-auto">
          <div className="flex items-center justify-center font-extrabold text-[20px] md:text-[2em]">
            <h1>Mapa del sitio</h1>
          </div>
          <div>
            {" "}
            <hr className="border-1 border-solid border-[#c2c6cc]" />
          </div>
          <div className="m-6">
            <h2 className="font-extrabold text-[20px]">CATEGORÍAS</h2>
            <ul>
              {categories.map((items, index) => (
                <li key={index}>
                  <Link className="text-[#337ab7] text-lg" href={items.link}>
                    {items.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="m-6">
            <h2 className="font-extrabold text-[20px]">TAGS</h2>
            <ul>
              {tags.map((items, index) => (
                <li key={index}>
                  <Link className="text-[#337ab7] text-sm md:text-lg" href={items.link}>
                    {items.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default SiteMapFooter;
