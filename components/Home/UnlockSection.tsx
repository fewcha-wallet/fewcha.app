import { UNLOCK_SECTION } from 'config/constants';
import React from "react";
import cn from "services/cn";

const UnlockSection: React.FC = () => {
  const { title, description, content } = UNLOCK_SECTION
  return (
    <section className="bg-[#000000] pt-[57px] md:py-[120px] pb-12">
      <div className="container">
        <div className="text-white max-w-[350px] md:max-w-[705px] max-h-[246px] mx-auto">
          <h3 className="font-larken text-[36px] font-medium leading-[120%] px-[22px] text-center md:text-[62px] md:leading-[102%]">{title}</h3>
          <p className="mx-auto my-8 max-w-[409px] text-[18px] leading-[140%] text-center">{description}</p>
        </div>
        <div className="flex flex-wrap gap-y-5 lg:gap-0 md:gap-5 bg-test text-white ">
          {
            content.map(item => {
              const { id, label, imgPhone, des, shape } = item
              const isId1Or3 = id === 1 || id === 3
              const isId1Or2 = id === 1 || id === 2
              return (
                <div key={id} className={cn("lg:w-2/4 md:w-[48%] relative h-[339px] overflow-hidden rounded-3xl bg-top1", {
                  "lg:rounded-br-none": id === 1,
                  "lg:rounded-bl-none": id === 2,
                  "lg:rounded-tr-none": id === 3,
                  "lg:rounded-tl-none": id === 4,
                })} >
                  <div className={cn("px-9 pt-9", { "md:text-right": !isId1Or3 })}>
                    <p className="text-[28px] md:text-[32px] font-medium leading-[120%]">{label}</p>
                    <p className={cn("max-w-[310px] text-[16px] md:max-w-[280px] lg:text-[18px] leading-[140%] mt-2 font-normal", { "float-right": !isId1Or3 })}>{des}</p>
                  </div>
                  <img src={imgPhone} alt="Iphone12" className={cn("absolute z-30 hidden lg:block", `${isId1Or3 ? "right" : "left"}-0`, `${isId1Or2 ? "bottom" : "top"}-0`)} />

                  <div className={cn("absolute w-full h-2/4 bottom-0 left-0 blur-[44px] z-20", {
                    "bg-bottom1": id === 1,
                    "bg-bottom2": id === 2,
                    "bg-bottom3": id === 3,
                    "bg-bottom4": id === 4,
                  })}></div>
                  <img src={shape} alt="Shape" className={cn("absolute bottom-0 z-10", { "right-0": !isId1Or3 })} />
                </div>
              )
            })
          }
        </div>
      </div>
    </section>
  );
};
export default UnlockSection;
