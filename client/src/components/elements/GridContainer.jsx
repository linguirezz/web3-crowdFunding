import React from 'react'

function GridContainer() {
  return (
    <ul className=" w-full  sm:h-[400px] md:h-[1000px] lg:h-[500px]  p-10 grid grid-flow-row  md:grid-cols-2 lg:grid-cols-4 sm:grid-cols-2 md:grid-rows-2  gap-5 m-0 my-3">
          <li className="w-full h-full lg:h-[400px] border p-5 overflow-hidden">
            <div className='w-[80%] h-[70%] m-auto bg-slate-700'></div> 
            <div className='mt-3'>
            <h1 className='text-xl capitalize  '>header</h1>
            <p className='w-full h-fit text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, laborum. Distinctio repellendus nisi eius recusandae sit ullam blanditiis aspernatur, fugiat explicabo ut maiores laudantium, fuga, nesciunt eos culpa ea iste.</p>
            </div>
            
          </li>
          <li className="w-full h-full lg:h-[400px] border p-5 overflow-hidden">
          <div className='w-[80%] h-[70%] m-auto bg-slate-700'></div> 
            <div className='mt-3'>
            <h1 className='text-xl capitalize  '>header</h1>
            <p className='w-full h-fit text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, laborum. Distinctio repellendus nisi eius recusandae sit ullam blanditiis aspernatur, fugiat explicabo ut maiores laudantium, fuga, nesciunt eos culpa ea iste.</p>
            </div>
             
          </li>
          <li className="w-full h-full lg:h-[400px] border p-5 overflow-hidden">
          <div className='w-[80%] h-[70%] m-auto bg-slate-700'></div> 
            <div className='mt-3'>
            <h1 className='text-xl capitalize  '>header</h1>
            <p className='w-full h-fit text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, laborum. Distinctio repellendus nisi eius recusandae sit ullam blanditiis aspernatur, fugiat explicabo ut maiores laudantium, fuga, nesciunt eos culpa ea iste.</p>
            </div>
             
          </li>
           <li className="w-full h-full lg:h-[400px] border p-5 overflow-hidden">
           <div className='w-[80%] h-[70%] m-auto bg-slate-700'></div> 
            <div className='mt-3'>
            <h1 className='text-xl capitalize  '>header</h1>
            <p className='w-full h-fit text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, laborum. Distinctio repellendus nisi eius recusandae sit ullam blanditiis aspernatur, fugiat explicabo ut maiores laudantium, fuga, nesciunt eos culpa ea iste.</p>
            </div>
             
          </li>
    </ul>
  )
}

export default GridContainer