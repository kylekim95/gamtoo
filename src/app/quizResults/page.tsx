import React from 'react'

import ChumSungDaeIcon from '../../components/quiz/svg/ChumSungDaeIcon';
import QuizResultsCard, { DataType } from './components/QuizResultsCard';
import GyeongBokGungIcon from '../../components/quiz/svg/GyeongBokGungIcon'
import CheckIcon from '@/components/quiz/svg/CheckedIcon';
import CrossedIcon from '@/components/quiz/svg/CrossedIcon';

export default function QuizRanking() {
  const smallCheck = <CheckIcon width={25} height={25} color={"#44FF44"}/>;
  const smallCross = <CrossedIcon width={25} height={25} color={"#FF2222"}/>;
  const dummyDesc = ["id", "문제", "정답", "선택된 답", "결과"];
  const dummyData : DataType[] = [
    {id:"1", problem:"이것은 문제입니다. 이것은 문제입니까?", answer:"정답", userSelect:"유저 답", result:smallCheck},
    {id:"2", problem:"이것은 문제입니다. 이것은 문제입니까?", answer:"정답", userSelect:"유저 답", result:smallCross},
    {id:"3", problem:"이것은 문제입니다. 이것은 문제입니까?", answer:"정답", userSelect:"유저 답", result:smallCheck},
    {id:"4", problem:"이것은 문제입니다. 이것은 문제입니까?", answer:"정답", userSelect:"유저 답", result:smallCheck},
    {id:"5", problem:"이것은 문제입니다. 이것은 문제입니까?", answer:"정답", userSelect:"유저 답", result:smallCheck},
    {id:"6", problem:"이것은 문제입니다. 이것은 문제입니까?", answer:"정답", userSelect:"유저 답", result:smallCheck},
    {id:"7", problem:"이것은 문제입니다. 이것은 문제입니까?", answer:"정답", userSelect:"유저 답", result:smallCheck},
    {id:"8", problem:"이것은 문제입니다. 이것은 문제입니까?", answer:"정답", userSelect:"유저 답", result:smallCross},
    {id:"9", problem:"이것은 문제입니다. 이것은 문제입니까?", answer:"정답", userSelect:"유저 답", result:smallCheck},
    {id:"10", problem:"이것은 문제입니다. 이것은 문제입니까?", answer:"정답", userSelect:"유저 답", result:smallCheck},
    {id:"11", problem:"이것은 문제입니다. 이것은 문제입니까?", answer:"정답", userSelect:"유저 답", result:smallCross},
    {id:"12", problem:"이것은 문제입니다. 이것은 문제입니까?", answer:"정답", userSelect:"유저 답", result:smallCheck},
    {id:"13", problem:"이것은 문제입니다. 이것은 문제입니까?", answer:"정답", userSelect:"유저 답", result:smallCheck},
    {id:"14", problem:"이것은 문제입니다. 이것은 문제입니까?", answer:"정답", userSelect:"유저 답", result:smallCheck},
    {id:"15", problem:"이것은 문제입니다. 이것은 문제입니까?", answer:"정답", userSelect:"유저 답", result:smallCross},
    {id:"16", problem:"이것은 문제입니다. 이것은 문제입니까?", answer:"정답", userSelect:"유저 답", result:smallCheck},
    {id:"17", problem:"이것은 문제입니다. 이것은 문제입니까?", answer:"정답", userSelect:"유저 답", result:smallCross},
    {id:"18", problem:"이것은 문제입니다. 이것은 문제입니까?", answer:"정답", userSelect:"유저 답", result:smallCross},
    {id:"19", problem:"이것은 문제입니다. 이것은 문제입니까?", answer:"정답", userSelect:"유저 답", result:smallCross},
    {id:"20", problem:"이것은 문제입니다. 이것은 문제입니까?", answer:"정답", userSelect:"유저 답", result:smallCheck},
  ];

  return (
    <div className='flex flex-col items-center justify-center'>
      <div 
        className='flex justify-end items-center bg-[#111111] w-full aspect-[1980/1222] pt-5 relative'
        style={{backgroundImage: 'url(/QuizRanking/chumsungdae.png)', backgroundSize: 'cover' }}
      >
        <div className='w-[100%] lg:w-[50%] flex flex-col items-center'>
          <ChumSungDaeIcon width={50} height={50} color={"#FFFFFF"}/>
          <span className='text-white font-bold mb-5 mt-1 text-2xl'>시험 결과</span>
          <QuizResultsCard data={dummyData} dataDesc={dummyDesc} />
        </div>
      </div>
      <div className='w-full min-w-[1200px] aspect-[6/1] flex justify-center items-center gap-10 bg-slate-50'>
          <div className='h-[50%] aspect-square bg-blue-700 rounded-full flex flex-col justify-center items-center opacity-75 hover:opacity-90 transition-opacity'>
            <GyeongBokGungIcon width={40} height={40} color={'#FFFFFF'}/>
            <span className='text-sm font-bold m-1 text-white'>홈으로</span>
          </div>
          <div className='h-[50%] aspect-square bg-yellow-700 rounded-full flex flex-col justify-center items-center opacity-75 hover:opacity-90 transition-opacity'>
            <GyeongBokGungIcon width={40} height={40} color={'#FFFFFF'}/>
            <span className='text-sm font-bold m-1 text-white'>다시 도전</span>
          </div>
          <div className='h-[50%] aspect-square bg-red-700 rounded-full flex flex-col justify-center items-center opacity-75 hover:opacity-90 transition-opacity'>
            <GyeongBokGungIcon width={40} height={40} color={'#FFFFFF'}/>
            <span className='text-sm font-bold m-1 text-white'>랭킹 확인</span>
          </div>
        </div>
    </div>
  )
}
