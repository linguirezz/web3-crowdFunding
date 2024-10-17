import React from 'react'
import { Link } from 'react-router-dom'
import OauthBtn from '../components/OauthBtn'
import InputWithLabel from '../components/InputWithLabel'

function LoginPage() {
  return (
    <div className='w-full h-[100vw] bg-slate-200 py-10 sm:py-5'>
         <div className='w-[380px] h-fit m-auto bg-white rounded-lg flex flex-col p-10 '>
         <header className='w-[50%] h-[15%] bg-primary'></header>
         <h1 className='font-semibold text-slate-500   mb-3 '>Select how you are going to continue</h1>
       <OauthBtn>continue with google</OauthBtn>
        <div className='my-3 grid grid-flow-col grid-cols-3 gap-5 '>
            <OauthBtn></OauthBtn>
            <OauthBtn></OauthBtn>
            <OauthBtn></OauthBtn>
        </div>
        <p className='text-xs text-slate-500 '>we do not store any data related to  your social login</p>
        <span className='text-blue-800 capitalize font-semibold my-5 ml-auto'>view more</span>
        <form action="">
        <InputWithLabel name="email"/>
        <button className="w-full p-2 text-white capitalize bg-primary rounded-full">continue with email</button>
        </form>
        <p className="text-xs text-slate-400  mt-16">self-custody via web3</p>
    </div>
        <button className=''><Link to={"/"}>back to home</Link> </button>
    </div>
   
        
)
}

export default LoginPage