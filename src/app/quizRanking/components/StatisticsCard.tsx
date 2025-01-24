"use client"

import React, { useCallback } from 'react'
import KoreaCloudIcon from '@/components/quiz/svg/KoreaCloudIcon';
import { Doughnut, Bar } from 'react-chartjs-2'
import 'chart.js/auto';
import CapsuleSelectMenu from './CapsuleSelectMenu';
import { CatCode2String } from '@/components/quiz/CHCategories';
import GagsiMaskIcon from '@/components/quiz/svg/GagsiMaskIcon';

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

  const testBarData = {
    labels: [...Object.values(CatCode2String)],
    datasets:[
      {
        label: '내 오답률',
        data: [50,50,50,50,50,50,50,50,50,50,50,50,50,50,50,50],
        backgroundColor: '#222222'
      },
      {
        label: '전체 유저 오답률',
        data: [10,20,30,40,50,60,70,80,90,100,90,80,70,60,50,40],
        backgroundColor: '#FF4444'
      }
    ],
  };
  const testBarOptions = {
    indexAxis: 'y' as const,
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false
      },
      title: {
        display: true,
        text: '문제 오답률'
      },
      tooltip: {
        enabled: false
      }
    },
    scales: {
      y: {
        stacked: true,
      },
      x: {
        beginAtZero: true
      }
    }
  };

  const testBarVertData = {
    labels: ['0~10','10~20','20~30','30~40','40~50','50~60','60~70','70~80','80~90','90~100'],
    datasets:[
      {
        label:'Population',
        data:[10, 20, 30, 40, 50, 60, 70, 80, 90, 100],
        backgroundColor:[
          '#222222',
          '#222222',
          '#222222',
          '#222222',
          '#FF4444',
          '#222222',
          '#222222',
          '#222222',
          '#222222',
          '#222222'
        ]
      }
    ]
  };
  const testBarVertOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false
      },
      tooltip: {
        enabled: false
      },
      title: {
        display: true,
        text: '랭킹에서 내 위치 확인하기'
      }
    }
  };

  const testFunc = useCallback((selectedItems : object)=>console.log(selectedItems), []);

  return (
    <div className='w-full min-w-[800px] max-w-[1000px] h-auto flex flex-col items-center backdrop-blur-xl rounded-lg shadow-2xl overflow-hidden pb-10'>
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
        <div className='w-[20%] mb-5 flex justify-center'>
          <Doughnut data={testData} options={testOptions}></Doughnut>
        </div>
        <span className='text-black font-bold text-lg'>문화재 퀴즈에 도전한 25%의 유저 중 한명입니다!</span>
        {/* Capsule Select Menu */}
        <CapsuleSelectMenu className='w-[80%] h-[100px] m-3 flex flex-wrap justify-center gap-1' items={CatCode2String} onSelectedChanged={testFunc}/>
        <div className='flex justify-center w-[90%]'>
          {/* 오답률 차트트 */}
          <div className='w-[60%] flex justify-center'>
            <Bar data={testBarData} options={testBarOptions}></Bar>
          </div>
          <div className='w-[40%] '>
            {/* 랭킹 내 위치 */}
            <div className='w-full aspect-video mb-10'>
              <Bar data={testBarVertData} options={testBarVertOptions}></Bar>
            </div>
            {/* 각시탈 아이콘 */}
            {/* TODO: 랭크에 맞게 색 설정하기 */}
            <div className='rounded-full border-[3px] border-black overflow-hidden w-fit self-end justify-self-end -rotate-[25deg] opacity-75'>
              <GagsiMaskIcon width={125} height={125} color='#000000' />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
