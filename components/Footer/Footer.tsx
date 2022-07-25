import React from "react";
import { FOOTER_MENU } from "config/constants";
import Link from "next/link";

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#000000] lg:bg-normal-500 py-[32px] text-white">
      <div className="container">
        <div className="max-w-[475px] mx-auto flex flex-col justify-between items-center gap-y-9 md:flex-row">
          <Link href='/'>
            <a className="w-[113px] h-6 md:w-[150px] md:h-8">
              <img src="/svgs/logo-black.svg" alt="Logo" />
            </a>
          </Link>
          <div>
            {FOOTER_MENU.map((item, index) => {
              if (item.external) {
                return (
                  <ExternalFooterLink key={index} item={item} />
                )
              }
              if (item.href) {
                return (
                  <FooterLink key={index} item={item} />
                )
              }
            })}
          </div>
        </div>
      </div>
    </footer>
  );
};

const FooterLink: React.FC<{
  key: number;
  item: { href: string; label: string };
}> = ({ item }) => {
  5
  return (
    <Link href={item.href}>
      <a className="text-[16px] font-medium leading-[120%] pr-6">
        {item.label}
      </a>
    </Link>
  );
};

const ExternalFooterLink: React.FC<{
  key: number;
  item: { external: string; label: string };
}> = ({ item }) => {
  return (
    <a
      href={item.external}
      target="_blank"
      rel="noreferrer"
      className="text-[16px] font-medium leading-[120%] pr-6"
    >
      {item.label}
    </a>
  );
};

export default Footer;
