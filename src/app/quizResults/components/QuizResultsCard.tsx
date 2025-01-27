import React from 'react'

import Table from '../../../components/quiz/Table'
import GagsiMaskIcon from '../../../components/quiz/svg/GagsiMaskIcon';

export type DataType = {
  id: string,
  problem: string,
  answer: string,
  userSelect: string,
  result: React.JSX.Element
}

interface QuizResultsCardProps {
  dataDesc : string[];
  data : DataType[];
}

export default function QuizResultsCard(props : QuizResultsCardProps) {
  return (
    <div className='pb-5'>
      <div className='flex flex-col items-center bg-[#FFFFFF] w-full min-w-[600px] aspect-[1/1.2] px-5 py-3 rounded-lg'>
        <span className='text-black self-start text-xs mb-1'>정답을 클릭해서 해당 문화재의 상세 정보를 확인하세요!</span>
        <Table<DataType> data={props.data} spacing={[1,6,2,2,2]} desc={props.dataDesc} />
        <div className='w-full h-8 border-b flex items-center'>
          <span className='text-black text-sm font-bold'>{"유저 ID"} : {0}점</span>
        </div>
        <div className='self-end mt-[-25px] -rotate-[25deg] rounded-full overflow-hidden border-[3px] border-[#FF4444]'>{ <GagsiMaskIcon width={150} height={150} color={"#FF4444"}/> }</div>
      </div>
    </div>
  )
}
