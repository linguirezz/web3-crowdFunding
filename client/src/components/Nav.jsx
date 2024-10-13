function Nav(){
    return(
        <nav >
      <div className="h-10 w-[20%] bg-primary m-5"></div>
      
      <form className="h-full w-[50%]  focus-within:outline outline-2 flex rounded-lg items-center border border-slate-500 p-3 shadow-xl">
    <button className="h-10 w-10 bg-[#4A4947] rounded-lg" type="input"></button>
    <input className="h-10 w-full focus:outline-none rounded-lg group placeholder:capitalize " placeholder="search projects,creators, and categories" type="text"/>
</form>

      
      <div className="w-fit w-fit flex justify-between  ">
        <button className="nav-btn ">start project</button>
        <button className="nav-btn bg-[#4A4947] text-white">sign in</button>
      </div>

    </nav>
    
    )
}
export default Nav