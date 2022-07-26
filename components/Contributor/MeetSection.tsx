import React, { useState, useEffect } from 'react'
import { MEET_SECTION } from 'config/constants'
import cn from 'services/cn'

const MeetSection: React.FC = () => {
  const { title, des, list, members } = MEET_SECTION
  const [index, setIndex] = useState(0)
  const [valueFilter, setValueFilter] = useState('all')
  const [listFilter, setFilter] = useState(members)

  const handleActive = (i: number, item: string) => {
    setIndex(i)
    setValueFilter(item.toLowerCase())
  }

  useEffect(() => {
    console.log('run...')
    if (valueFilter === 'all') {
      setFilter(members)
    } else if (valueFilter.includes('core')) {
      setFilter(members.filter(m => m.position === 'core'))
    } else {
      setFilter(members.filter(m => valueFilter.includes(m.position)))
    }

  }, [valueFilter, members])

  return (
    <section className='w-full py-[120px]'>
      <div className="container">
        <div className='text-[#292C33] text-center justify-center lg:w-[708px] mx-auto'>
          <p className='font-larken text-[40px] leading-[119%] font-medium lg:text-[60px]'>{title}</p>
          <p className='text-[18px] leading-[153%] mt-4 mb-[60px] md:mb-[64p]'>{des}</p>
        </div>

        <div className='flex max-h-[48px] md:max-h-max md:h-auto md:flex-wrap justify-start w-full overflow-x-auto overflow-y-hidden md:overflow-y-auto gap-[14.4px] md:pl-[0] mb-[32px]'>
          {list.map((item, i) => (
            <p onClick={() => handleActive(i, item)} key={i} className={cn("hidden bg-[#F2F4F7] py-2.5 px-5 rounded-[100px] hover:cursor-pointer hover:opacity-[0.9] md:!inline-flex font-medium leading-[153%] text-[18px]", {
              " text-white !bg-[#292C33]": index === i,
              "!inline-flex": i <= 1,
            })} >{item}</p>
          ))}
        </div>

        <div className='flex flex-wrap gap-y-8 md:gap-y-12 md:gap-x-5 flex-col justify-start md:flex-row'>
          {listFilter.map((member, i) => (
            <div key={i} className="md:w-[31%] text-[#292C33]">
              <img src={member.srcImg} alt={member.name} className="w-full max-h-[327px] mb-6" />
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