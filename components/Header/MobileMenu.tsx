import React from "react";
import { MENU_MOBILE } from "config/constants";
import Link from "next/link";
import AtButton from "components/AtButton";
import { useRouter } from "next/router";
import cn from 'services/cn'

const MobileMenu: React.FC<{ isShow: boolean }> = ({ isShow }) => {
  const { routerList, links } = MENU_MOBILE
  const router = useRouter()

  // console.log('router: ', router)
  return (
    <div
      className={`lg:hidden bg-[url('/images/road-map-background.png')] bg-cover bg-right-bottom h-[100vh] z-[-1] mt-0 pt-[100px] bg-no-repeat bg-white list ${isShow ? "is-active" : "hidden"
        }`}
    >
      <div className="hambugerBg"></div>
      {routerList.map((menu, i) => {
        if (menu.external) {
          return (
            <a
              href={menu.external}
              key={i}
              target="_blank"
              rel="noreferrer"
              className="block text-normal-400 text-[36px] leading-[120%] font-larken transition-all ease-in duration-150 hover:text-[#007EFB] py-4 text-left"
            >
              {menu.name}
            </a>
          );
        }

        if (menu.href) {
          return (
            <Link href={menu.href} key={i} as={menu.href === '/' ? '/' : `${menu.href}/`}>
              <a className={cn("block text-normal-400 text-[36px] leading-[120%] font-larken transition-all ease-in duration-150 hover:text-[#007EFB] py-4", {
                "!text-primary-200 font-bold": router.pathname === menu.href
              })}>
                {menu.name}
              </a>
            </Link>
          );
        }

      })}
      <a href="https://fewcha.app" target="_blank" rel="noreferrer">
        <AtButton className="hidden shadow-type-1 px-5 py-[14px] bg-[#14161A] text-white font-medium rounded-[34px] mt-8 text-[18px] leading-[120%] ">
          Connect wallet
        </AtButton>
      </a>
      <div className="flex flex-row py-20 mb-8">
        {
          links.map((l, i) => (
            <a
              href={l.link}
              key={i}
              target="_blank"
              rel="noreferrer"
              className="block text-normal-400 font-bold text-[36px] leading-[120%] font-larken transition-all ease-in duration-150 hover:text-[#007EFB] py-4 text-left"
            >
              <img src={l.srcImg} alt={l.label} className="mr-9 h-[30px]" />
            </a>
          ))
        }
      </div>
    </div>
  );
};

export default MobileMenu;
