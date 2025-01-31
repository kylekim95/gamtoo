"use client"

import React, { useEffect, useRef, createRef, useCallback, useMemo, useState } from 'react'
import { useRouter, redirect } from 'next/navigation';
import ProblemCard, { DefaultProblemCard } from './components/ProblemCard';
import { useAppSelector } from '@/lib/redux/store';
import { heritageListRequest, heritageListResponse, getHeritageList } from './components/heritageList';
import { quizResults } from '../quizResults/page';
import GyeongBokGungIcon from '@/components/quiz/svg/GyeongBokGungIcon';
import { GetProblem, ProblemFactoryInput, ProblemFactoryOutput } from './components/problemFactory';
// import axios from 'axios';
// import { CatCode2String } from '@/components/quiz/CHCategories';

type ProblemData = {
  id: string;
  problem: string;
  answer: string;
  url:string;
  selection: string[];
  linkTo: string;
  category: string;
}

interface UserSelection {
  [index : number] : number;
};

export default function QuizPage() {
  const router = useRouter();
  const {isAuth, userName, userId} = useAppSelector((state) => state.authReducer.value);
  if(!isAuth || userName==='' || userId===''){
    redirect('/login');
  }

  const defaultProblemData = { id:'', problem: '', answer: '', url: '', selection: [], linkTo:'' };
  const numProblems = 20;
  const problems = useRef<ProblemData[]>(new Array(numProblems).fill(defaultProblemData));
  const [loaded, setLoaded] = useState(0);
  const mounted = useRef(false);
  useEffect(()=>{
    if(mounted.current){
      return;
    }
    mounted.current = true;
    (async function InitProblems() {
      const heritageListReqObj : heritageListRequest = { pageUnit: 80 };
      const heritageList : heritageListResponse[] = await getHeritageList(heritageListReqObj);
      if(!mounted.current) return;
      //TODO: 문제의 정답을 랜덥하게 고른다
      for(let i = 0; i < numProblems; i++){
        const answerInd = i * 4 + Math.trunc(Math.random() * 4);
        const input : ProblemFactoryInput = {
          Answer_ccbaAsno : heritageList[answerInd].ccbaAsno,
          Answer_ccbaCtcd : heritageList[answerInd].ccbaCtcd,
          Answer_ccbaKdcd : heritageList[answerInd].ccbaKdcd,
          Answer_ccbaMnm1 : heritageList[answerInd].ccbaMnm1,
        }
        const problemFactoryOutput : ProblemFactoryOutput | null = await GetProblem(input);
        if(!mounted.current) break;
        if(problemFactoryOutput){
          const newProblemData : ProblemData = {
            ...problemFactoryOutput, 
            id:i.toString(), 
            linkTo: `ccbaAsno=${heritageList[answerInd].ccbaAsno}%26ccbaCtcd=${heritageList[answerInd].ccbaCtcd}%26ccbaKdcd=${heritageList[answerInd].ccbaKdcd}`,
            category: heritageList[answerInd].ccbaKdcd,
          };
          problems.current[i] = newProblemData;
          setLoaded(i);
        }
      }
    })();
    return () => {
      mounted.current = false;
    }
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
    for(let i = 0; i < numProblems; i++){
      temp[i] = -1;
    }
    return temp;
  }, []);
  const SelectAnswerCallback = useCallback((id : string, selected : number)=>{
    userSelected[parseInt(id)] = selected;
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

  async function OnClickSubmit(){
    const data : quizResults[] = [];
    let score = 0;
    const categoryMap = new Map<string, number>();
    const correctMap = new Map<string, number>();
    for(let i = 0; i < problems.current.length; i++){
      const temp : quizResults = {
        answer: problems.current[i].answer,
        id: i.toString(),
        problem: problems.current[i].problem,
        selected: problems.current[i].selection[userSelected[i]],
        correct: problems.current[i].selection[userSelected[i]] === problems.current[i].answer,
        linkTo: problems.current[i].linkTo,
      }
      if(temp.correct)
        score++;
      const currentVal = categoryMap.get(problems.current[i].category);
      const currentCorrect = correctMap.get(problems.current[i].category);
      if(!currentVal){
        categoryMap.set(problems.current[i].category, 1);
        correctMap.set(problems.current[i].category, 0);
        if(temp.correct){
          correctMap.set(problems.current[i].category, 1);
        }
      }
      else{
        categoryMap.set(problems.current[i].category, currentVal + 1);
        if(temp.correct && currentCorrect){
          correctMap.set(problems.current[i].category, currentCorrect + 1);
        }
      }
      console.log(categoryMap, correctMap);
      data.push(temp);
    }
    score = score / numProblems * 100;
    sessionStorage.setItem('recentQuizData', JSON.stringify({
      'score': score,
      'data' : JSON.stringify(data)
    }));
    router.push('/quizResults');
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
              <div onClick={()=>OnClickToTop()} className='flex-col h-[50%] min-h-[150px] aspect-square bg-red-700 rounded-full flex justify-center items-center opacity-75 hover:opacity-100 transition-opacity ease-in-out cursor-pointer'>
                <GyeongBokGungIcon width={40} height={40} color={'#FFFFFF'}/>
                <span className='text-white font-bold text-sm mt-2'>처음으로</span>
              </div>
              <div onClick={OnClickSubmit} className='flex-col h-[50%] min-h-[150px] aspect-square bg-blue-700 rounded-full flex justify-center items-center opacity-75 hover:opacity-100 transition-opacity ease-in-out cursor-pointer'>
                <GyeongBokGungIcon width={40} height={40} color={'#FFFFFF'}/>
                <span className='text-white font-bold text-sm mt-2'>제출하기</span>
              </div>
            </div>
          </div>
          <div className='shrink w-[15%]'>
            {/* Sticky menu 화면 크기가 xl이하면 hidden */}
            <div className='hidden w-[50%] sticky top-[30%] xl:flex flex-col justify-center items-center gap-10 mt-10'>
              <div onClick={()=>OnClickToTop()} className='flex-col h-[50%] min-h-[150px] aspect-square bg-red-700 rounded-full flex justify-center items-center opacity-75 hover:opacity-100 transition-opacity ease-in-out cursor-pointer'>
                <GyeongBokGungIcon width={40} height={40} color={'#FFFFFF'}/>
                <span className='text-white font-bold text-sm mt-2'>처음으로</span>
              </div>
              <div onClick={OnClickSubmit} className='flex-col h-[50%] min-h-[150px] aspect-square bg-blue-700 rounded-full flex justify-center items-center opacity-75 hover:opacity-100 transition-opacity ease-in-out cursor-pointer'>
                <GyeongBokGungIcon width={40} height={40} color={'#FFFFFF'}/>
                <span className='text-white font-bold text-sm mt-2'>제출하기</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}