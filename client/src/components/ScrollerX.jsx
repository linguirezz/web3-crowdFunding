import React from 'react'

function ScrollerX({children}) {
  return (
    <div className=" w-full h-fit overflow-x-scroll overflow-y-hidden my-3 grid grid-flow-col gap-3" >
        {children}
    </div>
  
  )
}

export default ScrollerX