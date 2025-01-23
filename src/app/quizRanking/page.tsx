import React from 'react'

import RankingCard from './components/RankingCard'

export default function QuizRanking() {
  return (
    <div className='bg-slate-100'>
      <div 
        className='w-full aspect-[4/1] bg-[#00000080] flex flex-col justify-center items-center'
        style={{backgroundImage: 'url("/QuizRanking/changdeokgung-palace.jpg")', backgroundSize:'cover', backgroundPosition: '0% 200%', backgroundAttachment:'fixed', backgroundBlendMode: 'multiply'}}
      >
      </div>
      <div className='w-full flex'>
        <div className='w-[20%]'></div>
        <div className='w-[60%] flex flex-col items-center mt-[-100px]'>
          <RankingCard />
        </div>
        <div className='w-[20%]'></div>
      </div>
    </div>
  )
}
