import React from 'react'

function CreatorCorners() {
  return (
    <div className='w-full h-fit mt-5 mb-32 p-10  border-y grid grid-flow-row lg:grid-cols-2 lg:grid-rows-2 md:grid-cols-2 md:grid-rows-2 gap-10 sm:grid-cols-1 sm:grid-rows-4'>
        <div className='w-full h-fit  p-5 flex justify-between '>
            <div className='w-[230px] h-[230px] bg-black mr-5 '></div>
            <div className='flex flex-col justify-between w-[230px] h-full'>
                <header className='text-xl uppercase'>Header</header>
                <p className='text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores vitae incidunt dolorum illo quod optio iusto quo nobis possimus perferendis et odio facilis, corporis pariatur deleniti cum non mollitia sequi.</p>
                <a href='#' className='text-blue-700'>Learn more</a>
            </div>
        </div>
        <div className='w-full h-fit border p-5 flex justify-between lg:grid-cols-2 lg:grid-rows-2 lg:gap-10'>
            <div className='w-[230px] h-[230px] bg-black mr-5'></div>
            <div className='flex flex-col justify-between w-[230px] h-full'>
                <header className='text-xl uppercase'>Header</header>
                <p className='text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores vitae incidunt dolorum illo quod optio iusto quo nobis possimus perferendis et odio facilis, corporis pariatur deleniti cum non mollitia sequi.</p>
                <a href='#' className='text-blue-700'>Learn more</a>
            </div>
        </div>
        <div className='w-full h-fit border p-5 flex justify-between lg:grid-cols-2 lg:grid-rows-2 lg:gap-10'>
            <div className='w-[230px] h-[230px] bg-black mr-5'></div>
            <div className='flex flex-col justify-between w-[230px] h-full'>
                <header className='text-xl uppercase'>Header</header>
                <p className='text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores vitae incidunt dolorum illo quod optio iusto quo nobis possimus perferendis et odio facilis, corporis pariatur deleniti cum non mollitia sequi.</p>
                <a href='#' className='text-blue-700'>Learn more</a>
            </div>
        </div>
        <div className='w-full h-fit border p-5 flex justify-between lg:grid-cols-2 lg:grid-rows-2 lg:gap-10'>
            <div className='w-[230px] h-[230px] bg-black mr-5'></div>
            <div className='flex flex-col justify-between w-[230px] h-full'>
                <header className='text-xl uppercase'>Header</header>
                <p className='text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores vitae incidunt dolorum illo quod optio iusto quo nobis possimus perferendis et odio facilis, corporis pariatur deleniti cum non mollitia sequi.</p>
                <a href='#' className='text-blue-700'>Learn more</a>
            </div>
        </div>
        {/* <div></div>
        <div></div>
        <div></div> */}
    </div>
  )
}

export default CreatorCorners