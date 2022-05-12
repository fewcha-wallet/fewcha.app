import React from "react";
import { BROWSERS } from "config/constants";

const SpendAndCheck: React.FC = () => {
  return (
    <section className="bg-[#f3f4f5] pt-[100px] pb-12">
      <div className="container">
        <div className="flex flex-col justify-center items-center text-center gap-6">
          <h2 className="font-bold text-[28px] leading-9 sm:font-super text-normal-400 max-w-[760px]">
            Spend and trade digital assets like you were born to do.
          </h2>
          <p className="font-medium font-caption text-normal-400 max-w-[666px]">
            Fewcha is a new kind of wallet for the Aptos blockchain. It's not
            just about security - we've built it to be fully functional,
            feature-rich and ‘fewcha’ ready
          </p>
        </div>
        <div className="grid grid-cols-1 2md:grid-cols-2 gap-y-6 gap-x-5 mt-[60px] lg:mt-20">
          <div
            className="2md:col-span-2 bg-primary-200 rounded-[24px] relative py-12 2md:y-[112px]
					px-[32px] md:px-12 flex flex-col 2md:flex-row items-center gap-x-[60px] gap-y-6 overflow-hidden"
          >
            <div className="flex flex-col gap-6 text-white relative z-[1] flex-1 text-center 2md:text-left">
              <h4 className="font-bold text-[28px] leading-9 sm:text-[40px] md:text-5xl lg:text-[52px] md:leading-[58px] tracking-[0.27px]">
                A fully secured wallet for Aptos blockchain
              </h4>
              <p>
                Fewcha offers high security and full functions of buying,
                sending, receiving, swapping and managing NFTs. It’s a new way
                to manage your digital assets.
              </p>
            </div>
            <figure className="block relative z-[1]">
              <img
                src="/images/graphic-1.png"
                alt="graphic-1"
                className="w-[150px] sm:w-auto 2md:h-[268px] 2md:w-[268px] object-cover"
              />
            </figure>
            <div className="hidden 2md:block bg-[url('/images/logo-overlay.png')] absolute top-0 -right-[28%] lg:-right-[13%] bottom-0 w-full bg-no-repeat bg-[center_right] mix-blend-soft-light opacity-50 pointer-events-none"></div>
          </div>

          <div className="bg-normal-500 flex flex-col items-center rounded-3xl p-12 text-white">
            <h6 className="font-bold text-[28px] leading-9 sm:text-4xl sm:leading-[48px] tracking-[0.27px] text-center mb-[54px]">
              Your privacy matters
            </h6>
            <img
              src="/images/graphic-2.png"
              alt="graphic-2"
              className="w-[150px] sm:w-auto object-cover"
            />
            <p className="text-center mt-[50px] text-base tracking-[0.27px]">
              Only you can access your wallet. We don’t collect any personal
              data.
            </p>
          </div>

          <div className="bg-white flex flex-col items-center rounded-3xl p-12 text-normal-500">
            <h6 className="font-bold text-[28px] leading-9 sm:text-4xl sm:leading-[48px] tracking-[0.27px] text-center mb-[54px]">
              Independently audited
            </h6>
            <img
              src="/images/graphic-3.png"
              alt="graphic-3"
              className="w-[150px] sm:w-auto object-cover"
            />
            <p className="text-center mt-[54px] text-base tracking-[0.27px]">
              Fewcha's safety and security will be thoroughly audited by
              Verichains
            </p>
          </div>

          <div className="2md:col-span-2 flex flex-col text-center 2md:text-left 2md:flex-row items-center gap-x-[325px] p-12 bg-white rounded-3xl">
            <div className="grid gap-6 text-normal-500 tracking-[0.27px] flex-1">
              <h6 className="font-bold text-3xl sm:text-4xl sm:leading-[47px]">
                Fewcha is available on multiple platforms
              </h6>
              <p className="text-base">
                Turn your favorite browsers into a Web3 enabled crypto wallet.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-x-[38px] gap-y-7 mt-6 2md:mt-0">
              {BROWSERS.map((browser) => (
                <a
                  href={browser.href}
                  target="_blank"
                  rel="noreferrer"
                  key={browser.label}
                  className="cursor-pointer p-4 bg-white rounded-[14px] bg-opacity-50 shadow-type-3 flex justify-center items-center"
                >
                  <img src={browser.url} alt={browser.label} />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SpendAndCheck;
