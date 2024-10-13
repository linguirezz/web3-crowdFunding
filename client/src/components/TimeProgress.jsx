import React from 'react'
import SmallIcon from './SmallIcon'
function TimeProgress({timeLeft,percentage}) {
  return (
    <div className='flex items-center '>
        <SmallIcon></SmallIcon>
        <span className=" text-sm text-slate-700">{timeLeft} days left - {percentage}% funded</span>
    </div>
    
    
)
}

export default TimeProgress