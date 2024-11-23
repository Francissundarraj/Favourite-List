import React from "react";
import border from "../assests/Border.png"

function FavouritesPage({ favGame, removeFromFavorites }) {
    console.log(favGame)
    return (
        <div>
            {favGame.length > 0 ? (
                <div>
                    <h1 className="text-white text-center text-2xl">Your Gaming Hall of Fame</h1> 
                     <img className="h-5" src={border} alt="" />
                    
                        {favGame.map((gamer) => (
                            <div key={gamer.text} className="flex flex-col cursor-pointer items-center overflow-hidden">
                                <img className="w-80 m-1 h-48 transition-transform duration-300 ease-in-out transform hover:scale-110" src={gamer.image} alt={gamer.text} />
                                <p className="text-xl">{gamer.text}</p>
                                <button
              onClick={() => removeFromFavorites(gamer)}
              className=" shadow-xl rounded-md px-4 py-2 text-sm bg-cyan-800"
            >
              Remove
            </button>
                            </div>
                            
                        ))}
                    </div>
                </div>
            ) : (
                <p className=" text-3xl underline text-center">No games added to favorites yet.</p>
            )}
        </div>
    );
}

export default FavouritesPage