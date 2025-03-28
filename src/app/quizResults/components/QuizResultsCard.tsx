import React, { useEffect, useState } from 'react'

import Table from '../../../components/quiz/Table'
import GagsiMaskIcon from '../../../components/quiz/svg/GagsiMaskIcon';
import { useAppSelector } from '@/lib/redux/store';
import GetUserRankColor from '@/components/quiz/quizRankData';

export type DataType = {
  id: string,
  problem: string,
  answer: React.JSX.Element,
  userSelect: string,
  result: React.JSX.Element
}

interface QuizResultsCardProps {
  dataDesc : string[];
  data : DataType[];
  score: number;
}

export default function QuizResultsCard(props : QuizResultsCardProps) {
  const { userId, userName } = useAppSelector((state) => state.authReducer.value);

  const [iconColor, setIconColor] = useState<[string, string, string]>(['','','']);
  useEffect(()=>{
    async function RankColor(){ setIconColor(await GetUserRankColor(userId)); };
    RankColor();
  }, [userId]);

  return (
    <div className='pb-5'>
      <div className='flex flex-col items-center bg-[#FFFFFF] w-full min-w-[850px] aspect-[1/1.2] px-10 py-3 rounded-lg'>
        <span className='text-black self-start text-md mb-1  p-3'>정답을 클릭해서 해당 문화재의 상세 정보를 확인하세요!</span>
        <Table<DataType> data={props.data} spacing={[1,4,4,4,1]} desc={props.dataDesc} />
        <div className='w-full flex items-center p-10'>
          <span className='text-black text-[48px] font-bold'>{ userName }{" "}{props.score}점</span>
        </div>
        <GagsiMaskIcon color={iconColor[0]} className={'w-[25%] aspect-square self-end mt-[-150px] -rotate-[25deg] rounded-full overflow-hidden border-[3px] ' + iconColor[1]}/>
      </div>
    </div>
  )
}
