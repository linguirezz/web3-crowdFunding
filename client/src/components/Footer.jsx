function Footer(){
    return(
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
    )
}
export default Footer