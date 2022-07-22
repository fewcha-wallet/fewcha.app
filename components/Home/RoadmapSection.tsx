import React from "react";
import { ROADMAP_SECTION } from 'config/constants'
import cn from 'services/cn'

const RoadmapSection: React.FC = () => {
  const { title, des, content } = ROADMAP_SECTION
  return (
    <section className="bg-[#000000] pt-[54px] pb-12 md:pb-[332px] lg:pb-[400px]">
      <div className="container">
        <div className="max-w-[753px] mx-auto">
          <p className="font-larken text-[36px] md:text-[62px] leading-[120%] px-3  md:leading-[102%]  font-medium text-white text-center mb-4">{title}</p>
          <p className="text-white text-center max-w-[574px] text-[16px] md:text-[18px] mb-12  leading-[140%] mx-auto">{des}</p>
        </div>

        <div className=" text-white md:gap-5 flex flex-wrap lg:w-full md:justify-center justify-center md:gap-y-[136px]">

          {content.map((item, i) => {
            return (
              <div key={i} className={cn("lg:w-[21.9%] relative md:mb-0",{
                "mb-[52px]": i === 0,
                "mb-[148px]": i === 1,
                "mb-[328px]": i === 2,
                "mb-[300px]": i === 3, 
              })}>
                <div className="text-center w-[250px] h-[250px] lg:w-[229px] lg:h-[230px] rounded-full bg-roadmap -rotate-90">
                  <p className="rotate-90 absolute top-[37%] left-[66%] text-[36px] font-medium leading-[130%]">Q{i + 1}</p>
                </div>
                <div className="bg-roadmap4 absolute top-[125px] w-full p-9">
                  {item.map((v, j) => (
                    <div key={j}>
                      <p className="text-[16px] leading-[137%] pb-2 font-black">{v}</p>
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
