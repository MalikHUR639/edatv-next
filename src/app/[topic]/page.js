"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const cardsData = [
  {
    id: 1,
    category: "POLÍTICA",
    title: "¿Quién es Miguel Frontera, el que le dio jarabe democrático a Pablo Iglesias?",
    author: "ADAIS CÁSARES",
    imageUrl: "https://edatv.news/filesedc/uploads/image/post/la-ultima-critica-contra-los-trenes-de-oscar-puente_1200_800.webp",
    link: "#",
  },
  {
    id: 2,
    category: "POLÍTICA",
    title: "¿Quién es Miguel Frontera, el que le dio jarabe democrático a Pablo Iglesias?",
    author: "ADAIS CÁSARES",
    imageUrl: "https://edatv.news/filesedc/uploads/image/post/la-ultima-critica-contra-los-trenes-de-oscar-puente_1200_800.webp",
    link: "#",
  },
  {
    id: 3,
    category: "POLÍTICA",
    title: "¿Quién es Miguel Frontera, el que le dio jarabe democrático a Pablo Iglesias?",
    author: "ADAIS CÁSARES",
    imageUrl: "https://edatv.news/filesedc/uploads/image/post/la-ultima-critica-contra-los-trenes-de-oscar-puente_1200_800.webp",
    link: "#",
  },
  {
    id: 4,
    category: "POLÍTICA",
    title: "¿Quién es Miguel Frontera, el que le dio jarabe democrático a Pablo Iglesias?",
    author: "ADAIS CÁSARES",
    imageUrl: "https://edatv.news/filesedc/uploads/image/post/la-ultima-critica-contra-los-trenes-de-oscar-puente_1200_800.webp",
    link: "#",
  },
  {
    id: 5,
    category: "POLÍTICA",
    title: "¿Quién es Miguel Frontera, el que le dio jarabe democrático a Pablo Iglesias?",
    author: "ADAIS CÁSARES",
    imageUrl: "https://edatv.news/filesedc/uploads/image/post/la-ultima-critica-contra-los-trenes-de-oscar-puente_1200_800.webp",
    link: "#",
  },
  {
    id: 6,
    category: "POLÍTICA",
    title: "¿Quién es Miguel Frontera, el que le dio jarabe democrático a Pablo Iglesias?",
    author: "ADAIS CÁSARES",
    imageUrl: "https://edatv.news/filesedc/uploads/image/post/la-ultima-critica-contra-los-trenes-de-oscar-puente_1200_800.webp",
    link: "#",
  },
  {
    id: 7,
    category: "POLÍTICA",
    title: "¿Quién es Miguel Frontera, el que le dio jarabe democrático a Pablo Iglesias?",
    author: "ADAIS CÁSARES",
    imageUrl: "https://edatv.news/filesedc/uploads/image/post/la-ultima-critica-contra-los-trenes-de-oscar-puente_1200_800.webp",
    link: "#",
  },
  {
    id: 8,
    category: "POLÍTICA",
    title: "¿Quién es Miguel Frontera, el que le dio jarabe democrático a Pablo Iglesias?",
    author: "ADAIS CÁSARES",
    imageUrl: "https://edatv.news/filesedc/uploads/image/post/la-ultima-critica-contra-los-trenes-de-oscar-puente_1200_800.webp",
    link: "#",
  },
  {
    id: 9,
    category: "POLÍTICA",
    title: "¿Quién es Miguel Frontera, el que le dio jarabe democrático a Pablo Iglesias?",
    author: "ADAIS CÁSARES",
    imageUrl: "https://edatv.news/filesedc/uploads/image/post/la-ultima-critica-contra-los-trenes-de-oscar-puente_1200_800.webp",
    link: "#",
  },
  {
    id: 10,
    category: "POLÍTICA",
    title: "¿Quién es Miguel Frontera, el que le dio jarabe democrático a Pablo Iglesias?",
    author: "ADAIS CÁSARES",
    imageUrl: "https://edatv.news/filesedc/uploads/image/post/la-ultima-critica-contra-los-trenes-de-oscar-puente_1200_800.webp",
    link: "#",
  },
  
];

const TopicCards = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 4;

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = cardsData.slice(indexOfFirstItem, indexOfLastItem);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const totalPages = Math.ceil(cardsData.length / itemsPerPage);

  return (
    <>
      <div className="inner-container max-w-[1100px] m-auto px-4 md:p-2 xl:p-0">
        <div>
          <h1 className="bg-[#131722] mt-[0.67em] text-white text-[14pt] py-1 px-[7px] font-bold">
            POLICY
          </h1>
        </div>
        <p className="text-[10pt] leading-[2.9] text-black">
          All political news
        </p>
      </div>
      <div className="grid grid-cols-[100%] md:grid-cols-[68%,30%] max-w-[1100px] overflow-x-hidden m-auto mb-6 bg-white text-black gap-[2%]">
        <div className="w-full p-4 md:p-2 xl:p-0 mt-2 md:mt-4">
          <div className="inner-container mb-4 grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-1 ">
            <Image
              src="https://edatv.news/filesedc/uploads/categories/537/1200/politica%20edatv.webp"
              alt="edatv img"
              layout="responsive"
              width={1200}
              height={800}
              className="w-full"
            />
            <hr className="border-1 border-gray-400 my-6 mx-6" />
          </div>

          <div className="inner-container grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-7">
            {currentItems.map((card) => (
              <div key={card.id} className="card-container w-full bg-white pb-4">
                <div>
                  <Link href={card.link}>
                    <Image
                      className="object-cover h-25 w-full"
                      src={card.imageUrl}
                      alt="edatv.news img"
                      layout="responsive"
                      width={1200}
                      height={800}
                    />
                  </Link>
                  <div className="p-0.5">
                    <h3 className="text-red-600 font-medium uppercase text-[10px] mt-2 mb-0.5">
                      {card.category}
                    </h3>
                    <h2 className="text-[13px] font-[500] leading-tight mb-0.5">
                      <Link href={card.link}>{card.title}</Link>
                    </h2>
                    <Link href={card.link} className="text-[10px] text-[#8c8c8c]">
                      {card.author} <span>💬</span>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="paginator-container w-full text-center mt-4">
            <ul className="paginator flex justify-center border w-max m-auto border-gray-300 shadow-sm mb-7 rounded">
              <li className={`page-item first ${currentPage === 1 ? 'disabled' : ''}`}>
                <button
                  className="page-link px-3 py-1 border-r border-gray-300"
                  onClick={() => handlePageChange(1)}
                  disabled={currentPage === 1}
                >
                  &lt;&lt;
                </button>
              </li>
              <li className={`page-item prev ${currentPage === 1 ? 'disabled' : ''}`}>
                <button
                  className="page-link px-3 py-1 border-r border-gray-300"
                  onClick={() => handlePageChange(currentPage - 1)}
                  disabled={currentPage === 1}
                >
                  &lt;
                </button>
              </li>
              {Array.from({ length: totalPages }, (_, index) => (
                <li key={index} className={`page-item ${currentPage === index + 1 ? 'active' : ''}`}>
                  <button
                    className={`page-link px-3 py-1 border-r border-gray-300 ${currentPage === index + 1 ? 'bg-[#131722] text-white' : 'bg-white text-[#131722]'}`}
                    onClick={() => handlePageChange(index + 1)}
                  >
                    {index + 1}
                  </button>
                </li>
              ))}
              <li className={`page-item next ${currentPage === totalPages ? 'disabled' : ''}`}>
                <button
                  className="page-link px-3 py-1 border-r border-gray-300"
                  onClick={() => handlePageChange(currentPage + 1)}
                  disabled={currentPage === totalPages}
                >
                  &gt;
                </button>
              </li>
              <li className={`page-item last ${currentPage === totalPages ? 'disabled' : ''}`}>
                <button
                  className="page-link px-3 py-1"
                  onClick={() => handlePageChange(totalPages)}
                  disabled={currentPage === totalPages}
                >
                  &gt;&gt;
                </button>
              </li>
            </ul>
          </div>
        </div>
        <div className="hidden lg:block text-center text-[#7c7b7b]">
          <p>Publicidad</p>
        </div>
      </div>
    </>
  );
};

export default TopicCards;

