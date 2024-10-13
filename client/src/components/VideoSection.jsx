import React from 'react'
import TimeProgress from './TimeProgress'
import SmallIcon from './SmallIcon'
function VideoSection() {
  return (
    <div className="w-[350px] h-[300px] flex flex-col rounded-xl border hover: cursor-pointer hover:h-[600px] hover:shadow-2xl transition duration-500 ease-in-out ">
      <div className="bg-black w-full h-[200px] rounded-xl">
        <img src="" alt="" />
      </div>
      <div className="flex   m-3 p-3">
        
        <div className="w-full flex flex-col  ">
            <div className="flex  max-h-20 justify-between     ">
            <div className="w-10 h-10 bg-black rounded-full  mr-3 self-center">
          <img src="" alt="" />
        </div>
              <div>
                <div>
                <p className="w-[80%] max-h-20 overflow-y-hidden self-center">
                SILICON VALLEY GIRL : Short Film
                
                </p>
               
                </div>
              
                 <div className="text-sm text-slate-500">
              Yeon Jin Lee
            </div>
            <TimeProgress></TimeProgress>
            </div>
            <SmallIcon></SmallIcon>
              </div>
            
        </div>
      </div>
    </div>
  )
}

export default VideoSection