import React from 'react'

import CheckedIcon from './svg/CheckedIcon'
import CrossedIcon from './svg/CrossedIcon'

type ProblemCardProps = {
  ref: React.RefObject<HTMLDivElement | null>;
  url: string
}

export default function ProblemCard(props : ProblemCardProps) {
  return (
    <div className='
      w-full max-w-[900px] min-w-[600px] aspect-[2.5/1] m-2
      transition-opacity duration-300 ease-in-out
      rounded-lg drop-shadow-2xl overflow-hidden
      flex
    ' ref={props.ref}>
      <div 
        className={`w-[10%] h-full flex justify-center items-center bg-[#00000080] rounded-lg`}
        style={{backgroundImage: `url(${props.url})`, backgroundSize:'cover', backgroundPosition: 'center', backgroundBlendMode: 'multiply'}}
      >
        {/* <CheckIcon width={40} height={40} color={"#77FF77"}/> */}
        <CrossedIcon width={40} height={40} color={"#FF2222"}/>
      </div>
      <div className='w-[90%] h-full flex flex-col bg-slate-50'>
        <div className='w-full h-[10%] min-h-[50px] flex items-end ml-5'>
          <span className='text-xl md:text-2xl text-black ml-2'>Q1.</span>
          <span className='text-sm md:text-lg text-black ml-2'>사진 속 문화재의 이름은?</span>
        </div>
        <div className='w-full h-[90%] flex place-content-evenly items-center'>
          <div className='w-[30%] aspect-square rounded-lg' style={{backgroundImage: `url(${props.url})`, backgroundSize: 'contain'}}></div>
          <div className='w-[55%] aspect-[16/9] rounded-lg overflow-hidden grid grid-cols-2 gap-1'>
            <div className='bg-black opacity-75 flex justify-center items-center transition-colors ease-in-out hover:bg-red-700'><span className='text-sm md:text-lg'>선택지 1</span></div>
            <div className='bg-black opacity-75 flex justify-center items-center transition-colors ease-in-out hover:bg-blue-700'><span className='text-sm md:text-lg'>선택지 2</span></div>
            <div className='bg-black opacity-75 flex justify-center items-center transition-colors ease-in-out hover:bg-yellow-700'><span className='text-sm md:text-lg'>선택지 3</span></div>
            <div className='bg-black opacity-75 flex justify-center items-center transition-colors ease-in-out hover:bg-green-700'><span className='text-sm md:text-lg'>선택지 4</span></div>
          </div>
        </div>
      </div>
    </div>
  )
}
