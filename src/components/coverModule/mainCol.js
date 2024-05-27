import Image from "next/image";
import Link from "next/link";
import React from "react";

const article = {
    link: "https://edatv.news/deportes/por-que-laporta-echa-xavi-hernandez-del-barcelona",
    imageSrc: "https://edatv.news/filesedc/uploads/image/post/jaime-del-burgo-3-1716552003981_1200_800.webp",
    imageAlt: "laporta y xavi hernanadez",
    categoryLink: "https://edatv.news/deportes",
    category: "DEPORTES",
    title: "¿Por qué Laporta echa a Xavi Hernández del Barcelona?",
    authorLink: "https://edatv.news/autores/rafael-alejandro-escalona",
    author: "Rafael Escalona",
    excerpt: "Finalmente, la destitución de Xavi Hernández marca un nuevo capítulo en la historia del FC Barcelona"
};

const MainColumn = () => {
    return (
        <div className="main-col flex flex-row gap-4">
            <article className="article-full text-start relative">
                <Link href={article.link} title={article.title} className="a-author-url">
                    <figure>
                        <Image
                            loading="lazy"
                            className="tooltip st-reset"
                            src={article.imageSrc}
                            alt={article.imageAlt}
                            width={1200}
                            height={800}
                        />
                    </figure>
                </Link>
                <div className="mt-4">
                    <Link className="category-name text-[#cf1133] font-medium text-[20px] hover:cursor-pointer" href={article.categoryLink} title={article.category}>
                        {article.category}
                    </Link>
                </div>
                <div className="title mt-2">
                    <Link href={article.link}>
                        <h2 className="text-[43px] font-bold">{article.title}</h2>
                    </Link>
                </div>
                <div className="mt-2 flex items-center text-[18px] space-x-4 text-[#8c8c8c]">
                    <Link href={article.authorLink} title={article.author}>
                        <span className="text-semibold text-gray-700 hover:cursor-pointer">{article.author}</span>
                    </Link>
                    <div className="info_comments">
                        <Link href={article.link} title={article.title}>
                            <span className="hover:cursor-pointer" data-disqus-url={article.link}>💬</span>
                        </Link>
                    </div>
                </div>
                <div className="my-[18px] mt-6">
                    <Link href={article.link}>
                        <p className="text-gray-800 text-lg font-semibold hover:cursor-pointer">{article.excerpt}</p>
                    </Link>
                </div>
            </article>
            {/* <hr className="hidden lg:block h-full w-[1px] mb-3 border-[#f3f3f3] border-r-2 opacity-50" /> */}
        </div>
    )
};

export default MainColumn;
