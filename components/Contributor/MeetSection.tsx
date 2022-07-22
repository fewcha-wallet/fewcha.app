import React from 'react'
import { MEET_SECTION } from 'config/constants'
import cn from 'services/cn'

const MeetSection: React.FC = () => {
  const { title, des, all, list, members } = MEET_SECTION

  return (
    <section className='w-full py-[60px]'>
      <div className="container">
        <div className='text-[#292C33] text-center justify-center lg:w-[708px] mx-auto'>
          <p className='font-larken text-[40px] leading-[119%] font-medium lg:text-[60px]'>{title}</p>
          <p className='text-[18px] leading-[153%] mt-4 mb-[60px] md:mb-[64px]'>{des}</p>
        </div>

        <div className='flex gap-5 mb-8 md:gap-6'>
          <p className='py-2.5 px-5 bg-[#292C33] text-white rounded-[100px] text-[18px] font-bold h-[48px]'>{all}</p>
          <div className='flex md:flex-wrap justify-center md:justify-start w-full overflow-hidden gap-4 lg:justify-center'>
            {list.map((item, i) => (
              <p key={i} className={cn("hidden bg-[#F2F4F7] py-2.5 px-5 rounded-[100px]", {
                "md:block": i !== 0,
                "!block": i === 0
              })}>{item}</p>
            ))}
          </div>
        </div>
        <div className='flex flex-wrap gap-y-8 md:gap-y-12 md:gap-x-5 flex-col justify-between md:flex-row'>
          {members.map((member, i) => (
            <div key={i} className="w-[327px] md:w-[31%] text-[#292C33]">
              <img src={member.srcImg} alt={member.name} className="w-full h-[327] md:h-[202.67px] mb-6 lg:w-full lg:min-h-[325px]" />
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