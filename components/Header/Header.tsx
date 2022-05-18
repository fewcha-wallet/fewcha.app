import React, { useEffect, useState } from "react";
import Link from "next/link";
import { MENUS } from "config/constants";
import MobileMenu from "./MobileMenu";
import { chromeStoreExtURL } from "config/config";
import cn from "services/cn";
import Scroll from "react-scroll";
import scroller = Scroll.scroller;

const Header: React.FC = () => {
  const [scroll, setScroll] = useState(false);
  const [showMobile, setShowMobile] = useState(false);

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
    if (showMobile) document.body.style.overflow = "";
    else document.body.style.overflow = "hidden";
  };

  return (
    <header
      className={cn(
        "white fixed top-0 left-0 right-0 w-full z-[999] transition-all ease-in-out duration-300",
        {
          "is-scroll": scroll,
          "py-5 lg:py-7 xl:py-10": !scroll,
        }
      )}
    >
      <div className="container xs:px-13 flex items-center">
        <Link href="/">
          <a className="block">
            <img
              src={cn({
                "/svgs/logo-light.svg": !scroll,
                "/svgs/alt-logo.svg": scroll,
              })}
              alt="logo"
              className="max-w-[105px] md:max-w-[155px]"
            />
          </a>
        </Link>

        <div className="hidden lg:flex items-center justify-center flex-1 gap-x-10">
          {MENUS.map((menu, idx) => {
            if (menu.external) {
              return (
                <a
                  href={menu.external}
                  key={idx}
                  target="_blank"
                  rel="noreferrer"
                  className="header-link py-2 block text-white font-medium font-caption transition-all ease-in duration-150 hover:text-primary-200"
                >
                  {menu.name}
                </a>
              );
            }

            if (menu.href) {
              return (
                <Link href={menu.href} key={idx}>
                  <a
                    onClick={(e) => {
                      if (menu.href === "/#roadmap") {
                        e.preventDefault();
                        scroller.scrollTo("roadmap", {
                          duration: 500,
                          delay: 50,
                          smooth: true,
                          offset: -90,
                        });
                      }
                    }}
                    className="header-link py-2 block text-white font-medium font-caption transition-all ease-in duration-150 hover:text-primary-200"
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
            href={chromeStoreExtURL}
            target="_blank"
            rel="noreferrer"
            className="hidden sm:inline-block px-6 py-[14px] bg-[#007EFB] text-white font-medium rounded-[34px]"
          >
            Download
          </a>

          <div
            className={`block lg:hidden hambuger ${
              showMobile ? "is-active" : ""
            }`}
            onClick={toggleMobile}
          >
            <span className="line"></span>
          </div>
        </div>
      </div>
      <MobileMenu isShow={showMobile} />
    </header>
  );
};

export default Header;
