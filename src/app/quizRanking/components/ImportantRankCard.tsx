import React from 'react'

import GagsiMaskIcon from '@/components/quiz/svg/GagsiMaskIcon'

type ImportantRankCardProps = {
  className: string;
  color: string;
  header: string;
  uid: string;
}

export default function ImportantRankCard(props : ImportantRankCardProps) {
  return (
    <div 
      className={'bg-white overflow-hidden flex flex-col justify-center rounded-lg ' + props.className}
      style={{border: '1px solid ' + props.color}}
    >
      <div className='text-black border-b-2 h-[20%] flex items-center justify-center text-sm font-bold'>
        <span className='text-xs' style={{color: props.color}}>{props.header}</span>
      </div>
      <div className='text-black h-[60%] flex items-center justify-center text-sm font-bold'>
        <GagsiMaskIcon width={80} height={80} color={"#222222"}/>
      </div>
      <div 
        className='text-black h-[20%] flex items-center justify-center text-sm font-bold'
        style={{backgroundColor: props.color}}
      >
        <span className='text-white text-xs'>상세 보기</span>
      </div>
    </div>
  )
}
