"use client"

import React from 'react'

import KoreaCloudIcon from '@/components/quiz/svg/KoreaCloudIcon';
import ImportantRankCard from './ImportantRankCard';
import Table from '@/components/quiz/Table';
import CheckIcon from '@/components/quiz/svg/CheckedIcon';
import { useRouter } from 'next/navigation';

type DataType = {
  standings: number;
  rank: React.JSX.Element;
  id: React.JSX.Element;
  highScore: number;
  attempts: number;
  date: string;
}

export default function RankingCard() {
  const router = useRouter();

  const smallCheck = <CheckIcon width={20} height={20} color={"#000000"}/>;
  function userDetailsLink(userId: string){
    function OnClickUserId(){router.push('/rankingDetail')}
    return (
      <div className='cursor-pointer' onClick={OnClickUserId}>{userId}</div>
    );
  }
  const dummyDesc = ["#", "랭크", "ID", "최고 점수", "시도 횟수", "날짜"];
  const dummyData : DataType[] = [
    {standings:1, rank:smallCheck, id:userDetailsLink("유저ID"), highScore:100, attempts:10, date:"2025.01.23"},
    {standings:2, rank:smallCheck, id:userDetailsLink("유저ID"), highScore:100, attempts:10, date:"2025.01.23"},
    {standings:3, rank:smallCheck, id:userDetailsLink("유저ID"), highScore:100, attempts:10, date:"2025.01.23"},
    {standings:4, rank:smallCheck, id:userDetailsLink("유저ID"), highScore:100, attempts:10, date:"2025.01.23"},
    {standings:5, rank:smallCheck, id:userDetailsLink("유저ID"), highScore:100, attempts:10, date:"2025.01.23"},
    {standings:6, rank:smallCheck, id:userDetailsLink("유저ID"), highScore:100, attempts:10, date:"2025.01.23"},
    {standings:7, rank:smallCheck, id:userDetailsLink("유저ID"), highScore:100, attempts:10, date:"2025.01.23"},
    {standings:8, rank:smallCheck, id:userDetailsLink("유저ID"), highScore:100, attempts:10, date:"2025.01.23"},
    {standings:9, rank:smallCheck, id:userDetailsLink("유저ID"), highScore:100, attempts:10, date:"2025.01.23"},
    {standings:10, rank:smallCheck, id:userDetailsLink("유저ID"), highScore:100, attempts:10, date:"2025.01.23"},
    {standings:11, rank:smallCheck, id:userDetailsLink("유저ID"), highScore:100, attempts:10, date:"2025.01.23"},
    {standings:12, rank:smallCheck, id:userDetailsLink("유저ID"), highScore:100, attempts:10, date:"2025.01.23"},
    {standings:13, rank:smallCheck, id:userDetailsLink("유저ID"), highScore:100, attempts:10, date:"2025.01.23"},
    {standings:14, rank:smallCheck, id:userDetailsLink("유저ID"), highScore:100, attempts:10, date:"2025.01.23"},
    {standings:15, rank:smallCheck, id:userDetailsLink("유저ID"), highScore:100, attempts:10, date:"2025.01.23"},
    {standings:16, rank:smallCheck, id:userDetailsLink("유저ID"), highScore:100, attempts:10, date:"2025.01.23"},
    {standings:17, rank:smallCheck, id:userDetailsLink("유저ID"), highScore:100, attempts:10, date:"2025.01.23"},
    {standings:18, rank:smallCheck, id:userDetailsLink("유저ID"), highScore:100, attempts:10, date:"2025.01.23"},
    {standings:19, rank:smallCheck, id:userDetailsLink("유저ID"), highScore:100, attempts:10, date:"2025.01.23"},
    {standings:20, rank:smallCheck, id:userDetailsLink("유저ID"), highScore:100, attempts:10, date:"2025.01.23"},
  ];

  return (
    <div className='w-full min-w-[800px] max-w-[1000px] flex flex-col items-center backdrop-blur-xl pt-5 pb-5 rounded-lg shadow-2xl'>
      <KoreaCloudIcon width={75} height={75} color='#FFFFFF'/>
      <span className='text-white font-bold text-xl mb-10'>문화재 퀴즈 랭킹</span>
      <div className='w-[90%] flex place-content-around gap-1 mb-10'>
        <ImportantRankCard className='w-[22.5%] aspect-square' color='#c21616' header='이번주 점수 1위' uid=''/>
        <ImportantRankCard className='w-[22.5%] aspect-square' color='#c21616' header='이번주 시도 횟수 1위' uid=''/>
        <ImportantRankCard className='w-[22.5%] aspect-square' color='#c21616' header='오늘 점수 1위' uid=''/>
        <ImportantRankCard className='w-[22.5%] aspect-square' color='#c21616' header='오늘 시도 횟수 1위' uid=''/>
      </div>
      <div className='w-[80%] flex justify-center mb-10'>
        <Table<DataType> data={dummyData} spacing={[1,1,2,2,2,3]} desc={dummyDesc} maxHeight={'300px'}/>
      </div>
    </div>
  )
}
