import { useEffect, useState } from "react";
import banner1 from "../assests/b1.jpg"
import banner2 from "../assests/b2.jpg"
import banner3 from "../assests/b3.jpg"
const ImageSlider=()=>{

    const banimages =[banner1,banner2,banner3]
    const [currentIndex, setCurrentIndex] = useState(0)
  
    useEffect( ()=>{
      const interval = setInterval(()=> {
        setCurrentIndex((prevIndex)=> (prevIndex+1)% banimages.length)
      },3000)
      return () => clearInterval(interval)
    }, [banimages.length])
    return (
      <div className="flex flex-col items-center">
          <div className=" w-5/6 " >
              <img style={{height:"70vh"}} src={banimages[currentIndex]} alt={`Banner ${currentIndex + 1}`} className="w-full " />
          </div>
      </div>
  )
  
  }

  export default ImageSlider