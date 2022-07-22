import React from 'react'
import { GET_APP_SECTION } from 'config/constants'

const GetAppSection: React.FC = () => {
  const { title, title2, des } = GET_APP_SECTION
  return (
    <section className='w-full h-[459px] get-app-bg text-[#292C33]'>
      <div className="container">
        <div className="md:w-[574px] mx-auto text-center">
          <p className='font-larken text-[36px] leading-[120%] font-medium px-4 md:px-0'>{title}</p>
          <p className='text-[18px] leading-[140%] py-9'>{des}</p>
          <p className='p-2.5 bg-[#007EFB] rounded-[100px] w-[186px] mx-auto text-white text-[18px] leading-[120%] font-medium'>{title2}</p>
        </div>
      </div>
    </section>
  )
}
export default GetAppSection