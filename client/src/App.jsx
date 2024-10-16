import Nav from "./components/Nav"
import Footer from "./components/Footer"
import KickStarter from "./components/KickStarter"
import Comment from "./components/Comment"
import SmallIcon from "./components/SmallIcon"
import TimeProgress from "./components/TimeProgress"
import Section from "./components/elements/Section"
import GreenLineTextWithPhoto from "./components/elements/GreenLineTextWithPhoto"
import GridContainer from "./components/elements/GridContainer"
import CreatorCorners from "./components/elements/CreatorCorners"
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
      <GreenLineTextWithPhoto header={"big header"}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla, voluptatem quod aperiam iste, voluptate, vero molestias labore voluptatum exercitationem autem minima minus ea amet animi tempora nam a id ratione.
      </GreenLineTextWithPhoto>
      <h2 className="ml-10 mt-5">creator tips</h2>
    <GridContainer/>
    <GreenLineTextWithPhoto header={"crowd funding"}>
      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Praesentium accusantium fugit totam quam blanditiis necessitatibus aspernatur quia illo error. Quae temporibus commodi earum accusamus praesentium, deleniti provident adipisci possimus dolores?
    </GreenLineTextWithPhoto>
    <div className="px-10 my-5">
    <h2>Recommended for you</h2>
    <Section/>
    </div>
    <div className="px-10 my-5">
      <h2>the making off</h2>
      <GridContainer/>
    </div>
    <div className="px-10 my-5">
      <h2>home strech</h2>
      <Section></Section>
    </div>
        {/* footer */}
    <CreatorCorners/>
    <Footer/>
    </>

  )
}
export default app