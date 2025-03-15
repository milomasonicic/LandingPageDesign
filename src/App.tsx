import Item1 from "./Item1";
import Deliver from "./Delivery.tsx"
import Nav from "./Navigacija_copy.tsx";
import Item from "./Scnd";
import Land from "./LandingPage1";
import WordsPullUp from "./Naslov1"
import We from "./Whoarewe"
import ParallaxText from "./Letsgrow";
import ContactUs from "./CountactUs.tsx";
import SubHeader from "./SubHeader";
import HorizontallScroll from "./HorizontalScroll";
import Images from "./Images";
import News from "./News"


function App() {
  return (
    <div className="bg-zinc-950">

        <Nav></Nav>
        <Land></Land>
        <SubHeader></SubHeader>
        <We delay={0.6}></We>
        <Images></Images>
        <div className="h-[250px]"></div>
        <WordsPullUp text="Project we are proud of" />
        <Item1></Item1>
        <Item></Item> 
        <HorizontallScroll></HorizontallScroll>
        <Deliver></Deliver>
        <div className="w-full h-[80px]">
          <ParallaxText children="Lets grow together and create better world" baseVelocity={-2}></ParallaxText>  
        </div>
        <News></News>
        <ContactUs></ContactUs>
              
    </div>
  );
  
  
}


export default App;