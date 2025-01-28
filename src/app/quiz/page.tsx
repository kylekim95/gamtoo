"use client"

import React, { useEffect, useRef, createRef, useCallback, useMemo, useState } from 'react'
import { useRouter, redirect } from 'next/navigation';
import ProblemCard, { DefaultProblemCard } from './components/ProblemCard';
import { useAppSelector } from '@/lib/redux/store';
import { heritageListRequest, heritageListResponse, getHeritageList } from './components/heritageList';
import { getHeritageDetailed, heritageDetailedRequest, heritageDetailedResponse } from './components/heritageDetail';

type ProblemData = {
  id: string;
  problem: string;
  answer: number;
  url:string;
  selection: string[];
}
interface UserSelection {
  [index : string] : number;
};

export default function QuizPage() {
  const router = useRouter();
  // 테스트 할때 불편해서 제외됨
  // const {isAuth, userName, userId} = useAppSelector((state) => state.authReducer.value);
  // if(!isAuth || userName==='' || userId===''){
  //   redirect('/login');
  // }

  const defaultProblemData = { id:'', problem: '', answer: -1, url: '', selection: [] };
  const numProblems = 20;
  const problems = useRef<ProblemData[]>(new Array(numProblems).fill(defaultProblemData));
  const [loaded, setLoaded] = useState(0);
  useEffect(()=>{
    async function InitProblems() {
      const heritageListReqObj : heritageListRequest = { pageUnit: numProblems * 4 };
      const heritageList : heritageListResponse[] = await getHeritageList(heritageListReqObj);
      for(let i = 0; i < numProblems; i++){
        const answerInd = i * 4;
        const heritageDetailedReqObj : heritageDetailedRequest = { ccbaAsno: heritageList[answerInd].ccbaAsno, ccbaCtcd: heritageList[answerInd].ccbaCtcd, ccbaKdcd: heritageList[answerInd].ccbaKdcd };
        const heritageDetailed : heritageDetailedResponse | null = await getHeritageDetailed(heritageDetailedReqObj);
        if(heritageDetailed){
          const newProblem : ProblemData = {
            answer: 1,
            id: i.toString(),
            problem: '사진 속 문화유산의 이름은?',
            selection: [heritageList[answerInd].ccbaMnm1, '2', '3', '4'],
            url: heritageDetailed.imageUrl
          }
          problems.current[i] = newProblem;
          setLoaded(i);
        }
      }
    }
    InitProblems();
  }, []);

  //TODO : Custom Hook
  const refs = useRef(problems.current.map(()=>createRef<HTMLDivElement>()));
  useEffect(()=>{
    const observer = new IntersectionObserver((entries)=>{
      for(let i = 0; i < entries.length; i++){
        if(entries[i].isIntersecting){
          entries[i].target.classList.add('opacity-100');
          entries[i].target.classList.remove('opacity-0');
          observer.unobserve(entries[i].target);
        }
        else{
          entries[i].target.classList.add('opacity-0');
        }
      }
    }, { threshold: 0.5 });
    refs.current.forEach((elem)=>{
      if(elem.current !== null) observer.observe(elem.current);
    });
  }, [refs, loaded]);

  const userSelected : UserSelection = useMemo(()=>{
    const temp : UserSelection = {};
    problems.current.forEach((elem)=>{
      temp[elem.id] = -1;
    });
    return temp;
  }, []);
  const SelectAnswerCallback = useCallback((id : string, selected : number)=>{
    userSelected[id] = selected;
    const next = parseInt(id);
    if(next < refs.current.length && refs.current[next].current !== null){
      window.scrollTo({
        top: refs.current[next].current.offsetTop,
        behavior: 'smooth'
      });
    }
  }, [userSelected]); //userSelected 로 뭔가를 하는 것은 아니어서 빈칸이지만 찝찝하다

  function OnClickToTop(){
    window.scrollTo({
      top: 0, left: 0, behavior:'smooth'
    });
  }
  function OnClickSubmit(){
    // console.log(userSelected);
    const checkAnswers : {id:string, problem:string, answer:number, userSelect:number, result:boolean}[] = [];
    for(let i = 0; i < problems.current.length; i++){
      checkAnswers.push({
        id: problems.current[i].id,
        problem: problems.current[i].problem,
        answer: problems.current[i].answer,
        userSelect: userSelected[i],
        result: problems.current[i].answer === userSelected[i]
      });
    }
    router.push(`/quizResults?checkData=${JSON.stringify(checkAnswers)}`);
  }

  return (
    <div>
      <div className='flex flex-col items-center'>
        <div className='w-[100vw] h-[200px] bg-[#F0F0F0] flex justify-center items-center'>
          <span className='text-[#FF8341] text-[36px] md:text-[48px] font-bold'>문화재 퀴즈</span>
        </div>
        <div className='w-full flex'>
          <div className='shrink w-[15%]'></div>
          <div className='w-[70%] flex flex-col items-center'>
            <div className='w-full flex flex-col items-center mb-10'>
              { problems.current.map((elem, index)=> elem.id==='' ? <DefaultProblemCard key={index} ref={refs.current[index]}/> : <ProblemCard key={elem.id} id={index} ref={refs.current[index]} url={elem.url} selectAnswer={elem.selection} problem={elem.problem} selectAnswerCallback={SelectAnswerCallback}/> ) }
            </div>
            {/* 페이지 밑의 메뉴 화면 크기가 xl이상이면 hidden */}
            <div className='xl:hidden w-full aspect-[6/1] flex justify-center items-center gap-10 mb-10'>
              <div onClick={()=>OnClickToTop()} className='h-[50%] min-h-[150px] aspect-square bg-red-700 rounded-full flex justify-center items-center opacity-75 hover:opacity-100 transition-opacity ease-in-out cursor-pointer'>
                <span className='text-white font-bold text-sm'>처음으로</span>
              </div>
              <div onClick={OnClickSubmit} className='h-[50%] min-h-[150px] aspect-square bg-blue-700 rounded-full flex justify-center items-center opacity-75 hover:opacity-100 transition-opacity ease-in-out cursor-pointer'>
                <span className='text-white font-bold text-sm'>제출하기</span>
              </div>
            </div>
          </div>
          <div className='shrink w-[15%]'>
            {/* Sticky menu 화면 크기가 xl이하면 hidden */}
            <div className='hidden w-[50%] sticky top-[30%] xl:flex flex-col justify-center items-center gap-10 mt-10'>
              <div onClick={()=>OnClickToTop()} className='h-[50%] min-h-[150px] aspect-square bg-red-700 rounded-full flex justify-center items-center opacity-75 hover:opacity-100 transition-opacity ease-in-out cursor-pointer'>
                <span className='text-white font-bold text-sm'>처음으로</span>
              </div>
              <div onClick={OnClickSubmit} className='h-[50%] min-h-[150px] aspect-square bg-blue-700 rounded-full flex justify-center items-center opacity-75 hover:opacity-100 transition-opacity ease-in-out cursor-pointer'>
                <span className='text-white font-bold text-sm'>제출하기</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}