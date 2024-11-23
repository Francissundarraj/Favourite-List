import logone from "../assests/L1.png"
import carts from "../assests/c1.png"
import { Link } from 'react-router-dom';

function Header(){

return (
<div className=" flex justify-between items-center sticky top-0 z-10">
        <div className="flex justify-between items-center gap-5" >
          <img className="h-24 cursor-pointer " src={logone} alt="Logo" />
          <h1   style={{ textShadow: '1px 1px 2px rgba(0, 0, 0, 0.5), 0 0 25px rgba(255, 0, 0, 0.7)' }} className="text-red-700 text-5xl  " >Adventure Portal</h1>
        </div>

        <div className="flex gap-16 text-white">
  <p><Link className="uppercase text-md text-white hover:text-red-700 hover:line-through hover:translate-y-1 transition-all duration-500 ease-in-out" to="/">Home</Link></p>
  <p><Link className="uppercase text-md text-white hover:text-red-700 hover:line-through hover:translate-y-1 transition-all duration-500 ease-in-out" to="/pages">Pages</Link></p>
  <p><Link className="uppercase text-md text-white hover:text-red-700 hover:line-through hover:translate-y-1 transition-all duration-500 ease-in-out" to="/favouritespage">Favourites</Link></p>
  <p><Link className="uppercase text-md text-white hover:text-red-700 hover:line-through hover:translate-y-1 transition-all duration-500 ease-in-out" to="/shop">Shop</Link></p>
  <p><Link className="uppercase text-md text-white hover:text-red-700 hover:line-through hover:translate-y-1 transition-all duration-500 ease-in-out" to="/contact">Contact</Link></p>
  <img className="h-7 mx-2 cursor-pointer" src={carts} alt="Cart" />
</div>

      </div>

)
}
export default Header