import React from "react";
import { INSTALL_SECTION } from 'config/constants'

const InstallSection: React.FC = () => {
  const { title, des, more } = INSTALL_SECTION
  return (
    <div className="bg-[#000] bg-ex bg-no-repeat lg:pt-5 bg-top">
      <div className="container">
        <div className="max-w-[754px] pb-[73px] pt-[152px] md:py-[180px]  text-white mx-auto text-center">
          <p className="font-larken font-medium px-[60px] md:px-0 text-[36px] md:text-[62px] md:leading-[102%] lg:text-[80px] leading-[120%] lg:leading-[102%]">{title}</p>
          <p className="text-[18px] leading-[140%] max-w-[574px] mx-auto py-9 px-[28px] md:px-0 bg-top ">{des}</p>
          <p className="bg-[#007EFB] max-w-[186px] mx-auto p-[10px] rounded-[100px] font-medium text-[18px] leading-[120%] text-center hover:cursor-pointer hover:opacity-[0.95]">{more}</p>
        </div>
      </div>
    </div>
  );
};
export default InstallSection;
