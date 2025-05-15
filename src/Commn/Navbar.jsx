import { useState } from "react";
import { FaHome, FaInfoCircle } from "react-icons/fa";
import { PiNetworkXFill } from "react-icons/pi";
import { MdContactMail } from "react-icons/md";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="fixed opacity-75 z-20 bg-black w-full px-4 py-2 flex justify-between items-center">
      {/* Logo */}
      <div className="font-bold text-2xl text-gray-400">Harsh</div>

      {/* Desktop Menu */}
     <ul className="hidden md:flex gap-6 text-gray-400">
  <li className="hover:text-red-300 flex flex-col items-center gap-1 cursor-pointer">
    <a href="#home" className="flex flex-col items-center">
      <FaHome />
      Home
    </a>
  </li>
  <li className="hover:text-red-300 flex flex-col items-center gap-1 cursor-pointer">
    <a href="#about" className="flex flex-col items-center">
      <FaInfoCircle />
      About
    </a>
  </li>
  <li className="hover:text-red-300 flex flex-col items-center gap-1 cursor-pointer">
    <a href="#work" className="flex flex-col items-center">
      <PiNetworkXFill />
      Work
    </a>
  </li>
  <li className="hover:text-red-300 flex flex-col items-center gap-1 cursor-pointer">
    <a href="#contact" className="flex flex-col items-center">
      <MdContactMail />
      Contact
    </a>
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
        <a href="#home" className="flex items-center gap-2" onClick={() => setMenuOpen(false)}>
          <FaHome /> Home
        </a>
      </li>
      <li className="hover:text-red-300 flex items-center gap-2 cursor-pointer">
        <a href="#about" className="flex items-center gap-2" onClick={() => setMenuOpen(false)}>
          <FaInfoCircle /> About
        </a>
      </li>
      <li className="hover:text-red-300 flex items-center gap-2 cursor-pointer">
        <a href="#work" className="flex items-center gap-2" onClick={() => setMenuOpen(false)}>
          <PiNetworkXFill /> Work
        </a>
      </li>
      <li className="hover:text-red-300 flex items-center gap-2 cursor-pointer">
        <a href="#contact" className="flex items-center gap-2" onClick={() => setMenuOpen(false)}>
          <MdContactMail /> Contact
        </a>
      </li>
    </ul>
  </div>
)}

    </div>
  );
}

export default Navbar;
