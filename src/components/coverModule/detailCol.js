// import Image from "next/image";
// import Link from "next/link";
// import React from "react";

// const DetailColumn = () => {
//     return (
//         <div className="detail-col flex flex-row text-right mx-2 mb-5 gap-4">
//             <div>
//                 <article className="">
//                     <Link href="https://edatv.news/corazon/verdad-inaki-urdangarin-dejado-hablar-jaime-marichalar">
//                         <figure className="aspect-w-3 aspect-h-2 mb-2">
//                             <Image
//                                 loading="lazy"
//                                 src="https://edatv.news/filesedc/uploads/image/post/montaje-inaki-urdangarin-jaime-marichalar-primer-plano-rostro-serio_1200_800.webp"
//                                 alt="Montaje de fotos de Iñaki Urdangarin y Jaime de Marichalar en primer plano con el rostro serio"
//                                 width={335}
//                                 height={223}
//                                 className="w-full h-auto"
//                             />
//                         </figure>
//                     </Link>
//                     <Link className="text-[#cf1133] text-[15px] hover:cursor-pointer" href="https://edatv.news/corazon">
//                         CORAZÓN
//                     </Link>
//                     <div className="text-left mt-2">
//                         <Link href="https://edatv.news/corazon/verdad-inaki-urdangarin-dejado-hablar-jaime-marichalar">
//                             <h2 className="text-xl font-bold leading-[1.2]">La verdad sobre Iñaki Urdangarin: por qué ha dejado de hablar con Jaime de Marichalar</h2>
//                         </Link>
//                     </div>
//                     <div className="my-[10px] text-[#8c8c8c] mt-4 flex items-center space-x-4">
//                         <Link href="https://edatv.news/autores/maria-merino">
//                             <span className="text-sm text-gray-700">María Merino</span>
//                         </Link>
//                         <div className="">
//                             <Link href="https://edatv.news/corazon/verdad-inaki-urdangarin-dejado-hablar-jaime-marichalar">
//                                 <span className="disqus-comment-count" data-disqus-url="https://edatv.news/corazon/verdad-inaki-urdangarin-dejado-hablar-jaime-marichalar">💬</span>
//                             </Link>
//                         </div>
//                     </div>
//                     <hr class="bottom-[-5] w-full mx-auto border-b-2 border-gray-100 opacity-50" />
//                 </article>
//                 <article className="article-no-subtitle-no-category mt-4">
//                     <Link className="text-[#cf1133] text-[15px] hover:cursor-pointer" href="https://edatv.news/corazon">
//                         CORAZÓN
//                     </Link>
//                     <div className="text-left mt-2">
//                         <Link href="https://edatv.news/corazon/mayte-ametlla-desvela-por-que-supervivientes-dio-comida-escondidas-kiko-rivera">
//                             <h2 className="text-xl font-bold leading-[1.2]">Mayte Ametlla desvela por qué 'Supervivientes' dio comida a escondidas a Kiko Rivera</h2>
//                         </Link>
//                     </div>
//                     <div className="my-[10px] text-[#8c8c8c] mt-2 flex items-center space-x-4">
//                         <Link href="https://edatv.news/autores/maria-merino">
//                             <span className="text-sm text-gray-700">Bianca Munteanu</span>
//                         </Link>
//                         <div className="">
//                             <Link href="https://edatv.news/corazon/verdad-inaki-urdangarin-dejado-hablar-jaime-marichalar">
//                                 <span className="disqus-comment-count" data-disqus-url="https://edatv.news/corazon/verdad-inaki-urdangarin-dejado-hablar-jaime-marichalar">💬</span>
//                             </Link>
//                         </div>
//                     </div>
//                     <hr class="bottom-[-5] w-full mx-auto border-b-2 border-gray-100 opacity-50" />
//                 </article>
//                 <article className="article-no-subtitle-no-category mt-2">
//                     <Link className="text-[#cf1133] text-[15px] hover:cursor-pointer" href="https://edatv.news/politica">
//                         POLÍTICA
//                     </Link>
//                     <div className="text-left mt-2">
//                         <Link href="https://edatv.news/politica/quien-diego-solier-fernandez-numero-2-alvise-que-obtendria-escano-europeo">
//                             <h2 className="text-xl font-bold leading-[1.2]">¿Quién es Diego Solier Fernández, el número 2 de Alvise que obtendría escaño europeo?</h2>
//                         </Link>
//                     </div>
//                     <div className="my-[10px] text-[#8c8c8c] mt-2 flex items-center space-x-4">
//                         <Link href="https://edatv.news/autores/maria-merino">
//                             <span className="text-sm text-gray-700">Jose Andres Jorge Barceló</span>
//                         </Link>
//                         <div className="">
//                             <Link href="https://edatv.news/corazon/verdad-inaki-urdangarin-dejado-hablar-jaime-marichalar">
//                                 <span className="disqus-comment-count" data-disqus-url="https://edatv.news/corazon/verdad-inaki-urdangarin-dejado-hablar-jaime-marichalar">💬</span>
//                             </Link>
//                         </div>
//                     </div>

//                 </article>
//             </div>
//             <hr class="h-full w-[1px] border-[#f3f3f3] border-r-2 opacity-50" />
//         </div>
//     )
// };

// export default DetailColumn;

import Image from "next/image";
import Link from "next/link";
import React from "react";

const articles = [
    {
        link: "https://edatv.news/corazon/verdad-inaki-urdangarin-dejado-hablar-jaime-marichalar",
        imageSrc: "https://edatv.news/filesedc/uploads/image/post/montaje-inaki-urdangarin-jaime-marichalar-primer-plano-rostro-serio_1200_800.webp",
        imageAlt: "Montaje de fotos de Iñaki Urdangarin y Jaime de Marichalar en primer plano con el rostro serio",
        categoryLink: "https://edatv.news/corazon",
        category: "CORAZÓN",
        title: "La verdad sobre Iñaki Urdangarin: por qué ha dejado de hablar con Jaime de Marichalar",
        authorLink: "https://edatv.news/autores/maria-merino",
        author: "María Merino"
    },
    {
        link: "https://edatv.news/corazon/mayte-ametlla-desvela-por-que-supervivientes-dio-comida-escondidas-kiko-rivera",
        imageSrc: null,
        imageAlt: "",
        categoryLink: "https://edatv.news/corazon",
        category: "CORAZÓN",
        title: "Mayte Ametlla desvela por qué 'Supervivientes' dio comida a escondidas a Kiko Rivera",
        authorLink: "https://edatv.news/autores/maria-merino",
        author: "Bianca Munteanu"
    },
    {
        link: "https://edatv.news/politica/quien-diego-solier-fernandez-numero-2-alvise-que-obtendria-escano-europeo",
        imageSrc: null,
        imageAlt: "",
        categoryLink: "https://edatv.news/politica",
        category: "POLÍTICA",
        title: "¿Quién es Diego Solier Fernández, el número 2 de Alvise que obtendría escaño europeo?",
        authorLink: "https://edatv.news/autores/maria-merino",
        author: "Jose Andres Jorge Barceló"
    }
];

const DetailColumn = () => {
    return (
        <div className="detail-col flex flex-row text-right mb-5 gap-4">
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
            {/* <hr className="hidden lg:block h-full w-[1px] border-[#f3f3f3] border-r-2 opacity-50" /> */}
        </div>
    );
};

export default DetailColumn;
