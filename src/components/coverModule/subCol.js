import Image from "next/image";
import Link from "next/link";
import React from "react";

const SubColumn = () => {
    const articles = [
        {
            href: "https://edatv.news/politica/alcalde-mostoles-manuel-bautista-humilla-concejal-mas-madrid",
            title: "El alcalde de Móstoles Manuel Bautista humilla a un concejal de Más Madrid",
            imgSrc: "https://edatv.news/filesedc/uploads/image/post/jaime-del-burgo-2-1716549128351_1200_800.webp",
            imgAlt: "alcalde de Móstoles batista y el concejal delgado",
            authorHref: "https://edatv.news/autores/rafael-alejandro-escalona",
            authorName: "Rafael Escalona",
            categoryHref: "https://edatv.news/politica",
            categoryName: "POLÍTICA",
            commentsHref: "https://edatv.news/politica/alcalde-mostoles-manuel-bautista-humilla-concejal-mas-madrid"
        },
        {
            href: "https://edatv.news/politica/nefasta-experiencia-pasajero-ave-madrid-gijon-que-sonroja-oscar-puente",
            title: "La nefasta experiencia de un pasajero de AVE Madrid-Gijón que sonroja a Óscar Puente",
            imgSrc: "https://edatv.news/filesedc/uploads/image/post/la-ultima-critica-contra-los-trenes-de-oscar-puente_1200_800.webp",
            imgAlt: "La última crítica contra los trenes de Óscar Puente",
            authorHref: "https://edatv.news/autores/jose-andres-jorge-barcelo",
            authorName: "Jose Andres Jorge Barceló",
            categoryHref: "https://edatv.news/politica",
            categoryName: "POLÍTICA",
            commentsHref: "https://edatv.news/politica/nefasta-experiencia-pasajero-ave-madrid-gijon-que-sonroja-oscar-puente"
        },
    ];

    return (
        <div className="sub-col mr-2">
            <div className="third-column">
                {articles.map((article, index) => (
                    <article key={index} className="article-no-subtitle">
                        <Link href={article.href} title={article.title}>
                            <figure className="mb-2">
                                <Image
                                    src={article.imgSrc}
                                    alt={article.imgAlt}
                                    width={228}
                                    height={152}
                                    className="w-full h-auto"
                                />
                            </figure>
                        </Link>
                        <Link className="text-[#cf1133] text-sm font-medium" href={article.categoryHref} title={article.categoryName}>
                            {article.categoryName}
                        </Link>
                        <div className="title">
                            <Link href={article.href} title={article.title}>
                                <h2 className="text-xl font-bold">{article.title}</h2>
                            </Link>
                        </div>
                        <div className="mt-2 flex items-center gap-2 mb-1">
                            <Link href={article.authorHref} title={article.authorName} className="text-gray-600 text-sm">
                                <span className="author">{article.authorName}</span>
                            </Link>
                            <div className="info_comments">
                                <Link href={article.commentsHref} title={article.title}>
                                    <span className="disqus-comment-count" data-disqus-url={article.commentsHref}>💬</span>
                                </Link>
                            </div>
                        </div>
                        <hr class="mb-2 w-full mx-auto border-b-2 border-gray-100 opacity-[1.5px]" />
                    </article>
                ))}
            </div>
        </div>
    )
};

export default SubColumn;
