import React from 'react'

import Table from '../../../components/quiz/Table'
import GagsiMaskIcon from '../../../components/quiz/svg/GagsiMaskIcon';
import CheckIcon from '@/components/quiz/svg/CheckedIcon';
import CrossedIcon from '@/components/quiz/svg/CrossedIcon';

type DataType = {
  id: string,
  problem: string,
  answer: string,
  userSelect: string,
  result: React.JSX.Element
}

export default function QuizResultsCard() {
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
    <div className='pb-5'>
      <div className='flex flex-col items-center bg-[#FFFFFF] w-full min-w-[600px] aspect-[1/1.2] px-5 py-3 rounded-lg'>
        <span className='text-black self-start text-xs mb-1'>정답을 클릭해서 해당 문화재의 상세 정보를 확인하세요!</span>
        <Table<DataType> data={dummyData} spacing={[1,6,2,2,2]} desc={dummyDesc} />
        <div className='w-full h-8 border-b'>
          <span className=''></span>
        </div>
        <div className='self-end mt-[-25px] -rotate-12 rounded-full overflow-hidden'>{ <GagsiMaskIcon width={150} height={150} color={"#FF2222"}/> }</div>
      </div>
    </div>
  )
}
