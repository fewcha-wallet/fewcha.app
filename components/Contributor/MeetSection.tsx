import React, { useState } from 'react'
import { MEET_SECTION } from 'config/constants'
import cn from 'services/cn'

const MeetSection: React.FC = () => {
  const { title, des, list, members } = MEET_SECTION
  const [index, setIndex] = useState(0)
  const handleActive = (i: number) => {
    setIndex(i)
  }

  return (
    <section className='w-full py-[60px]'>
      <div className="container">
        <div className='text-[#292C33] text-center justify-center lg:w-[708px] mx-auto'>
          <p className='font-larken text-[40px] leading-[119%] font-medium lg:text-[60px]'>{title}</p>
          <p className='text-[18px] leading-[153%] mt-4 mb-[60px] md:mb-[64px]'>{des}</p>
        </div>

        <div className='flex max-h-[48px] md:max-h-max md:h-auto md:flex-wrap justify-start md:justify-start  w-full overflow-x-auto overflow-y-hidden md:overflow-y-auto gap-4 lg:justify-center md:pl-[0] mb-[32px]'>
          {list.map((item, i) => (
            <p onClick={() => handleActive(i)} key={i} className={cn("hidden bg-[#F2F4F7] py-2.5 px-5 rounded-[100px] hover:cursor-pointer hover:opacity-[0.9] md:!inline-flex", {
              "font-bold leading-[153%] text-[18px] text-white !bg-[#292C33]": index === i,
              "!inline-flex": i <= 1,
            })} >{item}</p>
          ))}
        </div>

        <div className='flex flex-wrap gap-y-8 md:gap-y-12 md:gap-x-5 flex-col justify-between md:flex-row'>
          {members.map((member, i) => (
            <div key={i} className="w-[327px] md:w-[31%] text-[#292C33]">
              <img src={member.srcImg} alt={member.name} className="w-full h-[327] md:h-[202.67px] mb-6 lg:w-[367px] lg:h-[367px]" />
              <p className='mb-2 font-larken text-[20px] leading-[119%] font-medium'>{member.name}</p>
              <p className='mb-2 text-[14px] leading-[119%] font-medium'>{member.jobName}</p>
              <p className='text-[14px] leading-[119%] italic'>"{member.des}"</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default MeetSection