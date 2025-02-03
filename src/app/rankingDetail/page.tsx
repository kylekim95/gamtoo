"use client"

import React, { useState, useEffect} from 'react'
import { CatCode2String } from '@/components/quiz/CHCategories';

import { Bar, Line } from 'react-chartjs-2';
import { ChartOptions, ChartData, ChartDataset } from 'chart.js';
import 'chartjs-adapter-moment';
import 'chart.js/auto';

import QuizScoreCard from './components/QuizScoreCard';
import RecentCommentsCard from './components/RecentCommentsCard';

import GagsiMaskIcon from '@/components/quiz/svg/GagsiMaskIcon';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import useQuizInfoManager from '@/components/quiz/useQuizInfoManager';
import { redirect, useSearchParams } from 'next/navigation';

export default function RankingDetail() {
  const searchParams = useSearchParams();
  const uid = searchParams.get('userId');
  if(!uid){
    redirect('/quizRanking');
  }

  // 오답률 차트 관련련
  const [errRateData, setErrRateData] = useState<ChartData<"bar", number[], string>>({
    labels: [...Object.values(CatCode2String)],
    datasets:[
      {
        label: '내 오답률',
        data: [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        backgroundColor: '#9999FF'
      },
      {
        label: '전체 유저 오답률',
        data: [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        backgroundColor: '#CACACA'
      }
    ],
  });
  const {getAllQuizInfo} = useQuizInfoManager();
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
  // 점수 차트 관련
  const [scoresData, setScoresData] = useState<ChartData<"line", number[], string>>({
    labels: [],
    datasets:[
      {
        data: [],
        backgroundColor: '#9999FF'
      }
    ],
  });
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

  useEffect(()=>{
    async function Init(){
      const quizUsers = await getAllQuizInfo();
      const newDataset : ChartDataset<"bar", number[]>[] = [];
      const countCorrect = new Map<string, number>();
      const countAll = new Map<string, number>();
      quizUsers.forEach((elem)=>{
        elem.errRate_Correct.forEach((elem2)=>{
          if(!countCorrect.get(elem2[0])) countCorrect.set(elem2[0], 0);
          const curVal = countCorrect.get(elem2[0]) ?? 0;
          const newVal = elem2[1] + curVal;
          countCorrect.set(elem2[0], newVal);
        });
        elem.errRate_Total.forEach((elem2)=>{
          if(!countAll.get(elem2[0])) countAll.set(elem2[0], 0);
          const curVal = countAll.get(elem2[0]) ?? 0;
          const newVal = elem2[1] + curVal;
          countAll.set(elem2[0], newVal);
        });
      });
      const newData : number[] = [];
      countCorrect.forEach((elem)=>{newData.push(elem);});
      let cnt = 0;
      countAll.forEach((elem)=>{newData[cnt++] /= elem});
      const formatData = newData.map((elem)=>isNaN(elem) ? 0 : 1 - elem);
      newDataset.push({
        label: '전체 유저 오답률',
        data: formatData,
        backgroundColor: '#CACACA'
      });
      if(uid){
        const myQuizData = quizUsers.find((elem)=>elem.id===uid);
        const myErrRateData = myQuizData?.errRate_Correct.map((elem)=>{
          const total = myQuizData.errRate_Total.find((errTot)=>errTot[0]===elem[0]);
          if(!total || total[1] === 0) return 0;
          return 1 - (elem[1] / total[1]);
        });
        newDataset.unshift({
          label: '내 오답률',
          data: myErrRateData ?? [],
          backgroundColor: '#9999FF'
        });
      }
      setErrRateData({
        labels: [...Object.values(CatCode2String)],
        datasets: newDataset
      });

      // 점수 차트 관련
      function getDiffCurTime(date : Date) {
        return (new Date()).valueOf() - date.valueOf();
      }
      const userQuizData = quizUsers.filter((elem)=>elem.id===uid)[0];
      const formattedData = userQuizData.scores.map((elem)=>{
        const _elem = elem;
        _elem[1].setHours(0,0,0,0);
        return _elem;
      }).filter((elem)=>getDiffCurTime(elem[1]) < 6.048e+8).sort((a, b)=>{
        if(a[1].valueOf() - b[1].valueOf() === 0){
          return b[0] - a[0];
        }
        return (a[1].valueOf() - b[1].valueOf());
      });
      const noDupData = formattedData.filter((elem, index)=>{
        return formattedData.findIndex((elem2)=>elem2[1].valueOf()===elem[1].valueOf()) === index;
      });
      setScoresData({
        labels: noDupData.map((elem)=>elem[1].toDateString()),
        datasets:[
          {
            data: noDupData.map((elem)=>elem[0]),
            backgroundColor: '#9999FF'
          }
        ],
      })
    }
    Init();
  }, [getAllQuizInfo, uid]);

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
              {scoresData.datasets[0].data.map((score, index)=><SwiperSlide key={index} ><QuizScoreCard className='w-[15%] min-w-[150px] aspect-[1.2/1] m-3' color='#5555ff' header={scoresData.labels ? scoresData.labels[index] : ''} content={score.toString()} footer={scoresData.labels ? scoresData.labels[index] : ''} /></SwiperSlide>)}
            </Swiper>
          </div>
        </div>
        {/* 유저 통계 */}
        <div className='w-full flex flex-col justify-center items-center mb-4'>
          <div className='w-[80%] font-bold text-2xl border-t-2 pt-4'>유저 통계</div>
          <div className='w-[80%] flex flex-col justify-center items-center'>
            <div className='w-[80%] min-h-[200px] flex justify-center items-center m-1'>
              <Line data={scoresData} options={scoresOption} />
            </div>
            <div className='w-[80%] min-h-[400px] flex justify-center items-center m-1'>
              <Bar data={errRateData} options={initErrRateOptions} />
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
