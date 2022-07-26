import React from "react";
import { MENU_MOBILE } from "config/constants";
import Link from "next/link";
import AtButton from "components/AtButton";

const MobileMenu: React.FC<{ isShow: boolean }> = ({ isShow }) => {
  return (
    <div
      className={`lg:hidden bg-[url('/images/road-map-background.png')] bg-cover bg-no-repeat bg-white list mt-[80px] ${isShow ? "is-active" : ""
        }`}
    >
      <div className="hambugerBg"></div>
      {MENU_MOBILE.map((menu, idx) => {
        if (menu.external) {
          return (
            <a
              href={menu.external}
              key={idx}
              target="_blank"
              rel="noreferrer"
              className="block text-normal-400 font-bold text-[36px] leading-[120%] font-larken transition-all ease-in duration-150 hover:text-[#007EFB] py-4 text-left"
            >
              {menu.name}
            </a>
          );
        }

        if (menu.href) {
          return (
            <Link href={menu.href} key={idx}>
              <a className="block text-normal-400 font-bold text-[36px] leading-[120%] font-larken transition-all ease-in duration-150 hover:text-[#007EFB] py-4 ">
                {menu.name}
              </a>
            </Link>
          );
        }

        return null;
      })}
      <a href="https://fewcha.app" target="_blank" rel="noreferrer">
        <AtButton className="hidden shadow-type-1 px-5 py-[14px] bg-[#14161A] text-white font-medium rounded-[34px] mt-8 text-[18px] leading-[120%] ">
          Connect wallet
        </AtButton>
      </a>
      <div className="flex flex-row py-20 mt-14">
        <img className="mr-9 h-[30px]" src="/svgs/medium-mobile.svg" alt="Medium" />
        <img className="mr-9 h-[30px]" src="/svgs/discord-mobile.svg" alt="Discord" />
        <img className="mr-9 h-[30px]" src="/svgs/twitter-mobile.svg" alt="Twitter" />
        <img className="mr-9 h-[30px]" src="/svgs/telegram-mobile.svg" alt="Telegram" />
      </div>
    </div>
  );
};

export default MobileMenu;
