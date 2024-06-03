import React from "react";
import Link from "next/link";

const LegalWarning = () => {
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
                    <h1 className="text-3xl md:text-5xl lg:text-7xl font-[sans-serif] font-bold leading-tight tracking-tighter">Aviso Legal</h1>
                </div>
                <hr className="mt-[10px] mb-5 border-[1px] text-[#d9d8dd]" />
                <div className="mx-[10px] xl:mx-12 xl:max-w-[1165] text-start">
                    {sections.map((section, index) => (
                        <div key={index} className="mb-8">
                            <h2 className="my-8 text-xl md:text-[27px] font-bold font-[sans-serif]">{section.title}</h2>
                            {section.paragraphs.map((paragraph, pIndex) => (
                                <p key={pIndex} className="text-sm md:text-lg font-[sans-serif]" dangerouslySetInnerHTML={{ __html: paragraph }} />                            ))}
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};

const sections = [
    {
        "title": "IDENTIFICACIÓN",
        "paragraphs": [
            "El presente Sitio Web es titularidad de Eda TV Consulting, S.L. (en adelante, 'EDATV'), con N.I.F.: B88605266 y domicilio en Calle Lagasca 79, 28006 Madrid, España.",
            "El acceso y uso de este sitio web le atribuye la condición de usuario, y acepta, desde dicho acceso y/o uso, el actual Aviso Legal.",
            "El usuario (en adelante, el 'Usuario') puede contactar con EDATV a través de la siguiente dirección de correo electrónico: <span class='text-[#337ab7]'>info@edatv.com</span>"
        ]
    },
    {
        "title": "USOS DEL SITIO WEB",
        "paragraphs": [
            "El Usuario asume la responsabilidad del uso del Sitio Web de EDATV.",
            "El presente Sitio Web puede proporcionar acceso a multitud de textos, gráficos, dibujos, diseños, fotografías, contenidos multimedia, e informaciones (en adelante, los 'Contenidos') pertenecientes a EDATV o a terceros a los que el Usuario puede tener acceso.",
            "El Usuario se compromete a hacer un uso adecuado de los Contenidos y Servicios ofrecidos a través del Sitio Web y con carácter enunciativo, pero no limitativo, a no emplearlos para:",
            "Incurrir en actividades ilícitas, ilegales o contrarias a la buena fe y al orden público.",
            "Provocar daños en los sistemas físicos y lógicos del Sitio Web de EDATV, de sus proveedores o de terceros.",
            "Intentar el acceso, utilización o bien manipulación los datos de EDATV, terceros proveedores y otros usuarios.",
            "Introducir o difundir en la red virus informáticos u otros sistemas físicos o lógicos que sean susceptibles de provocar los daños anteriormente mencionados.",
            "Reproducir, copiar, distribuir, permitir el acceso del público a través de cualquier modalidad de comunicación pública, transformar o modificar los Contenidos, salvo autorización por parte de EDATV.",
            "La supresión, ocultación o manipulación de los Contenidos que se encuentran sujetos a derechos de propiedad intelectual o industrial y demás datos identificativos de dichos derechos de EDATV o de terceros incorporados a los Contenidos, así como los dispositivos técnicos de protección o mecanismos de información que puedan insertarse en los Contenidos.",
            "EDATV advierte de que los materiales contenidos en este Sitio Web han sido incluidos a mero título informativo, resultando insuficientes para tomar decisiones o asumir posiciones en un caso concreto.",
            "El Usuario en cualquier caso, debe tener en cuenta que los materiales contenidos en este Sitio Web pudieran no reflejar el estado legislativo o jurisprudencial más reciente sobre las cuestiones analizadas. Asimismo, estos materiales pueden ser modificados, desarrollados o actualizados sin notificación previa.",
            "EDATV podrá suspender temporalmente y sin previo aviso, la accesibilidad al Sitio Web con motivo de operaciones de mantenimiento, reparación, actualización o mejora. Todo ello sin perjuicio de que, siempre que las circunstancias lo permitan, EDATV comunique al Usuario, con antelación suficiente, la fecha prevista para la suspensión de los Servicios.",
            "EDATV no se responsabiliza del uso que los Usuarios puedan hacer de los Contenidos incluidos en el Sitio Web.",
            "EDATV tendrá derecho a investigar y denunciar cualquiera de las conductas mencionadas anteriormente de acuerdo con la Ley, así como a colaborar con las autoridades en la investigación de tales actuaciones."
        ]
    },
    {
        "title": "RESPONSABILIDAD Y GARANTÍAS",
        "paragraphs": [
            "EDATV ha adoptado las medidas necesarias que, dentro de sus posibilidades y el estado de la tecnología, permitan el correcto funcionamiento del Sitio Web, así como la ausencia de virus y demás componentes dañinos. Sin embargo, EDATV no puede hacerse responsable de:",
            "La ausencia de errores en dichos Contenidos ni la corrección de cualquier defecto que pudiera ocurrir.",
            "La continuidad y disponibilidad de los Contenidos y Servicios.",
            "Los daños o perjuicios que cause cualquier persona que vulnere los sistemas de seguridad de EDATV.",
            "La ausencia de virus y/o demás componentes dañinos.",
            "EDATV no asume ninguna responsabilidad sobre los enlaces a otras páginas web que se encuentren en el Sitio Web pudiendo dirigir al Usuario a otros sitios web sobre los que EDATV no tiene ningún tipo de control, por lo que la inclusión de vínculos a otros sitios web no implica la aprobación de sus contenidos por parte de EDATV ni la existencia de ningún tipo de asociación entre EDATV y sus titulares. Por tanto, el Usuario accederá bajo su propia y exclusiva responsabilidad al Contenido, así como en las condiciones de uso que rijan en los mismos."
        ]
    },
    {
        "title": "DERECHOS DE PROPIEDAD INTELECTUAL E INDUSTRIAL",
        "paragraphs": [
            "Todos los derechos de propiedad intelectual de los Contenidos del Sitio Web y su diseño gráfico son propiedad exclusiva de EDATV, o bien de un tercero que haya autorizado su utilización, por lo que es a EDATV a quien le corresponde el ejercicio exclusivo de los derechos de explotación de los mismos. Por todo ello y en virtud de lo dispuesto en la legislación aplicable en materia de Derechos de Propiedad Intelectual e Industrial.",
            "No se concede por parte de EDATV ninguna licencia o autorización de uso de ninguna clase sobre sus derechos de propiedad intelectual e industrial o bien sobre cualquier otra propiedad o derecho relacionado con el Sitio Web, los Servicios o los Contenidos de éste.",
            "Está permitida la reproducción y almacenamiento temporal de los Contenidos del Sitio Web siempre que ello sea estrictamente necesario para el uso y visualización del Sitio Web desde un dispositivo personal.",
            "La legitimidad de los derechos de propiedad intelectual o industrial correspondientes a los Contenidos aportados por los usuarios es responsabilidad exclusiva de los mismos, por lo que el Usuario mantendrá indemne a EDATV de cualquier reclamación de terceros derivada de la utilización ilícita de Contenidos en el Sitio Web."
        ]
    },
    {
        "title": "DURACIÓN Y MODIFICACIONES",
        "paragraphs": [
            "Este Aviso Legal estará vigente de forma indefinida, pudiendo EDATV realizar cambios acerca de las condiciones especificadas en el mismo, entrando en vigor desde el momento de su publicación.",
            "Se podrá suprimir, cambiar o añadir por parte de EDATV, tanto los Contenidos como los Servicios que presta, así como la manera en la que los mismos aparezcan presentados o localizados. Se entienden como vigentes, aquellas condiciones que estén publicadas en el momento en el que el Usuario acceda al Sitio Web de EDATV.",
            "El uso y/o acceso al Sitio Web es entendido como una aceptación por parte del Usuario del presente Aviso Legal así como sus condiciones y, en su caso, los cambios efectuados en las mismas"
        ]
    }
];

export default LegalWarning;