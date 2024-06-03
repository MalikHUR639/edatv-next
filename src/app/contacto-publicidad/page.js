import Link from "next/link";
import React from "react";

const menuData = [
    { title: 'Política', href: '/politica' },
    { title: 'Actualidad', href: '/actualidad' },
];

const contactInfo = {
    email: "estadodealarmatv@gmail.com",
    address: "Calle Lagasca 79, 28006 Madrid, España",
    phone: "682506091"
};

const ContactAndAdvertisement = () => {

    return (
        <div className="max-w-[1200px] mx-auto text-center">
            <div className="text-black text-base font-normal leading-tight tracking-wide block">
                <div className="overflow-x-auto whitespace-nowrap mx-auto my-4">
                    <ul className="inline-block">
                        {menuData.map((item, index) => (
                            <li key={index} className="inline-block mx-[7px]">
                                <Link href={item.href}>
                                    <p title={item.title} target="_self">{item.title}</p>
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
            <div className="max-w-[1200px] mx-auto px-5">
                <h1 className="text-3xl md:text-5xl lg:text-7xl font-sans font-bold leading-tight tracking-tighter">Contacto y publicidad</h1>
            </div>
            <hr className="mt-[10px] mb-5 border-[1px] text-[#d9d8dd]" />
            <div className="xl:max-w-[1100px] px-4 xl:px-0 text-left font-sans mx-auto mb-[12px] text-lg font-normal leading-[1.5em]">
                <p>
                    Puedes contactar con nosotros para tarifas, espacios y propuestas de <strong>publicidad:</strong>
                </p>
                <p className="mt-5 text-sm md:text-md xl:text-lg"><strong>Correo:&nbsp;</strong><a href={`mailto:${contactInfo.email}`}><span className="text-[#337ab7]">{contactInfo.email}</span></a></p>
                <p className="text-sm md:text-md xl:text-lg"><strong>Dirección:</strong>&nbsp;{contactInfo.address}</p>
                <p className="text-sm md:text-md xl:text-lg"><strong>Teléfono:</strong>&nbsp;{contactInfo.phone}</p>
            </div>
        </div>
    );
};

export default ContactAndAdvertisement;
