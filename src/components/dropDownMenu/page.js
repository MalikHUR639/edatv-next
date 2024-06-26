"use client"
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { MdMenu, MdClose } from "react-icons/md";
import { MdArrowDropDown, MdArrowDropUp } from "react-icons/md";

const menuData = [
  { "title": "Política", "href": "/politica" },
  { "title": "Actualidad", "href": "/actualidad" },
  { "title": "Sociedad", "href": "/sociedad" },
  { "title": "Deportes", "href": "/deportes" },
  { "title": "Sucesos", "href": "/sucesos" },
  { "title": "Corazón y TV", "href": "/corazon" },
  { "title": "Madrid", "href": "/tags/madrid" },
  { "title": "Comunidad Valenciana", "subItems": [
    { "title": "Alicante", "href": "/tags/alicante" },
    { "title": "Castellón", "href": "/tags/castellon" },
    { "title": "Valencia", "href": "/tags/valencia" }
  ]},
  { "title": "Canarias", "href": "/tags/canarias" },
  { "title": "Andalucía", "href": "/tags/andalucia" },
  { "title": "Aragón", "href": "/tags/aragon" },
  { "title": "InformaRadio", "href": "/" }
];

const DropdownMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [openDropdownIndex, setOpenDropdownIndex] = useState(null);
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 640);
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  const toggleMiniDropdown = (index) => {
    setOpenDropdownIndex(openDropdownIndex === index ? null : index);
  };

  return (
    <div className="relative z-10 max-sm:static">
      <input type="checkbox" id="checkboxDropdownControl" className="hidden" />
      <label htmlFor="checkboxDropdownControl" aria-label="Menú" className="cursor-pointer relative" onClick={toggleDropdown}>
        {isOpen ? <MdClose color='white' size="2.5em" /> : <MdMenu color='white' size="2.5em" />}
      </label>
      {isOpen && (
        <>
          <div className="fixed inset-0 bg-black bg-opacity-50 max-sm:hidden" id="underlay" onClick={toggleDropdown}></div>
          <div className="absolute w-max md:left-0 md:mt-2 md:w-[333px] max-w-md bg-[#ebf0f0] text-black text-sm border rounded-lg shadow-lg z-20 left-[-20px] transform -translate-x-1/2 mt-4 max-sm:left-0 max-sm:max-w-[100%] max-sm:w-[100%] max-sm:translate-x-0 max-sm:h-[100vh]" id="dropdownPanel">
            <div className="p-4">
              <ul className="navbar-header">
                {menuData.map((item, index) => (
                  <React.Fragment key={index}>
                    <li className="py-[5px]">
                      {item.subItems ? (
                        <div className="relative">
                          <p onClick={() => toggleMiniDropdown(index)} className="cursor-pointer flex justify-between items-center">
                            <span className="hover:text-red-500">{item.title}</span>
                            {openDropdownIndex === index ? <MdArrowDropUp size={20} /> : <MdArrowDropDown size={20} />}
                          </p>
                          {openDropdownIndex === index && (
                            <ul className="dropdown-items bg-white border rounded-lg shadow-lg text-black mt-2">
                              {item.subItems.map((subItem, subIndex) => (
                                <li className="py-[5px] pl-[10px]" key={subIndex}>
                                  <Link href={subItem.href}>
                                    <p className="hover:text-red-500" title={subItem.title} onClick={isSmallScreen ? closeMenu : null}>{subItem.title}</p>
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          )}
                        </div>
                      ) : (
                        <Link href={item.href}>
                          <p className="hover:text-red-500" title={item.title} onClick={isSmallScreen ? closeMenu : null}>{item.title}</p>
                        </Link>
                      )}
                    </li>
                    {index < menuData.length - 1 && <li className="border-t border-gray-300"></li>}
                  </React.Fragment>
                ))}
              </ul>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default DropdownMenu;
