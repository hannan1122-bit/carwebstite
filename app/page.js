import Navbar from "@/components/Navbar";
import Homepage from "@/components/Homepage";
import Image from "next/image";
import Intro from "@/components/Intro";
import Footer from "@/components/Footer";
;

export default function Home() {
  
  return (
   <>
  <Navbar/>
  <Homepage/>
  <Intro/>
  <Footer/>
   </>
  );
}
