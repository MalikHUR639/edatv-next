import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const RecirculationItem = ({ imageUrl, title }) => {
    return (
        <div className="w-full flex mt-5 items-center justify-between px-2 md:px-0">
            <Link href="/">
                <div className="flex flex-col lg:flex-row items-center">
                    <Image
                        src={imageUrl}
                        alt={title}
                        className="w-[150px] h-auto mr-2"
                        width={150}
                        height={100}
                    />
                    <div className="text-[12px] sm:text-base md:text-md leading-4 text-left py-2">
                        {title}
                    </div>
                </div>
            </Link>
        </div>
    );
};

const PostCard = ({ items }) => {
    return (
        <div className="grid grid-cols-[48%,48%] gap-x-[4%] mb-5">
            {items.map((item, index) => (
                <div key={index}>
                    <RecirculationItem imageUrl={item.imageUrl} title={item.title} />
                </div>
            ))}
        </div>
    );
};

export default PostCard;