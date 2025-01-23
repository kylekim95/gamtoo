import React from 'react'

import ChumSungDaeIcon from './components/svg/ChumSungDaeIcon';
import QuizResultsCard from './components/QuizResultsCard';
import GyeongBokGungIcon from './components/svg/GyeongBokGungIcon'

export default function QuizRanking() {
  return (
    <div className='flex flex-col items-center justify-center'>
      <div 
        className='flex justify-end items-center bg-[#111111] w-full aspect-[1980/1222] pt-5 relative'
        style={{backgroundImage: 'url(/QuizRanking/chumsungdae.png)', backgroundSize: 'cover' }}
      >
        <div className='w-[100%] lg:w-[50%] flex flex-col items-center'>
          <ChumSungDaeIcon width={50} height={50} color={"#FFFFFF"}/>
          <span className='text-white font-bold mb-5 mt-1'>시험 결과</span>
          <QuizResultsCard />
        </div>
      </div>
      <div className='w-full min-w-[1200px] aspect-[6/1] flex justify-center items-center gap-10 bg-slate-50'>
          <div className='h-[50%] aspect-square bg-black rounded-full flex flex-col justify-center items-center opacity-75 hover:bg-blue-700 transition-colors'>
            <GyeongBokGungIcon width={40} height={40} color={'#FFFFFF'}/>
            <span className='text-sm font-bold m-1'>홈으로</span>
          </div>
          <div className='h-[50%] aspect-square bg-black rounded-full flex flex-col justify-center items-center opacity-75 hover:bg-yellow-700 transition-colors'>
            <GyeongBokGungIcon width={40} height={40} color={'#FFFFFF'}/>
            <span className='text-sm font-bold m-1'>다시 도전</span>
          </div>
          <div className='h-[50%] aspect-square bg-black rounded-full flex flex-col justify-center items-center opacity-75 hover:bg-red-700 transition-colors'>
            <GyeongBokGungIcon width={40} height={40} color={'#FFFFFF'}/>
            <span className='text-sm font-bold m-1'>랭킹 확인</span>
          </div>
        </div>
    </div>
  )
}
