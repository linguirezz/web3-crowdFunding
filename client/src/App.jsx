import Nav from "./components/Nav"
import Footer from "./components/Footer"
import KickStarter from "./components/KickStarter"
import Comment from "./components/Comment"
import SmallIcon from "./components/SmallIcon"
import TimeProgress from "./components/TimeProgress"
import Section from "./components/elements/Section"
function app(){
  return(
    <>
    {/* nav */}
    <Nav/>
    {/* content */}
    <div className="px-10">
        <KickStarter></KickStarter>
        <div className="w-full  h-fit my-5 ">
        <h2 className="mb-3">featured project</h2>
        <div className="w-full h-[500px] bg-black"></div>
        </div>
        <Comment/>
        <h2>recommended for you </h2>
        <Section/>
    </div>
    
        {/* footer */}
    <Footer/>
    </>

  )
}
export default app