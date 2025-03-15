//import { Hero } from "./Hero"; // Import Hero komponente

import LineDrawing from "./Line";
import Top from "./TopStories";
import { motion } from "framer-motion";
import Slider from "./Slider";
import OurTeam from "./OurTeam";
import Bios from "./Bios";
import Counter1 from "./Counter1";
import Hero from "./HeroPage";

import MiddleSection from "./Middle"
import Component from './HeroPage'
import Item1 from "./Item1";
import Deliver from "./Delivery.tsx"
import Nav from "./Navigacija_copy.tsx";
import Item from "./Scnd";
import Land from "./LandingPage1";
import WordsPullUp from "./Naslov1"
import We from "./Whoarewe"
import ParallaxText from "./Letsgrow";
import Kontakt from "./Kontakt.tsx";
import ContactUs from "./CountactUs.tsx";

import Counter from "./Counter1"
import SubHeader from "./SubHeader";
import Projects from "./HeaderProjects";
import AnimText from "./AnimText";
import HorizontallScroll from "./HorizontalScroll";
import Images from "./Images";
import News from "./News"
import { useState } from "react";
import Gallery from "./ScrollElement"

import Thrd from "./Third";


//import "./App.css";
//

function App() {
  return (
    <div className="bg-zinc-950">

        <Nav></Nav>
        <Land></Land>
        <SubHeader></SubHeader>
        <WordsPullUp text="We worked with best companies" />
        <We></We>
        <Images></Images>
        <HorizontallScroll></HorizontallScroll>
        <Item></Item> 
        <Item1></Item1>
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

/*
/*
<ContactUs></ContactUs>


 <Gallery></Gallery>
<Thrd></Thrd>

<Item></Item> 
<div className="max-w-[1440px] mx-auto bg-zinc-50">
          <h1
          className="text-4xl md:text-4xl p-4 font-mono font-bold bg-zinc-950 text-white text-left">
            Projects we are proud of
          </h1>
        </div>

 <div className="w-full  bg-zinc-50">
          <h1
          className="text-4xl md:text-4xl p-4 font-bold text-zinc-700 text-right">
            Lets grow together and create better world
          </h1>
        </div>
<Counter onVisible={handleCounterVisibility}></Counter>
<Counter onVisible={handleCounterVisibility}></Counter>
        
        <Item></Item>
        <AnimText></AnimText> 

        */


/*
<Projects></Projects>

<BoldScrollFlipEffect></BoldScrollFlipEffect>
bg-[#FFD700]
  <Component></Component>
<Slider></Slider>
        <Top></Top>  <Counter1></Counter1>

        <Counter1></Counter1>

   <LandingPage></LandingPage>


<div className="w-full h-[80px]">

      </div>
      <Hero />
    	
      <div className="h-[380px]">
      <p>COUNTER</p>
      </div>     
      
      <Counter></Counter>

      <MiddleSection/>

      <LineDrawing></LineDrawing>



*/


/*
 <Slider></Slider>


      <OurTeam></OurTeam>

      <Bios></Bios>
*/