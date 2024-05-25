
import  {useState} from 'react';


import { FaUser } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { IoMdPhonePortrait } from "react-icons/io";
import { CiDeliveryTruck } from "react-icons/ci";
import { FaCommentAlt } from "react-icons/fa";
import { MdTranslate } from "react-icons/md";
import Background from "../../../assets/img/Vector 2.png";
import Location from "../../../assets/img/Rectangle 26.png";


const Services = () => {
  
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <>
    
      

        <div className="bg-black  flex justify-center items-center">
        <div className='' style={{ backgroundImage: "url(" + Background + ")" }}>
            <div className=' rounded-xl shadow-lg p-7 top-10  bg-black ' style={{width:"330px"}}>
            <form className="grid grid-cols-1 gap-2 ">
            <h1 className='font-bold text-3xl text-black tracking-wide'>Send us a message</h1>
                  <div className="flex items-center border-2 bg-white rounded px-2 py-0  top-10" style={{ width: "290px" }}>
                    <FaUser className="mr-1 w-10 text-black" />
                    <label htmlFor="name" className="text-gray-700"> </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      placeholder="Name"
                      className="w-full px-1 py-1 rounded-md border-transparent focus:outline-none border-t-2 focus:ring-1 focus:ring-indigo-500"
                      required
                    />
                  </div>
                  <div className="flex items-center  border-2 bg-white rounded px-2 py-0" style={{ width: "290px" }}>
                    <MdEmail className="mr-1 w-10 text-black" />
                    <label htmlFor="name" className="text-gray-700"> </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      placeholder="E-mail"
                      className="w-full px-1 py-1 rounded-md border-transparent focus:outline-none border-t-2 focus:ring-1 focus:ring-indigo-500"
                      required
                    />
                  </div>
                  <div className="flex items-center  border-2 bg-white rounded px-2 py-0" style={{ width: "290px" }}>
                    <IoMdPhonePortrait className="mr-1 w-10 text-black" />
                    <label htmlFor="name" className="text-gray-700"> </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      placeholder="Phone"
                      className="w-full px-1 py-1 rounded-md border-transparent focus:outline-none border-t-2 focus:ring-1 focus:ring-indigo-500"
                      required
                    />
                  </div>
                  <div className="flex items-center  border-2 bg-white rounded px-2 py-0" style={{ width: "290px" }}>
                    <MdTranslate className="mr-1 w-10 text-black" />
                    <label htmlFor="name" className="text-gray-700"> </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      placeholder="Source Language"
                      className="w-full px-1 py-1 rounded-md border-transparent focus:outline-none border-t-2 focus:ring-1 focus:ring-indigo-500"
                      required
                    />
                  </div>
                  <div className="flex items-center  border-2 bg-white rounded px-2 py-0" style={{ width: "290px" }}>
                    <MdTranslate className="mr-1 w-10 text-black" />
                    <label htmlFor="name" className="text-gray-700"> </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      placeholder="To Language"
                      className="w-full px-1 py-1 rounded-md border-transparent focus:outline-none border-t-2 focus:ring-1 focus:ring-indigo-500"
                      required
                    />
                  </div>
                  <div className="flex items-center  border-2 bg-white rounded px-2 py-0" style={{ width: "290px" }}>
                    <CiDeliveryTruck className="mr-1 w-10 text-black " />
                    <label htmlFor="name" className="text-gray-700"> </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      placeholder="Delivery Options"
                      className="w-full px-1 py-1 rounded-md border-transparent focus:outline-none border-t-2 focus:ring-1 focus:ring-indigo-500"
                      required
                    />
                  </div>
                  <div className="flex items-center  border-2 px-2 bg-white rounded py-0" style={{ width: "290px" }}>
                    <FaCommentAlt className="mr-1 w-10 text-black" />
                    <label htmlFor="name" className="text-gray-700"> </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      placeholder="Your message"
                      className="w-full px-1 py-1 rounded-md border-transparent focus:outline-none border-t-2 focus:ring-1 focus:ring-indigo-500"
                      required
                    />
                  </div>
                  <div>
                    <button class="text-white bg-[#3D65FF] border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded-full text-lg">Send Message</button>
                  </div>
                </form>
          </div>
          </div>
        </div><br/>
      
       
    <nav className="bg-gray-800 p-4">
      <div className=" mx-auto flex justify-between items-center">
        <div className="text-white text-lg font-bold">MyApp</div>
        <div className="relative">
          <button
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            className="text-white focus:outline-none"
          >
            Menu
          </button>
          {isDropdownOpen && (
            <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-2 z-20">
              <a href="Services" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">Services</a>
              <a href="#Contact" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">Contact</a>
            </div>
          )}
        </div>
      </div>
    </nav>
 
    
        
    </>
  )
}

export default Services;
