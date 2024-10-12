function app(){
  return(
    <>
    {/* nav */}
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
    
    <div>
      isi
    </div>
    {/* footer */}
    <footer className="w-full mt-[100%] bg-[#4A4947] ">
    <div className=" h-full w-fit flex flex-col justif">
    <div className="w-5 h-5 bg-black mb-2 self-center"></div>
      <div className="grid gap-3 grid-flow-col  font-thin">
        <div>Main</div>
        <div>Courder</div>
        <div>Product</div>
        <div>Blog</div>
        <div>Shop</div>
      </div>
      <div className="text-[10px]  flex flex-col m-auto ">
      <p>&copy; 2024 ltect. All rights reserved.</p>
      <p className="self-center">Designed by linguirezz</p>
      </div>
    </div>
       
    </footer>
    </>
  )
}
export default app