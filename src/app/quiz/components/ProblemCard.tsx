import React from 'react'

type ProblemCardProps = {
  ref: React.RefObject<HTMLDivElement | null>;
}

export default function ProblemCard(props : ProblemCardProps) {
  return (
    <div className='
      w-full max-w-[900px] min-w-[600px] aspect-[2.5/1] m-2
      transition-opacity duration-300 ease-in-out
      rounded-lg drop-shadow-xl overflow-hidden
      flex
    ' ref={props.ref}>
      <div className='w-[10%] h-full bg-slate-300 flex justify-center items-center'>
        <div className='w-[50px] aspect-square bg-black rounded-full'></div>
      </div>
      <div className='w-[90%] h-full flex flex-col'>
        <div className='w-full h-[10%] min-h-[50px] flex items-end '>
          <span className='text-xl md:text-2xl text-black ml-2'>Q1.</span>
          <span className='text-sm md:text-lg text-black ml-2'>사진 속 문화재의 이름은?</span>
        </div>
        <div className='w-full h-[90%] bg-slate-50 flex place-content-evenly items-center'>
          <div className='w-[55%] aspect-[16/9] rounded-lg overflow-hidden grid grid-cols-2 gap-1'>
            <div className='bg-black opacity-75 flex justify-center items-center'><span className='text-sm md:text-lg'>선택지 1</span></div>
            <div className='bg-black opacity-75 flex justify-center items-center'><span className='text-sm md:text-lg'>선택지 2</span></div>
            <div className='bg-black opacity-75 flex justify-center items-center'><span className='text-sm md:text-lg'>선택지 3</span></div>
            <div className='bg-black opacity-75 flex justify-center items-center'><span className='text-sm md:text-lg'>선택지 4</span></div>
          </div>
          <div className='w-[30%] aspect-square bg-black rounded-lg'></div>
        </div>
      </div>
    </div>
  )
}
