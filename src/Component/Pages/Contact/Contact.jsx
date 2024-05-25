import React from 'react';
import './cont.css';
import Backgr from "../../../assets/img/Frame 617.png";
import { MdCall } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import { MdAccessTimeFilled } from "react-icons/md";
 import Background2 from "../../../assets/img/Group (1).png";

import { FaUser } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { IoMdPhonePortrait } from "react-icons/io";
import { CiDeliveryTruck } from "react-icons/ci";
import { FaCommentAlt } from "react-icons/fa";
import { MdTranslate } from "react-icons/md";
import Background from "../../../assets/img/Vector 2.png";
import Location from "../../../assets/img/Rectangle 26.png";


const Contact = () => {
  return (
    <>
       <div className=' container1 flex w-full min-h-screen justify-center items-center ' style={{ backgroundImage: "url(" + Background + ")" }}>
        <div className='flex flex-col gap-20  md:flex-row md:space-x-6 space-y-6 md:space-y-0  bg-[#101D2E]  w-full max-w-4xl  text-white'>
          <div className='flex flex-col justify-between '>
            <div className='' >
                <h1 className='font-bold text-4xl tracking-wide'>Contact Us</h1><br/>
                <div className="flex items-center text-sm gap-4 rounded px-2 py-1 ">
               <FaLocationDot className=" text-blue-600" />
                <span>Servcorp, Suntec Tower Three, #42-01, 8 Temasek Boulevard <br/>Singapore 038988</span>
                </div><br/>
                <div className="flex items-center text-sm gap-4  rounded px-2 py-0">
                <MdCall className=" text-blue-600" />
                <span>+65 8695 7260</span>
                </div><br/>
                <div className="flex items-center text-sm gap-4   rounded px-2 py-0">
                <MdCall className=" text-blue-600" />
                <span>+65 6711 0135</span>
                </div><br/>
                <div className="flex items-center text-sm gap-4  rounded px-2 py-0">
                <MdCall  className=" text-blue-600"/>
                <span>+65 6711 0135</span>
                </div><br/>
                <div className="flex items-center text-sm gap-4  rounded px-2 py-0">
                <MdAccessTimeFilled className=" text-blue-600"/>
                <span>09.00 AM-06.30 PM</span>
                </div>
                </div>
        </div>
             
          <div>
            <div className='bg-white rounded-xl shadow-lg p-7 top-10  '>
            <form className="grid grid-cols-1 gap-4">
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
        </div>
         </div>
          
         <section  > 
  <div className="w-full  px-5 py-24 mx-auto flex sm:flex-nowrap flex-wrap" >
    <div className="lg:w-2/3 md:w-1/2 bg-gray-300 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative"style={{height:"700px", width:"1600px"}}>
      <iframe width="100%" height="600%" className="absolute inset-0" frameborder="0" title="map" marginheight="0" marginwidth="0" scrolling="no" src="https://maps.google.com/maps?width=100%&amp;height=600&amp;hl=en&amp;q=%C4%B0zmir+(My%20Business%20Name)&amp;ie=UTF8&amp;t=&amp;z=14&amp;iwloc=B&amp;output=embed" ></iframe>
     </div>
    </div>
</section>
       </>
  )
}

export default Contact
