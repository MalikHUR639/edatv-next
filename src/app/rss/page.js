import React from "react";
import Image from "next/image";
import Link from "next/link";

const categoriesData = [
  {
    title: "Última Hora",
    description: "RSS de últimas noticias",
    imgSrc:
      "https://edatv.news/bundles/elmonfront/images/ico-rss-soft-gray.svg",
    link: "",
  },
  {
    title: "Actualidad",
    description: "Todas las noticias de la actualidad de España",
    imgSrc:
      "https://edatv.news/bundles/elmonfront/images/ico-rss-soft-gray.svg",
    link: "",
  },
  {
    title: "Corazón",
    description: "Todas las noticias de la prensa del corazón de España",
    imgSrc:
      "https://edatv.news/bundles/elmonfront/images/ico-rss-soft-gray.svg",
    link: "",
  },
  {
    title: "Deportes",
    description: "Todas las noticias de deportes",
    imgSrc:
      "https://edatv.news/bundles/elmonfront/images/ico-rss-soft-gray.svg",
    link: "",
  },
  {
    title: "Empleo",
    description:
      "El lugar ideal para encontrar tu próximo desafío profesional...",
    imgSrc:
      "https://edatv.news/bundles/elmonfront/images/ico-rss-soft-gray.svg",
    link: "",
  },
  {
    title: "Motor",
    description:
      "En nuestra categoría de Motor, te ofrecemos lo último en deportes automovilísticos...",
    imgSrc:
      "https://edatv.news/bundles/elmonfront/images/ico-rss-soft-gray.svg",
    link: "",
  },
  {
    title: "Opinión",
    description: "Todas las noticias de opinión de EDATV",
    imgSrc:
      "https://edatv.news/bundles/elmonfront/images/ico-rss-soft-gray.svg",
    link: "",
  },
  {
    title: "Política",
    description: "Todas las noticias de política",
    imgSrc:
      "https://edatv.news/bundles/elmonfront/images/ico-rss-soft-gray.svg",
    link: "",
  },
  {
    title: "Sociedad",
    description: "Todas las noticias de sociedad",
    imgSrc:
      "https://edatv.news/bundles/elmonfront/images/ico-rss-soft-gray.svg",
    link: "",
  },
  {
    title: "Sucesos",
    description: "Todas las noticias de los sucesos de España",
    imgSrc:
      "https://edatv.news/bundles/elmonfront/images/ico-rss-soft-gray.svg",
    link: "",
  },
];

const tagsData = [
  {
    title: "Alicante",
    description: "Todas las noticias de Alicante",
    imgSrc: "https://edatv.news/bundles/elmonfront/images/ico-rss-soft-gray.svg",
    link: "",
  },
  {
    title: "Castellón",
    description: "Todas las noticias de Castellón",
    imgSrc: "https://edatv.news/bundles/elmonfront/images/ico-rss-soft-gray.svg",
    link: "",
  },
  {
    title: "Cataluña",
    description: "Todas las noticias de Cataluña",
    imgSrc: "https://edatv.news/bundles/elmonfront/images/ico-rss-soft-gray.svg",
    link: "",
  },
  {
    title: "Comunidad Valenciana",
    description: "Noticias de la Comunidad Valenciana: Castellón, Alicante y Valencia",
    imgSrc: "https://edatv.news/bundles/elmonfront/images/ico-rss-soft-gray.svg",
    link: "",
  },
  {
    title: "España",
    description: "Todas las noticias de España",
    imgSrc: "https://edatv.news/bundles/elmonfront/images/ico-rss-soft-gray.svg",
    link: "",
  },
  {
    title: "Internacional",
    description: "Todas las noticias del ámbito internacional",
    imgSrc: "https://edatv.news/bundles/elmonfront/images/ico-rss-soft-gray.svg",
    link: "",
  },
  {
    title: "Valencia",
    description: "Todas las noticias de Valencia",
    imgSrc: "https://edatv.news/bundles/elmonfront/images/ico-rss-soft-gray.svg",
    link: "",
  },
];

const RssFooter = () => {
  return (
    <>
      <div className="w-full">
        <div className="max-w-[1100px] m-auto">
          <div className="w-full bg-black text-white mt-4 py-2 pl-10 font-bold text-[40px]">
            <span>RSS</span>
          </div>
          <div className="pt-4 pl-16 font-bold text-[20px]">
            <h3>Categorías</h3>
          </div>
          <div className="py-4 px-8 pl-10">
            <div className=" bg-[#F7F7F7]">
              <hr className="border-2 border-solid border-[#c2c6cc]" />
              <div className="px-8 pb-6">
                {categoriesData.map((data, index) => (
                  <div
                    key={index}
                    className="block sm:grid grid-cols-[30%,70%] my-8"
                  >
                    <div className="pb-4 sm:pb-0 flex items-center">
                      <Image
                        className="mr-2"
                        src={data.imgSrc}
                        alt="RSS Image"
                        width={20}
                        height={20}
                      />
                      <Link className="flex" href={data.link}>
                        <p className="relative top-1">{data.title}</p>
                      </Link>
                    </div>
                    <p className="text-start">{data.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="py-2 pl-16 font-bold text-[20px]">
            <h3>Tags</h3>
          </div>
          <div className="py-4 px-8 pl-10 ">
            <div className=" bg-[#F7F7F7]">
              <hr className="border-2 border-solid border-[#c2c6cc]" />
              <div className="px-8 pb-6">
                {tagsData.map((data, index) => (
                  <div
                    key={index}
                    className="block sm:grid grid-cols-[30%,70%] my-8"
                  >
                    <div className="pb-4 sm:pb-0 flex items-center">
                      <Image
                        className="mr-2"
                        src={data.imgSrc}
                        alt="RSS Image"
                        width={20}
                        height={20}
                      />
                      <Link className="flex" href={data.link}>
                        <p className="relative top-1">{data.title}</p>
                      </Link>
                    </div>
                    <p className="text-start">{data.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default RssFooter;
