"use client"
import React from "react";
import Link from "next/link";
import Oldcar from "./Oldcar";
import { Canvas } from '@react-three/fiber';

import { OrbitControls } from '@react-three/drei';
import { PerspectiveCamera } from "@react-three/drei";

import { Environment } from "@react-three/drei";
import { Newcar } from "./Newcar";

const Homepage = () => {
  const home_clicked=()=>{
    const element = document.querySelector(".intro-section");
    window.scrollTo({
      top: element?.getBoundingClientRect().top,
      left: 0,
      behavior: "smooth"
    });
    
  }
  return (
    <div className="">
    <div className="flex w-screen rounded-lg bg-gray-950 text-white justify-center font-serif pb-3">
      <div className="w-1/2 pt-7 text-center items-center">
        <div className="font-bold border-2 rounded-lg border-blue-700 py-2">
          WELCOME TO H.CARS COMPANY
        </div>
        <div className="pt-6 pb-4">
          Welcome to our car shop, where every vehicle tells a unique story.
          From sleek sedans to rugged SUVs, we offer a diverse selection to suit
          every lifestyle. Discover quality craftsmanship, reliability, and
          style that drive you towards your next adventure.
        </div>
        <div className="flex pt-6 justify-between">
  <div className="pl-6">
    <Link className="px-2 py-1 hover:bg-slate-500 border-2 rounded-full border-white" href={"/NEWMODELS"} >MODELS</Link>
  </div>
  <button className="pr-6" onClick={home_clicked}>Learn more</button>
</div>

      </div>
      
    </div >
    {/* <div className="w-screen h-6 bg-slate-200"></div> */}
    <div className="h-screen w-screen bg-gray-950">
          <Canvas>
            <OrbitControls />
            <PerspectiveCamera
              makeDefault
              position={[0, 3,13]}
              rotation={[Math.PI / 8, 0, 0]}
            />
           <Newcar minlength={1}/>
           {/* hannan */}
            <Environment preset="forest" />
            {/* <spotLight args={["white",50,25,10,10]} position={[0,6,8]}/> */}
          </Canvas>
          </div>
    </div>
    
    
  );
};
export default Homepage;
