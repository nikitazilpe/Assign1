
import React, { useState } from 'react';
import {  FaUser } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { IoMdPhonePortrait } from "react-icons/io";
import { CiDeliveryTruck } from "react-icons/ci";
import { FaCommentAlt } from "react-icons/fa";
import { MdTranslate } from "react-icons/md";
import Background from "../../../assets/img/Vector 2.png";
import Axios from 'axios';
import Frame from "../../../assets/images/Frame 585.png"
import Bg from "../../../assets/imgs/Frame 619.png";
import P1 from "../../../assets/img/Ellipse 2.png";
import P2 from "../../../assets/img/Ellipse 2 (1).png";
import P3 from "../../../assets/img/Ellipse 2 (2).png";
import P4 from "../../../assets/img/Ellipse 2.png";
import W1 from "../../../assets/images/questions/pana.png";
import { CiCirclePlus } from "react-icons/ci";
import { CiCircleMinus } from "react-icons/ci";
import { Icon } from "@iconify/react"

const Certificated = () => {
  const shopOptions = [
    { image: Frame },
    { image: Frame },
    { image: Frame },
    { image: Frame },
    { image: Frame },
   


  ]
  return (
    <>
       <div className=' container1 flex w-full min-h-screen justify-center items-center ' style={{ backgroundImage: "url(" + Background + ")" }}>
        <div className='flex flex-col gap-20  md:flex-row  bg-[#101D2E]  text-white  h-[240px]'>
          <div className=' '>
            <h1 className='font-bold text-4xl tracking-wide'>Certified & Notarised<br /><span>translations in <br/>
            <Icon icon="openmoji:flag-singapore" className=" text-[#3D65FF] text-[30px] inline-flex" /> Singapores</span></h1>
             <br/>
            <p className='text-sm'>
            If you are moving into Singapore or moving to a different country, there <br/>are a wealth of personal documents that you will need translate. 
            </p><br/>
            <p  className='text-sm'>
            Embassies, State Court, MOM, MOE, LTA and ACRA. The ICA requires<br/> that the translated documents for visa applications are also notarised<br/> and authenticated by SAL. We arrange this for you as part of our<br/> Certified Translations service.
            </p>
          </div><br />
          <div className='flex flex-col '>
            <div className='bg-white rounded-xl shadow-lg p-7'>
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
                    id="E-mail"
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
                    id="Phone"
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
                    id="Source Language"
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
                    id="To Language"
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
                    id="Delivery Options"
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
                    id="Your message"
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

        {/*2*/}
        <div className=''>
        <div className=" min-h-screen"  >
          <div className="  py-16 justify-center items-center text-center "> {/* Added border-t border-blue-500 here */}
            <div className=" mx-auto px-4">
              <div className="">
                <h2 className="text-4xl text-black font-semibold mb-8">Samples of certified <br />translation</h2>
              </div>
              <div className="scroll-container scroll-smooth overflow-x-auto flex flex-row justify-center items-center text-center border-blue-500">
                {shopOptions &&
                  shopOptions.map((fram) => (
                    <div className="mx-2  text-left">
                      <img src={fram.image} className="max-w-[30vw] max-h-[20vw] md:max-w[20vw]" alt="" />
                      <p className='bg-[#101D2E] '>{fram.name}</p>
                    </div>
                  ))}
              </div>
            </div>
          </div>
        </div>
      </div>

       {/*5rd*/}
       <section class="container1  text-gray-600 body-font overflow-hidden" style={{ backgroundImage: "url(" + Bg + ")" }}>
        <div class=" px-5 py-24 mx-auto">
          <div class="flex flex-wrap -m-12">
            <div class="p-12 md:w-1/2 flex flex-col items-start">

              <h1 class="text-4xl font-semibold mb-2 text-white  md:w-3/4 leading-snug">
                Businesses love
              </h1>
              <h1 class="text-4xl font-semibold mb-2 text-white ">
                working with us
              </h1>
              <section className='py-16'>
                <div className='mx-auto max-w-2xl md:px-2 '>
                  <div className=' grid  sm:grid-cols-1 md:grid-cols-2 lg:gap-10 '>
                    { /* Loop through your images here */}
                    <div className='w-60   duration-200 hover:scale-95 ' >
                      <h1 className='  text-10 text-blue-500'>250+ </h1><br />
                      <p className='text-white'>Posuere lacus dignissim eget<br />
                        a venenatis aenean at <br />
                        interdum.</p>
                    </div>


                    <div className='w-full   duration-200 hover:scale-95 ' >
                      <h1 className='  text-10 text-blue-500'>250+ </h1><br />
                      <p className='text-white'>Urna tincidunt vestibulum <br />
                        massa placerat quis eget non <br />
                        viverra.</p>
                    </div>

                    <div className='w-full   duration-200 hover:scale-95 ' >
                      <h1 className='  text-blue-500'>250+ </h1><br />
                      <p className='text-white'>Posuere lacus dignissim eget<br />
                        a venenatis aenean at <br />
                        interdum.</p>
                    </div>

                    <div className='w-full  duration-200 hover:scale-95 ' >
                      <h1 className='  text-10 text-blue-500'>250+ </h1><br />
                      <p className='text-white'>Urna tincidunt vestibulum <br />
                        massa placerat quis eget non <br />
                        viverra.</p>
                    </div>
                  </div>
                </div>
              </section>
            </div>
            {/*boxes*/}
            <section className='py-10'>
              <div className=' duration-200 hover:scale-95 shadow-2xl' style={{ width: "500px" }}>
                <div class=" bg-white flex rounded-lg  border-2  border-gray-200 border-opacity-50  sm:flex-row flex-col">
                  <div class="w-19 h-16 sm:mr-8 sm:mb-0 mb-4 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 flex-shrink-0">
                    <img src={P1} alt="" />
                  </div>
                  <div class="flex-grow">
                    <h2 class="text-black text-lg  font-medium mb-1">Floyed Miles</h2>
                    <div class="flex space-x-1">
                      <span class="text-gray-400 hover:text-yellow-500 font-bold">★</span>
                      <span class="text-gray-400 hover:text-yellow-500 font-bold">★</span>
                      <span class="text-gray-400 hover:text-yellow-500 font-bold">★</span>
                      <span class="text-gray-400 hover:text-yellow-500 font-bold">★</span>
                    </div>
                    <p class="">"Very quick and easy! Great service,thanks!"</p>
                  </div>
                </div><br />

                <div class=" bg-white flex rounded-lg shadow-2xl  border-2  border-gray-200 border-opacity-50  sm:flex-row flex-col">
                  <div class="w-19 h-16 sm:mr-8 sm:mb-0 mb-4 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 flex-shrink-0">
                    <img src={P2} alt="" />
                  </div>
                  <div class="flex-grow">
                    <h2 class="text-black text-lg  font-medium mb-1">Arlene McCoy</h2>
                    <div class="flex space-x-1">
                      <span class="text-gray-400 hover:text-yellow-500 font-bold">★</span>
                      <span class="text-gray-400 hover:text-yellow-500 font-bold">★</span>
                      <span class="text-gray-400 hover:text-yellow-500 font-bold">★</span>
                      <span class="text-gray-400 hover:text-yellow-500 font-bold">★</span>
                    </div>
                    <p class="">“The Services provided are really great, we received a<br />
                      genuine advice and at very reasonable cost. all the work <br />
                      went hassle-free and no complication. Mr. Qamar i...”</p>
                  </div>
                </div><br />

                <div class=" bg-white flex rounded-lg  border-2  border-gray-200 border-opacity-50  sm:flex-row flex-col">
                  <div class="w-19 h-16 sm:mr-8 sm:mb-0 mb-4 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 flex-shrink-0">
                    <img src={P3} alt="" />
                  </div>
                  <div class="flex-grow">
                    <h2 class="text-black text-lg  font-medium mb-1">Leslie Alexander</h2>
                    <div class="flex space-x-1">
                      <span class="text-gray-400 hover:text-yellow-500 font-bold">★</span>
                      <span class="text-gray-400 hover:text-yellow-500 font-bold">★</span>
                      <span class="text-gray-400 hover:text-yellow-500 font-bold">★</span>
                      <span class="text-gray-400 hover:text-yellow-500 font-bold">★</span>
                    </div>
                    <p class="">“The Services provided are really great, we received a<br />
                      genuine advice and at very reasonable cost. all the work <br />
                      went hassle-free and no complication. Mr. Qamar i...”</p>
                  </div>
                </div><br />

                <div class=" bg-white flex rounded-lg  border-2  border-gray-200 border-opacity-50  sm:flex-row flex-col">
                  <div class="w-19 h-16 sm:mr-8 sm:mb-0 mb-4 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 flex-shrink-0">
                    <img src={P4} alt="" />
                  </div>
                  <div class="flex-grow">
                    <h2 class="text-black text-lg  font-medium mb-1">Marvin McKinney</h2>
                    <div class="flex space-x-1">
                      <span class="text-gray-400 hover:text-yellow-500 font-bold">★</span>
                      <span class="text-gray-400 hover:text-yellow-500 font-bold">★</span>
                      <span class="text-gray-400 hover:text-yellow-500 font-bold">★</span>
                      <span class="text-gray-400 hover:text-yellow-500 font-bold">★</span>
                    </div>
                    <p class="">“The Services provided are really great, we received a<br />
                      genuine advice and at very reasonable cost. all the work <br />
                      went hassle-free and no complication. Mr. Qamar i...”</p>
                  </div>
                </div>
              </div>
            </section >
          </div>
        </div>
      </section><br />

       
      {/*4*/}
      <section class="text-gray-600 body-font">
        <div class=" mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
            <img alt="hero" src={W1} />
          </div>
          <div class="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
            <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-black">Why LetterCrafts?
            </h1><br />
            <ul class="pl-2">
              <li className='text-sm font-bold text-black'>&#10004; We provide quick, affordable and high-quality Certified Translations &<br /> Notarisation Services. </li><br />
              <li className='text-sm  font-bold'>&#10004; Our translated documents are accepted in all the government bodies in<br /> Singapore:</li>
              <ul class="list-disc text-sm">
                <li className=''> ICA, MOM, LTA, ROM.</li>
                <li>Visa, Immigration & Embassy submissions </li>
                <li> PR applications</li>
                <li>Notarization service is available on request </li>
              </ul><br />
              <li className='text-sm font-bold text-black'><i className=''>&#10004;</i> We value your business and understand the importance of accurate<br /> translations.</li>
              <li className='text-sm font-bold text-black'><i className=''>&#10004;</i> To ensure professional-grade translations, we only engage industry experts <br />and native translators. We help our clients with: </li><br />
              <ul class="list-disc text-sm">
                <li>  Business and Ecommerce documentation translations</li>
                <li>Personal document translations</li>
                <li>Banking, Legal and Contracts translations</li>
                <li>Websites, Apps and Product Description translations</li>
                <li>Technical, IT and Medical translations</li>
                <li>Advertising and Marketing translations</li>
              </ul>
            </ul>
          </div>



        </div>
      </section>

         
      <section class="text-gray-600 body-font">
        <div class="px-5 py-24 mx-auto">
          <div class="flex flex-wrap -m-4">
            <div class="flex flex-col text-center w-full mb-20">
              <h1 class="sm:text-4xl text-2xl font-medium title-font mb-4 text-black">Frequently Asked Questions</h1>
            </div>
            <div class="p-2 lg:w-1/2 md:w-full w-full justify-center items-center ">
              <div className='flex-grow'>
                <div class="flex items-center">
                  <h2 class="text-gray-900 title-font font-bold mr-4">Eu lobortis nisl nulla quis cursus nisl aliquet ut metus. <br /> Senectus?</h2>
                  <div className='flex items-center text-blue-600'> <CiCircleMinus />
                  </div>
                </div>
                <p class="text-gray-500">
                  Turpis dui enim sed nisl facilisis. Tortor sapien bibendum <br />
                  nibh imperdiet suspendisse mauris dolor lacus lectus.<br />
                  Semper a eu lectus nisi augue. Condimentum augue ante <br />
                  nunc ornare amet.
                </p>
              </div>
            </div>
            <div class="p-2 lg:w-1/2 md:w-full w-full h-20 rounded-lg shadow-2xl">
              <div className='flex-grow'>
                <div class="flex items-center">
                  <h2 class="text-gray-900 title-font font-bold mr-4">Eu lobortis nisl nulla quis cursus nisl aliquet ut metus. <br /> Senectus?</h2>
                  <div className='flex items-center text-blue-600'> <CiCirclePlus />
                  </div>
                </div>
              </div>
            </div>
          </div><br /><br />

          <div class="flex flex-wrap -m-4">  <div class="p-2 lg:w-1/2 md:w-full w-full">
            <div className='flex-grow'>
              <div class="flex items-center">
                <h2 class="text-gray-900 title-font font-bold mr-4">Eu lobortis nisl nulla quis cursus nisl aliquet ut metus. <br /> Senectus?</h2>
                <div className='flex items-center text-blue-600'> <CiCirclePlus />
                </div>
              </div>
            </div>
          </div>
            <div class="p-2 lg:w-1/2 md:w-full w-full h-20 rounded-lg shadow-2xl">
              <div className='flex-grow'>
                <div class="flex items-center">
                  <h2 class="text-gray-900 title-font font-bold mr-4">Eu lobortis nisl nulla quis cursus nisl aliquet ut metus. <br /> Senectus?</h2>
                  <div className='flex items-center text-blue-600'> <CiCirclePlus />
                  </div>
                </div>
              </div>
            </div>
          </div><br /><br /><br />

          <div class="flex flex-wrap -m-4 ">  <div class="p-2 lg:w-1/2 md:w-full w-full">
            <div className='flex-grow'>
              <div class="flex items-center">
                <h2 class="text-gray-900 title-font font-bold mr-4">Eu lobortis nisl nulla quis cursus nisl aliquet ut metus. <br /> Senectus?</h2>
                <div className='flex items-center text-blue-600'> <CiCirclePlus />
                </div>
              </div>
            </div>
          </div>
            <div class="p-2 lg:w-1/2 md:w-full w-full h-20 rounded-lg shadow-2xl">
              <div className='flex-grow'>
                <div class="flex items-center">
                  <h2 class="text-gray-900 title-font font-bold mr-4">Eu lobortis nisl nulla quis cursus nisl aliquet ut metus. <br /> Senectus?</h2>
                  <div className='flex items-center text-blue-600'> <CiCirclePlus />
                  </div>
                </div>
              </div>
            </div>
          </div>


        </div>
      </section>

        
    </>
  )
}

export default Certificated

