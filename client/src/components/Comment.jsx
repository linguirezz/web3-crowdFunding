import React from 'react'
import SmallIcon from './SmallIcon'
import RoundedBtn from './RoundedBtn'
import TimeProgress from './TimeProgress'
function Comment() {
  return (
    <div className="w-full my-10">
    <div className="flex items-center">
    
   <div className="w-10 h-10 bg-black rounded-full mr-1">
  <img className="" src="" alt="" />
   </div>
    <div className="flex flex-col justify-center items-center h-fit w-fit  ">
      <div className="flex flex-col items-center ">
        <div className="flex items-center">
        <SmallIcon>
          <img src="" alt="" />
        </SmallIcon>
      <span className="text-lg font-medium text-slate-900 ">Twisted Cryptids</span>  
       <SmallIcon><img src="" alt="" /></SmallIcon>
        </div>
        
      <div className="text-slate-500 text-sm self-start">
      Ramy Badie
    </div>    
    <TimeProgress timeLeft={9} percentage={3175}/>
      </div>
      </div>
    </div>
    <div className="px-10 m-1 flex items-center mr-1">
      
   
      
    </div>
    <p className="m-1 px-10 ">You’re a wild mythic creature sought after by hunters, hikers, and researchers who want to catch a glimpse of you — but your job in this game is to stage hoaxes and plant decoys to build up your legend.</p>
    
    <div className="flex px-8 ">
      <RoundedBtn>tableto games</RoundedBtn>
      <RoundedBtn>st.louis,MO</RoundedBtn>
    </div>
    </div> 
  )
}

export default Comment