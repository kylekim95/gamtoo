import React from 'react'

type TableProps<T> = {
  data: T[]
};

export default function Table<T extends []>(props : TableProps<T>) {
  return (
    <div>
      Table
    </div>
  )
}
