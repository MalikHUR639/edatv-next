"use client";

import SideBar from "@/components/sideBar/page";
import AdContainer from "@/components/adContainer/page";
import PostCard from "@/components/postCard/page";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { IoMdMail } from "react-icons/io";
import { SiLinkedin } from "react-icons/si";

const cardsData = [
  {
    id: 1,

    title:
      "¿Quién es Miguel Frontera, el que le dio jarabe democrático a Pablo Iglesias?",

    imageUrl:
      "https://edatv.news/filesedc/uploads/image/post/la-ultima-critica-contra-los-trenes-de-oscar-puente_1200_800.webp",
    link: "#",
  },
  {
    id: 2,

    title:
      "¿Quién es Miguel Frontera, el que le dio jarabe democrático a Pablo Iglesias?",

    imageUrl:
      "https://edatv.news/filesedc/uploads/image/post/la-ultima-critica-contra-los-trenes-de-oscar-puente_1200_800.webp",
    link: "#",
  },
];

const data = [
  {
    imageUrl:
      "https://edatv.news/filesedc/uploads/image/post/montaje-angel-llacer-gafas-grises-bebe-logo-antena3_760_507.webp",
    title:
      "Àngel Llàcer, con un bebé en brazos, anuncia una noticia que sorprenderá a Antena 3",
  },
  {
    imageUrl:
      "https://edatv.news/filesedc/uploads/image/post/montaje-angel-llacer-gafas-grises-bebe-logo-antena3_760_507.webp",
    title:
      "Àngel Llàcer, con un bebé en brazos, anuncia una noticia que sorprenderá a Antena 3",
  },
  {
    imageUrl:
      "https://edatv.news/filesedc/uploads/image/post/montaje-angel-llacer-gafas-grises-bebe-logo-antena3_760_507.webp",
    title:
      "Àngel Llàcer, con un bebé en brazos, anuncia una noticia que sorprenderá a Antena 3",
  },
  {
    imageUrl:
      "https://edatv.news/filesedc/uploads/image/post/montaje-angel-llacer-gafas-grises-bebe-logo-antena3_760_507.webp",
    title:
      "Àngel Llàcer, con un bebé en brazos, anuncia una noticia que sorprenderá a Antena 3",
  },
  {
    imageUrl:
      "    https://edatv.news/filesedc/uploads/image/post/montaje-con-vicky-martin-berrocal-junto-a-maria-patino-y-una-imagen-de-enrique-solis_760_507.webp",
    title:
      "Àngel Llàcer, con un bebé en brazos, anuncia una noticia que sorprenderá a Antena 3",
  },
  {
    imageUrl:
      "    https://edatv.news/filesedc/uploads/image/post/montaje-con-vicky-martin-berrocal-junto-a-maria-patino-y-una-imagen-de-enrique-solis_760_507.webp",
    title:
      "Àngel Llàcer, con un bebé en brazos, anuncia una noticia que sorprenderá a Antena 3",
  },
  {
    imageUrl:
      "https://edatv.news/filesedc/uploads/image/post/montaje-angel-llacer-gafas-grises-bebe-logo-antena3_760_507.webp",
    title:
      "Àngel Llàcer, con un bebé en brazos, anuncia una noticia que sorprenderá a Antena 3",
  },
  {
    imageUrl:
      "    https://edatv.news/filesedc/uploads/image/post/montaje-con-vicky-martin-berrocal-junto-a-maria-patino-y-una-imagen-de-enrique-solis_760_507.webp",
    title:
      "Àngel Llàcer, con un bebé en brazos, anuncia una noticia que sorprenderá a Antena 3",
  },
];

const Page = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDrop, setDrop] = useState(false);

  const toggleDropdown = () => {
    setDrop(!isDrop);
  };

  const toggleDrawer = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <SideBar
        isOpen={isOpen}
        toggleDrawer={toggleDrawer}
        isDrop={isDrop}
        toggleDropdown={toggleDropdown}
      />
      <button
        id="dropdownDefaultButton"
        onClick={toggleDropdown}
        aria-haspopup="true"
        aria-expanded={isDrop ? "true" : "false"}
        className="text-black focus:outline-none rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center"
        type="button"
      ></button>
      <div className="grid grid-cols-[100%] lg:grid-cols-[68%,30%] max-w-[1200px] overflow-x-hidden m-auto mt-4 bg-white text-black gap-[2%]">
        <div className="p-1 sm:p-2 xl:p-0">
          <Image
            src="https://edatv.news/filesedc/uploads/image/post/local-de-palma-tras-el-derrumbe_1200_800.webp"
            alt="edatv img"
            width={1200}
            height={800}
            className="w-full"
          />
          <figure>
            <figcaption className="flex flex-row text-sm w-full whitespace-nowrap text-left font-light text-gray-600 overflow-x-hidden flex-wrap overflow-y-hidden">
              El local de Palma tras el trágico derrumbe |
              <Image
                alt="Camara"
                className="h-4 align-middle my-auto mx-1"
                src="https://edatv.news/filesedc/uploads/image/post/la-ultima-critica-contra-los-trenes-de-oscar-puente_1200_800.webp"
                width={16}
                height={16}
              />{" "}
              Europa Press
            </figcaption>
          </figure>
          <article className="block">
            <h3 className="text-left font-normal text-red-600 text-[20px] mt-[25px]">
              SUCESOS
            </h3>
            <h1 className="mt-[10px] font-bold text-left text-3xl md:text-6xl md:leading-tight">
              Última hora sobre la tragedia de la playa de Palma que acabó con
              la vida de 4 personas
            </h1>
            <h2 className="mt-[20px] text-lg md:text-xl lg:text-[28px] font-semibold leading-[35px] text-black text-left">
              La parte superior del local estaba involucrada en una actividad
              ilegal, y la estructura colapsó debido al sobrepeso
            </h2>
            <div className="whitespace-nowrap text-xs font-light leading-4 text-gray-600 text-left mt-[10px]">
              <time dateTime="2024-05-28T11:19:00">28/05/2024 11:19:00h</time>
            </div>
            <div>
              <div className="text-left text-[18px] font-normal leading-6 text-gray-800 mb-[5px] mt-2 relative">
                <div className="flex items-center">
                  <Link
                    href="/"
                    className="inline-flex my-3 items-center gap-2"
                  >
                    <span className="text-gray-900 text-xs">por</span>
                    <p className="text-black font-semibold text-xs">
                      Jose Andres Jorge Barceló
                    </p>
                  </Link>
                </div>
                <div id="author_rrss" className="flex gap-2 mt-1">
                  <Link href="/" className="inline-block">
                    <IoMdMail className="w-5 h-5 text-black" />
                  </Link>
                  <Link href="/" className="inline-block">
                    <SiLinkedin className="w-5 h-5 text-black" />
                  </Link>
                </div>
              </div>
              <AdContainer />
              <p className="mb-[1em] text-lg font-normal leading-[1.5em]">
                El pasado jueves, la terraza del Medusa Beach Club en Palma se
                hundió, causando la muerte de cuatro personas y dejando a
                dieciséis heridas. Se ha confirmado que la terraza no tenía
                licencia para operar como chill-out, según el informe elaborado
                por los técnicos del ayuntamiento. La parte superior del local
                estaba involucrada en una actividad ilegal, y la estructura
                colapsó debido al sobrepeso.
              </p>
              <AdContainer />
              <p className="mb-[1em] text-lg font-normal leading-[1.5em]">
                Por otro lado, tanto el restaurante como el sótano, donde se
                encontraba la discoteca, contaban con todos los documentos en
                regla. Todo ello según lo corroborado los funcionarios del
                departamento de Urbanismo y los Bomberos de Palma.
              </p>
              <p className="mb-[1em] text-lg font-normal leading-[1.5em]">
                Los técnicos municipales han reconstruido el trágico incidente
                este lunes y han recogido muestras de los escombros y fragmentos
                de la terraza. Estas muestras están siendo analizadas en un
                laboratorio para determinar su resistencia, lo que respaldará
                las conclusiones del informe técnico. Según el diario Última
                Hora, este documento se enviará a la autoridad judicial y a la
                Policía Nacional en las próximas horas.
              </p>
              <AdContainer />
              <div className="w-[80%] mx-auto">
                <Image
                  src="https://edatv.news/filesedc/uploads/image/post/2852379_1600_1067.webp"
                  alt="edatv img"
                  width={1200}
                  height={800}
                  className="w-full"
                />
                <figure>
                  <figcaption className="flex mt-2 flex-row text-sm w-full whitespace-nowrap text-left font-light text-gray-600 overflow-x-hidden flex-wrap overflow-y-hidden">
                    El local de Palma tras el trágico derrumbe |
                    <Image
                      alt="Camara"
                      className="h-4 align-middle my-auto ml-1"
                      src="https://edatv.news/filesedc/uploads/image/post/la-ultima-critica-contra-los-trenes-de-oscar-puente_1200_800.webp"
                      width={16}
                      height={16}
                    />{" "}
                    Europa Press
                  </figcaption>
                </figure>
              </div>
              <p className="mb-[1em] mt-[2em] text-lg font-normal leading-[1.5em]">
                Esta última información abre la posibilidad de que los
                propietarios del Medusa, los hermanos Arnsteiner, de origen
                austríaco, sean detenidos. Todo ello por cuatro supuestos
                delitos de homicidio imprudente.
              </p>
              <p className="mb-[1em] text-lg font-normal leading-[1.5em]">
                Según la inspección técnica realizada en el edificio en 2017, la
                terraza era considerada “no transitable”. Una condición que no
                cambió cuando en 2021 comenzó el proyecto del Beach Club.
              </p>
              <p className="mb-[1em] text-lg font-normal leading-[1.5em]">
                La investigación ha revelado que el local ya había sido
                sancionado por varias infracciones urbanísticas. Además,
                acumulaba expedientes relacionados con obras y reformas en el
                edificio, cuya estructura estaba bastante deteriorada.
              </p>
              <AdContainer />
              <p className="mb-[1em] mt-[2em] text-lg font-normal leading-[1.5em]">
                Cabe recordar que las víctimas mortales son una camarera del
                restaurante de 23 años y natural de Navarra,. Además de un
                cliente senegalés de 45, muy conocido en el barrio por haber
                salvado la vida a una persona en el año 2017. Y dos turistas
                alemanas de 20 y 30 años respectivamente.
              </p>
              <p className="mb-[1em] text-lg font-normal leading-[1.5em]">
                De hecho, el propietario del local derrumbado en la Playa de
                Palma habló en declaraciones a IB3. Afirmaba que en la terraza
                no se superaba la capacidad máxima. Aseguraba que en ese momento
                había 15 personas.
              </p>
              <p className="mb-[1em] text-lg font-normal leading-[1.5em]">
                Sin embargo, el informe sobre lo sucedido, señala que hay
                cámaras de seguridad en el local que podrán aclarar los hechos
                en el momento exacto del colapso.
              </p>

              <div className="container pr-5">
                <div className="flex flex-row m-4">
                  <div className="text-[10px] w-[5rem] flex flex-col text-center">
                    <p className="font-[200] text-[#555] text-[16px] leading-[17px]">
                      135
                    </p>
                    <p>Veces compartido</p>
                  </div>

                  <button
                    type="button"
                    className="text-white bg-[#000000] hover:bg-[#000000]/90 focus:ring-4 focus:outline-none focus:ring-[#1da1f2]/50 font-medium rounded-sm text-sm px-4 py-1 h-8 text-center flex justify-center items-center dark:focus:ring-[#1da1f2]/55 me-2 mb-2"
                  >
                    <Image
                      className="w-4 h-4 me-2"
                      src="https://platform-cdn.sharethis.com/img/twitter.svg"
                      alt="Telegram icon"
                      width={1200}
                      height={800}
                    />
                    <p className=" hidden lg:block">Twitter</p>
                  </button>

                  <button
                    type="button"
                    className="text-white bg-[#0088cc] hover:bg-[#0088cc]/90 focus:ring-4 focus:outline-none focus:ring-[#1da1f2]/50 font-medium rounded-sm text-sm px-4 py-1 h-8 text-center flex justify-center items-center dark:focus:ring-[#1da1f2]/55 me-2 mb-2"
                  >
                    <Image
                      className="w-4 h-4 me-2"
                      src="https://platform-cdn.sharethis.com/img/telegram.svg"
                      alt="Telegram icon"
                      width={1200}
                      height={800}
                    />
                    <p className=" hidden lg:block">Compartir</p>
                  </button>

                  <button
                    type="button"
                    className="text-white bg-[#25d366] hover:bg-[#25d366]/90 focus:ring-4 focus:outline-none focus:ring-[#1da1f2]/50 font-medium rounded-sm text-sm px-4 py-1 h-8 text-center flex justify-center items-center dark:focus:ring-[#1da1f2]/55 me-2 mb-2"
                  >
                    <Image
                      className="w-4 h-4 me-2"
                      src="https://platform-cdn.sharethis.com/img/whatsapp.svg"
                      alt="Telegram icon"
                      width={1200}
                      height={800}
                    />
                    <p className=" hidden lg:block">whatsapp</p>
                  </button>

                  <div className="hidden sm:block">
                    <button
                      type="button"
                      className=" text-white bg-[#4267B2] hover:bg-[#4267B2]/90 focus:ring-4 focus:outline-none focus:ring-[#1da1f2]/50 font-medium rounded-sm text-sm px-4 py-1  h-8 text-center flex justify-center items-center dark:focus:ring-[#1da1f2]/55 me-2 mb-2"
                    >
                      <Image
                        className="w-4 h-4 me-2"
                        src="https://platform-cdn.sharethis.com/img/facebook.svg"
                        alt="Telegram icon"
                        width={1200}
                        height={800}
                      />
                      <p className=" hidden lg:block">Facebook</p>
                    </button>
                  </div>

                  <div className="hidden sm:block">
                    <button
                      type="button"
                      className="text-white bg-[#0077b5] hover:bg-[#0077b5]/90 focus:ring-4 focus:outline-none focus:ring-[#1da1f2]/50 font-medium rounded-sm text-sm px-4 py-1 h-8 text-center flex justify-center items-center dark:focus:ring-[#1da1f2]/55 me-2 mb-2"
                    >
                      <Image
                        className="w-4 h-4 me-2"
                        src="https://platform-cdn.sharethis.com/img/linkedin.svg"
                        alt="Telegram icon"
                        width={1200}
                        height={800}
                      />
                      <p className=" hidden xl:block">Linkedin</p>
                    </button>
                  </div>
                </div>

                <div>
                  <button
                    type="button"
                    className="text-white bg-[#000000] hover:bg-[#000000]/90 focus:ring-4 focus:outline-none focus:ring-[#1da1f2]/50 font-bold text-[22px] rounded-md text-sm mx-2 py-1 w-full h-8 text-center flex justify-center dark:focus:ring-[#1da1f2]/55 me-2 mb-2"
                    onClick={toggleDrawer}
                  >
                    <Image
                      className="w-6 h-6 me-2"
                      src="https://edatv.news/filesedc/uploads/other/commentBlue.png"
                      alt="Telegram icon"
                      width={1200}
                      height={800}
                    />
                    <p className="text-sm md:text-xl">Lee y haz comentarios</p>
                  </button>
                </div>
              </div>

              <div className="container my-8">
                <div className="inner-container">
                  <h2 className="my-6 px-2 flex flex-col items-center md:block">
                    <p className="text-[#000] leading-[1.55em] font-[700]">
                      Últimos sucesos
                    </p>
                    <hr className="w-[85px] border-2 border-red-600 mt-2" />
                  </h2>

                  <div className="inner-container max-w-[39.5rem] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-7 px-2">
                    {cardsData.map((card) => (
                      <div
                        key={card.id}
                        className="card-container w-full bg-white pb-4"
                      >
                        <div>
                          <Link href={card.link}>
                            <Image
                              className="object-cover h-25 w-full"
                              src={card.imageUrl}
                              alt="edatv.news img"
                              width={1200}
                              height={800}
                            />
                          </Link>
                          <div className="p-0.5">
                            <h2 className="text-[13px] font-[500] leading-tight my-4 mx-4">
                              <Link href={card.link}>{card.title}</Link>
                            </h2>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <h2 className="my-6 px-2 flex flex-col items-center md:block">
                <p className="text-[#000] leading-[1.55em] font-[700]">
                  En tendencia
                </p>
                <hr className="w-[85px] border-2 border-red-600 mt-2" />
              </h2>
              <PostCard items={data} />
              <p className="mb-[1em] text-lg font-normal leading-[1.5em]">
                {" "}
                Más noticias:
              </p>
              <ul className="list-none p-0 mb-12">
                <li className="text-left text-sm leading-[1.55]">
                  <Link href="/">
                    <p
                      className="text-blue-500 hover:text-blue-700"
                      title="La trágica muerte de un hombre tras una discusión doméstica"
                    >
                      La trágica muerte de un hombre tras una discusión
                      doméstica
                    </p>
                  </Link>
                </li>
                <li className="text-left text-sm leading-[1.55]">
                  <Link href="/">
                    <p
                      className="text-blue-500 hover:text-blue-700"
                      title="El viral vídeo de un chino que azota a dos empleados a latigazos y las redes estallan"
                    >
                      El viral vídeo de un chino que azota a dos empleados a
                      latigazos y las redes estallan
                    </p>
                  </Link>
                </li>
              </ul>
            </div>
          </article>
        </div>
        <div className="hidden lg:block text-center text-[#7c7b7b]">
          <p>Publicidad</p>
        </div>
      </div>
    </>
  );
};

export default Page;
