"use client"

import React, { useCallback, createRef } from 'react';
import KoreaCloudIcon from '@/components/quiz/svg/KoreaCloudIcon';
import { Doughnut, Bar } from 'react-chartjs-2';
import { ChartData, ChartOptions } from 'chart.js/auto';
import 'chart.js/auto';
import CapsuleSelectMenu from './CapsuleSelectMenu';
import { CatCode2String } from '@/components/quiz/CHCategories';
import GagsiMaskIcon from '@/components/quiz/svg/GagsiMaskIcon';
import { ChartJSOrUndefined } from 'react-chartjs-2/dist/types';

export default function StatisticsCard() {
  // 퀴즈 참여율 관련
  const testData : ChartData<"doughnut", number[], string> = {
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
  const testOptions : ChartOptions<"doughnut"> = {
    responsive: true,
    plugins: {
      legend: {
        display: false
      }
    }
  };
  // 랭킹 내 위치 관련
  const testBarVertData : ChartData<"bar", number[], string> = {
    labels: ['0~10','10~20','20~30','30~40','40~50','50~60','60~70','70~80','80~90','90~100'],
    datasets:[
      {
        label:'비율',
        data:[10, 20, 30, 40, 50, 60, 70, 80, 90, 100],
        backgroundColor:[
          '#CACACA',
          '#CACACA',
          '#CACACA',
          '#CACACA',
          '#9999FF',
          '#CACACA',
          '#CACACA',
          '#CACACA',
          '#CACACA',
          '#CACACA'
        ]
      }
    ]
  };
  const testBarVertOptions : ChartOptions<"bar"> = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false
      },
      title: {
        display: true,
        text: '랭킹에서 내 위치 확인하기'
      }
    }
  };
  // 오답률 차트 관련
  const errRateChartRef = createRef<ChartJSOrUndefined<"bar", number[], string>>();
  const realisticMyErrData = {
    "11": 50,
    "12": 50,
    "13": 50,
    "14": 50,
    "15": 50,
    "16": 50,
    "17": 50,
    "18": 50,
    "21": 50,
    "22": 50,
    "23": 50,
    "24": 50,
    "25": 50,
    "31": 50,
    "79": 50,
    "80": 50
  };
  const realisticAllErrData = {
    "11": 40,
    "12": 40,
    "13": 40,
    "14": 40,
    "15": 40,
    "16": 40,
    "17": 40,
    "18": 40,
    "21": 60,
    "22": 60,
    "23": 60,
    "24": 60,
    "25": 60,
    "31": 60,
    "79": 60,
    "80": 60
  };
  const initErrRateData : ChartData<"bar", number[], string> = {
    labels: [...Object.values(CatCode2String)],
    datasets:[
      {
        label: '내 오답률',
        data: Object.values(realisticMyErrData),
        backgroundColor: '#9999FF'
      },
      {
        label: '전체 유저 오답률',
        data: Object.values(realisticAllErrData),
        backgroundColor: '#CACACA'
      }
    ],
  };
  const initErrRateOptions : ChartOptions<"bar"> = {
    indexAxis: 'y' as const,
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { display: false },
      title: { display: true, text: '문제 오답률' },
    },
    scales: {
      y: { stacked: true },
      x: { beginAtZero: true },
    },
    datasets: {
      bar: { barPercentage: 0.5 },
    }
  };
  const testFunc = useCallback((selectedItems: [code:string, selected:boolean][])=>{
    const CatCode2StringMap = new Map<string, string>(Object.entries(CatCode2String));
    let selectedCat = new Set(selectedItems.filter((elem)=>elem[1]).map((elem)=>elem[0]));
    if(selectedCat.size === 0){
      selectedCat = new Set(selectedItems.map((elem)=>elem[0]));
    }
    const selectedCatMyVals = Object.entries(realisticMyErrData).filter(([code])=>selectedCat.has(code)).map((elem)=>elem[1]);
    const selectedCatAllVals = Object.entries(realisticAllErrData).filter(([code])=>selectedCat.has(code)).map((elem)=>elem[1]);
    if(errRateChartRef.current){
      errRateChartRef.current.data.labels = [...selectedCat].map((elem)=>CatCode2StringMap.get(elem) ?? '문화재 분류');
      errRateChartRef.current.data.datasets[0].data = selectedCatMyVals;
      errRateChartRef.current.data.datasets[1].data = selectedCatAllVals;
      errRateChartRef.current.update();
    }
  }, [realisticMyErrData, realisticAllErrData, errRateChartRef]);

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
        <CapsuleSelectMenu className='w-[80%] h-[100px] m-3 flex flex-wrap justify-center gap-1' items={Object.entries(CatCode2String)} onSelectedChanged={testFunc}/>
        <div className='flex justify-center w-[90%]'>
          {/* 오답률 차트 */}
          <div className='w-[60%] aspect-[1/1.1] flex justify-center'>
            <Bar ref={errRateChartRef} data={initErrRateData} options={initErrRateOptions} />
          </div>
          <div className='w-[40%] h-full flex flex-col'>
            {/* 랭킹 내 위치 */}
            <div className='w-full aspect-square mb-10'>
              <Bar data={testBarVertData} options={testBarVertOptions}></Bar>
            </div>
            {/* 각시탈 아이콘 */}
            {/* TODO: 랭크에 맞게 색 설정하기 */}
            <div className='rounded-full border-[3px] border-black overflow-hidden self-end justify-self-end -rotate-[25deg] opacity-75'>
              <GagsiMaskIcon width={125} height={125} color='#000000' />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
