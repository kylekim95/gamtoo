"use client"

import React from 'react'

import RankingCard from './components/RankingCard'
import StatisticsCard from './components/StatisticsCard'
import GyeongBokGungIcon from '@/components/quiz/svg/GyeongBokGungIcon'

export default function QuizRanking() {

  function OnClickHelloWorld(){
    alert("!");
  }

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
        <div className='w-[25%] flex flex-col items-center'>
          {/* Sticky menu */}
          <div className='hidden w-[50%] sticky top-[30%] xl:flex flex-col justify-center items-center gap-10 mt-10'>
            <div onClick={()=>OnClickHelloWorld()} className='w-full max-w-[150px] aspect-square bg-yellow-600 rounded-full flex flex-col justify-center items-center opacity-75 hover:opacity-100 transition-opacity ease-in-out gap-2'>
              <GyeongBokGungIcon width={50} height={50} color='#FFFFFF'/>
              <span className='text-white text-xs font-bold'>문화재 퀴즈 도전</span>
            </div>
            <div onClick={()=>OnClickHelloWorld()} className='w-full max-w-[150px] aspect-square bg-pink-600 rounded-full flex flex-col justify-center items-center opacity-75 hover:opacity-100 transition-opacity ease-in-out gap-2'>
              <GyeongBokGungIcon width={50} height={50} color='#FFFFFF'/>
              <span className='text-white text-xs font-bold'>문화재 공부하기</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
