import React from 'react'

import Link from 'next/link';
const  Navbar = () => {
  return (
    <div className="flex   h-14 font-serif font-bold bg-slate-900 text-white border-black border-2 rounded-md">
    <div className="flex items-center justify-center pl-3 pr-1">
    {/* <IoCarSport className="h-14 w-10" /> */}
    </div>
    
        <ul className="flex px items-center justify-center  w-screen ">
           <Link href="/" className="hover:border-2 hover:border-white hover rounded-md"> <li className="px-3 ">HOME</li></Link>
           <Link href="/NEWMODELS" className="hover:border-2 hover:border-white hover rounded-md"><li className="px-2">NEW MODELS</li></Link>
           <Link href="/OLDMODELS" className="hover:border-2 hover:border-white hover rounded-md" ><li className="px-3">OLD MODELS</li></Link>
           <Link href="/CONTACTUS" className="hover:border-2 hover:border-white hover rounded-md"> <li className="px-2">CONTACT US</li></Link>
                  </ul>
   
        
    </div>
  )
}
export default Navbar;