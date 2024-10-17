import React from 'react'

function InputWithLabel({ name }) {
  return (
    <div className='flex flex-col my-3'>
        <label htmlFor={name} className='capitalize font-semibold mb-2 ml-1'>
            {name}
            </label>
        <input name={name} className='bg-slate-200 border rounded-full p-2' placeholder={name}/>
    </div>
  )
}

export default InputWithLabel