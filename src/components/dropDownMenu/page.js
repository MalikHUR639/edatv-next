"use client"
import React, { useState } from 'react';
import Link from 'next/link';
import { MdMenu, MdClose } from "react-icons/md";
import { MdArrowDropDown, MdArrowDropUp } from "react-icons/md";

const DropdownMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const toggleMiniDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <div className="relative">
      <input type="checkbox" id="checkboxDropdownControl" className="hidden" />
      <label htmlFor="checkboxDropdownControl" aria-label="Menú" className="cursor-pointer relative" onClick={toggleDropdown}>
        {isOpen ? <MdClose size="2.5em" /> : <MdMenu size="2.5em" />}
      </label>
      {isOpen && (
        <>
          <div className="fixed inset-0 bg-black bg-opacity-50" id="underlay" onClick={toggleDropdown}></div>
          <div className="absolute md:left-0 md:mt-2 md:w-[333px] max-w-md bg-[#ebf0f0] text-black text-sm border rounded-lg shadow-lg z-20 left-[-20px] transform -translate-x-1/2 mt-4" id="dropdownPanel">
            <div className="p-4">
              <ul className="navbar-header">
                <li className="py-[5px]">
                  <Link href="/politica">
                    <p className="hover:text-red-500" title="Política">Política</p>
                  </Link>
                </li>
                <li className="border-t border-gray-300"></li>
                <li className="py-[5px]">
                  <Link href="/actualidad">
                    <p className="hover:text-red-500" title="Actualidad">Actualidad</p>
                  </Link>
                </li>
                <li className="border-t border-gray-300"></li>
                <li className="py-[5px]">
                  <Link href="/sociedad">
                    <p className="hover:text-red-500" title="Sociedad">Sociedad</p>
                  </Link>
                </li>
                <li className="border-t border-gray-300"></li>
                <li className="py-[5px]">
                  <Link href="/deportes">
                    <p className="hover:text-red-500" title="Deportes">Deportes</p>
                  </Link>
                </li>
                <li className="border-t border-gray-300"></li>
                <li className="py-[5px]">
                  <Link href="/sucesos">
                    <p className="hover:text-red-500" title="Sucesos">Sucesos</p>
                  </Link>
                </li>
                <li className="border-t border-gray-300"></li>
                <li className="py-[5px]">
                  <Link href="/corazon">
                    <p className="hover:text-red-500" title="Corazón y TV">Corazón y TV</p>
                  </Link>
                </li>
                <li className="border-t border-gray-300"></li>
                <li className="py-[5px]">
                  <Link href="/tags/madrid">
                    <p className="hover:text-red-500" title="Madrid">Madrid</p>
                  </Link>
                </li>
                <li className="border-t border-gray-300"></li>
                <li className="py-[5px]">
                  <div className="relative">
                    <p onClick={toggleMiniDropdown} className="cursor-pointer flex justify-between items-center">
                      <span className="hover:text-red-500">Comunidad Valenciana</span>
                      {isDropdownOpen ? <MdArrowDropUp size={20} /> : <MdArrowDropDown size={20} />}
                    </p>
                    {isDropdownOpen && (
                      <ul className="dropdown-items bg-white border rounded-lg shadow-lg text-black mt-2">
                        <li className="py-[2px]">
                          <Link href="/tags/alicante">
                            <p className="hover:text-red-500" title="Alicante">Alicante</p>
                          </Link>
                        </li>
                        <li className="py-[2px]">
                          <Link href="/tags/castellon">
                            <p className="hover:text-red-500" title="Castellón">Castellón</p>
                          </Link>
                        </li>
                        <li className="py-[2px]">
                          <Link href="/tags/valencia">
                            <p className="hover:text-red-500" title="Valencia">Valencia</p>
                          </Link>
                        </li>
                      </ul>
                    )}
                  </div>
                </li>
                <li className="border-t border-gray-300"></li>
                <li className="py-[5px]">
                  <Link href="/tags/canarias">
                    <p className="hover:text-red-500" title="Canarias">Canarias</p>
                  </Link>
                </li>
                <li className="border-t border-gray-300"></li>
                <li className="py-[5px]">
                  <Link href="/tags/andalucia">
                    <p className="hover:text-red-500" title="Andalucía">Andalucía</p>
                  </Link>
                </li>
                <li className="border-t border-gray-300"></li>
                <li className="py-[5px]">
                  <Link href="/tags/aragon">
                    <p className="hover:text-red-500" title="Aragón">Aragón</p>
                  </Link>
                </li>
                <li className="border-t border-gray-300"></li>
                <li className="py-[5px]">
                  <Link href="https://informaradio.edatv.news">
                    <p className="hover:text-red-500" title="InformaRadio">InformaRadio</p>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default DropdownMenu;
