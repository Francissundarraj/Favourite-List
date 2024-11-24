import { useEffect, useState } from "react";
import banner1 from "../assests/b1.jpg"
import banner2 from "../assests/b2.jpg"
import banner3 from "../assests/b3.jpg"
import Bordar from "../assests/Border.png"
const ImageSlider = () => {

  const banimages = [banner1, banner2, banner3]
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % banimages.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [banimages.length])
  return (
    <div className="flex flex-col items-center ">
      <div className=" w-5/6 relative " >
        <img style={{ height: "70vh",
        width: "100%",
        border: "0.1px solid rgba(0, 255, 255, 0.7)", // Neon color
        borderRadius: "10px",
        boxShadow: "0 0 20px rgba(0, 255, 255, 0.7)"  }} src={banimages[currentIndex]} alt={`Banner ${currentIndex + 1}`} className="w-full rounded-md " />
        <h1 className="absolute top-20 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-4xl">Welcome  </h1>
      
        <h1 className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-5xl whitespace-nowrap">Forge Your Destiny, Choose Your Legend Game! </h1>
        <img style={{top:310}} className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-5xl" src={Bordar} alt="" />
      </div>
    </div>
  )

}

export default ImageSlider