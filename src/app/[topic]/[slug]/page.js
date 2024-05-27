"use client"

import Link from "next/link";
import React from "react";
import { usePathname } from 'next/navigation';

const Page = () => {
    const pathname = usePathname();
    const pathSegments = pathname.split('/').filter(segment => segment);
    console.log("pathSegments", pathSegments);
    console.log("pathname", pathname);


    const topic = pathSegments[0];
    const slug = pathSegments.slice(1);
    console.log("slug", slug);

    return (
        <div className="bg-white text-black">
            <h1>Topic: {topic}</h1>
            <h2>Slug: {slug.join('/')}</h2>
            <br />
            <Link href="/">
                Go to Home Page
            </Link>
        </div>
    );
};

export default Page;
