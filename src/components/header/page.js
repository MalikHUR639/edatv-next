import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import DropdownMenu from '../dropDownMenu/page';
import ScrollMenu from '../scrollMenu/page';

const Header = () => {
    return (
        <>
            <header className="flex items-center justify-between sm:justify-center gap-[4px] sm:gap-3 text-sm leading-relaxed p-3 bg-[#131722] border-b-4 border-white">
                <div className="flex items-center mr-[70px]">
                    <Link href="/" title="edatv.news">
                        <Image
                            className="object-contain main-image"
                            src="https://edatv.news/filesedc/uploads/other/logo-header/537_baseline.svg"
                            alt="Logo edatv.news"
                            width={211}
                            height={40}
                        />
                    </Link>
                </div>
                <DropdownMenu />
                <span className="h-full border-r border-gray-300 ml-4"></span>
                <div className="relative">
                    <Image
                        alt="close menu"
                        height={40}
                        width={40}
                        src='https://edatv.news/filesedc/uploads/other/logo-header/social/Telegram.svg'
                    />
                </div>
            </header>
            <ScrollMenu />
            {/* <hr className="w-full mx-auto border-[#f3f3f3]" /> */}
        </>
    );
};

export default Header;
