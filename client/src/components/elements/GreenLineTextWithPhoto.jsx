
import React from 'react'
import TextWithGreenLine from '../TextWithGreenLine'
function GreenLineTextWithPhoto({children,header}) {
  return (
    <div className='w-full md:h-[400px] sm:h-[600px] px-10 py-14  border-y-slate-700 border flex md:flex-row sm:flex-col '>
        <div className='md:w-[50%] md:h-full bg-black sm:w-full sm:h-full mb-5'></div>
        <TextWithGreenLine header={header} children={children}/>
        
    </div>
  )
}

export default GreenLineTextWithPhoto