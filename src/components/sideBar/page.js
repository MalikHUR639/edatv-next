"use client"
import Image from "next/image";
import Link from "next/link";
import React, { useState, useRef } from "react";

const SideBar = ({ isOpen, toggleDrawer, isDrop, toggleDropdown }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [inputFocused, setInputFocused] = useState(false);

  const handleInputFocus = () => {
    setInputFocused(true);
  };

  const fileInputRef = useRef(null);

  const handleClick = () => {
    fileInputRef.current.click();
  };

  const handleFileChange = (event) => {
    event.preventDefault();
    const file = event.target.files[0];
    if (file) {
      console.log("Selected file:", file);
    }
  };

  const [isFocused, setIsFocused] = useState(false);

  const handleFocus = () => {
    setIsFocused(true);
  };

  const [count, setCount] = useState(null);
  const [isClicked, setIsClicked] = useState(false);

  const handleHeartClick = () => {
    if (isClicked) {
      setCount(null);
      setIsClicked(false);
    } else {
      setCount(1);
      setIsClicked(true);
    }
  };

  const [loader, setLoader] = useState(false);
  const myTimeout = setTimeout(HandleDisplayLoader, 3000);

  function HandleDisplayLoader() {
    setLoader(true);
  }

  function HandleLoader() {
    clearTimeout(myTimeout);
    setLoader(false);
  }

  return (
    <>
      <div
        id="drawer-navigation"
        className={`fixed top-0 left-0 z-[200] w-[100%] md:w-[30rem] h-screen overflow-y-auto transition-transform ${isOpen ? "translate-x-0" : "-translate-x-full"
          } bg-white `}
        tabIndex="-1"
        aria-labelledby="drawer-navigation-label"
      >
        <div className="relative w-full h-8 overflow-hidden bg-[#131722] dark:bg-[#131722]">
          <div className="absolute w-full h-full animate-marquee whitespace-nowrap font-bold text-[18px]">
            <span className="text-base font-semibold text-[white] uppercase dark:text-[white] leading-[1.5em]">
              ¿Cuál es el mejor gazpacho del supermercado, según la mismísima
              OCU? | edatv.news
            </span>
          </div>
        </div>
        <button
          type="button"
          onClick={toggleDrawer}
          aria-controls="drawer-navigation"
          className="text-gray-400 h-8 bg-[#131722] dark:bg-[#131722] hover:text-gray-900 rounded-lg text-xl absolute top-[-0.02rem] right-[0] inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
        >
          <Image
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABAEAQAAABQ8GUWAAAAIGNIUk0AAHomAACAhAAA+gAAAIDoAAB1MAAA6mAAADqYAAAXcJy6UTwAAAACYktHRAAAqo0jMgAAAAlwSFlzAAAAYAAAAGAA8GtCzwAAAAd0SU1FB+cBEgcsNWoojjYAAAEtSURBVHja7dtBjoJAEEbh1qOI4QC6wAuDgVuJLkyMNhewfxeduDGjOOh0putV4lb7fbFgQXBuwkhFITWN1PfSfi+1rUJZTvnOfzNSUSicTnoY7xWqKvX5/gCgafTjDEP2CPEv/2yGQdpsUp8zIUDmCFLbvgbIeB0UylLy3jaCVivpfB6NkOM6gAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAwFSFUVYwbM95n+UD2LYTQdanP+x2E0etwPP72N+apI5/PbBY/r+Z6TX3Sj4/pFTB9EZTWa+lyGX0bzOmhK/HEE0888cQTTzzxxBOfxxBPPPHEE0888cTnGW/9lRmFrjMb75xz0uFgNj4C9L3Z+AhQ12bjI8BiYfrl6TuC6lra7eJKbLcKy2Xqc70zN1ZVNRXkt4atAAAAJXRFWHRkYXRlOmNyZWF0ZQAyMDIzLTAxLTE4VDA3OjQ0OjUzKzAwOjAwq/revwAAACV0RVh0ZGF0ZTptb2RpZnkAMjAyMy0wMS0xOFQwNzo0NDo1MyswMDowMNqnZgMAAAAodEVYdGRhdGU6dGltZXN0YW1wADIwMjMtMDEtMThUMDc6NDQ6NTMrMDA6MDCNskfcAAAAAElFTkSuQmCC"
            alt="close icon"
            width={25}
            height={30}
          />
          <span className="sr-only">Close menu</span>
        </button>
        <div >
          <div className="flex justify-between items-center text-[black] mt-4 mx-4 text-">
            {" "}
            <span className="text-#2a2e2e font-bold">0 Comentarios</span>{" "}
            <span>
              <div className="relative">
                <div className="flex items-center">
                  <div>
                    <Image
                      className="h-5"
                      src="/msg.png"
                      alt="sms"
                      width={20}
                      height={20}
                    />
                  </div>

                  <button
                    id="dropdownDefaultButton"
                    onClick={toggleDropdown}
                    aria-haspopup="true"
                    aria-expanded={isDrop ? "true" : "false"}
                    className="text-black font-bold focus:outline-none rounded-lg text-[16px] px-2 py-2.5 text-center inline-flex items-center"
                    type="button"
                  >
                    Acceder
                    <svg
                      className="w-2.5 h-2.5 ms-3"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 10 6"
                    >
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="m1 1 4 4 4-4"
                      />
                    </svg>
                  </button>
                </div>

                {/* Dropdown menu */}
                <div
                  id="dropdown"
                  className={`absolute right-4 z-10 bg-white divide-y divide-gray-100 rounded-xl shadow dark:bg-gray-700 ${isDrop ? "block" : "hidden"
                    } rounded-tr-none border-2 border-solid border-black`}
                >
                  <ul
                    className="py-2 text-sm text-gray-700 dark:text-gray-200"
                    aria-labelledby="dropdownDefaultButton"
                  >
                    <li>
                      <a
                        href="#"
                        className="block px-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                      >
                        Disqus
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="block px-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                      >
                        Facebook
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="block px-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                      >
                        X (Tiwitter)
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="block px-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                      >
                        Google
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </span>
          </div>
          <hr className="mx-4 border border-solid border-[#c2c6cc]" />
        </div>

        <div className="py-4 overflow-y-auto w-full">
          <div className="flex w-full">
            <Image
              className=" h-16 w-16 p-2 hidden md:block relative top-[-10px]"
              src="/g.png"
              alt="G"
              width={50}
              height={50}
            />
            <div className=" w-full">
              <div className="w-full mx-auto">
                <form>
                  <div className="">
                    <input
                      type="text"
                      className={`border-2 border-grey-300 rounded-lg  px-4 py-6 w-full focus:outline-none ${inputFocused ? "h-[100px] rounded-br-none rounded-bl-none" : ""
                        }`}
                      onFocus={handleInputFocus}
                      placeholder="Sé el primero en comentar"
                    />
                    {inputFocused && (
                      <div className="w-full flex flex-row bg-white border border-gray-300 rounded-md rounded-tr-none rounded-tl-none shadow-md">
                        <button className="mx-2" type="button">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="19"
                            height="15"
                          >
                            <g fill="currentColor">
                              <path d="M17.1 1.847v11.084H1.9V1.847h15.2ZM17.1 0H1.9C.855 0 0 .831 0 1.847v11.084c0 1.016.855 1.847 1.9 1.847h15.2c1.045 0 1.9-.831 1.9-1.847V1.847C19 .831 18.145 0 17.1 0Z"></path>
                              <text
                                x="3.5"
                                y="10.5"
                                font-family="Helvetica Neue, arial, sans-serif"
                                font-size="7.5"
                                font-weight="700"
                              >
                                GIF
                              </text>
                            </g>
                          </svg>
                        </button>

                        <button
                          className="mx-2"
                          type="button"
                          onClick={handleClick}
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="19"
                            height="15"
                          >
                            <g fill="currentColor">
                              <path d="M17.1 1.847v11.084H1.9V1.847h15.2ZM17.1 0H1.9C.855 0 0 .831 0 1.847v11.084c0 1.016.855 1.847 1.9 1.847h15.2c1.045 0 1.9-.831 1.9-1.847V1.847C19 .831 18.145 0 17.1 0Z"></path>
                              <path d="m5.7 5.542 3.8 2.771 1.9-.924 3.8 2.217v1.477H3.8V7.389z"></path>
                              <ellipse
                                cx="13.775"
                                cy="5.08"
                                rx="1.425"
                                ry="1.385"
                              ></ellipse>
                            </g>
                          </svg>
                          <input
                            type="file"
                            ref={fileInputRef}
                            onChange={handleFileChange}
                            style={{ display: "none" }}
                          />
                        </button>

                        <span>
                          <hr className="relative top-4 border- 1 border-solid border-black rotate-90 w-4" />
                        </span>
                        <div className="flex w-3/4 justify-between border-1 border-solid border-black my-1 px-2">
                          <span>Aa</span>
                          <button
                            type="submit"
                            className=" bg-black text-white rounded-md px-4 h-4 mt-1 hover:bg-black text-[10px]"
                          >
                            Comentar
                          </button>
                        </div>
                      </div>
                    )}
                  </div>
                </form>
              </div>
              <div className="p-4 grid grid-cols-[50%,50%]">
                <div>
                  <h6 className="text-[#687a86] uppercase text-[11px] font-bold pb-2">
                    Iniciar sesión con
                  </h6>
                  <button className="mr-2">
                    <Image
                      src="/disqus.png"
                      alt="social media icons"
                      width={30}
                      height={20}
                    />
                  </button>
                  <button className="mr-2">
                    <Image
                      src="/facebook.png"
                      alt="social media icons"
                      width={30}
                      height={20}
                    />
                  </button>
                  <button className="mr-2">
                    <Image
                      src="/twitter.png"
                      alt="social media icons"
                      width={30}
                      height={20}
                    />
                  </button>
                  <button className="">
                    <Image
                      src="/social.png"
                      alt="social media icons"
                      width={30}
                      height={20}
                    />
                  </button>
                </div>
                <div>
                  <h6 className="flex flex-row items-center uppercase text-[11px]">
                    <span className=" font-bold text-[#687a86]">o registrarse con Disqus</span>{" "}
                    <span className="ml-2">
                      {" "}
                      <Image
                        src="/information.png"
                        alt="social media icons"
                        width={20}
                        height={20}
                      />
                    </span>
                  </h6>

                  <form>
                    <input
                      onFocus={handleFocus}
                      className="border border-grey-300 rounded-md px-4  focus:outline-none my-1 text-sm w-full"
                      type="text"
                      placeholder="Number"
                    />

                    {isFocused && (
                      <div>
                        <input
                          className="border border-gray-300 rounded-md px-4  focus:outline-none my-1 text-sm w-full"
                          type="text"
                          placeholder="Correo electrónico"
                        />
                        <input
                          className="border border-gray-300 rounded-md px-4 w-full focus:outline-none my-1 text-sm"
                          type="text"
                          placeholder="Contraseña"
                        />
                        <p>
                          <span className="text-[12px] text-[#687a86]">
                            Por favor, revisa nuestra{" "}
                            <Link
                              href="https://disqus.com/privacy-policy"
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-[#288ce4]"
                            >
                              Política de privacidad
                            </Link>{" "}
                            para saber qué datos personales recogemos en Disqus
                            y cuáles son tus opciones sobre cómo los usamos.
                            Todos los usuarios de nuestro servicio están sujetos
                            a nuestros{" "}
                            <Link
                              href="https://help.disqus.com/customer/portal/articles/466260-terms-of-service"
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-[#288ce4]"
                            >
                              Condiciones de servicio
                            </Link>
                            .
                          </span>
                        </p>
                        <div>
                          <input type="checkbox" id="check" className="mr-2" />
                          <label htmlFor="check" className="text-sm">
                            Prefiero comentar como invitado
                          </label>
                        </div>
                        <button className="bg-[#687a86] p-2 rounded w-full flex justify-center">
                          <svg
                            className="w-6 h-6 text-white"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            fill="none"
                            viewBox="0 0 24 24"
                          >
                            <path
                              stroke="currentColor"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M19 12H5m14 0-4 4m4-4-4-4"
                            />
                          </svg>
                        </button>
                      </div>
                    )}
                    <div></div>
                  </form>
                </div>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-[30%,70%]">
            <div>
              <button
                onClick={handleHeartClick}
                className={`p-1 border-2 ${isClicked ? "border-black" : "border-none"
                  } m-4 flex flex-row rounded-xl`}
              >
                {isClicked ? (
                  <svg
                    className="w-6 h-6 text-gray-800 dark:text-white"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="m12.75 20.66 6.184-7.098c2.677-2.884 2.559-6.506.754-8.705-.898-1.095-2.206-1.816-3.72-1.855-1.293-.034-2.652.43-3.963 1.442-1.315-1.012-2.678-1.476-3.973-1.442-1.515.04-2.825.76-3.724 1.855-1.806 2.201-1.915 5.823.772 8.706l6.183 7.097c.19.216.46.34.743.34a.985.985 0 0 0 .743-.34Z" />
                  </svg>
                ) : (
                  <svg
                    className="w-6 h-6 text-gray-800 dark:text-white"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M12.01 6.001C6.5 1 1 8 5.782 13.001L12.011 20l6.23-7C23 8 17.5 1 12.01 6.002Z"
                    />
                  </svg>
                )}
                {count}
              </button>
            </div>

            <div
              className=" flex flex-row items-center cursor-pointer"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              <span className="relative">
                <span className="inline-block h-2 w-2 rounded-full bg-gray-500 mr-2"></span>

                <span>Comparte</span>
              </span>

              <span className="relative top-[-14px]">
                <ul
                  className={`absolute ${isHovered ? "block" : "hidden"
                    } flex flex-row ml-4 mb-10`}
                >
                  <li>
                    <svg
                      className="w-8 h-8 text-white dark:text-white bg-black rounded-xl p-2 mr-2"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M13.795 10.533 20.68 2h-3.073l-5.255 6.517L7.69 2H1l7.806 10.91L1.47 22h3.074l5.705-7.07L15.31 22H22l-8.205-11.467Zm-2.38 2.95L9.97 11.464 4.36 3.627h2.31l4.528 6.317 1.443 2.02 6.018 8.409h-2.31l-4.934-6.89Z" />
                    </svg>
                  </li>
                  <li>
                    <svg
                      className="w-8 h-8 text-white dark:text-black bg-blue-400 rounded-xl p-2 mr-2"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        d="M13.135 6H15V3h-1.865a4.147 4.147 0 0 0-4.142 4.142V9H7v3h2v9.938h3V12h2.021l.592-3H12V6.591A.6.6 0 0 1 12.592 6h.543Z"
                      />
                    </svg>
                  </li>
                  <li>
                    <svg
                      className="h-8 w-8 text-white dark:text-black bg-gray-400 rounded-xl p-2 mr-2"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                  </li>
                  <li>
                    <svg
                      className="h-8 w-8 text-white dark:text-black bg-gray-400 rounded-xl p-2"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M13.213 9.787a3.391 3.391 0 0 0-4.795 0l-3.425 3.426a3.39 3.39 0 0 0 4.795 4.794l.321-.304m-.321-4.49a3.39 3.39 0 0 0 4.795 0l3.424-3.426a3.39 3.39 0 0 0-4.794-4.795l-1.028.961"
                      />
                    </svg>
                  </li>
                </ul>
              </span>
            </div>
          </div>
          <div className="w-full">
            <ul className="flex flex-row text-[14px] font-bold w-full">
              <li>
                <button className="m-4 " onClick={HandleLoader}>
                  Mejores
                </button>
              </li>
              <li>
                {" "}
                <button className="m-4 " onClick={HandleLoader}>
                  Más recientes
                </button>
              </li>
              <li>
                {" "}
                <button className="m-4" onClick={HandleLoader}>
                  Más antiguos
                </button>
              </li>
            </ul>
            <div className="flex justify-center items-center text-ju w-full h-28">
              <p className={`text-[#2a2e2e] ${loader ? "block" : "hidden"}`}>
                Sé el primero en comentar.
              </p>
              <div className={`flex ${loader ? "hidden" : "block"}`}>
                <Image src="/loader.gif" alt="loader" width={20} height={20} />
                <Image src="/loader.gif" alt="loader" width={20} height={20} />
              </div>
            </div>
          </div>
          <hr className="mx-4 border border-solid border-[#c2c6cc]" />

          <div className="w-full">
            <ul className="grid grid-flow-col-1 sm:grid-flow-col ">
              <li>
                <a
                  className="flex flex-row items-center text-[12px] font-bold text-[gray]"
                  href="#"
                >
                  <span>
                    {" "}
                    <Image
                      className=" rounded-md m-2"
                      src="/letter.png"
                      alt="social media icons"
                      width={20}
                      height={20}
                    />
                  </span>

                  <span className="">Suscríbete</span>
                </a>
              </li>
              <li>
                <a
                  className="flex flex-row items-center text-[12px] font-bold text-[gray]"
                  href="#"
                >
                  <span>
                    {" "}
                    <Image
                      className=" rounded-md m-2"
                      src="/lock.png"
                      alt="social media icons"
                      width={20}
                      height={20}
                    />
                  </span>

                  <span>Política de Privacidad</span>
                </a>
              </li>
              <li>
                <a
                  className="flex flex-row items-center text-[12px] font-bold text-[gray]"
                  href="#"
                >
                  <span>
                    {" "}
                    <Image
                      className=" rounded-md m-2"
                      src="/excl.png"
                      alt="social media icons"
                      width={20}
                      height={20}
                    />
                  </span>

                  <span>No vendan mis datos</span>
                </a>
              </li>
            </ul>
          </div>

          <div className="w-full h-20 flex justify-center items-center mt-10 relative">
            <a className="text-white bg-black py-6 px-4 rounded-xl sticky" href="#">
              Back to the news
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default SideBar;
