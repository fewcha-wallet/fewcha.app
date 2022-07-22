import { chromeStoreExtURL } from "config/config";
import { FUTURE_SECTION } from 'config/constants';
import React from "react";

const FutureSection: React.FC = () => {
  const { description, getExt, imgExt, imgBgMobile } = FUTURE_SECTION

  return (
    <section className="pt-[110px] md:pt-[140px] bg-cover bg-center w-full hero-section-bg h-auto md:h-[63vh]  lg:h-screen overflow-hidden bg-[#F9FCFF]">
      <div className="container mx-auto">
        <div className=" max-w-[542px]">
          <h1 className="text-[36px] font-larken leading-[120%] font-medium pr-5 md:text-[57px] md:leading-[119%]">Your <span className="bg-clip-text  bg-gradient-to-r from-[#33C1EB] to-[#0267FF]  text-transparent">future</span> <span className="bg-clip-text  bg-gradient-to-r from-[#33C1EB] to-[#0267FF]  text-transparent">wallet
          </span> for Aptos blockchain</h1>
          <p className="text-[#000000] w-[327px] font-normal text-[20px] leading-[153%] py-8 pr-[26px] md:pr-0 lg:w-auto lg:pr-[170px]">
            {description}
          </p>
          <a href={chromeStoreExtURL} target="_blank" rel="noreferrer" className="flex justify-between items-center bg-[#14161A] max-w-[186px] max-h-[48px] text-white px-6 py-[13px] text-center text-[18px] leading-[120%] rounded-[100px] hover:cursor-pointer hover:opacity-[0.92] mb-[60px]">
            <img src={imgExt} alt="Download" width={24} />
            <span>
              {getExt}
            </span>
          </a>
        </div>
      </div>
      <img className="block md:hidden w-full" src={imgBgMobile} alt="image" />
    </section>
  );
};

export default FutureSection;