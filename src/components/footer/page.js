import Image from 'next/image';
import Link from 'next/link';

const socialLinks = [
    {
        href: '/',
        title: 'Follow us on Facebook',
        icon: <Image src="https://edatv.news/filesedc/footericons/facebook.svg" className='w-[30px] md:w-[35px] lg:w-[40px] xl:w-[50px] ' width={30} height={30} alt="Facebook" />,
    },
    {
        href: '/',
        title: 'Follow us on Twitter',
        icon: <Image src="https://edatv.news/filesedc/footericons/twitter.svg" className='w-[30px] md:w-[35px] lg:w-[40px] xl:w-[50px]' width={30} height={30} alt="Twitter" />,
    },
    {
        href: '/',
        title: 'Follow us on Instagram',
        icon: <Image src="https://edatv.news/filesedc/footericons/instagram.svg" className='w-[30px] md:w-[35px] lg:w-[40px] xl:w-[50px] ' width={30} height={30} alt="Instagram" />,
    },
    {
        href: '/',
        title: 'Subscribe to our YouTube channel',
        icon: <Image src="https://edatv.news/filesedc/footericons/youtube.svg" className='w-[30px] md:w-[35px] lg:w-[40px] xl:w-[50px] ' width={30} height={30} alt="Youtube" />,
    },
    {
        href: '/',
        title: 'Follow us on Telegram',
        icon: <Image src="https://edatv.news/filesedc/footericons/telegram.svg" className='w-[30px] md:w-[35px] lg:w-[40px] xl:w-[50px] ' width={30} height={30} alt="Telegram" />,
    },
    {
        href: '/',
        title: 'Download our Android app',
        icon: <Image src="https://edatv.news/filesedc/footericons/playstore.svg" className='w-[30px] md:w-[35px] lg:w-[40px] xl:w-[50px] ' width={30} height={30} alt="Play Store" />,
    },
    {
        href: '/',
        title: 'Download our IOS app',
       icon: <Image src="https://edatv.news/filesedc/footericons/applestore.svg" className='w-[30px] md:w-[35px] lg:w-[40px] xl:w-[50px] ' width={30} height={30} alt="Apple Store" />,
    },
    {
        href: '/',
        title: 'Follow us on Google News',
        icon: <Image src="https://edatv.news/filesedc/footericons/googlenews.svg" className='w-[30px] md:w-[35px] lg:w-[40px] xl:w-[50px] ' width={30} height={30} alt="Google News" />,

    },
    {
        href: '/',
        title: 'Follow us on DailyMotion',
        icon: <Image src="https://edatv.news/filesedc/footericons/dailymotion.svg" className='w-[30px] md:w-[35px] lg:w-[40px] xl:w-[50px] ' width={30} height={30} alt="Daily Motion" />,
    },
    {
        href: '/',
        title: 'Follow us on TikTok',
        icon: <Image src="https://edatv.news/filesedc/footericons/tiktok.svg" className='w-[30px] md:w-[35px] lg:w-[40px] xl:w-[50px] ' width={30} height={30} alt="TikTok" />,
    },
    {
        href: '/',
        title: 'Chat with us on WhatsApp',
        icon: <Image src="https://edatv.news/filesedc/footericons/whatsapp.svg" className='w-[30px] md:w-[35px] lg:w-[40px] xl:w-[50px]' width={30} height={30} alt="WhatsApp" />,
    },
];

const corporativeLinks = [
    { href: '/', title: 'About us' },
    { href: '/', title: 'Contact and advertising' },
    { href: '/', title: 'Legal warning' },
    { href: '/', title: 'Privacy Policy' },
    { href: '/', title: 'Cookies policy' },
    { href: '/', title: 'Authors' },
    { href: '/', title: 'Site Map' },
    { href: '/', title: 'RSS' },
    { href: '/', title: 'Tags' },
];

const Footer = () => {
    return (
        <footer className="relative bg-[#202020] text-white pt-[0.5rem] md:pt-[1.1rem]">
            <div className="mx-auto">
                <div className="flex flex-col items-center">
                    <div className="flex flex-wrap justify-center md:mb-2 lg:mb-4 space-x-[15px]">
                        {socialLinks.map((link, index) => (
                            <Link
                                key={index}
                                href={link.href}
                                target="_blank"
                                rel="nofollow noopener noreferrer"
                                title={link.title}
                                className="text-[50px] mb-4"
                            >
                                {link.icon}
                            </Link>
                        ))}
                    </div>
                    <div className="flex flex-wrap justify-center mb-2 md:mb-4 space-x-4">
                        {corporativeLinks.map((link, index) => (
                            <div key={index} className="relative flex items-center mb-2">
                                <Link href={link.href}>
                                    <div className="text-xs md:text-sm lg:text-lg">
                                        {link.title}
                                    </div>
                                </Link>
                                {index < corporativeLinks.length - 1 && (
                                    <span className="h-full border-r border-gray-300 ml-4"></span>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <div className="text-center w-full bg-[#273238] justify-center leading-[55px] border-t-2 border-[#273238]">
                <Link href="/"
                    rel="nofollow noopener noreferrer"
                    className="text-sm"
                    title="ATLAS CMS by tqcorp.media"
                >
                    Atlas CMS © 2024

                </Link>
            </div>
        </footer>
    );
};

export default Footer;
