"use client"

import React from 'react'
import { CatCode2String } from '@/components/quiz/CHCategories';

import { Bar, Line } from 'react-chartjs-2';
import { ChartOptions, ChartData } from 'chart.js';
import 'chartjs-adapter-moment';
import 'chart.js/auto';

import QuizScoreCard from './components/QuizScoreCard';
import RecentCommentsCard from './components/RecentCommentsCard';

import GagsiMaskIcon from '@/components/quiz/svg/GagsiMaskIcon';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { useAppSelector } from '@/lib/redux/store';

export default function RankingDetail() {
  const {isAuth, userName, userId} = useAppSelector((state) => state.authReducer.value);
  console.log(isAuth);

  // 오답률 차트 관련련
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
      title: { display: true, text: '문제 분류별 오답률' },
    },
    scales: {
      y: { stacked: true },
      x: { beginAtZero: true },
    },
    datasets: {
      bar: { barPercentage: 0.5 },
    }
  };
  
  const quizResults = [
    { date:"2025.01.24", score:70 },
    { date:"2025.01.18", score:30 },
    { date:"2025.01.19", score:40 },
    { date:"2025.01.20", score:50 },
    { date:"2025.01.21", score:60 },
    { date:"2025.01.22", score:70 },
    { date:"2025.01.23", score:80 },
    { date:"2025.01.24", score:90 },
    { date:"2025.01.25", score:100 },
    { date:"2025.01.26", score:10 },
    { date:"2025.01.27", score:20 },
    { date:"2025.01.24", score:80 },
  ];
  const formattedResults : {date:Date, score:number}[] = quizResults.map((elem)=>{
    const tempDate = new Date(elem.date);
    tempDate.setHours(0,0,0,0);
    return {date:tempDate, score: elem.score} 
  }).filter((elem)=>{
    const CurrentDate = new Date();
    const week2MilliSeconds = 6.048e+8;
    return CurrentDate.valueOf() - elem.date.valueOf()  < week2MilliSeconds;
  });
  formattedResults.sort((a, b)=>{
    if(a.date.valueOf() === b.date.valueOf()){
      return b.score - a.score;
    }
    return a.date > b.date ? 1 : -1;
  });
  const NoDupSet = new Set<number>();
  const formattedResultsNoDup : {date:Date, score:number}[] = [];
  formattedResults.forEach((elem)=>{
    if(!NoDupSet.has(elem.date.valueOf())){
      NoDupSet.add(elem.date.valueOf());
      formattedResultsNoDup.push(elem);
    }
  });
  // 이번주 일별 최고 기록 차트
  const scoresData : ChartData<"line", number[], string> = {
    labels: formattedResultsNoDup.map(({date})=>date.toDateString()),
    datasets:[
      {
        data: formattedResultsNoDup.map(({score})=>score),
        backgroundColor: '#9999FF'
      }
    ],
  }
  const scoresOption : ChartOptions<"line"> = {
    scales: {
      x: {
        type: 'time',
        time: {
            unit: 'day'
        }
      }
    },
    plugins: {
      legend: { display: false },
      title: { display: true, text: '이번주 일별 최고 기록' },
    },
  }

  const dummyImage = 'http://www.cha.go.kr/unisearch/images/treasure/1618146.jpg';
  const RecentComments = [
    {
      postId: "1",
      comment: "This is a Comment!"
    },
    {
      postId: "2",
      comment: "This is a Comment!"
    },
    {
      postId: "3",
      comment: "This is a Comment!"
    },
    {
      postId: "4",
      comment: "This is a Comment!"
    },
    {
      postId: "5",
      comment: "This is a Comment!"
    }
  ];
  const FormattedCommentsData : {url:string, name:string, comment:string}[] = [
    {url:dummyImage, name:"안녕하세요", comment:"이것은 테스트용 댓글입니다."},
    {url:dummyImage, name:"안녕하세요", comment:"이것은 테스트용 댓글입니다."},
    {url:dummyImage, name:"안녕하세요", comment:"이것은 테스트용 댓글입니다."},
    {url:dummyImage, name:"안녕하세요", comment:"이것은 테스트용 댓글입니다."},
    {url:dummyImage, name:"안녕하세요", comment:"이것은 테스트용 댓글입니다."}
  ];

  //유저 정보
  const labels = ["좋아요", "댓글", "문화재 퀴즈 최고점수"];
  const value = ["1234", "12", "100"];
  function socialData(label: string, value: string, key: React.Key | null | undefined){
    return (
      <div key={key} className='w-[20%] aspect-[1.75/1] flex flex-col justify-center items-center'>
        <span className='font-bold text-sm'>{label}</span>
        <span className='text-sm'>{value}</span>
      </div>
    );
  }

  return (
    <div className='flex flex-col items-center'>
      <div 
        className='w-full aspect-[6/1] bg-[#00000080] flex flex-col justify-center items-center'
        style={{backgroundImage: 'url("/QuizRanking/bukchon.jpg")', backgroundSize:'cover', backgroundPosition: '0% 100%', backgroundAttachment:'fixed', backgroundBlendMode: 'multiply'}}
      >
      </div>
      <div className='w-full min-w-[900px] max-w-[1200px] flex flex-col justify-center items-center'>
        {/* Social info */}
        <div className='w-[80%] place-content-evenly flex items-end overflow-hidden lg:mt-[-100px] mt-4 mb-4'>
          <GagsiMaskIcon color={'#000000'} className='w-[25%] aspect-square rounded-full overflow-hidden flex flex-col items-center justify-center bg-white border-4 border-black'/>
          {labels.map((elem, index)=>socialData(elem, value[index], index))}
        </div>
        {/* 문화재 퀴즈 최근 결과 */}
        <div className='w-full flex flex-col justify-center items-center mb-4'>
          <div className='w-[80%] font-bold text-2xl border-t-2 pt-4'>문화재 퀴즈 최근 결과</div>
          <div className='w-[80%] flex'>
            <Swiper
              spaceBetween={20} 
              slidesPerView={4} 
              breakpoints={{
                1000: {
                  slidesPerView: 5
                }
              }}
            >
              {formattedResults.map(({date, score}, index)=><SwiperSlide key={index} ><QuizScoreCard className='w-[15%] min-w-[150px] aspect-[1.2/1] m-3' color='#5555ff' header={date.toLocaleDateString()} content={score.toString()} footer={date.toLocaleTimeString()} /></SwiperSlide>)}
            </Swiper>
          </div>
        </div>
        {/* 유저 통계 */}
        <div className='w-full flex flex-col justify-center items-center mb-4'>
          <div className='w-[80%] font-bold text-2xl border-t-2 pt-4'>유저 통계</div>
          <div className='w-[80%] flex justify-center items-center'>
            <div className='w-[40%] min-h-[500px] flex justify-center items-center m-1'>
              <Bar data={initErrRateData} options={initErrRateOptions} />
            </div>
            <div className='w-[60%] min-h-[500px] flex justify-center items-center m-1'>
              <Line data={scoresData} options={scoresOption} />
            </div>
          </div>
        </div>
        {/* 최근 평가한 문화재 */}
        <div className='w-full flex flex-col justify-center items-center mb-4'>
          <div className='w-[80%] font-bold text-2xl border-t-2 pt-4'>최근 평가한 문화재</div>
          <div className='w-[80%] flex'>
            <Swiper
              spaceBetween={20} 
              slidesPerView={2} 
              breakpoints={{
                1000: {
                  slidesPerView: 3
                }
              }}
            >
              {FormattedCommentsData.map(({url, name, comment}, index)=><SwiperSlide key={index} ><RecentCommentsCard className='w-[20%] min-w-[275px] aspect-[1.5/1] m-3' url={url} name={name} comment={comment} /></SwiperSlide>)}
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  )
}
