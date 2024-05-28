import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const highlightsData = [
    {
        mainLink: "/",
        commentLink: "/",
        authorLink: "/",
        imageSrc: "https://edatv.news/filesedc/uploads/image/post/jose-felix-tezanos-europeas_1600_1067.webp",
        imageAlt: "José Félix Tezanos",
        articleLink: "/",
        author: "Adais Cásares",
        articleTitle: "Última hora: El CIS de Tezanos dispara a Sánchez y Alvise",
        articleDescription: "El amigo de Sánchez, José Félix Tezanos, ya tiene sus datos sobre los resultados de las elecciones europeas"
    }
];

const Highlight = ({ 
    mainLink, 
    commentLink, 
    authorLink, 
    imageSrc, 
    imageAlt, 
    articleLink, 
    author, 
    articleTitle, 
    articleDescription 
}) => {
    return (
        <div>
            <Link className="no-underline text-inherit" href={mainLink}>
                <div className="relative uppercase text-left pt-[4px] text-black mx-2.5">
                    <span className="text-xl font-bold font-sans float-left">TAMBIÉN ES NOTICIA</span>
                    <hr className="border-t-2 border-gray-500 mt-3" />
                </div>
            </Link>
            <div className="mx-5 mb-5">
                <div className="author-and-comment flex items-center justify-end gap-2.5 mt-4">
                    <div className="info_comments">
                        <Link href={commentLink}>
                            <span className="disqus-comment-count">💬</span>
                        </Link>
                    </div>
                    <Link href={authorLink}>
                        <span className="author text-gray-500 uppercase">{author}</span>
                    </Link>
                </div>
                <div className="article grid items-center justify-center gap-[5%] grid-cols-[45%_50%] auto-rows-auto max-md:grid-cols-1 max-md:gap-5">
                    <div className="article-image">
                        <Image
                            loading="lazy"
                            src={imageSrc}
                            alt={imageAlt}
                            width={335}
                            height={223}
                            className="w-full h-auto"
                        />
                    </div>
                    <div className="article-description">
                        <Link href={articleLink}>
                            <h2 className="text-[44.5px] font-bold leading-tight m-0 p-0 mb-2.5 max-sm:text-[35px]">
                                {articleTitle}
                            </h2>
                        </Link>
                        <Link href={articleLink}>
                            <p className='text-[20px] font-semibold max-sm:text-[18px]'>
                                {articleDescription}
                            </p>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

const HighlightsList = () => {
    return (
        <div className="container mx-auto">
            {highlightsData.map((highlight, index) => (
                <Highlight 
                    key={index}
                    mainLink={highlight.mainLink}
                    commentLink={highlight.commentLink}
                    authorLink={highlight.authorLink}
                    imageSrc={highlight.imageSrc}
                    imageAlt={highlight.imageAlt}
                    articleLink={highlight.articleLink}
                    author={highlight.author}
                    articleTitle={highlight.articleTitle}
                    articleDescription={highlight.articleDescription}
                />
            ))}
        </div>
    );
};

export default HighlightsList;
