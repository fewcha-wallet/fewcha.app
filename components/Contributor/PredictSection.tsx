import React from "react";
import { PREDICT_SECTION } from 'config/constants'

const PredictSection: React.FC = () => {
  const { title, des, title2 } = PREDICT_SECTION
  return (
    <section className="pt-[110px] md:pt-[140px] w-full contributor-section-bg h-[80vh] md:h-[44vh] overflow-hidden bg-[#F9FCFF] lg:h-[100vh]">
      <div className="container">
        <div className="lg:w-[418px] text-[#292C33]">
          <h1 className="pt-[80px] sm:pt-[58px] font-larken text-[40px] ] leading-[120%] font-medium text-center px-6 md:px-0 md:text-[48px md:leading-[119%] md:w-[418px] md:text-left">{title}</h1>
          <p className="hidden lg:block text-[20px] leading-[153%] mt-6">{des}</p>
        </div>
      </div>
    </section>
  )
}
export default PredictSection