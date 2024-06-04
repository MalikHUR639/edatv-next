"use client"
import React, { useState } from "react";
import Image from "next/image";

const cardData = [
  {
    name: "Adais Casares",
    photo: "https://edatv.news/filesedc/uploads/autors/537/300/11707.webp",
    socialIcons: [
      "https://edatv.news/filesedc/uploads/other/icons/e-mail.svg",
      "https://edatv.news/filesedc/uploads/other/icons/linkedin.svg",
      "https://edatv.news/filesedc/uploads/other/icons/x.svg",
    ],
  },
  {
    name: "Adais Casares",
    photo: "https://edatv.news/filesedc/uploads/autors/537/300/11707.webp",
    socialIcons: [
      "https://edatv.news/filesedc/uploads/other/icons/e-mail.svg",
      "https://edatv.news/filesedc/uploads/other/icons/linkedin.svg",
      "https://edatv.news/filesedc/uploads/other/icons/x.svg",
    ],
  },
  {
    name: "Adais Casares",
    photo: "https://edatv.news/filesedc/uploads/autors/537/300/11707.webp",
    socialIcons: [
      "https://edatv.news/filesedc/uploads/other/icons/e-mail.svg",
      "https://edatv.news/filesedc/uploads/other/icons/linkedin.svg",
      "https://edatv.news/filesedc/uploads/other/icons/x.svg",
    ],
  },
  {
    name: "Adais Casares",
    photo: "https://edatv.news/filesedc/uploads/autors/537/300/11707.webp",
    socialIcons: [
      "https://edatv.news/filesedc/uploads/other/icons/e-mail.svg",
      "https://edatv.news/filesedc/uploads/other/icons/linkedin.svg",
      "https://edatv.news/filesedc/uploads/other/icons/x.svg",
    ],
  },
  {
    name: "Adais Casares",
    photo: "https://edatv.news/filesedc/uploads/autors/537/300/11707.webp",
    socialIcons: [
      "https://edatv.news/filesedc/uploads/other/icons/e-mail.svg",
      "https://edatv.news/filesedc/uploads/other/icons/linkedin.svg",
      "https://edatv.news/filesedc/uploads/other/icons/x.svg",
    ],
  },
  {
    name: "Adais Casares",
    photo: "https://edatv.news/filesedc/uploads/autors/537/300/11707.webp",
    socialIcons: [
      "https://edatv.news/filesedc/uploads/other/icons/e-mail.svg",
      "https://edatv.news/filesedc/uploads/other/icons/linkedin.svg",
      "https://edatv.news/filesedc/uploads/other/icons/x.svg",
    ],
  },
  {
    name: "Adais Casares",
    photo: "https://edatv.news/filesedc/uploads/autors/537/300/11707.webp",
    socialIcons: [
      "https://edatv.news/filesedc/uploads/other/icons/e-mail.svg",
      "https://edatv.news/filesedc/uploads/other/icons/linkedin.svg",
      "https://edatv.news/filesedc/uploads/other/icons/x.svg",
    ],
  },
  {
    name: "Adais Casares",
    photo: "https://edatv.news/filesedc/uploads/autors/537/300/11707.webp",
    socialIcons: [
      "https://edatv.news/filesedc/uploads/other/icons/e-mail.svg",
      "https://edatv.news/filesedc/uploads/other/icons/linkedin.svg",
      "https://edatv.news/filesedc/uploads/other/icons/x.svg",
    ],
  },
  {
    name: "Adais Casares",
    photo: "https://edatv.news/filesedc/uploads/autors/537/300/11707.webp",
    socialIcons: [
      "https://edatv.news/filesedc/uploads/other/icons/e-mail.svg",
      "https://edatv.news/filesedc/uploads/other/icons/linkedin.svg",
      "https://edatv.news/filesedc/uploads/other/icons/x.svg",
    ],
  },
  {
    name: "Adais Casares",
    photo: "https://edatv.news/filesedc/uploads/autors/537/300/11707.webp",
    socialIcons: [
      "https://edatv.news/filesedc/uploads/other/icons/e-mail.svg",
      "https://edatv.news/filesedc/uploads/other/icons/linkedin.svg",
      "https://edatv.news/filesedc/uploads/other/icons/x.svg",
    ],
  },
  {
    name: "Adais Casares",
    photo: "https://edatv.news/filesedc/uploads/autors/537/300/11707.webp",
    socialIcons: [
      "https://edatv.news/filesedc/uploads/other/icons/e-mail.svg",
      "https://edatv.news/filesedc/uploads/other/icons/linkedin.svg",
      "https://edatv.news/filesedc/uploads/other/icons/x.svg",
    ],
  }
];


const AuthorFooter = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 18; 

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = cardData.slice(indexOfFirstItem, indexOfLastItem);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const totalPages = Math.ceil(cardData.length / itemsPerPage);

  return (
    <div className="w-full">
      <div className="max-w-[900px] mx-auto">
        <div className="bg-[#131722] text-white mt-6 text-[10pt] sm:text-[17pt] p-[7px] font-bold uppercase mb-10 text-left">
          <h1 className=" sm:ml-[50px]">autores</h1>
        </div>
        <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-5 gap-4 justify-items-center">
          {currentItems.map((card, index) => (
            <div key={index} className="bg-[#f1efef] rounded-lg p-4 flex flex-col items-center">
              <Image
                src={card.photo}
                alt={`Author photo by ${card.name}`}
                width={144}
                height={144}
                className="rounded-full"
              />
              <div className="text-center text-sm py-2">
                <p>{card.name}</p>
              </div>
              <div className="text-center flex justify-center items-center">
                {card.socialIcons.map((icon, iconIndex) => (
                  <span key={iconIndex} className="pb-2 pr-1">
                    <Image
                      src={icon}
                      alt="social media Icon"
                      width={20}
                      height={20}
                    />
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
        <div className="w-full text-center mt-8 mb-16">
          <ul className="flex justify-center border w-max m-auto border-gray-300 shadow-sm mb-7 rounded">
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
    </div>
  );
};

export default AuthorFooter;
