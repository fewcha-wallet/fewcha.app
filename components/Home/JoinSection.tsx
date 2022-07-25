import React from "react";
import { JOIN_SECTION } from "config/constants";

const JoinSection: React.FC = () => {
  const { title, des, links } = JOIN_SECTION

  return (
    <div className="bg-[#88D4FF]">
      <div className="container">
        <div className="max-w-[588px] mx-auto py-[82.5px] md:py-[147px] lg:py-[137.5px]">
          <div className="!text-[#000000] text-center pb-9 lg:!text-[#292C33]">
            <h3 className="text-[36px] font-medium leading-[102%] font-larken md:text-[62px] lg:text-[80px]">{title}</h3>
            <p className="text-[16px] font-normal leading-[140%] px-[30px] md:px-0 md:text-[18px] md:leading-[180%] pt-4">{des}</p>
          </div>
          <div className="flex flex-wrap flex-col gap-[10px] items-center md:flex-row">
            {links.map((link, i) => (
              <a
                key={i}
                className="cursor-pointer block bg-[#000000] lg:bg-[#292C33] py-2 px-[18px] rounded-[121px] w-[137px] hover:opacity-[0.9]"
                href={link.href}
                target="_blank"
                rel="noreferrer"
              >
                <div className="flex gap-x-2 text-[18px] leading-[140%]">
                  <img src={link.src} alt={link.label} />
                  <span className="text-white">{link.label}</span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default JoinSection;
