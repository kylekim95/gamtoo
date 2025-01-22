import React from 'react'

type ProblemCardProps = {
  ref: React.RefObject<HTMLDivElement | null>;
}

export default function ProblemCard(props : ProblemCardProps) {
  return (
    <div className='
      w-[900px] h-[350px] m-2
      transition-opacity duration-300 ease-in-out
      bg-slate-100 rounded-lg drop-shadow-lg
    ' ref={props.ref}>
      <div className='h-full flex'>
        <div className='h-full w-[100px] bg-slate-300 flex justify-center items-center rounded-l-xl'>
          <div className='h-[50px] w-[50px] bg-slate-500'></div>
        </div>
        <div className='h-full w-[800px] shrink  flex flex-col justify-center'>
          <div className='w-full h-[50px] flex items-end'>
            <span className='text-black align-text-bottom text-4xl ml-2'>Q1</span>
            <span className='text-black align-text-bottom text-xl ml-2'>그림 속 문화유산의 이름은?</span>
          </div>
          <div className='w-full h-[300px]  flex items-center place-content-evenly'>
            <div className='w-[200] h-[200px] bg-black rounded-lg'>문제 이미지</div>
            <div className='w-[400px] h-[80%] grid grid-cols-2 gap-1'>
              <div className='bg-slate-700 rounded-lg'></div>
              <div className='bg-slate-700 rounded-lg'></div>
              <div className='bg-slate-700 rounded-lg'></div>
              <div className='bg-slate-700 rounded-lg'></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
