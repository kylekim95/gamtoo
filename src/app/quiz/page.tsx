"use client"

import React, { useEffect, useRef, createRef } from 'react'
import ProblemCard from './components/ProblemCard';

export default function QuizPage() {

  //TEST DATA
  const data : string[] = [
    'bg-red-900',
    'bg-red-800',
    'bg-red-700',
    'bg-red-600',
    'bg-red-500',
    'bg-red-400',
    'bg-red-300',
    'bg-red-200',
    'bg-red-100',
    'bg-red-50'
  ];

  //TODO : Custom Hook
  const refs = useRef(data.map(()=>createRef<HTMLDivElement>()));
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
    console.log(refs);
    refs.current.forEach((elem)=>{
      if(elem.current !== null) observer.observe(elem.current);
    });
  }, [refs]);

  return (
    <div className='flex flex-col items-center'>
      <div className='w-[100vw] h-[200px] bg-[#F0F0F0] flex justify-center items-center'>
        <span className='text-[#FF8341] text-[36px] md:text-[48px] font-bold'>문화재 퀴즈</span>
      </div>
      <div className='w-[75vw] flex flex-col items-center'>
        {data.map((elem, index)=><ProblemCard key={index} ref={refs.current[index]} /> )}
      </div>
    </div>
  )
}