
import React, { useState } from 'react';
import Background from "../../../assets/img/Vector 2.png";
import { Carousel } from "flowbite-react";
import L1 from "../../../assets/img/Rectangle 6.png";
import L2 from "../../../assets/img/Rectangle 7.png";
import L3 from "../../../assets/img/Rectangle 8.png";
import L6 from "../../../assets/img/Rectangle 9.png";
import L4 from "../../../assets/img/Rectangle 10.png";
import L5 from "../../../assets/img/Rectangle 10.png";

import Fram2 from "../../../assets/img/Frame.png";
import Pana from "../../../assets/img/pana.png";
import "./style.css";
import V1 from "../../../assets/img/Vector (1).png";
import V2 from "../../../assets/img/icon-park-outline_user-business.png";
import V3 from "../../../assets/img/\icon-park-outline_user.png";
import V4 from "../../../assets/img/icon-park-outline_all-application.png";
import V5 from "../../../assets/img/Group.png";
import V6 from "../../../assets/img/icon-park-outline_translate.png";
import V7 from "../../../assets/img/heroicons-outline_briefcase.png";
import V8 from "../../../assets/img/heroicons-outline_scale.png"
import V9 from "../../../assets/img/heroicons-outline_code.png";
import P1 from "../../../assets/img/Ellipse 2.png";
import P2 from "../../../assets/img/Ellipse 2 (1).png";
import P3 from "../../../assets/img/Ellipse 2 (2).png";
import P4 from "../../../assets/img/Ellipse 2.png";
import h from "../../../assets/img/Group (1).png";
//import Background from "../../../assets/img/Vector 2.png";
import Ss1 from "../../../assets/img/Rectangle 6 (1).png";
import Ss2 from "../../../assets/img/Rectangle 10 (1).png";
import Ss3 from "../../../assets/img/Rectangle 9 (1).png";
import Ss4 from "../../../assets/img/Rectangle 11 (1).png";
import Ss5 from "../../../assets/img/Rectangle 10 (4).png";
import Ss6 from "../../../assets/img/Rectangle 8.png";
import Ss7 from "../../../assets/img/Rectangle 8 (1).png";
import Ss8 from "../../../assets/img/Rectangle 9.png";
import Ss9 from "../../../assets/img/Rectangle 11.png";


import pana2 from "../../../assets/images/pana.png";
import Frame2 from "../../../assets/images/Frame 618 (1).png";
import Em1 from "../../../assets/images/icon-park-outline_five-star-badge.png";
import Em2 from "../../../assets/images/icon-park-outline_user-business (1).png";
import Em3 from "../../../assets/images/icon-park-outline_user (1).png";


import { FaUser } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
//import { IoMdPhonePortrait } from "react-icons/io";
import { IoMdPhonePortrait } from "react-icons/io";
import { CiDeliveryTruck } from "react-icons/ci";
import truck from "../../../assets/img/mdi_truck-delivery.png";
import { FaCommentAlt } from "react-icons/fa";
import { MdTranslate } from "react-icons/md";

import Axios from 'axios';
import { Icon } from "@iconify/react"


const Home = () => {
 

  return (
    <>
        
        <div className="flex min-[250px]:bg-[#101d2e] lg:flex-row md:flex-col sm:flex-col min-[250px]:flex-col   lg:h-[48rem] min-[250px]:h-[80rem] sm:h-[20rem] md:h-[20rem] ">
        <div className="lg:py-28 md:py-16 sm:py-8 lg:px-28 md:px-16 sm:px-8 lg:flex-row md:flex-col sm:flex-col ">
          <h1 className="text-4xl text-white font-bold mb-2">LetterCrafts</h1>
          <h1 className="text-4xl text-white font-bold mb-2">Translation</h1>
          <h1 className="text-4xl text-white font-bold mb-2">Goverment Documents</h1>
          <h3 className="text-lg text-white font-semibold mb-4">
            Professional translators delivering High Quality, Fast & <br />{" "}
            Affordable translation services in <Icon icon="openmoji:flag-singapore" className=" text-[#3D65FF] text-[30px] inline-flex" /> Singapore.
          </h3>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
            Learn More{" "}
         
          </button>
        </div>
        <div className="flex lg:flex-row md:flex-row sm:flex-row lg:mt-[25%] min-[250px]:flex-col sm:-mt-[1%] min-[250px]:items-center justify-between ">
          <div className="flex flex-col lg:w-[15rem] lg:h-[15rem]  bg-[#E6FFAF] lg:p-6 rounded-lg m-4 sm:h-[20rem] sm:w-[20rem] sm:gap-1 sm:px-[1rem] sm:mx-[1rem] md:hidden lg:block sm:hidden hover:scale-95 duration-300">
            <div className="flex justify-center items-center pr-[80%] ">
              <img src={V1} alt="" className="h-8 w-auto" />
            </div>
            <h2 className="text-base font-bold pt-1 mb-2">
              Certified translation and notarisation
            </h2>
            <p className="text-gray-700 mb-4">
              Neque nibh tincidunt <br /> amet lectus feugiat nisl varius massa
            </p>
            <a href="/#" className="text-blue-500  text-left">
              Learn More{" "}
              
            </a>
          </div>
          <div className="flex flex-col  lg:w-[15rem] lg:h-[15rem] bg-[#FFC4B1] lg:p-6 rounded-lg m-4 sm:h-[20rem] sm:w-[20rem] sm:gap-1 sm:px-[1rem] sm:mx-[1rem] md:hidden lg:block sm:hidden hover:scale-95 duration-300">
            <div className="flex pr-[80%]">
              <img src={V1} alt="" className="h-8 w-auto" />
            </div>
            <h2 className="text-base font-bold pt-1 mb-2">
              Certified translation and notarisation
            </h2>
            <p className="text-gray-700 mb-4">
              Neque nibh tincidunt <br />
              amet lectus feugiat nisl varius massa
            </p>
            <a href="/#" className="text-blue-500 text-left">
              Learn More{" "}
              
            </a>
          </div>
          <div className="flex flex-col  lg:w-[15rem] lg:h-[15rem]  bg-[#AEE7FF] lg:p-6 rounded-lg m-4 sm:h-[20rem] sm:w-[20rem] sm:gap-1 sm:px-[1rem] sm:mx-[1rem] md:hidden lg:block sm:hidden hover:scale-95 duration-300">
            <div className="flex pr-[80%]">
              <img src={V1} alt="" className="h-8 w-auto" />
            </div>
            <h2 className="text-base font-bold pt-1 mb-2 text-left">
              Certified translation and notarisation
            </h2>
            <p className="text-gray-700 mb-4">
              Neque nibh tincidunt <br /> amet lectus feugiat nisl varius massa
            </p>
            <a href="/#" className="text-blue-500 text-left">
              Learn More{" "}
             
            </a>
          </div>
        </div>
      </div>
     

      {/*2nd*/}
      <section className=' section-logo w-full md:grid-cols-2 '>
        <div className='mx-auto'>
          <div className='flex justify-center items-center'>
            <img src={L1} alt="" />
            <img src={L2} alt="" />
            <img src={L3} alt="" />
            <img src={L6} alt="" />
            <img src={L4} alt="" />
            <img src={L5} alt="" />
          </div>
        </div>
      </section><br /><br />

      {/*3rd*/}
      <section class=" service-sec text-gray-600 body-font overflow-hidden">
        <div class=" px-5 py-24  mx-auto">
          <div class="flex flex-wrap -m-12">
            <div class="p-12 md:w-1/2 flex flex-col items-start">

              <h1 class="text-4xl font-semibold mb-4 text-black md:w-3/4 leading-snug">
                Translation Services
              </h1>
              <p class="text-base mb-8 leading-relaxed flex flex-2">
                Letter Crafts is your partner for over 80 languages. <br />
                Our team of native translators and industry experts can cater to all your translation needs.
              </p>

              <div class="my-28 md:my-8 py-12 flex flex-col md:flex-row items-center justify-between gap-12">
                <div class="flex-grow-0 md:flex-grow">
                  <img src={Pana} alt="" width="400" height="300" />
                </div>
              </div>
            </div>
            {/*boxes*/}
            <section className='py-16'>
              <div className='mx-auto max-w-2xl md:px-3 '>
                <div className=' grid  sm:grid-cols-2 md:grid-cols-3 lg:gap-10 '>
                  { /* Loop through your images here */}
                  <div className='   duration-200 hover:scale-95 shadow-2xl' style={{ width: "170px" }}>
                    <div className='mb-[5px] ' style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
                      <img src={V1} alt="" />
                    </div>
                    <div className='px-3 py-3 bg-white flex flex-col items-center justify-center'>
                      <h1 className='items-center  justify-center font-semibold text-sm'>Certified <br />
                        translation and <br />
                        notarisation</h1>
                    </div>
                  </div>

                  <div className=' rounded   duration-200 hover:scale-95 shadow-2xl' style={{ width: "170px" }}>
                    <div className='mb-[5px] ' style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
                      <img src={V2} alt="" />
                    </div>
                    <div className='px-3 py-3 bg-white flex flex-col items-center justify-center'>
                      <h1 className='items-center justify-center font-semibold text-sm'>Business document </h1>
                      <span className='items-center justify-center font-semibold text-sm'> translation</span>

                    </div>
                  </div>
                  <div className='   duration-200 hover:scale-95 shadow-2xl' style={{ width: "170px" }}>
                    <div className='mb-[5px] ' style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
                      <img src={V3} alt="" />
                    </div>
                    <div className='px-3 py-3 bg-white flex flex-col items-center justify-center'>
                      <h1 className='items-center justify-center font-semibold text-sm'>Personal document </h1>
                      <span className='items-center justify-center font-semibold text-sm'> translation</span>
                    </div>
                  </div>
                  <div className='   duration-200 hover:scale-95 shadow-2xl' style={{ width: "170px" }}>
                    <div className='mb-[5px] ' style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
                      <img src={V4} alt="" />
                    </div>
                    <div className='px-3 py-3 bg-white flex flex-col items-center justify-center'>
                      <h1 className='items-center justify-center font-semibold text-sm'>Website and apps </h1>
                      <span className='items-center justify-center font-semibold text-sm'> translation and</span>
                      <span className='items-center justify-center font-semibold text-sm'> localisation</span>
                    </div>
                  </div>
                  <div className='   duration-200 hover:scale-95 shadow-2xl' style={{ width: "170px" }}>
                    <div className='mb-[5px] ' style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
                      <img src={V5} alt="" />
                    </div>
                    <div className='px-3 py-3 bg-white flex flex-col items-center justify-center'>
                      <h1 className='items-center justify-center font-semibold text-sm'>Typesetting and </h1>
                      <span className='items-center justify-center font-semibold text-sm'>  copywriting</span>
                      <span className='items-center justify-center font-semibold text-sm'>documents </span>
                    </div>
                  </div>
                  <div className='   duration-200 hover:scale-95 shadow-2xl' style={{ width: "170px" }}>
                    <div className='mb-[5px] ' style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
                      <img src={V6} alt="" />
                    </div>
                    <div className='px-3 py-3 bg-white flex flex-col items-center justify-center'>
                      <h1 className='items-center justify-center font-semibold text-sm'>Marketing </h1>
                      <span className='items-center justify-center font-semibold text-sm'>translation and</span>
                      <span className='items-center justify-center font-semibold text-sm'>  transcreation</span>
                    </div>
                  </div>
                  <div className='   duration-200 hover:scale-95 shadow-2xl' style={{ width: "170px" }}>
                    <div className='mb-[5px] ' style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
                      <img src={V7} alt="" />
                    </div>
                    <div className='px-3 py-3 bg-white flex flex-col items-center justify-center'>
                      <h1 className='items-center justify-center font-semibold text-sm'>Business specific </h1>
                      <span className='items-center justify-center font-semibold text-sm'> translation</span>
                    </div>
                  </div>
                  <div className='   duration-200 hover:scale-95 shadow-2xl' style={{ width: "170px" }}>
                    <div className='mb-[5px] ' style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
                      <img src={V8} alt="" />
                    </div>
                    <div className='px-3 py-3 bg-white flex flex-col items-center justify-center'>
                      <h1 className='items-center justify-center font-semibold text-sm'>Legal document </h1>
                      <span className='items-center justify-center font-semibold text-sm'> translation</span>
                    </div>
                  </div>
                  <div className='   duration-200 hover:scale-95 shadow-2xl' style={{ width: "170px" }}>
                    <div className='mb-[5px] ' style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
                      <img src={V9} alt="" />
                    </div>
                    <div className='px-3 py-3 bg-white flex flex-col items-center justify-center'>
                      <h1 className='items-center justify-center font-semibold text-sm'>Technical and IT </h1>
                      <span className='items-center justify-center font-semibold text-sm'> translation</span>
                    </div>
                  </div>
                  <br />
                </div>
              </div>
            </section >
          </div>
        </div>
      </section>

             {/*5rd*/}
      <section class="  text-gray-600 body-font overflow-hidden" >
        <div class=" px-5 py-24 mx-auto">
          <div class="flex flex-wrap -m-12">
            <div class="p-12 md:w-1/2 flex flex-col items-start">

              <h1 class="text-4xl font-semibold mb-2 text-black md:w-3/4 leading-snug">
                Businesses love
              </h1>
              <h1 class="text-4xl font-semibold mb-2 text-black ">
                working with us
              </h1>
              <section className='py-16'>
                <div className='mx-auto max-w-2xl md:px-2 '>
                  <div className=' grid  sm:grid-cols-1 md:grid-cols-2 lg:gap-10 '>
                    { /* Loop through your images here */}
                    <div className='w-60   duration-200 hover:scale-95 ' >
                      <h1 className='  text-10 text-blue-500'>250+ </h1><br />
                      <p>Posuere lacus dignissim eget<br />
                        a venenatis aenean at <br />
                        interdum.</p>
                    </div>


                    <div className='w-full   duration-200 hover:scale-95 ' >
                      <h1 className='  text-10 text-blue-500'>250+ </h1><br />
                      <p>Urna tincidunt vestibulum <br />
                        massa placerat quis eget non <br />
                        viverra.</p>
                    </div>

                    <div className='w-full   duration-200 hover:scale-95 ' >
                      <h1 className='  text-blue-500'>250+ </h1><br />
                      <p>Posuere lacus dignissim eget<br />
                        a venenatis aenean at <br />
                        interdum.</p>
                    </div>

                    <div className='w-full  duration-200 hover:scale-95 ' >
                      <h1 className='  text-10 text-blue-500'>250+ </h1><br />
                      <p>Urna tincidunt vestibulum <br />
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
                  </div><br/>

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
                </div><br/>
                  
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
                  </div><br/>

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
      </section>
     

      {/*6th* Succes stories page*/}
      <div className='container1'>
        <div className=" min-h-screen"  >
          <div className="  py-16 border-t "> {/* Added border-t border-blue-500 here */}
            <div className=" mx-auto px-4">
              <div className="text-center">
                <h2 className="text-4xl text-white font-semibold mb-8">Success Stories</h2>
                <p className="text-base leading-relaxed text-white">
                  Laoreet in volutpat elementum nisl at eget. Eu egestas scelerisque interdum id imperdiet viverra <br />
                  gravida sit scelerisque. Id consequat lorem praesent mauris. Dolor aenean eleifend etiam amet.
                </p>
              </div>
              <br />
              {/*2nd*/}
              <section className='w-full'>
                <div className='mx-auto '>
                  <div className='flex justify-center items-center gap-12'>
                    <h1 className='text-white text-sm'>Government  & NGO</h1>
                    <h1 className='text-white text-sm'>Banking & Finance</h1>
                    <h1 className='text-white text-sm'>Travel & Leisure</h1>
                    <h1 className='text-white text-sm'>Legal</h1>
                    <h1 className='text-white text-sm'>Health</h1>
                    <h1 className='text-white text-sm'>Engineering</h1>
                    <h1 className='text-white text-sm'>Digital & Education</h1>
                  </div>
                  <div className='flex justify-center items-center'>
                    <img src={Ss9} alt="" />
                    <img src={L1} alt="" />
                    <img src={Ss7} alt="" />
                    <img src={L4} alt="" />
                    <img src={Ss5} alt="" />
                    <img src={L2} alt='' />
                  </div>

                  <div className='flex justify-center items-center'>
                    <img src={Ss1} alt="" />
                    <img src={Ss8} alt="" />
                    <img src={L3} alt="" />
                    <img src={Ss3} alt="" />
                    <img src={Ss2} alt="" />
                    <img src={Ss4} alt='' />
                  </div>

                  <div className='flex justify-center items-center'>
                    <img src={L3} alt="" />
                    <img src={Ss1} alt="" />
                    <img src={L1} alt="" />
                    <img src={Ss2} alt="" />
                    <img src={L4} alt="" />
                    <img src={Ss7} alt='' />
                  </div>

                  <div className='flex justify-center items-center'>
                    <img src={Ss3} alt="" />
                    <img src={Ss4} alt="" />
                    <img src={L2} alt="" />
                    <img src={Ss8} alt="" />
                    <img src={Ss5} alt="" />
                    <img src={Ss9} alt='' />
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>



      {/*case studies*/}
      <div className=''>
        <div className="bg-white min-h-screen">
          <div className="px-4 lg:px-14 max-w-screen-2xl mx-auto">
            <div className="w-full mx-auto">
              <div className="my-28 md:my-8 py-12 flex flex-col md:flex-row-reverse items-center justify-between gap-12">
                <div className="flex-grow-0 md:flex-grow gap-8">
                  <img src={pana2} alt="Analyze Your Website" width="400" height="300" />
                </div>
                <div className="md:w-1/2">
                  <h1 className="text-4xl font-semibold mb-4 text-black md:w-3/4 leading-snug">
                    Case Studies
                  </h1>
                  <p className="text-base mb-8 leading-relaxed flex flex-2">
                    Laoreet in volutpat elementum nisl at eget. Eu egestas scelerisque interdum id imperdiet viverra
                    gravida sit scelerisque. Id consequat lorem praesent mauris. Dolor aenean eleifend etiam amet.
                  </p>

                  <h1 className="text-2xl font-semibold mb-4 text-black md:w-3/4 leading-snug">
                    Title
                  </h1>
                  <p className="text-base mb-8 leading-relaxed flex flex-2">
                    Quis suscipit facilisis consectetur netus egestas. Orci<br />
                    semper rhoncus tortor suspendisse. Lacinia tincidunt <br />
                    elementum elit ut risus enim aliquam tincidunt.<br />
                    Condimentum sit risus sit non sit. Volutpat vitae nibh iaculis aliquam.
                  </p>

                  <h1 className="text-2xl font-semibold mb-4 text-black md:w-3/4 leading-snug">
                    Project heighlights
                  </h1>
                  <p className="text-base mb-8 leading-relaxed flex flex-2">
                    Quis integer non morbi eget non.<br />
                    At porta vestibulum consequat libero duis id justo.<br />
                    In urna at pulvinar adipiscing egestas neque.<br />
                    Et arcu sed sapien ligula ultricies nisl tincidunt <br />
                    commodo.<br />
                    Consectetur nam mattis mollis proin.
                  </p>
                  <button className="bg-[#3D65FF] rounded-full py-2 px-5">
                    Download CaseStudy
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

        {/*email*/}
        <div className='container2 '>
        <section class="  text-gray-600 body-font overflow-hidden">
          <div class=" px-5 py-24  mx-auto">
            <div class="flex flex-wrap -m-12">
              <div class="p-12 md:w-1/2 flex flex-col items-start">

                <h1 class="text-4xl font-semibold mb-4 text-white md:w-3/4 leading-snug">
                  Translation Services
                </h1>
                <p class="text-white mb-8 leading-relaxed flex flex-2">
                  Lacus eu ultrices sagittis habitant. Etiam gravida<br />
                  lacus leo vel. Nec viverra commodo at convallis <br />
                  faucibus amet. Aliquam a id aliquam pulvinar neque.

                </p>

                <form className="grid grid-cols-1 gap-4">
                  <div className="flex items-center bg-white rounded px-2 py-0 " style={{ width: "290px" }}>
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
                  <div className="flex items-center bg-white rounded px-2 py-0" style={{ width: "290px" }}>
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
                  <div className="flex items-center bg-white rounded px-2 py-0" style={{ width: "290px" }}>
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
                  <div className="flex items-center bg-white rounded px-2 py-0" style={{ width: "290px" }}>
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
                  <div className="flex items-center bg-white rounded px-2 py-0" style={{ width: "290px" }}>
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
                  <div className="flex items-center bg-white rounded px-2 py-0" style={{ width: "290px" }}>
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
                  <div className="flex items-center px-2 bg-white rounded py-0" style={{ width: "290px" }}>
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
              {/*boxes*/}
              <div class="p-12 md:w-1/2 flex flex-col items-start">

                <h1 class="text-3xl font-semibold mb-4 text-white md:w-3/4 leading-snug">
                  Tortor in ut nisi magna
                </h1>
                <p class="text-white mb-8 leading-relaxed flex flex-2">
                  Eget dui varius semper vel viverra. Rhoncus felis tristique nisl eget<br />
                  ultricies semper vitae. Turpis porta maecenas quis felis tempus sed nisl<br />
                  risus sit. Nam viverra lobortis arcu justo netus quis fringilla sed lacus.
                </p>

                <section className='py-16 '>
                  <div className='mx-auto max-w-2xl md:px-3   '>
                    <div className='  grid  sm:grid-cols-2 md:grid-cols-3 lg:gap-10 '>
                      { /* Loop through your images here */}
                      <div className='    duration-200 hover:scale-95 shadow-2xl' style={{ width: "170px" }}>
                        <div className='mb-[5px]' style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
                          <img src={Em1} alt="" />
                        </div>
                        <div className='px-3 py-3  bg-[#101D2E] text-white flex flex-col items-center justify-center'>
                          <h1 className='  items-center  justify-center font-semibold text-sm'>Certified <br />
                            translation and <br />
                            notarisation</h1>
                        </div>
                      </div>

                      <div className=' rounded   duration-200 hover:scale-95 shadow-2xl' style={{ width: "170px" }}>
                        <div className='mb-[5px] ' style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
                          <img src={Em2} alt="" />
                        </div>
                        <div className='px-3 py-3  bg-[#101D2E] text-white flex flex-col items-center justify-center'>
                          <h1 className='items-center justify-center font-semibold text-sm'>Business document </h1>
                          <span className='items-center justify-center font-semibold text-sm'> translation</span>

                        </div>
                      </div>
                      <div className='   duration-200 hover:scale-95 shadow-2xl' style={{ width: "170px" }}>
                        <div className='mb-[5px] ' style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
                          <img src={Em3} alt="" />
                        </div>
                        <div className='px-3 py-3 bg-[#101D2E] text-white flex flex-col items-center justify-center'>
                          <h1 className='items-center justify-center font-semibold text-sm'>Personal document </h1>
                          <span className='items-center justify-center font-semibold text-sm'> translation</span>
                        </div>
                      </div>
                      <div className='   duration-200 hover:scale-95 shadow-2xl' style={{ width: "170px" }}>
                        <div className='mb-[5px] ' style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
                          <img src={Em1} alt="" />
                        </div>
                        <div className='px-3 py-3 bg-[#101D2E] text-white flex flex-col items-center justify-center'>
                          <h1 className='items-center justify-center font-semibold text-sm'>Website and apps </h1>
                          <span className='items-center justify-center font-semibold text-sm'> translation and</span>
                          <span className='items-center justify-center font-semibold text-sm'> localisation</span>
                        </div>
                      </div>
                      <div className='   duration-200 hover:scale-95 shadow-2xl' style={{ width: "170px" }}>
                        <div className='mb-[5px] ' style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
                          <img src={Em2} alt="" />
                        </div>
                        <div className='px-3 py-3 bg-[#101D2E] text-white flex flex-col items-center justify-center'>
                          <h1 className='items-center justify-center font-semibold text-sm'>Typesetting and </h1>
                          <span className='items-center justify-center font-semibold text-sm'>  copywriting</span>
                          <span className='items-center justify-center font-semibold text-sm'>documents </span>
                        </div>
                      </div>
                      <div className='   duration-200 hover:scale-95 shadow-2xl' style={{ width: "170px" }}>
                        <div className='mb-[5px] ' style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
                          <img src={Em3} alt="" />
                        </div>
                        <div className='px-3 py-3 bg-[#101D2E] text-white flex flex-col items-center justify-center'>
                          <h1 className='items-center justify-center font-semibold text-sm'>Marketing </h1>
                          <span className='items-center justify-center font-semibold text-sm'>translation and</span>
                          <span className='items-center justify-center font-semibold text-sm'>  transcreation</span>
                        </div>
                      </div>

                    </div>

                  </div>
                </section >
              </div>
            </div>
          </div>
        </section>
      </div>

     

    </>






  );
};
export default Home;

