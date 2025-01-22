import React from 'react'

import ChumSungDaeIcon from './components/svg/ChumSungDae';
import QuizResultsCard from './components/QuizResultsCard';

export default function QuizRanking() {
  return (
    <div className='flex justify-center items-center bg-[#111111] p-5'>
      <div className='w-[40%] flex flex-col items-center'>
        <ChumSungDaeIcon width={40} height={40} color={"#FFFFFF"}/>
        <span className='text-white'>시험 결과</span>
        <QuizResultsCard />
      </div>
    </div>
  )
}
