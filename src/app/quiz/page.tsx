"use client"

import React, { useEffect, useRef, createRef, useCallback, useMemo } from 'react'
import ProblemCard from './components/ProblemCard';

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
  //TEST DATA
  const dummyImage = 'http://www.cha.go.kr/unisearch/images/treasure/1618146.jpg';
  
  //useCallback, useMemo 관련 경고 더미 데이터이니까 일단 놔둘것
  //실제 데이터에는 useMemo 사용
  const dummyData : ProblemData[] = [
    {id:"1", problem:"이것은 문제입니다. 이것은 문제입니까?", answer:1, url:dummyImage, selection:['선택지1', '선택지2', '선택지3', '선택지4']},
    {id:"2", problem:"이것은 문제입니다. 이것은 문제입니까?", answer:1, url:dummyImage, selection:['선택지1', '선택지2', '선택지3', '선택지4']},
    {id:"3", problem:"이것은 문제입니다. 이것은 문제입니까?", answer:1, url:dummyImage, selection:['선택지1', '선택지2', '선택지3', '선택지4']},
    {id:"4", problem:"이것은 문제입니다. 이것은 문제입니까?", answer:1, url:dummyImage, selection:['선택지1', '선택지2', '선택지3', '선택지4']},
    {id:"5", problem:"이것은 문제입니다. 이것은 문제입니까?", answer:1, url:dummyImage, selection:['선택지1', '선택지2', '선택지3', '선택지4']},
    {id:"6", problem:"이것은 문제입니다. 이것은 문제입니까?", answer:1, url:dummyImage, selection:['선택지1', '선택지2', '선택지3', '선택지4']},
    {id:"7", problem:"이것은 문제입니다. 이것은 문제입니까?", answer:1, url:dummyImage, selection:['선택지1', '선택지2', '선택지3', '선택지4']},
    {id:"8", problem:"이것은 문제입니다. 이것은 문제입니까?", answer:1, url:dummyImage, selection:['선택지1', '선택지2', '선택지3', '선택지4']},
    {id:"9", problem:"이것은 문제입니다. 이것은 문제입니까?", answer:1, url:dummyImage, selection:['선택지1', '선택지2', '선택지3', '선택지4']},
    {id:"10", problem:"이것은 문제입니다. 이것은 문제입니까?", answer:1, url:dummyImage, selection:['선택지1', '선택지2', '선택지3', '선택지4']},
    {id:"11", problem:"이것은 문제입니다. 이것은 문제입니까?", answer:1, url:dummyImage, selection:['선택지1', '선택지2', '선택지3', '선택지4']},
    {id:"12", problem:"이것은 문제입니다. 이것은 문제입니까?", answer:1, url:dummyImage, selection:['선택지1', '선택지2', '선택지3', '선택지4']},
    {id:"13", problem:"이것은 문제입니다. 이것은 문제입니까?", answer:1, url:dummyImage, selection:['선택지1', '선택지2', '선택지3', '선택지4']},
    {id:"14", problem:"이것은 문제입니다. 이것은 문제입니까?", answer:1, url:dummyImage, selection:['선택지1', '선택지2', '선택지3', '선택지4']},
    {id:"15", problem:"이것은 문제입니다. 이것은 문제입니까?", answer:1, url:dummyImage, selection:['선택지1', '선택지2', '선택지3', '선택지4']},
    {id:"16", problem:"이것은 문제입니다. 이것은 문제입니까?", answer:1, url:dummyImage, selection:['선택지1', '선택지2', '선택지3', '선택지4']},
    {id:"17", problem:"이것은 문제입니다. 이것은 문제입니까?", answer:1, url:dummyImage, selection:['선택지1', '선택지2', '선택지3', '선택지4']},
    {id:"18", problem:"이것은 문제입니다. 이것은 문제입니까?", answer:1, url:dummyImage, selection:['선택지1', '선택지2', '선택지3', '선택지4']},
    {id:"19", problem:"이것은 문제입니다. 이것은 문제입니까?", answer:1, url:dummyImage, selection:['선택지1', '선택지2', '선택지3', '선택지4']},
    {id:"20", problem:"이것은 문제입니다. 이것은 문제입니까?", answer:1, url:dummyImage, selection:['선택지1', '선택지2', '선택지3', '선택지4']},
  ]; 

  //TODO : Custom Hook
  const refs = useRef(dummyData.map(()=>createRef<HTMLDivElement>()));
  useEffect(()=>{
    const observer = new IntersectionObserver((entries)=>{
      entries.forEach((elem)=>{
        if(elem.isIntersecting){
          elem.target.classList.add('opacity-100');
          elem.target.classList.remove('opacity-0');
          observer.unobserve(elem.target);
        }
        else{
          elem.target.classList.add('opacity-0');
        }
      });
    }, { threshold: 0.5 });
    refs.current.forEach((elem)=>{
      if(elem.current !== null) observer.observe(elem.current);
    });
  }, [refs]);

  const userSelected : UserSelection = useMemo(()=>{
    const temp : UserSelection = {};
    dummyData.forEach((elem)=>{
      temp[elem.id] = -1;
    });
    return temp;
  }, [dummyData]);

  const SelectAnswerCallback = useCallback((id : string, selected : number)=>{
    userSelected[id] = selected;
  }, [userSelected]); //userSelected 로 뭔가를 하는 것은 아니어서 빈칸이지만 찝찝하다

  function OnClickToTop(){
    window.scrollTo({
      top: 0, left: 0, behavior:'smooth'
    });
  }
  function OnClickSubmit(){
    console.log(userSelected);
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
            <div className='w-full flex flex-col items-center'>
              {dummyData.map((elem, index)=><ProblemCard key={elem.id} id={elem.id} ref={refs.current[index]} url={elem.url} selectAnswer={elem.selection} selectAnswerCallback={SelectAnswerCallback}/> )}
            </div>
            <div className='w-full aspect-[6/1] flex justify-center items-center gap-10 m-2'>
              <div onClick={()=>OnClickToTop()} className='h-[50%] min-h-[125px] aspect-square bg-red-700 rounded-full flex justify-center items-center opacity-75 hover:opacity-100 transition-opacity ease-in-out'>
                <span className=''>처음으로</span>
              </div>
              <div onClick={()=>OnClickSubmit()} className='h-[50%] min-h-[125px] aspect-square bg-blue-700 rounded-full flex justify-center items-center opacity-75 hover:opacity-100 transition-opacity ease-in-out'>
                <span className=''>제출하기</span>
              </div>
            </div>
          </div>
          <div className='shrink w-[15%]'></div>
        </div>
      </div>
    </div>
  )
}