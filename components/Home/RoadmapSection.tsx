import React from "react";
import { ROADMAP_SECTION } from 'config/constants'
import cn from 'services/cn'

const RoadmapSection: React.FC = () => {
  const { title, des, content, checkIcon, descIcon } = ROADMAP_SECTION
  return (
    <section className="bg-[#000000] pt-[54px] pb-12 md:pb-[400px]">
      <div className="container">
        <div className="max-w-[753px] mx-auto">
          <p className="font-larken text-[36px] md:text-[62px] leading-[120%] px-3  md:leading-[102%]  font-medium text-white text-center mb-4">{title}</p>
          <p className="text-white text-center max-w-[574px] text-[16px] md:text-[18px] mb-12  leading-[140%] mx-auto">{des}</p>
        </div>

        <div className=" text-white md:gap-x-8 lg:gap-x-[15.2px] flex flex-wrap lg:w-full justify-center lg:justify-between md:gap-y-[204px]">

          {content.map((item, i) => {
            return (
              <div key={i} className={cn("w-[250px] h-auto relative md:mb-0 ", {
                "mb-[72px]": i === 0,
                "mb-[212px]": i === 1,
                "mb-[344px]": i === 2,
                "mb-[364px]": i === 3,
              })}>
                <div className="text-center w-[250px] h-[250px]  rounded-full -rotate-90 bg-roadmap">
                  <p className="rotate-90 absolute top-[37%] left-[62%] text-[36px] font-medium leading-[130%]">Q{i + 1}</p>
                </div>
                <div className="bg-roadmap4 absolute top-[125px] w-full p-9">
                  {item.map((v, j) => (
                    <div key={j} className="flex items-start gap-x-1 pb-2 relative">
                      <img src={i <= 1 ? checkIcon : descIcon} alt="Icon" className={cn("", {
                        "absolute -left-2.5 top-2": i > 1
                      })} />
                      <p className="text-[16px] leading-[137%]">{v}</p>
                    </div>
                  ))}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  );
};
export default RoadmapSection;
