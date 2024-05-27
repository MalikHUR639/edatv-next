"use client"

import Link from "next/link";
import React from "react";
import { usePathname } from 'next/navigation';
import TopicCards from "@/components/topicCards/page";

const Page = () => {
    const pathname = usePathname();
    console.log("usePathname", pathname);

    return (
        <div className='max-w-[1100px] overflow-x-hidden m-auto'>
            <TopicCards />
        </div>
    );
};

export default Page;
