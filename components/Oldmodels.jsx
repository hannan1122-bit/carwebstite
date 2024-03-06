"use client";
import React from "react";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import { OrbitControls } from "@react-three/drei";
import { PerspectiveCamera } from "@react-three/drei";
import { Jeep } from "./Jeep";
import { Environment } from "@react-three/drei";
import { Newcar } from "./Newcar";
import Oldcar from "./Oldcar";
import Van from "./Van";

const Oldmodels = () => {
  return (
    <>
      <div className="flex justify-center items-center w-screen bg-slate-950 text-white border-2 border-black rounded-lg">
        <div className="w-1/2 text-center font-serif py-3 ">
          <h3 className="font-bold border-2 border-white py-1 rounded-lg bg-rose-950">
            H.CARS SHOWROOM
          </h3>
          <p className="py-3">
            Welcome to our brand new and pre-owned cars showroom, where quality
            and affordability meet. Step into a world where luxury and value
            coexist, and discover an exceptional selection of both the latest
            models and meticulously maintained pre-owned vehicles. From
            state-of-the-art sedans to rugged SUVs, each car in our showroom
            represents a blend of style, performance, and value.
          </p>
          <p className="py-3">
            Experience the thrill of driving excellence firsthand by visiting
            our showroom today. Let us help you find the perfect vehicle that
            not only meets but exceeds your expectations. Your dream car awaits,
            right here at our brand new cars showroom.
          </p>
        </div>
      </div>
      <div className="w-screen bg-stone-800 text-white ">
        <div className="w-screen flex font-serif">
          <div className="w-1/2 border-2 border-black rounded-lg ">
            <h3 className="text-center py-2 border-2 bg-stone-900 border-black rounded-md font-bold">
              CARS
            </h3>
            <p className="text-center p-4 bg-stone-800">
              Embark on your next journey with our curated collection of
              pre-owned cars. Each vehicle is meticulously inspected and ready
              to ignite new adventures. From sleek sedans to rugged SUVs, find
              your perfect match and drive home with confidence. Your dream car
              awaits!
            </p>
            <div className="h-2/3">
              <Canvas>
                <OrbitControls />
                <PerspectiveCamera
                  makeDefault
                  position={[0, 8, 12]}
                  rotation={[Math.PI / 8, 0, 0]}
                />
                <Oldcar minlength={0} />
                <Environment preset="forest" />
                {/* <spotLight
                  args={["white", 60, 25, 10, 10]}
                  position={[0, 4, 4]}
                /> */}
              </Canvas>
            </div>
          </div>
          <div className="w-1/2 border-2 border-black rounded-lg">
            <h3 className="text-center py-2 border-2 bg-stone-900 border-black rounded-md font-bold">
              VANS
            </h3>
            <p className="text-center py-4 bg-stone-800">
              Unlock endless possibilities with our pre-loved van collection.
              From reliable workhorses to versatile family haulers, our
              handpicked selection offers quality and affordability. Discover
              your next adventure companion and hit the road with confidence.
              Your journey starts here!
            </p>
            <div className="h-2/3">
              <Canvas>
                <OrbitControls />
                <PerspectiveCamera
                  makeDefault
                  position={[0, 10, 25]}
                  rotation={[Math.PI / 8, 0, 0]}
                />
                <Van />
                <Environment preset="forest" />
                {/* <spotLight
                  args={["white", 50, 45, 10, 10]}
                  position={[0, 5, 7]}
                /> */}
              </Canvas>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Oldmodels;
