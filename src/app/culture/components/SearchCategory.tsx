'use client'

import React, { useState } from 'react'

interface SearchCategoryProps {
  Categories: string[];
  Changed: (checked: boolean[]) => void;
  className?: string;
}

export default function SearchCategory(props: SearchCategoryProps) {
  const [checked, setChecked] = useState(props.Categories.map(() => false));

  const onChange = (e: React.ChangeEvent<HTMLInputElement>, index: number) => {
    const Arr = checked.map((item, _index) => {
      if (index === _index) {
        return !checked[_index];
      }
      return checked[_index];
    });
    setChecked(Arr);
    props.Changed(Arr);
  };

  return (
    <div>
  <div className={`flex flex-col gap-2 ${props.className}`}>
    {props.Categories.map((item, index) => (
      <div key={index} className="flex items-center gap-3">
        <input
          type="checkbox"
          name={item}
          id={item}
          checked={checked[index]}
          onChange={(e) => onChange(e, index)}
          className="peer hidden"
        />
        <label
          htmlFor={item}
          className="w-4 h-4 border border-gray-300 rounded-sm 
            peer-checked:border-pink-500 
            flex justify-center items-center 
            peer-checked:before:content-['✔'] 
            peer-checked:before:text-pink-500
            peer-checked:before:text-sm"
        >
        </label>
        <label htmlFor={item} className={`text-base font-bold ${checked[index] ? 'text-pink-500' : ''}`}>
          {item}
        </label>
      </div>
    ))}
  </div>
</div>
  );
}
