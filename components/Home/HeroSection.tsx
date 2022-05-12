import React from "react";
import AtButton from "components/AtButton";

const HeroSection: React.FC = () => {
  return (
    <section className="pt-[calc(156px+25px)] bg-[url('/images/bg.png')] bg-no-repeat bg-cover bg-center">
      <div className="container overflow-hidden">
        <div className="flex flex-col justify-center items-center text-center gap-6">
          <h1 className="font-bold text-normal-400 xs:max-w-[688px] md:max-w-[746px] text-[32px] leading-[43px] xs:text-[40px] md:text-[52px] xs:leading-[60px] lg:text-[57px] lg:leading-[80px]">
            Your wallet for the next safest blockchain
          </h1>
          <p className="text-normal-400 font-medium text-base max-w-[343px] xs:max-w-[615px]">
            Fewcha was designed for any financial transactions you want to make
            with your digital assets in Aptos Blockchain
          </p>
          <a href="https://fewcha.app" target="_blank" rel="noreferrer">
            <AtButton className="shadow-type-2 px-[25px] py-[16px] font-semibold rounded-[34px] border-2 border-primary-100">
              Try Fewcha now
            </AtButton>
          </a>
        </div>
        <figure className="w-full block mt-[70px] h-auto md:h-[460px] lg:h-[415px]">
          <img src="/images/hero.png" alt="hero" />
        </figure>
      </div>
    </section>
  );
};

export default HeroSection;
