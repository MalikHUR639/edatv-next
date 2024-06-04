import React from "react";
import Link from 'next/link'
import Image from "next/image";

const TopicCards = () => {
  return (
    <>
      <div className="container w-full py-4 px-4 xl:px-0">
        <div className="inner-container w-auto flex flex-wrap gap-7">
          <div className="card-container w-60 bg-white mb-5">
            <div>
              <Link href="#">
                <img
                  className="object-cover h-25 w-full"
                  src="https://edatv.news/filesedc/uploads/image/post/la-ultima-critica-contra-los-trenes-de-oscar-puente_1200_800.webp"
                  alt="edatv.news img"
                />
              </Link>
              <div className="p-0.5">
                <h3 className="text-[#cf1133] font-medium uppercase text-[10px] mb-0.5">
                  POLÍTICA
                </h3>
                <h2 className="text-[13px] font-[500] leading-tight mb-0.5">
                  <Link href="#">
                    ¿Quién es Miguel Frontera, el que le dio jarabe democrático a Pablo Iglesias?
                  </Link>
                </h2>
                <Link href="#" className="text-[10px] text-[#8c8c8c]">
                  ADAIS CÁSARES <span>💬</span>
                </Link>
              </div>
            </div>
          </div>
          <div className="border-l-2 text-[#f3f3f3] hidden md:block"></div>
          <div className="card-container w-60 bg-white mb-5">
            <div>
              <Link href="#">
                <img
                  className="object-cover h-25 w-full"
                  src="https://edatv.news/filesedc/uploads/image/post/la-ultima-critica-contra-los-trenes-de-oscar-puente_1200_800.webp"
                  alt="edatv.news img"
                />
              </Link>
              <div className="p-0.5">
                <h3 className="text-[#cf1133] font-medium uppercase text-[10px] mb-0.5">
                  POLÍTICA
                </h3>
                <h2 className="text-[13px] font-[500] leading-tight mb-0.5">
                  <Link href="#">
                    ¿Quién es Miguel Frontera, el que le dio jarabe democrático a Pablo Iglesias?
                  </Link>
                </h2>
                <Link href="" className="text-[10px] text-[#8c8c8c] mb-5">
                  ADAIS CÁSARES <span>💬</span>
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="inner-container w-auto flex flex-wrap mx-auto gap-7">
          <div className="w-60 bg-white mb-5">
            <Link href="#">
              <Image
                className="object-cover h-25 w-full"
                src="https://edatv.news/filesedc/uploads/image/post/la-ultima-critica-contra-los-trenes-de-oscar-puente_1200_800.webp"
                alt="edatv.news img"
                width={25}
                height={25}
              />
            </Link>
            <div className="p-0.5">
              <h3 className="text-[#cf1133] font-medium uppercase text-[10px] mb-0.5">
                POLÍTICA
              </h3>
              <h2 className="text-[13px] font-[500] leading-tight mb-0.5">
                <Link href="#">
                  ¿Quién es Miguel Frontera, el que le dio jarabe democrático a
                  Pablo Iglesias?
                </Link>
              </h2>
              <Link href="" className="text-[10px] text-[#8c8c8c]">
                ADAIS CÁSARES <span>💬</span>
              </Link>
            </div>
          </div>
          <div className="border-l-2 text-[#f3f3f3] hidden md:block"></div>

          <div className="w-60 bg-white mb-5">
            <Link href="#">
              <Image
                className="object-cover h-25 w-full"
                src="https://edatv.news/filesedc/uploads/image/post/la-ultima-critica-contra-los-trenes-de-oscar-puente_1200_800.webp"
                alt="edatv.news img"
                width={25}
                height={25}
              />
            </Link>
            <div className="p-0.5">
              <h3 className="text-[#cf1133] font-medium uppercase text-[10px] mb-0.5">
                POLÍTICA
              </h3>
              <h2 className="text-[13px] font-[500] leading-tight mb-0.5">
                <Link href="#">
                  ¿Quién es Miguel Frontera, el que le dio jarabe democrático a
                  Pablo Iglesias?
                </Link>
              </h2>
              <Link href="" className="text-[10px] text-[#8c8c8c]">
                ADAIS CÁSARES <span>💬</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TopicCards;
