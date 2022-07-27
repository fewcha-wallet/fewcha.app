import React from 'react'
import { GET_APP_SECTION } from 'config/constants'

const GetAppSection: React.FC = () => {
  const { title, title2, des, linkExt } = GET_APP_SECTION
  return (
    <section className='w-full get-app-bg text-[#292C33]'>
      <div className="container">
        <div className=" mx-auto text-center pt-[70px] md:pt-[227px] pb-[227px] max-w-[754px]">
          <p className='font-larken text-[36px] leading-[120%] font-medium px-4 md:px-0 lg:text-[80px] lg:leading-[102%]'>{title}</p>
          <p className='leading-[140%] py-9 lg:w-[574px] mx-auto text-center font-medium text-[17px]'>{des}</p>
          <a href={linkExt} target="_blank" rel="noreferrer" className='py-2.5 px-6 bg-[#007EFB] rounded-[100px] w-[186px] mx-auto text-white text-[18px] leading-[120%] font-medium hover:opacity-[0.9] transition-all'>
            {title2}
          </a>
        </div>
      </div>
    </section>
  )
}
export default GetAppSection