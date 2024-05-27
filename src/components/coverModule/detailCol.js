import Image from "next/image";
import Link from "next/link";
import React from "react";

const articles = [
    {
        link: "/",
        imageSrc: "https://edatv.news/filesedc/uploads/image/post/montaje-inaki-urdangarin-jaime-marichalar-primer-plano-rostro-serio_1200_800.webp",
        imageAlt: "Montaje de fotos de Iñaki Urdangarin y Jaime de Marichalar en primer plano con el rostro serio",
        categoryLink: "/",
        category: "CORAZÓN",
        title: "La verdad sobre Iñaki Urdangarin: por qué ha dejado de hablar con Jaime de Marichalar",
        authorLink: "/",
        author: "María Merino"
    },
    {
        link: "/",
        imageSrc: null,
        imageAlt: "",
        categoryLink: "/",
        category: "CORAZÓN",
        title: "Mayte Ametlla desvela por qué 'Supervivientes' dio comida a escondidas a Kiko Rivera",
        authorLink: "/",
        author: "Bianca Munteanu"
    },
    {
        link: "/",
        imageSrc: null,
        imageAlt: "",
        categoryLink: "/",
        category: "POLÍTICA",
        title: "¿Quién es Diego Solier Fernández, el número 2 de Alvise que obtendría escaño europeo?",
        authorLink: "/",
        author: "Jose Andres Jorge Barceló"
    }
];

const DetailColumn = () => {
    return (
        <div className="flex flex-row text-right mb-5 gap-4">
            <div>
                {articles.map((article, index) => (
                    <article key={index} className="">
                        {article.imageSrc && (
                            <Link href={article.link}>
                                <figure className="aspect-w-3 aspect-h-2 mb-2">
                                    <Image
                                        loading="lazy"
                                        src={article.imageSrc}
                                        alt={article.imageAlt}
                                        width={335}
                                        height={223}
                                        className="w-full h-auto"
                                    />
                                </figure>
                            </Link>
                        )}
                            <Link className="text-[#cf1133] text-[15px] hover:cursor-pointer" href={article.categoryLink}>
                                {article.category}
                            </Link>
                            <div className="text-left mt-2">
                                <Link href={article.link}>
                                    <h2 className="text-xl font-bold leading-[1.2]">{article.title}</h2>
                                </Link>
                            </div>
                            <div className="my-[10px] text-[#8c8c8c] mt-4 flex items-center space-x-4">
                                <Link href={article.authorLink}>
                                    <span className="text-sm text-gray-700">{article.author}</span>
                                </Link>
                                <div>
                                    <Link href={article.link}>
                                        <span className="disqus-comment-count" data-disqus-url={article.link}>💬</span>
                                    </Link>
                                </div>
                            </div>
                        <hr className="hidden lg:block bottom-[-5] w-full mx-auto border-b-2 border-gray-100 opacity-50" />
                    </article>
                ))}
            </div>
        </div>
    );
};

export default DetailColumn;
