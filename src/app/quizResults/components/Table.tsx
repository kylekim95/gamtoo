import React from 'react'
import Row from './Row';

interface TableProps<T extends object>{
  data: T[];
  spacing: number[];
  desc?: string[];
};

export default function Table<T extends object>(props : TableProps<T>) {
  return (
    <div className='bg-[#FFFFFF80] w-full h-auto overflow-hidden border-t'>
      { props.desc && <Row data={props.desc} spacing={props.spacing}/> }
      { props.data.map((elem, index)=><Row<T> data={elem} spacing={props.spacing} key={index}/>) }
    </div>
  )
}
