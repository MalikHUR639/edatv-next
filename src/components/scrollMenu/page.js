import Link from "next/link";
import React from "react";

const ScrollMenu = () => {
    return (
        <div className='hidden lg:block bg-white'>
            <div className="text-black text-base font-normal leading-tight tracking-wide block text-center">
                <ul id="m1" style={{ width: `calc(100% - 550px)` }} className="flex py-[3px] mx-auto tracking-wide my-4 max-w-[1100px] overflow-x-auto overflow-y-hidden whitespace-nowrap">
                    <li className="inline-block mx-[7px]">
                        <Link href="/politica">
                            <p title="Política" target="_self">Política</p>
                        </Link>
                    </li>
                    <li className="inline-block mx-[7px]">
                        <Link href="/actualidad">
                            <p title="Actualidad" target="_self">Actualidad</p>
                        </Link>
                    </li>
                    <li className="inline-block mx-[7px]">
                        <Link href="/sociedad">
                            <p title="Sociedad" target="_self">Sociedad</p>
                        </Link>
                    </li>
                    <li className="inline-block mx-[7px]">
                        <Link href="/deportes">
                            <p title="Deportes" target="_self">Deportes</p>
                        </Link>
                    </li>
                    <li className="inline-block mx-[7px]">
                        <Link href="/sucesos">
                            <p title="Sucesos" target="_self">Sucesos</p>
                        </Link>
                    </li>
                    <li className="inline-block mx-[7px]">
                        <Link href="/corazon">
                            <p title="Corazón y TV" target="_self">Corazón y TV</p>
                        </Link>
                    </li>
                    <li className="inline-block mx-[7px]">
                        <Link href="/tags/madrid">
                            <p title="Madrid" target="_self">Madrid</p>
                        </Link>
                    </li>
                    <li className="inline-block mx-[7px]">
                        <Link title="Comunidad Valenciana" href="/tags/comunidad-valenciana" target="_self">Comunidad Valenciana</Link>
                    </li>
                    <li className="inline-block mx-[7px]">
                        <Link href="/tags/alicante">
                            <p title="Alicante" target="_self">Alicante</p>
                        </Link>
                    </li>
                    <li className="inline-block mx-[7px]">
                        <Link href="/tags/castellon">
                            <p title="Castellón" target="_self">Castellón</p>
                        </Link>
                    </li>
                    <li className="inline-block mx-[7px]">
                        <Link href="/tags/valencia">
                            <p title="Valencia" target="_self">Valencia</p>
                        </Link>
                    </li>

                    <li className="inline-block mx-[7px]">
                        <Link href="/tags/canarias">
                            <p title="Canarias" target="_self">Canarias</p>
                        </Link>
                    </li>
                    <li className="inline-block mx-[7px]">
                        <Link href="/tags/andalucia">
                            <p title="Andalucía" target="_self">Andalucía</p>
                        </Link>
                    </li>
                    <li className="inline-block mx-[7px]">
                        <Link href="/tags/aragon">
                            <p title="Aragón" target="_self">Aragón</p>
                        </Link>
                    </li>
                    <li className="inline-block mx-[7px]">
                        <Link title="InformaRadio" href="https://informaradio.edatv.news" target="_self">InformaRadio</Link>
                    </li>
                </ul>
            </div>
        </div>
    )
};

export default ScrollMenu;
