import React from 'react'

function textWithGreenLine({header,children}) {
  return (
    <div className="flex h-full w-fit">
    <div className="w-2 h-[55%] mx-3 bg-green-800 ">

</div>
<div className="w-fit h-[70%] flex flex-col justify-around  p-2">

<header className="xl-text-header mb-3">{header}</header>
<p className="">{children}</p>
<a className="text-blue-700 hover:cursor-pointer mt-3 ">Click more</a>
</div>
    </div>
  )
}


export default textWithGreenLine