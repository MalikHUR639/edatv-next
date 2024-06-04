import React from "react";
import Link from "next/link";

const Page = () => {
    const menuData = [
        { title: 'Política', href: '/politica' },
        { title: 'Actualidad', href: '/actualidad' },
    ];

    return (
        <>
            <div className="max-w-[1200px] mx-auto text-center mb-16">
                <div className="text-black text-base font-normal leading-tight tracking-wide block">
                    <div className="overflow-x-auto whitespace-nowrap mx-auto my-4">
                        <ul className="inline-block">
                            {menuData.map((item, index) => (
                                <li key={index} className="inline-block mx-[7px]">
                                    <Link href={item.href}>
                                        <p title={item.title}>{item.title}</p>
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
                <div className="max-w-[1200px] mx-auto px-5">
                    <h1 className="text-5xl md:text-8xl lg:text-[120px] font-[sans-serif] font-bold leading-tight tracking-tighter">Política de privacidad </h1>
                </div>
                <hr className="mt-[10px] mb-5 border-[1px] text-[#d9d8dd]" />
                <div className="mx-[10px] xl:mx-12 xl:max-w-[1165] text-start">
                    {sections.map((section, index) => (
                        <div key={index} className="mb-8">
                            <h2 className="my-8 text-xl md:text-[27px] font-bold font-[sans-serif]">{section.title}</h2>
                            {section.paragraphs.map((paragraph, pIndex) => (
                                <p key={pIndex} className="text-sm md:text-lg font-[sans-serif]" dangerouslySetInnerHTML={{ __html: paragraph }} />))}
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};

const sections = [
    {
        "title": "1. ¿QUIÉN ES EL RESPONSABLE DEL TRATAMIENTO DE SUS DATOS?",
        "paragraphs": [
            " A través de lo contenido en la presente Política de Cookies, Eda TV Consulting, S.L. (en adelante, el “EDATV”) informa acerca de la utilización de dispositivos de almacenamiento y recuperación de datos en equipos terminales de los usuarios (en adelante, el “Usuario”).",
            "Le informamos que la titularidad de este Sitio Web (en adelante, el “Sitio Web”), es de EDATV.",
            "El acceso y/o uso del Sitio Web, le atribuye la condición de Usuario (en adelante, el 'Usuario') e implica la aceptación, desde dicho acceso y/o uso, de la presente Política de Privacidad.",
            "El Usuario podrá contactar con EDATV en la siguiente dirección de correo electrónico:  <span class='text-[#337ab7]'>estadodealarmatv@gmail.com</span>"
        ]
    },
    {
        "title": "2.  ¿CUÁL ES LA LEGITIMACIÓN PARA EL TRATAMIENTO DE SUS DATOS?",
        "paragraphs": [
            " EDATV está legitimada para tratar sus datos para poder llevar a cabo la prestación de sus servicios.",
            "Asimismo, EDATV está legitimada para tratar sus datos basados en el consentimiento solicitado al Usuario o en un interés legítimo si procede.",
            "EDATV se toma muy en serio la protección de su privacidad y de sus datos personales. Por lo tanto, su información personal se conserva de forma segura y se trata con el máximo cuidado.",
            "La presente Política de Privacidad regula el acceso y el uso al servicio (en adelante, el “Servicio”) que EDATV pone a disposición del Usuario interesado en los servicios.",
            "En este sentido, las bases de legitimación utilizadas por EDATV para el tratamiento de los datos de los Usuarios son:",
            "o   La ejecución contractual.",
            "o   El consentimiento de los Usuarios al tratamiento de sus datos personales para las finalidades especificadas en cada caso."
        ]
    },
    {
        "title": "3.  ¿CON QUÉ FINALIDAD TRATAMOS SUS DATOS PERSONALES?",
        "paragraphs": [
            "Sus datos recabados por EDATV podrán ser utilizados para las siguientes finalidades, según el consentimiento otorgado en el formulario de registro correspondiente:",
            "o   La prestación de los servicios de EDATV.",
            "Para la prestación del servicio demandado por el Usuario, EDATV necesitará tratar datos personales obtenidos a partir de la información que el Usuario facilite a EDATV.",
            "Le informamos de que EDATV es proactivo en la protección de su privacidad y sus datos personales y, en concreto, sobre los datos especialmente protegidos relacionados con su salud.",
            "o   El envío de comunicaciones comerciales y/o Newsletter por parte de EDATV.",
            "Si así lo ha consentido el Usuario, sus datos personales podrán ser utilizados para enviarle por carta, teléfono, correo electrónico, SMS/MMS,",
            "o por otros medios de comunicación electrónica equivalentes, comunicaciones comerciales o información de EDATV."
        ]
    },
    {
        "title": "4.DATOS FACILITADOS POR EL USUARIO",
        "paragraphs": [
            " El Usuario garantiza que los datos personales facilitados son veraces y se hace responsable de comunicar a EDATV cualquier modificación de estos. El Usuario responderá, en cualquier caso, de la veracidad de los datos facilitados, reservándose EDATV el derecho a excluir de los Servicios registrados a todo Usuario que haya facilitado datos falsos, sin perjuicio de las demás acciones que procedan en Derecho.",
        ]
    },
    {
        "title": "5.  ¿POR CUÁNTO TIEMPO CONSERVAREMOS SUS DATOS?",
        "paragraphs": [
            " Los datos personales proporcionados se conservarán por parte de EDATV mientras el Usuario no manifieste su voluntad de darse de baja de los servicios de EDATV, y ello con la finalidad de recibir información sobre los servicios de la empresa. Posteriormente, en caso de ser necesario, EDATV mantendrá la información bloqueada los plazos legalmente establecidos."
        ]
    },
    {
        "title": "6. ¿CUÁLES SON SUS DERECHOS CUANDO NOS FACILITA SUS DATOS?",
        "paragraphs": [
            "El Usuario tiene derecho a:",
            "o   Acceder a sus datos personales.",
            "o   Solicitar la rectificación aquellos datos que sean inexactos",
            "o   Solicitar su supresión.",
            "o   Solicitar la limitación del tratamiento de sus datos.",
            "o   Oponerse al tratamiento de sus datos personales.",
            "o   Solicitar su portabilidad.",
            "o   No ser objeto de decisiones individuales automatizadas.",
            "El Usuario puede ejercer todos estos derechos en la siguiente dirección de email: <span className='text-[337ab7]'>estadodealarmatv@gmail.com</span> indicando el motivo de su petición y aportando una copia de su D.N.I.",
            "El Usuario puede también enviar su petición por correo ordinario a la siguiente dirección:",
            "Eda TV Consulting, S.L <br />N.I.F.: B88605266 <br />Calle Lagasca 79, 28006 Madrid, España ",
            "Sin perjuicio de cualquier otro recurso administrativo o acción judicial, el Usuario tendrá también derecho a presentar una reclamación ante una Autoridad de Control, en particular en el Estado miembro en el que tenga su residencia habitual, lugar de trabajo o lugar de la supuesta infracción, en caso de que considere que el tratamiento de sus datos personales no es adecuado a la normativa, así como en el caso de no ver satisfecho el ejercicio de sus derechos. La autoridad de control ante la que se haya presentado la reclamación informará al reclamante sobre el curso y el resultado de la reclamación."
        ]
    },
    {
        "title": "7. LINKS A PÁGINAS WEB",
        "paragraphs": [
            "EL Sitio Web de EDATV podría contener links a páginas web de compañías y entidades de terceros. EDATV no puede hacerse responsable de la forma en la que estas compañías tratan la protección de la privacidad y de los datos personales, por lo que le aconsejamos que lea detenidamente las declaraciones de Política de Privacidad de estas páginas web que no son propiedad de EDATV con relación al uso, procesamiento y protección de datos personales.",
            "Las condiciones que ofrecen estas páginas web pueden no ser las mismas que las que ofrece EDATV."
        ]
    },
    {
        "title": "8. SEGURIDAD DE LOS DATOS PERSONALES",
        "paragraphs": [
            "La protección de la privacidad y los datos personales de los Usuarios es muy importante para EDATV. Por lo tanto, EDATV hace todo lo que está en su mano para impedir que sus datos se utilicen de forma inadecuada, permitiendo el acceso a los mismos únicamente a personal autorizado.",
            "EDATV mantiene los niveles de seguridad de protección de datos personales conforme a la normativa aplicable y estableciendo todos los medios técnicos a su alcance para evitar la pérdida, mal uso, alteración, acceso no autorizado y robo de los datos que el Usuario facilite a través del Sitio Web sin perjuicio de informarle de que las medidas de seguridad en Internet no son inexpugnables.",
            "EDATV se compromete a cumplir con el deber de secreto y confidencialidad respecto de los datos personales de acuerdo con la legislación aplicable, así como a conferirles un tratamiento seguro en las cesiones y transferencias internacionales de datos que, en su caso, puedan producirse.",
            "En aquellos servicios del Sitio Web que precisen registrarse como Usuario, se deberá elegir una contraseña. El Usuario es el responsable de mantener la confidencialidad de esta contraseña, así como de todas las actividades que ocurran en la sesión iniciada con su nombre y contraseña.",
            "El Usuario se compromete a notificar EDATV a la mayor brevedad el uso no autorizado de su nombre de Usuario y/o contraseña o cualquier otro fallo en la seguridad. EDATV no será responsable por los daños o pérdidas que se pudieran originar debido al no cumplimiento de esta obligación por parte del Usuario."
        ]
    },
    {
        "title": "9. CAMBIOS EN LA POLÍTICA DE PRIVACIDAD",
        "paragraphs": [
            "EDATV se reserva el derecho de revisar su Política de Privacidad en el momento que considere oportuno pudiendo sufrir actualizaciones. Por ello, le rogamos que compruebe regularmente esta Política de Privacidad para leer la versión más reciente de la misma.",
            "No obstante, cualquier cambio que se produzca en la presente Política de Privacidad se comunicará al Usuario."
        ]
    },
    {
        "title": "10. DUDAS O CUESTIONES",
        "paragraphs": [
            " Si tiene alguna pregunta sobre la presente Política de Privacidad o el tratamiento de sus datos por favor, póngase en contacto con EDATV mediante correo electrónico dirigido a la siguiente dirección: <span class='text-[#337ab7]'>estadodealarmatv@gmail.com</span>"
        ]
    },
];

export default Page;