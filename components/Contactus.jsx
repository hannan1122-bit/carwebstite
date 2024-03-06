"use client";
import React from "react";
import { useState } from "react";

import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import { OrbitControls } from "@react-three/drei";
import { PerspectiveCamera, Environment } from "@react-three/drei";
import { Newcar } from "./Newcar";
const Contactus = () => {
  const [user, setUser] = useState({
    username: "",
    email: "",
    phone: "",
    message: "",
  });
  const handleSumbit = () => {
    
  };
  function handleChange(e) {
    const name = e.target.name;
    const value = e.target.value;

    setUser((prevUser) => ({
      ...prevUser,
      [name]: [value],
    }));
  }
  const btnClicked = async (e) => {
    e.preventDefault();
    const { username, email, phone, message } = user;
    if (username && email && phone && message) {
      const res = await fetch(
        "https://carwebsite1-25475-default-rtdb.firebaseio.com/car_web1.json",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            username,
            email,
            phone,
            message,
          }),
        }
      );
      if (res) {
        setUser({
          username: "",
          email: "",
          phone: "",
          message: "",
        });
        alert("Data stored successfully");
      }
    } else {
      alert("Please fill the fields");
    }
  };

  return (
    <>
      <div className="flex w-screen sm:w-screen relative text-white  ">
        <div className="absolute h-screen w-screen -z-10 bg-slate-950 ">
          <div className="absolute h-full w-screen -z-10 opacity-65">
            <Canvas>
              <OrbitControls />
              <PerspectiveCamera
                makeDefault
                position={[0, 2, 5]}
                rotation={[Math.PI / 8, 0, 0]}
              />
              <Newcar minlength={0} />
              <Environment preset="forest" />
              {/* <spotLight
                  args={["white", 60, 25, 10, 10]}
                  position={[0, 4, 4]}
                /> */}
            </Canvas>
          </div>
        </div>
        <div className="flex lg:h-full items-center justify-center  md:w-screen ">
          <form className="lg:py-12 font-serif" onSubmit={handleSumbit}>
            <p className="text-center font-bold pt-2">YOUR NAME</p>
            <div>
              {" "}
              <input
                className="border-2 border-black rounded-md w-full py-2 text-black "
                type="text"
                name="username"
                id="username"
                placeholder="Enter your name"
                value={user.username}
                required
                onChange={handleChange}
              ></input>
            </div>
            <p className="text-center font-bold pt-2 ">YOUR EMAIL</p>
            <div>
              <input
                className="border-2 border-black rounded-md  w-full py-2 text-black"
                type="text"
                name="email"
                id="email"
                placeholder="Enter your email"
                value={user.email}
                required
                onChange={handleChange}
              ></input>
            </div>
            <p className="text-center font-bold  pt-2">YOUR PHONE NUMBER</p>
            <div className="px-2">
              <input
                className="border-2 border-black rounded-md w-full px-2 text-black"
                type="number"
                name="phone"
                id="phone"
                placeholder="Enter your phone number"
                required
                value={user.phone}
                onChange={handleChange}
              ></input>
            </div>
            <p className="text-center font-bold pt-2">MESSAGE</p>
            <div className="px-2">
              <textarea
                className="border-2 border-black rounded-md  w-full px-2 text-black"
                type="text"
                name="message"
                id="message"
                rows={5}
                placeholder="Enter your message"
                value={user.message}
                onChange={handleChange}
              ></textarea>
            </div>
            <div className="text-center mt-4 font-bold">
              <button
                onClick={btnClicked}
                className="px-2 py-2 text-center border-2 border-black rounded-3xl bg-red-900 hover:bg-gray-700"
              >
                SUMBIT
              </button>
            </div>
            <div className="h-1/3 w-1/3 mt-4  text-center">
              
              <p className="flex justify-center text-center font-serif font-bold border-2 border-black rounded-md">
                OUR LIVE LOCATION
              </p>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d1908.2204473852098!2d74.2911665164858!3d31.549904142310886!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2s!4v1709622367096!5m2!1sen!2s"
                width="600"
                height="450"
                className="py-2 border-2 border-black rounded-md"
                allowfullscreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};
export default Contactus;
