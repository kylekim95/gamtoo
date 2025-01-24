"use client"

import React from 'react'
import KoreaCloudIcon from '@/components/quiz/svg/KoreaCloudIcon';
import { Doughnut } from 'react-chartjs-2'
import 'chart.js/auto';
import CapsuleSelectMenu from './CapsuleSelectMenu';
import { CatCode2String, String2CatCode } from '@/components/quiz/CHCategories';

export default function StatisticsCard() {
  const testData = {
    labels: ['😎👍', '😢'],
    datasets: [
      {
        label: '비율',
        data: [25, 75],
        backgroundColor: [
          'rgba(255, 99, 132, 0.5)',
          'rgba(54, 162, 235, 0.5)',
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
        ],
        borderWidth: 1,
      },
    ],
  };
  const testOptions = {
    responsive: true,
    plugins: {
      legend: {
        display: false
      }
    }
  };

  return (
    <div className='w-full min-w-[800px] h-auto flex flex-col items-center backdrop-blur-xl rounded-lg shadow-2xl overflow-hidden pb-10'>
      {/* Card Header */}
      <div
        className='w-full aspect-[5/1] bg-[#00000080] flex flex-col justify-center items-center mb-5'
        style={{backgroundImage: 'url("/QuizRanking/bukchon.jpg")', backgroundSize:'cover', backgroundPosition: 'center 200%', backgroundBlendMode: 'multiply'}}
      >
        <KoreaCloudIcon width={75} height={75} color='#FFFFFF'/>
        <span className='text-white font-bold text-xl mb-5'>문화재 퀴즈 통계</span>
      </div>
      {/* Card Content */}
      <div className='flex flex-col items-center w-full'>
        {/* Participation Doughnut Chart */}
        <div className='w-[20%] mb-5'>
          <Doughnut data={testData} options={testOptions}></Doughnut>
        </div>
        <span className='text-black font-bold text-lg'>문화재 퀴즈에 도전한 25%의 유저 중 한명입니다!</span>
        {/* Capsule Select Menu */}
        <CapsuleSelectMenu className='w-[80%] h-[100px] m-3' items={CatCode2String} onSelectedChanged={(selectedItems : object)=>console.log(selectedItems)}/>
        <div className='flex justify-center w-[90%]'>
          <div className='w-[40%] aspect-square bg-slate-300 m-3'></div>
          <div className='w-[40%] aspect-square bg-slate-300 m-3'></div>
        </div>
      </div>
    </div>
  )
}
