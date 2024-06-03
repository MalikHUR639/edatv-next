import React from "react";

const SiteMapFooter = () => {
  return (
    <>
      <div className="w-full">
        <div className="max-w-[1100px] m-auto">
          <div className="flex items-center justify-center font-extrabold text-[30px]">
            <h1>Site Map</h1>
          </div>
       
        <div>
          {" "}
          <hr className="border-1 border-solid border-[#c2c6cc]" />
        </div>
        <div className="m-6">
          <h2 className="font-extrabold text-[20px]">CATEGORIES</h2>
          <ul>
            <li>
              <a className="text-[#337ab7]" href="">Policy</a>
            </li>
            <li>
              <a className="text-[#337ab7]" href="">Present</a>
            </li>
            <li>
              <a className="text-[#337ab7]" href="">Society</a>
            </li>
            <li>
              <a className="text-[#337ab7]" href="">Sports</a>
            </li>
            <li>
              <a className="text-[#337ab7]" href="">Events</a>
            </li>
            <li>
              <a className="text-[#337ab7]" href="">Heart</a>
            </li>
            <li>
              <a className="text-[#337ab7]" href="">Engine</a>
            </li>
            <li>
              <a className="text-[#337ab7]" href="">Job vacancies</a>
            </li>
          </ul>
        </div>

        <div className="m-6">
          <h2 className="font-extrabold text-[20px]">TAGS</h2>
          <ul>
            <li><a className="text-[#337ab7]" href="">Alicante</a></li>
            <li><a className="text-[#337ab7]" href="">Madrid</a></li>
            <li><a className="text-[#337ab7]" href="">Castellon</a></li>
            <li><a className="text-[#337ab7]" href="">Valencian Community</a></li>
            <li><a className="text-[#337ab7]" href="">Spain</a></li>
            <li><a className="text-[#337ab7]" href="">International</a></li>
            <li><a className="text-[#337ab7]" href="">Culture</a></li>
            <li><a className="text-[#337ab7]" href="">Time</a></li>
          </ul>
        </div>
        </div>
      </div>
    </>
  );
};

export default SiteMapFooter;
