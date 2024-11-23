import ImageSlider from "./Slider"
import React from "react"


function HomePage({imagecard, favGame,addToFavorites }){

    
    return(
        
       
      <div>
        
        <ImageSlider/>

        <div className="flex flex-wrap mt-10 gap-4  justify-around" >
        {
          imagecard.map(function (gamer, index) {
            return (
              <div key={index} className=" flex flex-col cursor-pointer items-center overflow-hidden ">
                <img className="w-80 m-1 h-48 transition-transform duration-300 ease-in-out transform hover:scale-110 " src={gamer.image} alt="" />
                <p className="text-xl">{gamer.text}</p>
               

                <button
            onClick={() => addToFavorites(gamer)}
            disabled={favGame.includes(gamer)}
            className={` text-yellow-200   rounded-md px-4 py-2  text-sm ${
              favGame.includes(gamer)
                ? "bg-gray-900 cursor-not-allowed"
                : "bg-black"
            }`}
          >
            {favGame.includes(gamer) ? "Added" : "Make Your Favourite"}
          </button>
              </div>
            )
          }
          )
        }
      </div>
        
      </div>

        
    )
}

export default HomePage