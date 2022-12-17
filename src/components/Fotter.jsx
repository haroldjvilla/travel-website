import React from "react";
import { FaInstagram, FaFacebook, FaTwitter, FaYoutube } from "react-icons/fa";

function Fotter() {
  return (
    <div className="w-full bg-gray-100 py-16 relative">
      <div className="max-w-[1240px] mx-auto flex flex-col px-4">
        <div className="sm:flex text-center justify-between items-center">
          <h1>Arma tu vieaje.</h1>
          <div className="flex justify-between w-full sm:max-w-[280px] py-4">
            <a href="https://www.instagram.com/agenciaarmatuviaje/">
            <FaInstagram className="icon" />
            </a>
            <a href="https://www.facebook.com/profile.php?id=100083415065479">
            <FaFacebook className="icon" />
            </a>
            <FaTwitter className="icon" />
            <FaYoutube className="icon" />
          </div>
        </div>
        <div className="flex justify-between">
          <ul className="lg:flex">
            <li>About</li>
            <li>Partnerships</li>
            <li>Careers</li>
            <li>Newsroom</li>
            <li>Advertising</li>
          </ul>
          <ul className="text-right lg:flex">
            <li>Home</li>
            <li>Destinations</li>
            <li>Travel</li>
            <li>View</li>
            <li>Book</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Fotter;
