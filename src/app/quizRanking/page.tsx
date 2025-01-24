import React from 'react'

import RankingCard from './components/RankingCard'
import StatisticsCard from './components/StatisticsCard'

export default function QuizRanking() {
  return (
    <div className='bg-[#F0F0F0]'>
      <div 
        className='w-full aspect-[4/1] bg-[#00000080] flex flex-col justify-center items-center'
        style={{backgroundImage: 'url("/QuizRanking/changdeokgung-palace.jpg")', backgroundSize:'cover', backgroundPosition: '0% 200%', backgroundAttachment:'fixed', backgroundBlendMode: 'multiply'}}
      >
      </div>
      <div className='w-full flex'>
        <div className='w-[25%]'></div>
        <div className='w-[50%] flex flex-col items-center mt-[-150px] mb-5 gap-5'>
          <RankingCard />
          <StatisticsCard />
        </div>
        <div className='w-[25%]'></div>
      </div>
    </div>
  )
}
