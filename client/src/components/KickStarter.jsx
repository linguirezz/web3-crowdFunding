import React from 'react'

function KickStarter() {
  return (
    <div>

    <div className="flex flex-col  overflow-x-hidden h-fit items-center m-5  ">
      <h1 className='xl-text-header'>bring a creative project to life</h1>
      <div className="w-fit h-fit  flex flex-col mt-5 ">
        <h2 className="mb-4 w-fit h-fit self-center">
          on kickstarter:
        </h2>
        <ul className="w-[600px] h-[100px] grid grid-flow-col grid-cols-3  border-slate-200 border shadow-xl">
          <li className="border  flex flex-col items-center justify-center ">
            <span className="xl-num">266,992</span>
            <h3>Projects Funded</h3>
          </li>
          <li className="  border flex flex-col items-center justify-center">
          <span className="xl-num">$8,330,918,689</span>
          <h3>towards creative work</h3>
          </li>
          <li className="  border  flex flex-col items-center justify-center">
          <span className="xl-num">98,276,580</span>
          <h3>pledges</h3>
          </li>
        </ul>
      </div>
    </div>

  </div>

  )
}

export default KickStarter