"use client"

import Link from "next/link";
import React from "react";
import { usePathname } from 'next/navigation';

const Page = () => {
    const pathname = usePathname();
    console.log("usePathname", pathname);

    return (
        <div className="bg-white text-black">
            This is {pathname}
            <br />
            <Link href={`${pathname}/product`}>
                Go to Product Page
            </Link>
            <br />
            <Link href={`${pathname}/private`}>
                Go to Private Page
            </Link>
        </div>
    );
};

export default Page;
