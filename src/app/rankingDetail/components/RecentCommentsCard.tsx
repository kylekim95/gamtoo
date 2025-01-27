import React from 'react'

type RecentCommentsCardProps = {
  className: string,
  url: string,
  name: string,
  comment: string
};

export default function RecentCommentsCard(props : RecentCommentsCardProps) {
  return (
    <div className={props.className + ' border rounded-lg overflow-hidden shadow-xl'}>

    </div>
  )
}
