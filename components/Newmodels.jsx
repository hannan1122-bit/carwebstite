"use client";
import React from "react";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import { OrbitControls } from "@react-three/drei";
import { PerspectiveCamera } from "@react-three/drei";
import { Jeep } from "./Jeep";
import { Environment } from "@react-three/drei";
import { Newcar } from "./Newcar";

const Newmodels = () => {
  return (
    <>
      <div className="flex justify-center items-center w-screen bg-slate-950 text-white border-2 border-black rounded-lg">
        <div className="w-1/2 text-center font-serif py-3 ">
          <h3 className="font-bold border-2 border-white py-1 rounded-lg bg-rose-950">H.CARS SHOWROOM</h3>
        <p className="py-3">
          Welcome to our brand new cars showroom, where luxury meets performance
          and elegance merges with innovation. Step into a world where
          automotive dreams come to life, and discover an unparalleled selection
          of the latest models from top manufacturers. From sleek sedans to
          powerful SUVs, each vehicle in our showroom embodies the pinnacle of
          engineering excellence and cutting-edge technology.
        </p>
        <p className="py-3">
          Experience the thrill of driving excellence firsthand by visiting our
          showroom today. Let us help you find the perfect vehicle that not only
          meets but exceeds your expectations. Your dream car awaits, right here
          at our brand new cars showroom.
        </p>
        </div>
      </div>
      <div className="w-screen bg-stone-800 text-white ">
        <div className="w-screen flex font-serif">
          <div className="w-1/2 border-2 border-black rounded-lg ">
            <h3 className="text-center py-2 border-2 bg-stone-900 border-black rounded-md font-bold">
              2 WHEEL DRIVE
            </h3>
            <p className="text-center p-4 bg-stone-800">
              Introducing our latest arrivals - brand new 2 wheeler cars
              straight from the showroom floor. Experience the thrill of driving
              cutting-edge technology, impeccable performance, and pristine
              design. Elevate your driving experience with the unmatched quality
              and innovation of our brand new models.
            </p>
            <div className="h-2/3">
              <Canvas>
                <OrbitControls />
                <PerspectiveCamera
                  makeDefault
                  position={[0, 2, 5]}
                  rotation={[Math.PI / 8, 0, 0]}
                />
                <Newcar minlength={0} />
                {/* <Environment preset="forest" /> */}
                <spotLight
                  args={["white", 60, 25, 10, 10]}
                  position={[0, 4, 4]}
                />
              </Canvas>
            </div>
          </div>
          <div className="w-1/2 border-2 border-black rounded-lg">
            <h3 className="text-center py-2 border-2 bg-stone-900 border-black rounded-md font-bold">
              4 WHEELE DRIVE
            </h3>
            <p className="text-center py-4 bg-stone-800">
              Explore our collection of 4-wheel drive marvels, engineered to
              conquer any terrain with confidence. Unleash the power of
              all-wheel traction and experience unparalleled stability and
              control on every journey. Elevate your adventures with our lineup
              of cutting-edge 4WD vehicles.
            </p>
            <div className="h-2/3">
              <Canvas>
                <OrbitControls />
                <PerspectiveCamera
                  makeDefault
                  position={[0, 5, 15]}
                  rotation={[Math.PI / 8, 0, 0]}
                />
                <Jeep />
                {/* <Environment preset="forest" /> */}
                <spotLight
                  args={["white", 50, 25, 10, 10]}
                  position={[0, 5, 7]}
                />
              </Canvas>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Newmodels;
