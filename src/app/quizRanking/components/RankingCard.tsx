import React from 'react'

import KoreaCloudIcon from '@/components/quiz/svg/KoreaCloudIcon';
import ImportantRankCard from './ImportantRankCard';
import Table from '@/components/quiz/Table';
import CheckIcon from '@/components/quiz/svg/CheckedIcon';

type DataType = {
  standings: number;
  rank: React.JSX.Element;
  id: string;
  highScore: number;
  attempts: number;
  date: string;
}

export default function RankingCard() {
  const smallCheck = <CheckIcon width={25} height={25} color={"#44FF44"}/>;
  const dummyDesc = ["#", "랭크크", "ID", "최고 점수", "시도 횟수", "날짜"];
  const dummyData : DataType[] = [
    {standings:1, rank:smallCheck, id:"유저ID", highScore:100, attempts:10, date:"2025.01.23"},
    {standings:2, rank:smallCheck, id:"유저ID", highScore:100, attempts:10, date:"2025.01.23"},
    {standings:3, rank:smallCheck, id:"유저ID", highScore:100, attempts:10, date:"2025.01.23"},
    {standings:4, rank:smallCheck, id:"유저ID", highScore:100, attempts:10, date:"2025.01.23"},
    {standings:5, rank:smallCheck, id:"유저ID", highScore:100, attempts:10, date:"2025.01.23"},
    {standings:6, rank:smallCheck, id:"유저ID", highScore:100, attempts:10, date:"2025.01.23"},
    {standings:7, rank:smallCheck, id:"유저ID", highScore:100, attempts:10, date:"2025.01.23"},
    {standings:8, rank:smallCheck, id:"유저ID", highScore:100, attempts:10, date:"2025.01.23"},
    {standings:9, rank:smallCheck, id:"유저ID", highScore:100, attempts:10, date:"2025.01.23"},
    {standings:10, rank:smallCheck, id:"유저ID", highScore:100, attempts:10, date:"2025.01.23"},
  ];

  return (
    <div className='w-full min-w-[800px] aspect-[3/2] flex flex-col items-center backdrop-blur-xl p-5 rounded-lg'>
      <KoreaCloudIcon width={75} height={75} color='#FFFFFF'/>
      <span className='text-white font-bold text-xl mb-5'>문화재 퀴즈 랭킹</span>
      <div className='w-[80%] flex place-content-around gap-1 mb-10'>
        <ImportantRankCard className='w-[22.5%] aspect-[1/1.2]' color='#c21616' header='이번주 점수 1위' uid=''/>
        <ImportantRankCard className='w-[22.5%] aspect-[1/1.2]' color='#c21616' header='이번주 시도 횟수 1위' uid=''/>
        <ImportantRankCard className='w-[22.5%] aspect-[1/1.2]' color='#c21616' header='오늘 점수 1위' uid=''/>
        <ImportantRankCard className='w-[22.5%] aspect-[1/1.2]' color='#c21616' header='오늘 시도 횟수 1위' uid=''/>
      </div>
      <div className='w-[70%] flex justify-center'>
        <Table<DataType> data={dummyData} spacing={[1,1,2,2,2,3]} desc={dummyDesc} />
      </div>
    </div>
  )
}
