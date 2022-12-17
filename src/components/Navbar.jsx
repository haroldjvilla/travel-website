import React, {useState} from "react";
import { BsPerson } from "react-icons/bs";
import { BiSearch } from "react-icons/bi";
import { AiOutlineClose } from "react-icons/ai";
import { HiOutlineMenuAlt4 } from "react-icons/hi";
import { FaInstagram, FaFacebook, FaTwitter, FaYoutube } from "react-icons/fa";



function Navbar() {

    const [nav ,setNav] = useState(false);
    const [logo, setLogo] = useState(false)
    const handleNav =() => {
        setNav(!nav)
        setLogo(!logo)
    }


  return (
    <div className="flex w-full justify-between items-center h-20 px-4 absolute z-10 text-white">
      <div >
        <h1 onClick={handleNav} className={logo ? 'hidden' : 'block'}>ARMA TU VIAJE.</h1>
      </div>
      <ul className="hidden md:flex">
        <li>Home</li>
        <li>Destinos</li>
        <li>Viaje</li>
        <li>Vista</li>
        <li>Ajenda</li>
      </ul>
      <div className="hidden md:flex">
        <BiSearch className="mr-2" size={20} />
        <BsPerson size={20} />
      </div>

      {/* Hamburger */}
      <div onClick={handleNav} className="md:hidden z-10">
        {nav ? <AiOutlineClose className="text-black" size={20}/> : <HiOutlineMenuAlt4 size={20} />}
        
      </div>
      {/* mobile menu dropdown */}
      <div onClick={handleNav} className={nav ? 'absolute text-black left-0 top-0 w-full bg-gray-100/90 px-4 py-7 flex flex-col' : 'absolute left-[-100%]'}>
        <ul>
          <h1>Arma tu viaje.</h1>
          <li className="border-b">Home</li>
          <li className="border-b">Destinos</li>
          <li className="border-b">Viaje</li>
          <li className="border-b">Vista</li>
          <li className="border-b">Ajenda</li>
          <div className="flex flex-col">
            <button className="my-6">Buscar</button>
            <button>Cuenta</button>
          </div>
          <div className="flex justify-between my-6">
            <a href="https://www.instagram.com/agenciaarmatuviaje/">
            <FaInstagram className="icon" />
            </a>
            <a href="https://www.facebook.com/profile.php?id=100083415065479">
            <FaFacebook className="icon" />
            </a>
            <FaTwitter className="icon" />
            <FaYoutube className="icon" />
          </div>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
