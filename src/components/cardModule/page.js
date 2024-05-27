import Link from 'next/link';


const articles = [
    {
      link: '/',
      imageSrc: 'https://edatv.news/filesedc/uploads/image/post/montaje_hombre_mayor_calcular_movil_dinero_1600_1067.webp',
      imageAlt: 'Javier García Isac',
      decorationSrc: '',
      category: 'Policy',
      categoryLink: '/',
      title: 'The smoke screens',
      author: 'Javier Garcia Isac',
      authorLink: '/',
    },
    {
      link: '/',
      imageSrc: 'https://edatv.news/filesedc/uploads/image/post/una-mujer-marroqui-expulsa-de-su-local-a-cuatro-personas-por-colocar-abanicos-lgtbi_1600_1067.webp',
      imageAlt: 'A Moroccan woman expels four people from her premises for placing LGTBI fans',
      decorationSrc: '',
      category: 'Policy',
      categoryLink: '/',
      title: 'In which restaurant were four people expelled for carrying LGTBI fans?',
      author: 'Jose Andres Jorge Barcelo',
      authorLink: '/',
    },
    {
      link: '/',
      imageSrc: 'https://edatv.news/filesedc/uploads/image/post/imagen-de-whatsapp-2024-05-26-a-las-162425-9311086e_1600_1067.webp',
      imageAlt: 'a protester speaks with edatv',
      decorationSrc: '',
      category: 'Policy',
      categoryLink: '/',
      title: '[VIDEO] Thousands of voices cried \'Sánchez Resignation!\' at the PP demonstration',
      author: 'Rafael Escalona',
      authorLink: '/',
    },
    {
      link: '/',
      imageSrc: 'https://edatv.news/filesedc/uploads/image/post/jaime-del-burgo-8-1716731676702_1600_1067.webp',
      imageAlt: 'mobilization of the pp in madrid',
      decorationSrc: '',
      category: 'Policy',
      categoryLink: '/',
      title: 'Thousands of people say: \'Long live freedom\' \'We do not want to be a dictatorship\'',
      author: 'Rafael Escalona',
      authorLink: '/',
    },
  ];

const CardModule = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 p-4 w-full mb-5">
      {articles.map((article, index) => (
        <div key={index} 
        className={`relative p-4 ${
            index % 4 !== 3 ? 'after:content-[""] after:absolute after:top-0 after:right-0 after:bottom-0 after:translate-x-3 after:translate-y-[-28px] after:w-[0.5px] after:bg-gray-300' : ''
          }`}
        >
          <article>
            <Link href={article.link} passHref>
              <Link title={article.title} href={'/'}>
                <figure>
                  <img src={article.imageSrc} alt={article.imageAlt} className="w-full h-auto mb-2" />
                </figure>
              </Link>
            </Link>
            <Link href={article.categoryLink} passHref>
              <Link href={'/'} className="text-[#cf1133] uppercase text-sm font-bold">{article.category}</Link>
            </Link>
            <div className="mt-2">
              <Link href={article.link} passHref>
                <Link href={'/'} title={article.title}>
                  <h2 className="text-xl font-semibold">{article.title}</h2>
                </Link>
              </Link>
            </div>
            <div className="flex gap-3 items-center mt-2 text-gray-600 uppercase text-sm">
              <Link href={article.authorLink} passHref>
                <Link href={'/'}  className="font-semibold">{article.author}</Link>
              </Link>
              <Link href={article.link} passHref>
                <Link href={'/'}  className="font-semibold">💬</Link>
              </Link>
            </div>
          </article>
        </div>
      ))}
    </div>
  );
};

export default CardModule;