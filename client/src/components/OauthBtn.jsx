import React from 'react' 

function OauthBtn({icon,children}) {
  return (
    <button className='w-full h-fit border border-black border-2 rounded-xl font-thin capitalize text-slate-500 flex justify-center items-center p-1 my-3'>
    <div className='w-[34px] h-[34px] bg-slate-700 mr-1'>
        <img src={icon} alt="" />
    </div>
    <span className=''>{children}</span>
 </button>
  )
}

export default OauthBtn