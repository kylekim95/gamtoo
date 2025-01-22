import React from 'react'

import ChumSungDaeIcon from './components/svg/ChumSungDae';
// import Table from './components/Table';

type ProblemEvalData = [
  id: number,
  problem: string,
  answer: string,
  userSubmit: string,
  result: 'correct' | 'wrong'
];

export default function QuizRanking() {
  const dummyData : ProblemEvalData[] = [
    [1, "이것은 문제입니다. 이것은 문제입니까?", "정답", "유저 답", "correct"],
    [2, "이것은 문제입니다. 이것은 문제입니까?", "정답", "유저 답", "correct"],
    [3, "이것은 문제입니다. 이것은 문제입니까?", "정답", "유저 답", "wrong"],
    [4, "이것은 문제입니다. 이것은 문제입니까?", "정답", "유저 답", "correct"],
    [5, "이것은 문제입니다. 이것은 문제입니까?", "정답", "유저 답", "correct"],
    [6, "이것은 문제입니다. 이것은 문제입니까?", "정답", "유저 답", "correct"],
    [7, "이것은 문제입니다. 이것은 문제입니까?", "정답", "유저 답", "correct"],
    [8, "이것은 문제입니다. 이것은 문제입니까?", "정답", "유저 답", "wrong"],
    [9, "이것은 문제입니다. 이것은 문제입니까?", "정답", "유저 답", "correct"],
    [10, "이것은 문제입니다. 이것은 문제입니까?", "정답", "유저 답", "correct"],
    [11, "이것은 문제입니다. 이것은 문제입니까?", "정답", "유저 답", "correct"],
    [12, "이것은 문제입니다. 이것은 문제입니까?", "정답", "유저 답", "wrong"],
    [13, "이것은 문제입니다. 이것은 문제입니까?", "정답", "유저 답", "correct"],
    [14, "이것은 문제입니다. 이것은 문제입니까?", "정답", "유저 답", "correct"],
    [15, "이것은 문제입니다. 이것은 문제입니까?", "정답", "유저 답", "wrong"],
    [16, "이것은 문제입니다. 이것은 문제입니까?", "정답", "유저 답", "correct"],
    [17, "이것은 문제입니다. 이것은 문제입니까?", "정답", "유저 답", "wrong"],
    [18, "이것은 문제입니다. 이것은 문제입니까?", "정답", "유저 답", "correct"],
    [19, "이것은 문제입니다. 이것은 문제입니까?", "정답", "유저 답", "correct"],
    [20, "이것은 문제입니다. 이것은 문제입니까?", "정답", "유저 답", "wrong"],
  ];
  return (
    <div>
      <div 
        className='w-full min-w-[1000px] aspect-[16/10] bg-[#00000080] flex justify-end items-center pr-8 pb-8'
        style={{backgroundImage: "url('/QuizRanking/chumsungdae.png')", backgroundSize: 'cover', backgroundRepeat: 'no-repeat'}}
      >
        <div className='w-[35%] flex flex-col justify-center items-center'>
          <ChumSungDaeIcon width={50} height={50} color={'#FFFFFF'}/>
          <span className='text-white mt-1 xl:text-2xl'>시험 결과</span>
          <div className='w-full aspect-[3/4] max-h-[900px] bg-white rounded-lg mt-3 flex flex-col'>
            <span className='w-full h-4 text-black'>정답을 클릭해서 해당 문화재의 상세 정보를 확인하세요!</span>
          </div>
        </div>
      </div>
      <div className='w-full min-w-[1000px] aspect-[8/1] flex justify-center items-center space-x-10'>
        <div className='bg-pink-300 rounded-full h-[70%] aspect-square'></div>
        <div className='bg-pink-300 rounded-full h-[70%] aspect-square'></div>
        <div className='bg-pink-300 rounded-full h-[70%] aspect-square'></div>
      </div>
    </div>
  )
}
