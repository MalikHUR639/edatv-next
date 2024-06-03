import Image from "next/image";
import Link from "next/link";
import React from "react";

const menuData = [
    { title: 'Política', href: '/politica' },
    { title: 'Actualidad', href: '/actualidad' },
];

const StaffMember = ({ name, linkedin, email, source }) => {

    const textColor = source === 'staffDataOther' ? '#000000' : '#337ab7';

    return (
        <div className="flex gap-4 mt-2 items-center">
            <span>
                <Link href={linkedin} target="_blank" rel="noopener noreferrer">
                    <Image
                        alt="Logo de LinkedIn"
                        src="https://edatv.news/images/linkedin.svg"
                        width={20}
                        height={20}
                    />
                </Link>
            </span>
            <Link href={email}>
                <Image
                    alt="Mail Icon"
                    src="https://filesedc.com/uploads/other/mail-icon-staff-50.png"
                    width={20}
                    height={20}
                />
            </Link>
            <Link href={linkedin} passHref>
                <p title={name} style={{ color: textColor }}>{name}</p>
            </Link>
        </div>
    );
};

const AboutUs = () => {
    const staffData = {
        director: {
            name: "Javier Negre",
            linkedin: "/",
            email: "/"
        },
        Redaction: [
            {
                name: "Rafael Escalona",
                linkedin: "/",
                email: "/"
            },
            {
                name: "Jose Andres Jorge Barceló",
                linkedin: "/",
                email: "/"
            },
            {
                name: "Adais Cásares",
                linkedin: "/",
                email: "/"
            },
            {
                name: "Vito Quiles",
                linkedin: "/",
                email: "/"
            },
            {
                name: "Gonzalo Pinilla",
                linkedin: "/",
                email: "/"
            },
            {
                name: "Jesus Wollstein",
                linkedin: "/",
                email: "/"
            },
            {
                name: "Encarni Ortiz",
                linkedin: "/",
                email: "/"
            },
            {
                name: "Marina Greciano",
                linkedin: "/",
                email: "/"
            },
            {
                name: "Cándido Casares",
                linkedin: "/",
                email: "/"
            },
            {
                name: "Gonzalo Pinilla",
                linkedin: "/",
                email: "/"
            }
        ],
        Social_Media: [
            {
                name: "Rafael Escalona",
                linkedin: "/",
                email: "/"
            },
            {
                name: "Jose Andres Jorge Barceló",
                linkedin: "/",
                email: "/"
            },
            {
                name: "Adais Cásares",
                linkedin: "/",
                email: "/"
            },
            {
                name: "Vito Quiles",
                linkedin: "/",
                email: "/"
            },
            {
                name: "Gonzalo Pinilla",
                linkedin: "/",
                email: "/"
            },
            {
                name: "Jesus Wollstein",
                linkedin: "/",
                email: "/"
            },
            {
                name: "Encarni Ortiz",
                linkedin: "/",
                email: "/"
            }
        ],
        InformaRadio: [
            {
                name: "Encarni Ortiz",
                linkedin: "/",
                email: "/"
            },
            {
                name: "Encarni Ortiz",
                linkedin: "/",
                email: "/"
            }
        ],
    };

    const staffDataOther = {
        Chief_Techology_Officer: [
            {
                name: "Cristhian Ortega",
                linkedin: "/",
                email: "/"
            },
            {
                name: "Alejandro Miralles",
                linkedin: "/",
                email: "/"
            }
        ],
        Junior_Developer: [
            {
                name: "Daniel Laso Denamiel",
                linkedin: "/",
                email: "/"
            },
            {
                name: "Raúl Giménez Pérez",
                linkedin: "/",
                email: "/"
            }
        ],
        SEO_Manager: [
            {
                name: "Pol Soto Ferrant",
                linkedin: "/",
                email: "/"
            }
        ],
        Ad_Trafficker: [
            {
                name: "Nacho Gómez",
                linkedin: "/",
                email: "/"
            }
        ],
    };

    return (
        <div className="max-w-[1200px] mx-auto text-center mb-16">
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
                <h1 className="text-3xl md:text-5xl lg:text-7xl font-sans font-bold leading-tight tracking-tighter">Quiénes somos</h1>
            </div>
            <hr className="mt-[10px] mb-5 border-[1px] text-[#d9d8dd]" />
            <div className="xl:max-w-[1140px] px-4 xl:px-0 text-left font-sans mx-auto mb-[12px] text-lg font-normal leading-[1.5em]">
                <p>EDATV es un nuevo medio de comunicación multiplataforma que aspira a ensanchar el ámbito de la libertad de expresión y opinión en España: una libertad atenazada por la corrección política imperante, la censura ideológica y la cultura de la cancelación. Es un medio independiente, que no necesita recurrir a la autocensura para ajustarse a las imposiciones ideológicas de nadie, que se financia por sus propios medios y no depende de terceros para alojar el contenido.</p>
                <h2 className="mt-5 text-xl md:text-[27px] font-bold">Director</h2>
                {staffData.director && (
                    <div className="flex gap-4 mt-5 items-center">
                        <span>
                            <Link href={staffData.director.linkedin} target="_blank" rel="noopener noreferrer">
                                <Image
                                    alt="Logo de LinkedIn"
                                    src="https://edatv.news/images/linkedin.svg"
                                    width={20}
                                    height={20}
                                />
                            </Link>
                        </span>
                        <Link href={staffData.director.email}>
                            <Image
                                alt="Mail Icon"
                                src="https://filesedc.com/uploads/other/mail-icon-staff-50.png"
                                width={20}
                                height={20}
                            />
                        </Link>
                        <Link href={staffData.director.linkedin} passHref>
                            <p title={staffData.director.name} className="text-[#337ab7]">{staffData.director.name}</p>
                        </Link>
                    </div>
                )}
                {Object.entries(staffData).map(([key, value], index) => {
                    const formattedKey = key.replace(/_/g, ' ');
                    return (
                        key !== 'director' &&
                        <React.Fragment key={key}>
                            <h2 className="mt-7 mb-7 text-xl md:text-[27px] font-bold">{formattedKey}</h2>
                            {value.map((member, i) => (
                                <StaffMember key={i} {...member} />
                            ))}
                        </React.Fragment>
                    );
                })}
                <h2 className="mt-7 mb-7 text-xl md:text-[27px] font-bold">Tecnologia</h2>
                {Object.entries(staffDataOther).map(([key, value], index) => {
                    const formattedKey = key.replace(/_/g, ' ');
                    return (
                        key !== 'director' &&
                        <React.Fragment key={key}>
                            <h2 className="mt-7 text-[20px] font-bold">{formattedKey}</h2>
                            {value.map((member, i) => (
                                <StaffMember key={i} {...member} source="staffDataOther"/>
                            ))}
                        </React.Fragment>
                    );
                })}
            </div>
        </div>
    );
};

export default AboutUs;