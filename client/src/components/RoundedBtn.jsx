import React from 'react'

function RoundedBtn({children}) {
  return (
    <button className='min-w-20 w-fit min-h-7 h-fit p-1 m-2 text-slate-900 font-semibold border border-slate-200 rounded-2xl capitalize'>{children}</button>
  )
}

export default RoundedBtn