import React, { useEffect, useState } from 'react'

type CapsuleSelectMenuProps = {
  className: string;
  items: object;
  onSelectedChanged?: (selectedItems : object)=>void
}
type CapsuleSelectItemProps = {
  id: string;
  item: string;
  selected: boolean;
  onClick: (id: string)=>void;
}

function CapsuleSelectItem(props : CapsuleSelectItemProps){
  return (
    <div className={
        'min-w-[100px] border-2 border-solid rounded-full flex justify-center items-center px-2 transition-colors ' + 
        (props.selected ? 'bg-violet-400 border-white text-white' : 'bg-white border-violet-400 text-black')
      }
      onClick={()=>props.onClick(props.id)}
    >
      <span className={'text-xs font-bold'}>{props.item}</span>
    </div>
  )
}

export default function CapsuleSelectMenu(props : CapsuleSelectMenuProps) {  
  const [selectedItems, setSelectedItems] = useState(Object.keys(props.items).map((elem)=>{ return {[elem]:false}}).reduce((p, c)=>Object.assign(p, c)));
  
  function OnClickSelectItem(id: string){
    const newState = {[id]: !selectedItems[id]};
    setSelectedItems({...selectedItems, ...newState});
  }
  useEffect(()=>{
    
  }, []);

  return (
    <div className={props.className + ` flex flex-wrap gap-1`}>
      {Object.entries(props.items).map(([_key, value])=><CapsuleSelectItem key={_key} id={_key} item={value} selected={selectedItems[_key]} onClick={OnClickSelectItem}/> )}
    </div>
  )
}
