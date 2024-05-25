
import { FaChevronDown } from "react-icons/fa6";
import { RiArrowDropDownLine } from "react-icons/ri";
import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { IoMenu } from "react-icons/io5";
import { HiMenuAlt1 } from "react-icons/hi";
import Logo from "../../assets/img/logo-1 1.png"
import RespMenu from "../RespMenu/RespMenu";
import { FaEnvelope } from "react-icons/fa6";
import { IoIosCall } from "react-icons/io";




// Corrected MenuLinks data with unique IDs and proper links
export const MenuLinks = [
  { id: 1, name: "Home", link: "/" }, // Assuming "/" for Home
  { id: 2, name: "About", link: "/About" },
 // { id: 3, name: "Services", link: "/Services" },
  { id: 4, name: "Languages", link: "/Languages" }, // Ensured unique ID
  { id: 5, name: "Blog", link: "/Blog" }, // Ensured unique ID
  { id: 6, name: "Contact", link: "/Contact" },
  { id: 6, name: "Carrer", link: "/Carrer" },
];

const Navbar = () => {
  
 

  const [showMenu, setShowMenu] = React.useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const [isOpen, setIsOpen] = useState(false);
  //const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isDropdownOpen1, setIsDropdownOpen1] = useState(false);

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
 
  return (
    <>
      <nav className=" py-3 md:py-2 bg-[#101D2E] "> {/* Added class for container */}
        <div className="flex gap-[400px]"> {/*justify-between items-center*/}
          <div className="flex items-center gap-3">
            <Link to="/"> {/* Use Link for routing */}
              <img src={Logo} alt="" className="w-60  " />

            </Link>
          </div>
          <div className={`md:flex  items-center ${isOpen ? 'block' : 'hidden'}`}>
            <Link to="/" className="text-white hover:text-gray-300 block mt-2 md:inline-block md:mt-0  right-10">
              Home
            </Link>
            <Link to="/about" className="text-white hover:text-gray-300 block mt-4 md:inline-block md:mt-0 md:ml-6">
              About
            </Link>
           
            <div className="relative ">
          <button
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            className="text-white focus:outline-none gap-7"
          >
           Services <small >˅</small>
          </button>
          {isDropdownOpen && (
            <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-2 z-20">
              <a href="Certificated" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">Certificated</a>
              <a href="#Blog" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">Blog</a>
            </div>
          )}
        </div>
           
            <Link to="/languages" className="text-white hover:text-gray-300 block mt-4 md:inline-block md:mt-0 md:ml-6">
              Languages <small >˅</small>
             
            </Link>
            <Link to="/blog" className="text-white hover:text-gray-300 block mt-4 md:inline-block md:mt-0 md:ml-6">
              Blog
            </Link>
            <Link to="/contact" className="text-white hover:text-gray-300 block mt-4 md:inline-block md:mt-0 md:ml-6">
              Contact
            </Link>
            <Link to="/carrer" className="text-white hover:text-gray-300 block mt-4 md:inline-block md:mt-0 md:ml-6">
              Carrer
            </Link>
         
             <div className="">
            <button href="mailto:info@example.com" className="text-white  md:inline-block bg-[#3D65FF] hover:bg-blue-700 rounded-full p-1 ">
            <FaEnvelope className="inline mr-3" />info@lettercrafts.org
          </button>
          <button href="tel:+1234567890" className="text-white  hover:bg-blue-700 block mt-4 md:inline-block md:mt-0 md:ml-6 bg-[#3D65FF] rounded-full p-2">
          <IoIosCall className="inline "/> +65 67110135
        </button>
        </div>
          </div>
          
         












          <div className="flex items-center gap-4 md:hidden">
            {showMenu ? (
              <HiMenuAlt1 onClick={toggleMenu} className="cursor-pointer text-2xl" />
            ) : (
              <IoMenu onClick={toggleMenu} className="cursor-pointer text-2xl bg-white" />
            )}
          </div>
        </div>
        {/* Mobile menu section */}
        <RespMenu showMenu={showMenu} />
      </nav>




    </>
  );
};

export default Navbar;

{/* <RiArrowDropDownLine className="justify-center items-center text-center flex" />
*/}