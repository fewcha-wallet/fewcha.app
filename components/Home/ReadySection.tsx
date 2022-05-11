import React from "react";
import { BROWSERS } from "assets/constants";
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
            <p className="text-base flex items-center">
              Be the first user of Fewcha{" "}
              <div className="font-bold text-md ml-4">
                Download now <ArrowRight size={24} />
              </div>
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-16 flex-1">
            {BROWSERS.map((browser) => (
              <div key={browser.label} className="cursor-pointer">
                <img src={browser.url} alt={browser.label} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReadySection;
