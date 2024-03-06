import React from 'react'
import Link from 'next/link';
 const Intro = () => {
  return (
    <>
    <div className="intro-section flex w-screen h-screen bg-gray-400 text-black justify-center font-serif">
      <div className="w-1/2 pt-7 text-center items-center">
        <div className="px-2 font-bold border-2 rounded-lg border-black py-2">
          HOW CAN WE HELP YOU
        </div>
        <div className="pt-6 pb-4">
        Welcome to our premier car shop, where excellence meets affordability. Explore our extensive inventory featuring both brand new and meticulously inspected used cars. Whether you're seeking the latest models with cutting-edge features or a reliable pre-owned vehicle, we cater to every preference and budget. Our expert team is dedicated to assisting you in finding the perfect fit for your needs, ensuring a seamless and enjoyable car-buying experience. With our commitment to quality and customer satisfaction, you can trust that each car on our lot has been carefully selected and maintained to the highest standards. Visit us today and embark on your journey to driving your dream car with confidence
        </div>
        <div className="flex pt-6 justify-between">
        <Link className="px-2 flex items-center justify-center bg-slate-300 hover:bg-slate-800 border-2 rounded-full border-black" href="/" alt="linkmore">BRAND NEW</Link>
  <div className="pl-6">
    <button className="px-2 py-1 font-bold">Learn more</button>
  </div>
  
  <Link className="px-2 bg-slate-300 flex items-center justify-center  hover:bg-slate-800  border-2 font rounded-full border-black" href="/" alt="linkmore">USED</Link>
</div>

      </div>
      
    </div>
    {/* <div className="w-screen h-6 bg-slate-200"></div> */}
    </>
  )
}
export default Intro;