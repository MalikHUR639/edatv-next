import Link from "next/link";
import React from "react";

const page = () => {
  const tableData = [
    {
      name: "wfivefivec",
      category: "Publicidad / cookies de seguimiento",
      goal: "Esta cookie generalmente es proporcionada por w55c.net y se utiliza con fines publicitarios.",
      expiration: "1 año 1 mes",
      supplier: "---",
    },
    {
      name: "uvc",
      category: "Publicidad / cookies de seguimiento",
      goal: "Cookie establecida por AddThis. Estos complementos le permiten establecer marcadores o compartir contenido interesante con otros usuarios. Los complementos le permiten interactuar con las redes sociales y otros usuarios para que podamos mejorar nuestros servicios y hacerlos más interesantes para usted como usuario.",
      expiration: "1 año 1 mes",
      supplier: "---",
    },
    {
      name: "uuid2",
      category: "Advertising/tracking cookies",
      goal: "This cookie enables targeted advertising through the AppNexus platform: it collects anonymous data on IP addresses from ad views, page views, and more.",
      expiration: "3 months",
      supplier: "---",
    },
  ];

  const uliListData = [
    {
      title: "1. Internet Explorer",
      link: "https://goo.gl/iU2wh2",
      instructions: [
        "En el menú de herramientas, seleccione 'Opciones de Internet'.",
        "Haga clic en la pestaña de privacidad.",
        "Podrá configurar la privacidad con un cursor con seis posiciones que le permite controlar la cantidad de cookies que se instalarán: Bloquear todas las cookies, Alta, Media Alto, Media (nivel por defecto), Baja y Aceptar todas las cookies.",
      ],
    },
    {
      title: "2. Mozilla Firefox",
      link: "https://goo.gl/QXWYmv",
      instructions: [
        "En la parte superior de la ventana de Firefox, haga clic en el menú Herramientas.",
        "Seleccionar Opciones.",
        "Seleccionar el panel Privacidad.",
        "En la opción Firefox podrá elegir Usar una configuración personalizada de su historial, así como otras cuestiones relacionadas con su Privacidad.",
      ],
    },
    {
      title: "3. Google Chrome",
      link: "http://goo.gl/fQnkSB",
      instructions: [
        "Hacer clic en el menú situado en la barra de herramientas.",
        "Seleccionar Configuración.",
        "Hacer clic en Mostrar opciones avanzadas.",
        "En la sección 'Privacidad', hacer clic en el botón Configuración de contenido.",
        "En la sección de Cookies, se pueden configurar las opciones.",
      ],
    },
    {
      title: "4. Safari",
      link: "http://goo.gl/dQywEo",
      instructions: [
        "En el menú de configuración seleccione la opción de 'Preferencias'.",
        "Abra la pestaña de privacidad.",
        "Seleccione la opción que quiera de la sección de 'bloquear cookies'.",
        "Recuerde que ciertas funciones y la plena funcionalidad del Sitio Web pueden no estar disponibles después de deshabilitar las cookies.",
      ],
    },
  ];

  return (
    <>
      <div className="w-full">
        <div className="max-w-[1100px] m-auto py-6 px-2 md:px-12">
          <div className="text-[20px] md:text-[30px] xl:text-[40px] font-bold text-center py-6">
            <h1>Política de Cookies</h1>
          </div>
          <hr className="border-1 border-solid border-[#c2c6cc]" />
          <div className="py-4">
            <p className="text-sm md:text-md xl:text-lg">
              A través de lo contenido en la presente Política de Cookies, Eda
              TV Consulting, S.L. (en adelante, el “EDATV”) informa acerca de la
              utilización de dispositivos de almacenamiento y recuperación de
              datos en equipos terminales de los usuarios (en adelante, el
              “Usuario”).
            </p>
          </div>

          <div>
            <h1 className="text-[25px] font-extrabold py-4">
              {" "}
              1. ¿QUÉ ES UNA COOKIE?
            </h1>
            <p className="py-4 text-sm md:text-md xl:text-lg">
              Una cookie es un archivo o fichero que se descarga en el
              dispositivo del Usuario cuando accede a determinados sitios web y
              aplicaciones permitiendo almacenar preferencias de la navegación
              del mismo, haciendo más fácil y rápida la interacción entre el
              Usuario y el Sitio Web.Las cookies recogen la información de
              manera anónima y no contiene ninguna información sensible debido a
              que los datos que recogen no permiten identificar personalmente al
              Usuario. En cualquier caso, el Usuario podrá configurar su
              navegador para modificar y/o bloquear la instalación de las
              cookies enviadas desde el Sitio Web, sin impedir el acceso a los
              contenidos.
            </p>
          </div>

          <div>
            <h1 className="text-[25px] font-extrabold py-4">
              2. USO DE LAS COOKIES POR PARTE DE EDATV
            </h1>
            <p className="text-sm md:text-md xl:text-lg">
              De acuerdo con la Ley 34/2002, de 11 de julio, de servicios de la
              sociedad de la información y de comercio electrónico (en adelante,
              “LSSI”), así como las directrices e indicaciones de la Agencia
              Española de Protección de Datos y el Comité Europeo de Protección
              de Datos, este Sitio Web utiliza cookies u otros dispositivos de
              almacenamiento y recuperación de información para realizar un
              seguimiento de las interacciones de los Usuarios con los servicios
              ofrecidos en el Sitio Web.
            </p>

            <p className="text-sm md:text-md xl:text-lg">
              Las cookies permiten reconocer el navegador de un Usuario, el tipo
              de dispositivo desde el que se accede al Sitio Web, así como para
              facilitar la próxima visita del Usuario al Sitio Web y que de esta
              forma le resulte más útil.
            </p>
            <p className="text-sm md:text-md xl:text-lg">EDATV utiliza las cookies para:</p>
            <h1 className="text-[20px] mt-2 font-bold">
              1. Recopilar información de cara a optimizar la navegación y
              mejorar el Sitio Web.
            </h1>
            <h1 className="text-[20px] mb-2 font-bold">
              2. Optimizar la navegación del Usuario a través del seguimiento de
              la sesión.
            </h1>
          </div>

          <div className="py-4">
            <p className="text-sm md:text-md xl:text-lg">El Sitio Web utiliza los siguientes tipos de cookies:</p>
            <h1 className="text-[20px] py-1 font-bold">3. Obligatorias</h1>
            <p className="text-sm md:text-md xl:text-lg">
              Aquellas estrictamente necesarias para prestar un servicio o
              contenido solicitado por el propio Usuario. Se encargan de
              aspectos técnicos como identificar registros y gestionar
              preferencias de herramientas en el uso, interacción y localización
              del acceso a los contenidos.
            </p>
            <h1 className="text-[20px] py-1 font-bold">4. Funcionales</h1>
            <p className="text-sm md:text-md xl:text-lg">
              Ofrecen al Usuario información que enriquece la experiencia de
              navegación como mostrar el pronóstico del tiempo basado en su
              ubicación.
            </p>
            <h1 className="text-[20px] py-1 font-bold">
              5. Estadísticas/analíticas
            </h1>
            <p className="text-sm md:text-md xl:text-lg">
              Estas cookies recogen información relativa al uso de la web como
              la permanencia en la misma y los contenidos visitados por los
              Usuarios para medir su rendimiento y mejorar la navegación.
            </p>
            <p className="text-sm md:text-md xl:text-lg">
              Los objetivos principales que se persiguen con este tipo de
              cookies son:
            </p>

            <ul className="list-disc py-4 pl-4 text-sm md:text-md xl:text-lg font-[sans-serif]">
              <li>
                Permitir la identificación anónima de los Usuarios y por lo
                tanto la contabilización aproximada del número de visitantes.
              </li>
              <li>
                Identificar de forma anónima los contenidos más visitados.
              </li>
              <li>
                Saber si el Usuario que está accediendo es nuevo o repite
                visita.
              </li>
            </ul>
          </div>

          <div className="py-4">
            <h1 className="text-[20px] font-bold">
              6. Personalización de Publicidad y de terceros:
            </h1>
            <p className="text-sm md:text-md xl:text-lg">
              Obtienen información de la navegación del Usuario para poder
              gestionar espacios publicitarios y ofrecer un contenido más
              relevante y de calidad para él a partir de sus gustos.
            </p>
          </div>

          {/* <div className="w-[200px]">
            <p className="text-sm md:text-md xl:text-lg">Las cookies que se utilizan en el Sitio Web son:</p>
            <div className="">
              <table className=" border border-[#c2c6cc] w-52 py-4">
                <thead>
                  <tr className="border border-[#c2c6cc]">
                    <td className="border border-[#c2c6cc]  p-2 text-[px]">
                      Nombre
                    </td>
                    <td className="border border-[#c2c6cc]  p-2">Categoría</td>
                    <td className="border border-[#c2c6cc]  p-2">Meta</td>
                    <td className="border border-[#c2c6cc] p-2">
                      Tiempo de caducidad de las cookies
                    </td>
                    <td className="border border-[#c2c6cc] p-2">Proveedor</td>
                  </tr>
                </thead>
                <tbody>
                  {tableData.map((item, index) => (
                    <tr key={index} className="border border-[#c2c6cc]">
                      <td className="border border-[#c2c6cc] p-2">
                        {item.name}
                      </td>
                      <td className="border border-[#c2c6cc] p-2">
                        {item.category}
                      </td>
                      <td className="border border-[#c2c6cc] p-2">
                        {item.goal}
                      </td>
                      <td className="border border-[#c2c6cc] p-2">
                        {item.expiration}
                      </td>
                      <td className="border border-[#c2c6cc] p-2">
                        {item.supplier}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div> */}

          <div>
            <h1 className="text-[25px] font-extrabold pb-1 pt-6">
              3. CÓMO DESHABILITAR EL USO DE COOKIES
            </h1>
            <p className="text-sm md:text-md xl:text-lg">
              Cuando se trate de cookies que no sean obligatorias para la
              navegación en el Sitio Web podrán deshabilitarse en la
              configuración del Sitio Web. Estos ajustes se encuentran en el pie
              de página del Sitio Web. Además, todos los navegadores permiten
              hacer cambios para desactivar la configuración de las cookies.
            </p>
            <p className="text-sm md:text-md xl:text-lg">
              El motivo por el que la mayoría de los navegadores ofrecen la
              posibilidad de administrar las cookies, es para obtener un control
              más preciso sobre la privacidad. Estos ajustes se encuentran
              ubicados en las "opciones" o "preferencias" del menú de su
              navegador.
            </p>
            <p className="text-sm md:text-md xl:text-lg">
              Los links de cada navegador para deshabilitar las cookies son los
              siguientes:
            </p>

            <div>
              {uliListData.map((browser, index) => (
                <div key={index}>
                  <h1 className="text-[22px] pb-1 font-bold py-4">
                    {browser.title} (
                    <Link className="text-[#337ab7] text-sm md:text-md xl:text-lg" href={browser.link}>
                      {browser.link}
                    </Link>
                    )
                  </h1>
                  <ul className="list-disc pl-4 text-sm md:text-md xl:text-lg">
                    {browser.instructions.map((instruction, i) => (
                      <li key={i}>{instruction}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            <p className="text-sm md:text-md xl:text-lg pt-6">
              Si no desea ser rastreado por las cookies, Google ha desarrollado
              un complemento para instalar en su navegador al que puede acceder
              en el siguiente enlace:{" "}
              <a className="text-[#337ab7]" href="#">
                http://goo.gl/up4ND .
              </a>
            </p>
          </div>

          <div>
            <h1 className="text-[1.4rem] font-extrabold py-4">
              4.DESHABILITAR COOKIES EN LOS DISPOSITIVOS MÓVILES
            </h1>
            <p className="text-sm md:text-md xl:text-lg">
              EDATV también usa cookies u otros dispositivos de almacenamiento
              en dispositivos móviles.
            </p>
            <p className="text-sm md:text-md xl:text-lg">
              Todas aquellas cookies que no sean obligatorias para la navegación
              del presente Sitio Web podrán deshabilitarse en la configuración
              del Sitio Web.
            </p>
            <p className="text-sm md:text-md xl:text-lg">
              Estos ajustes se encuentran en el pie de página del Sitio Web.
              También, al igual que en los navegadores de ordenadores, los
              navegadores de los dispositivos móviles permiten variar las
              opciones o ajustes de privacidad para desactivar o eliminar las
              cookies.
            </p>
            <p className="text-sm md:text-md xl:text-lg">
              En caso de que quiera modificar las opciones de privacidad siga
              las instrucciones especificadas por el desarrollador de su
              navegador para dispositivo móvil.
            </p>
            <p className="text-sm md:text-md xl:text-lg">
              Estos son algunos ejemplos de los links para poder modificar las
              opciones de privacidad en su dispositivo móvil:
            </p>
            <h1 className="font-bold text-sm md:text-md xl:text-[20px] py-2">
              1. IOS: ({" "}
              <a className="text-[#337ab7]" href="">
                http://goo.gl/61xevS
              </a>
              )
            </h1>

            <h1 className="text-sm md:text-md xl:text-[20px] font-bold">
              2. Windows Phone: ({" "}
              <a className="text-[#337ab7]" href="">
                http://goo.gl/tKyb0y
              </a>
              )
            </h1>

            <h1 className="font-bold text-sm md:text-md xl:text-[20px] py-2">
              3. Chrome Mobile: ({" "}
              <a className="text-[#337ab7]" href="">
                {" "}
                http://goo.gl/XJp7N
              </a>
              )
            </h1>
            <h1 className="font-bold text-sm md:text-md xl:text-[20px] py-2">
              4. Opera Mobile: ({" "}
              <a className="text-[#337ab7]" href="">
                http://goo.gl/Nzr8s7
              </a>
              )
            </h1>

            <div>
              <h1 className="text-[25px] font-extrabold py-4">
                5. ACEPTACIÓN DE LAS COOKIES
              </h1>
              <p className="text-sm md:text-md xl:text-lg">
                Este Sitio Web no instala cookies en los dispositivos de los
                Usuarios hasta el momento en que hayan aceptado la instalación
                de las mismas.
              </p>
              <p className="text-sm md:text-md xl:text-lg">
                EDATV le informa de que en el caso de no aceptar la instalación
                de cookies o de deshabilitar alguna de estas en la
                configuración, es posible que ciertos servicios no estén
                disponibles sin la utilización de éstas o bien, que no pueda
                acceder a determinados servicios ni aprovechar por completo todo
                lo que el Sitio Web ofrece.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default page;
