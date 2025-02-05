import React from 'react'

type RowProps<T extends object> = {
  data: T;
  spacing: number[];
  fontWidth?: string;
};

export default function Row<T extends object>(props : RowProps<T>) {
  const sumSpacing = props.spacing.reduce((p, c)=>p+c);
  const spacingPerc = props.spacing.map((elem)=>100*elem/sumSpacing);

  return (
    <div>
      <div className={'w-full h-10 border-b flex text-black text-md items-center overflow-hidden'}>
        {
          Object.values(props.data).map((value, index)=><span 
            style={{width: `${spacingPerc[index]}%`, overflow: 'hidden', whiteSpace: 'nowrap', textOverflow: 'ellipsis'}}
            className={'m-1 ' + props.fontWidth}
            key={index}>
          {value}</span>)
        }
      </div>
    </div>
  )
}
