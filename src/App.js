import HomePage from "./Components/Home";
import FavouritesPage from "./Components/FavouritesPage"; 
import { BrowserRouter, Route, Routes } from "react-router-dom";
import React from "react";
import Header from "./Components/Header";
import game1 from "./assests/g1.jpg"
import game2 from "./assests/g2.jpg"
import game3 from "./assests/g3.jpg"
import game4 from "./assests/g4.jpg"
import game5 from "./assests/g5.jpg"
import game6 from "./assests/g6.jpg"
import game7 from "./assests/g7.jpg"
import game8 from "./assests/g8.jpg"
import game9 from "./assests/g9.jpg"

import {  useState } from "react";
import { Link } from "react-router-dom";





function App() {

  const [imagecard] = useState([
    { id: 1, image: game1, text: "Age of Dragons" },
    { id: 2, image: game2, text: "Clan Wars" },
    { id: 3, image: game3, text: "Death Ray" },
    { id: 4, image: game4, text: "Morgoth Defiler" },
    { id: 5, image: game5, text: "The Weilder" },
    { id: 6, image: game6, text: "Dragon Rider" },
    { id: 7, image: game7, text: "The Apocalypse" },
    { id: 8, image: game8, text: "Ninja Warriors" },
    { id: 9, image: game9, text: "The Witcher" }
  ]);

  const [favGame, setFavGame] = useState([])

  const addToFavorites = (game) => {
    if (!favGame.includes(game)) {
        setFavGame([...favGame, game]) 
        };
    }


    const removeFromFavorites = (gamer) => {
      setFavGame(favGame.filter((fav) => fav.id !== gamer.id))}

  return (
    <BrowserRouter>

      <Header />
      
             



      <Routes>
        <Route path="/" element={<HomePage imagecard={imagecard} favGame={favGame}  addToFavorites={addToFavorites} />}></Route>
        <Route path="/favouritespage"  element={<FavouritesPage favGame={favGame} removeFromFavorites={removeFromFavorites} />}
/>

      </Routes>
     

    </BrowserRouter>

  )
}

export default App;
