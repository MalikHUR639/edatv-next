import React from "react";
import Link from 'next/link';

const Divider = ({title}) => {
    return (
        <div className="hidden md:block">
            <Link className="no-underline text-inherit" href={'/'}>
                <div className="relative uppercase text-left pt-[4px] text-black mx-2.5">
                    <span className="text-xl font-bold font-sans float-left">{title}</span>
                    <hr className="border-t-2 border-gray-500 mt-3" />
                </div>
            </Link>
        </div>
    );
};

export default Divider;
