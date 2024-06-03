import React from "react";
import Image from "next/image";

const RssFooter = () => {
  return (
    <>
      <div className="w-full">
        <div className="max-w-[1100px] m-auto">
          <div className="w-full bg-black text-white py-2 pl-10 font-bold text-[20px]">
            <span>RSS</span>
          </div>
          <div className="py-2 pl-16 text-[20px]">
            <h3>Categorías</h3>
          </div>
          <div className="py-4 px-8 pl-10 ">
            <div className=" bg-[#F7F7F7]">
              <hr className="border-2 border-solid border-[#c2c6cc]" />

              <div className="px-8 pb-6">
                <div className="block sm:grid grid-cols-[30%,70%] my-8">
                  <div className="flex">
                    {" "}
                    <Image
                      className="mr-2"
                      src="https://edatv.news/bundles/elmonfront/images/ico-rss-soft-gray.svg"
                      alt="RSS Image"
                      width={20}
                      height={20}
                    />
                    <a className="flex" href="">
                      {" "}
                      <p className="relative top-1"> Última Hora</p>
                    </a>{" "}
                  </div>
                  <p className="text-start">RSS de últimas noticias</p>{" "}
                </div>

                <div className="block sm:grid grid-cols-[30%,70%] my-8">
                  {" "}
                  <div className="flex">
                    {" "}
                    <Image
                      className="mr-2"
                      src="https://edatv.news/bundles/elmonfront/images/ico-rss-soft-gray.svg"
                      alt="RSS Image"
                      width={20}
                      height={20}
                    />
                    <a className="flex" href="">
                      {" "}
                      <p className="relative top-1"> Actualidad</p>
                    </a>{" "}
                  </div>
                  <p>Todas las noticias de la actualidad de España</p>
                </div>
                <div className="block sm:grid grid-cols-[30%,70%] my-8">
                  {" "}
                  <div className="flex">
                    {" "}
                    <Image
                      className="mr-2"
                      src="https://edatv.news/bundles/elmonfront/images/ico-rss-soft-gray.svg"
                      alt="RSS Image"
                      width={20}
                      height={20}
                    />
                    <a className="flex" href="">
                      {" "}
                      <p className="relative top-1"> Corazón</p>
                    </a>{" "}
                  </div>
                  <p>Todas las noticias de la prensa del corazón de España</p>
                </div>
                <div className="block sm:grid grid-cols-[30%,70%] my-8">
                  {" "}
                  <div className="flex">
                    {" "}
                    <Image
                      className="mr-2"
                      src="https://edatv.news/bundles/elmonfront/images/ico-rss-soft-gray.svg"
                      alt="RSS Image"
                      width={20}
                      height={20}
                    />
                    <a className="flex" href="">
                      {" "}
                      <p className="relative top-1">Deportes</p>
                    </a>{" "}
                  </div>
                  <p>Todas las noticias de deportes</p>
                </div>
                <div className="block sm:grid grid-cols-[30%,70%] my-8">
                  {" "}
                  <div className="flex items-center">
                    {" "}
                    <Image
                      className="mr-2"
                      src="https://edatv.news/bundles/elmonfront/images/ico-rss-soft-gray.svg"
                      alt="RSS Image"
                      width={20}
                      height={20}
                    />
                    <a className="flex" href="">
                      {" "}
                      <p className="relative top-1"> Empleo</p>
                    </a>{" "}
                  </div>
                  <p>
                    El lugar ideal para encontrar tu próximo desafío
                    profesional. Aquí, conectamos a talentos excepcionales con
                    las mejores empresas en una variedad de sectores, desde
                    tecnología y salud hasta marketing y educación.
                  </p>
                </div>
                <div className="block sm:grid grid-cols-[30%,70%] my-8">
                  {" "}
                  <div className="flex items-center">
                    {" "}
                    <Image
                      className="mr-2"
                      src="https://edatv.news/bundles/elmonfront/images/ico-rss-soft-gray.svg"
                      alt="RSS Image"
                      width={20}
                      height={20}
                    />
                    <a className="flex" href="">
                      {" "}
                      <p className="relative top-1"> Motor</p>
                    </a>{" "}
                  </div>
                  <p>
                    En nuestra categoría de Motor, te ofrecemos lo último en
                    deportes automovilísticos y motociclísticos. Explora el
                    emocionante mundo de MotoGP, donde las motocicletas más
                    rápidas y los pilotos más talentosos compiten en circuitos
                    legendarios.
                  </p>
                </div>
                <div className="block sm:grid grid-cols-[30%,70%] my-8">
                  {" "}
                  <div className="flex">
                    {" "}
                    <Image
                      className="mr-2"
                      src="https://edatv.news/bundles/elmonfront/images/ico-rss-soft-gray.svg"
                      alt="RSS Image"
                      width={20}
                      height={20}
                    />
                    <a className="flex" href="">
                      {" "}
                      <p className="relative top-1">Opinión</p>
                    </a>{" "}
                  </div>
                  <p>Todas las noticias de opinión de EDATV</p>
                </div>
                <div className="grid grid-cols-[30%,70%] my-8">
                  {" "}
                  <div className="flex">
                    {" "}
                    <Image
                      className="mr-2"
                      src="https://edatv.news/bundles/elmonfront/images/ico-rss-soft-gray.svg"
                      alt="RSS Image"
                      width={20}
                      height={20}
                    />
                    <a className="flex" href="">
                      {" "}
                      <p className="relative top-1"> Política</p>
                    </a>{" "}
                  </div>
                  <p>Todas las noticias de política</p>
                </div>
                <div className="block sm:grid grid-cols-[30%,70%] my-8">
                  {" "}
                  <div className="flex">
                    {" "}
                    <Image
                      className="mr-2"
                      src="https://edatv.news/bundles/elmonfront/images/ico-rss-soft-gray.svg"
                      alt="RSS Image"
                      width={20}
                      height={20}
                    />
                    <a className="flex" href="">
                      {" "}
                      <p className="relative top-1"> Sociedad</p>
                    </a>{" "}
                  </div>
                  <p>Todas las noticias de sociedad</p>
                </div>
                <div className="block sm:grid grid-cols-[30%,70%] my-8">
                  {" "}
                  <div className="flex">
                    {" "}
                    <Image
                      className="mr-2"
                      src="https://edatv.news/bundles/elmonfront/images/ico-rss-soft-gray.svg"
                      alt="RSS Image"
                      width={20}
                      height={20}
                    />
                    <a className="flex" href="">
                      {" "}
                      <p className="relative top-1"> Sucesos</p>
                    </a>{" "}
                  </div>
                  <p>Todas las noticias de los sucesos de España</p>
                </div>
              </div>
            </div>
          </div>


          <div className="py-2 pl-16 font-extrabold text-[20px]">
            <h3>Tags</h3>
          </div>
          <div className="py-4 px-8 pl-10 ">
            <div className=" bg-[#F7F7F7]">
              <hr className="border-2 border-solid border-[#c2c6cc]" />

              <div className="px-8 pb-6">
                <div className="block sm:grid grid-cols-[30%,70%] my-8">
                  <div className="flex">
                    {" "}
                    <Image
                      className="mr-2"
                      src="https://edatv.news/bundles/elmonfront/images/ico-rss-soft-gray.svg"
                      alt="RSS Image"
                      width={20}
                      height={20}
                    />
                    <a className="flex" href="">
                      {" "}
                      <p className="relative top-1">Alicante</p>
                    </a>{" "}
                  </div>
                  <p className="text-start">Todas las noticias de Alicante</p>{" "}
                </div>

                <div className="block sm:grid grid-cols-[30%,70%] my-8">
                  {" "}
                  <div className="flex">
                    {" "}
                    <Image
                      className="mr-2"
                      src="https://edatv.news/bundles/elmonfront/images/ico-rss-soft-gray.svg"
                      alt="RSS Image"
                      width={20}
                      height={20}
                    />
                    <a className="flex" href="">
                      {" "}
                      <p className="relative top-1"> Castellón</p>
                    </a>{" "}
                  </div>
                  <p>Todas las noticias de Castellón</p>
                </div>
                <div className="block sm:grid grid-cols-[30%,70%] my-8">
                  {" "}
                  <div className="flex">
                    {" "}
                    <Image
                      className="mr-2"
                      src="https://edatv.news/bundles/elmonfront/images/ico-rss-soft-gray.svg"
                      alt="RSS Image"
                      width={20}
                      height={20}
                    />
                    <a className="flex" href="">
                      {" "}
                      <p className="relative top-1"> Cataluña</p>
                    </a>{" "}
                  </div>
                  <p>Todas las noticias de Cataluña</p>
                </div>
                <div className="block sm:grid grid-cols-[30%,70%] my-8">
                  {" "}
                  <div className="flex">
                    {" "}
                    <Image
                      className="mr-2"
                      src="https://edatv.news/bundles/elmonfront/images/ico-rss-soft-gray.svg"
                      alt="RSS Image"
                      width={20}
                      height={20}
                    />
                    <a className="flex" href="">
                      {" "}
                      <p className="relative top-1">Comunidad Valenciana</p>
                    </a>{" "}
                  </div>
                  <p>Noticias de la Comunidad Valenciana: Castellón, Alicante y Valencia</p>
                </div>
                <div className="block sm:grid grid-cols-[30%,70%] my-8">
                  {" "}
                  <div className="flex items-center">
                    {" "}
                    <Image
                      className="mr-2"
                      src="https://edatv.news/bundles/elmonfront/images/ico-rss-soft-gray.svg"
                      alt="RSS Image"
                      width={20}
                      height={20}
                    />
                    <a className="flex" href="">
                      {" "}
                      <p className="relative top-1"> España</p>
                    </a>{" "}
                  </div>
                  <p>
                  Todas las noticias de España
                  </p>
                </div>
                <div className="block sm:grid grid-cols-[30%,70%] my-8">
                  {" "}
                  <div className="flex items-center">
                    {" "}
                    <Image
                      className="mr-2"
                      src="https://edatv.news/bundles/elmonfront/images/ico-rss-soft-gray.svg"
                      alt="RSS Image"
                      width={20}
                      height={20}
                    />
                    <a className="flex" href="">
                      {" "}
                      <p className="relative top-1"> Internacional</p>
                    </a>{" "}
                  </div>
                  <p>
                  Todas las noticias del ámbito internacional
                  </p>
                </div>
                <div className="block sm:grid grid-cols-[30%,70%] my-8">
                  {" "}
                  <div className="flex">
                    {" "}
                    <Image
                      className="mr-2"
                      src="https://edatv.news/bundles/elmonfront/images/ico-rss-soft-gray.svg"
                      alt="RSS Image"
                      width={20}
                      height={20}
                    />
                    <a className="flex" href="">
                      {" "}
                      <p className="relative top-1">Valencia</p>
                    </a>{" "}
                  </div>
                  <p>Todas las noticias de Valencia</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </>
  );
};

export default RssFooter;
