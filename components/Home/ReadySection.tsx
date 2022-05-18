import React from "react";
import { BROWSERS } from "config/constants";
import { ArrowRight } from "@styled-icons/bootstrap";

const ReadySection: React.FC = () => {
  return (
    <div className="bg-[#f3f4f5] py-[100px]">
      <div className="container">
        <div className="bg-white flex flex-col text-center lg:text-left lg:flex-row items-center p-12 rounded-3xl gap-y-[60px] lg:gap-y-0">
          <div className="flex flex-col gap-6 flex-1 text-black">
            <h6 className="font-bold text-3xl md:text-4xl md:leading-[48px] tracking-[0.27px]">
              Ready to get started?
            </h6>
            <div className="text-base flex items-center">
              Be the first user of Fewcha Aptos Wallet{" "}
              {/* <div className="font-bold text-md ml-4">
                Download now <ArrowRight size={24} />
              </div> */}
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-16 flex-1">
            {BROWSERS.map((browser) => (
              <a
                key={browser.label}
                className="cursor-pointer"
                href={browser.href}
                target="_blank"
                rel="noreferrer"
              >
                <img src={browser.url} alt={browser.label} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReadySection;
