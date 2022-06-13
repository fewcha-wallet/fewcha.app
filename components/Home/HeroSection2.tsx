import React from "react";
import {
  chromeStoreExtURL,
  discordURL,
  tasks0_1URL,
  tasks0_2URL,
} from "config/config";

const HeroSection: React.FC = () => {
  return (
    <section className="pt-[119px] bg-[#000000] bg-no-repeat bg-cover bg-center h-screen overflow-hidden">
      <div className="overflow-hidden relative z-10">
        <div className="grid 2xl:grid-cols-12 xl:grid-cols-10 2xl:max-w-[1440px] xl:max-w-[1280px] lg:max-w-[768px] mx-auto">
          {/* left */}
          <div className="2xl:col-span-5 xl:col-span-5 flex flex-col pt-[0px] xl:pt-[80px] 2xl:pl-[120px] xl:pl-[120px] text-center xl:text-left">
            {/* title */}
            <h1 className="font-bold text-white xs:max-w-[688px] md:max-w-[746px] text-[33px] xs:text-[40px] md:text-[48px] leading-[48px] xs:leading-[56px] lg:leading-[64px] mx-auto xl:ml-0">
              <div>Your new favorite</div>
              <div className="gradient">Aptos wallet</div>
            </h1>
            {/* desc */}
            <div className="mt-8 xl:mt-8 text-white font-medium text-base max-w-[296px] lg:max-w-[422px] mx-auto xl:ml-0">
              From easy crypto swap & management, to store and collect NFTs.
              Open your wallet in a flash.
            </div>
            <div className="mt-9 xl:mt-8 gap-3 flex flex-col">
              <div>
                <a
                  href={chromeStoreExtURL}
                  target="_blank"
                  rel="noreferrer"
                  className="button inline-block shadow-type-2 px-[24px] py-[15px] font-semibold rounded-[34px]"
                >
                  <div className="flex items-center gap-3">
                    Download the prototype extension{" "}
                    <img src="/svgs/chrome.svg" alt="Download" width={24} />
                  </div>
                </a>
              </div>
              <div className="hidden mt-2 lg:block text-xs text-white italic font-light">
                <div>
                  <span className="font-bold">*Note</span>: we just released
                  prototype version 0.1.0, aim to implement all the features.
                  The user interface will be different from the official
                  version. The image on the right this will be the official user
                  interface.
                </div>
                <div className="mt-2">
                  Check our features and tasks:{" "}
                  <a
                    href={tasks0_1URL}
                    className="underline font-bold"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Prototype 0.1
                  </a>
                  <a
                    href={tasks0_2URL}
                    className="underline font-bold ml-2"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Prototype 0.2
                  </a>
                </div>
              </div>
            </div>
            <div className="mt-9 xl:mt-8 gap-3 flex flex-col">
              <div>
                <a
                  target="_blank"
                  rel="noreferrer"
                  href={discordURL}
                  className="bg-purple-100 text-sm inline-block shadow-type-2 px-[24px] py-[15px] font-semibold rounded-[34px]"
                >
                  <div className="flex items-center gap-3">
                    Click to join the discord channel{" "}
                    <img src="/svgs/discord.svg" alt="Discord" />
                  </div>
                </a>
              </div>
              <div className="hidden mt-2 lg:block text-xs text-white italic font-light">
                <div>
                  <span className="font-bold">*Note</span>: By joining the
                  Fewcha - Aptos Wallet Discord Community, you could able to
                  have a regular update on what is happening in this Wallet - a
                  new wallet for the Aptos Blockchain
                </div>
              </div>
            </div>
          </div>
          <div className="mt-10 xs:mt-4 2xl:col-span-7 xl:col-span-5">
            <img
              src="/images/wallet-demo.png"
              alt="Wallet Demo"
              className="lg:w-[550px] md:w-[640px] xl:w-full mx-auto"
            />
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 w-full h-full hero-section-bg z-0" />
      <div className="absolute bottom-0 left-0 w-full h-full z-[1]">
        <div className="absolute ball-1 bg-[url('/images/ball1.png')] bg-cover bg-no-repeat xl:w-[26px] xl:h-[26px] lg:w-[26px] lg:h-[26px] md:w-[26px] md:h-[26px] xl:top-[194px] xl:left-[118px] lg:top-[443px] lg:left-[52px] md:top-[445px] md:left-[27px]" />
        <div className="absolute ball-2 bg-[url('/images/ball2.png')] bg-cover bg-no-repeat xl:w-[37px] xl:h-[37px] lg:w-[32px] lg:h-[32px] md:w-[32px] md:h-[32px] xl:top-[309px] xl:right-[66px] lg:top-[411px] lg:right-[107px] md:top-[475px] md:right-[68px]" />
        <div className="absolute ball-3 bg-[url('/images/ball3.png')] bg-cover bg-no-repeat xl:w-[59px] xl:h-[59px] lg:w-[59px] lg:h-[59px] md:w-[54px] md:h-[54px] xl:top-[653px] xl:left-[-20px] lg:top-[591px] lg:left-[162px] md:top-[636px] md:left-[75px]" />
        <div className="absolute ball-4 bg-[url('/images/ball4.png')] bg-cover bg-no-repeat xl:w-[91px] xl:h-[91px] lg:w-[32px] lg:h-[32px] md:w-[43px] md:h-[43px] xl:top-[562px] xl:right-[103px] lg:top-[662px] lg:right-[136px] md:top-[659px] md:right-[25px]" />
      </div>
    </section>
  );
};

export default HeroSection;
