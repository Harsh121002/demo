import { useState } from "react";
import { FaHome, FaInfoCircle } from "react-icons/fa";
import { PiNetworkXFill } from "react-icons/pi";
import { MdContactMail } from "react-icons/md";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="fixed z-20 bg-black w-full px-4 py-2 flex justify-between items-center">
      {/* Logo */}
      <div className="font-bold text-2xl text-gray-400">Harsh</div>

      {/* Desktop Menu */}
      <ul className="hidden md:flex gap-6 text-gray-400">
        <li className="hover:text-red-300 flex flex-col items-center gap-1 cursor-pointer">
          <FaHome />
          Home
        </li>
        <li className="hover:text-red-300 flex flex-col items-center gap-1 cursor-pointer">
          <FaInfoCircle />
          About
        </li>
        <li className="hover:text-red-300 flex flex-col items-center gap-1 cursor-pointer">
          <PiNetworkXFill />
          Work
        </li>
        <li className="hover:text-red-300 flex flex-col items-center gap-1 cursor-pointer">
          <MdContactMail />
          Contact
        </li>
      </ul>

      {/* Hamburger Icon for Mobile */}
      <div className="md:hidden text-gray-400 text-2xl cursor-pointer" onClick={() => setMenuOpen(!menuOpen)}>
        {menuOpen ? <IoMdClose /> : <GiHamburgerMenu />}
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="absolute top-14 left-0 w-full bg-black border-t border-gray-700 md:hidden">
          <ul className="flex flex-col text-gray-300 px-6 py-4 space-y-4 text-lg">
            <li className="hover:text-red-300 flex items-center gap-2 cursor-pointer">
              <FaHome /> Home
            </li>
            <li className="hover:text-red-300 flex items-center gap-2 cursor-pointer">
              <FaInfoCircle /> About
            </li>
            <li className="hover:text-red-300 flex items-center gap-2 cursor-pointer">
              <PiNetworkXFill /> Work
            </li>
            <li className="hover:text-red-300 flex items-center gap-2 cursor-pointer">
              <MdContactMail /> Contact
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}

export default Navbar;
