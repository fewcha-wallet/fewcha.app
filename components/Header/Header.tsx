import { discordURL } from 'config/config';
import { MENUS } from "config/constants";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import Scroll from "react-scroll";
import cn from "services/cn";
import MobileMenu from "./MobileMenu";
import scroller = Scroll.scroller;
import { useRouter } from 'next/router';


const Header: React.FC = () => {
  const [scroll, setScroll] = useState(false);
  const [showMobile, setShowMobile] = useState(false);

  const router = useRouter()

  useEffect(() => {
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleScroll = () => {
    setScroll(window.pageYOffset > 20);
  };

  const toggleMobile = () => {
    setShowMobile(!showMobile);
    // if (showMobile) document.body.style.overflow = "";
    // else document.body.style.overflow = "hidden";
  };

  const handleClick = () => {
    setShowMobile(!showMobile)
  }

  const handleClose = () => {
    if (showMobile) {
      setShowMobile(false)
    }
  }

  return (
    <header

      className={cn(
        "white fixed top-0 left-0 right-0 w-full z-[9999] transition-all ease-in-out duration-300",
        {
          "is-scroll": scroll,
          "py-5 lg:py-5": !scroll,
        }
      )}
    >
      <div onClick={handleClose} className="container flex items-center">
        <Link href="/" className="active">
          <a className="block">
            <img
              src="/svgs/logo.svg"
              alt="logo"
              className="w-[110px] md:max-w-[155px]"
            />
          </a>
        </Link>

        <div onClick={handleClick} className="hidden lg:flex items-center justify-center flex-1 gap-x-8">
          {MENUS.map((menu, i) => {
            if (menu.external) {
              return (
                <a
                  href={menu.external}
                  key={i}
                  target="_blank"
                  rel="noreferrer"
                  className={cn("header-link py-2 block text-[#292C33] font-medium font-caption transition-all ease-in duration-150 hover:text-primary-200 mr-4")}
                >
                  {menu.name}
                </a>
              );
            }

            if (menu.href) {
              return (
                <Link href={menu.href} key={i} as={menu.href}>
                  <a
                    onClick={handleClick}
                    className={cn("header-link py-2 block text-[#292C33] font-medium font-caption transition-all ease-in duration-150 hover:text-primary-200 mr-4", {
                      'text-primary-200': router.pathname === menu.href
                    })}
                  >
                    {menu.name}
                  </a>
                </Link>
              );
            }

            return null;
          })}
        </div>

        <div className="relative ml-auto flex items-center gap-6">
          <a
            href={discordURL}
            target="_blank"
            rel="noreferrer"
            className="hidden lg:block px-4 py-[10.40px] bg-[#4658E2] text-white font-medium rounded-[100px] w-[188px] hover:opacity-[0.9] transition-all"
          >
            <div className="flex gap-x-1.5 items-center pl-[3px]">
              <img src="/svgs/discord.svg" className='w-[20px] h-[15px]' alt="discord" />
              <span>Feeling Chatty?</span>
            </div>
          </a>

          <div
            className={`block lg:hidden hambuger ${showMobile ? "is-active" : ""
              }`}
            onClick={toggleMobile}
          >
            <span className="line"></span>
          </div>
        </div>
      </div>
      <MobileMenu isShow={showMobile} />
    </header >
  );
};

export default Header;
