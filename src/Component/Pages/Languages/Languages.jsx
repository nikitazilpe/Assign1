import React from 'react';
import { FaLanguage, FaUser } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { IoMdPhonePortrait } from "react-icons/io";
import { CiDeliveryTruck } from "react-icons/ci";
import { FaCommentAlt } from "react-icons/fa";
import { MdTranslate } from "react-icons/md";
import Background from "../../../assets/img/Vector 2.png";
import Fram from "../../../assets/images/Frame 585.png";
import W1 from "../../../assets/images/questions/pana.png";
import Bg from "../../../assets/imgs/Frame 619.png";
import P1 from "../../../assets/img/Ellipse 2.png";
import P2 from "../../../assets/img/Ellipse 2 (1).png";
import P3 from "../../../assets/img/Ellipse 2 (2).png";
import P4 from "../../../assets/img/Ellipse 2.png";
import Bgg from "../../../assets/imgs/Frame 619 (1).png";
import D1 from "../../../assets/imgs/icon-park-outline_star.png";
import D2 from "../../../assets/imgs/icon-park-outline_speed-one.png";
import D3 from "../../../assets/imgs/icon-park-outline_tag-one.png";
import { CiCirclePlus } from "react-icons/ci";
import { CiCircleMinus } from "react-icons/ci";

const Languages = () => {

  const shopOptions = [
    { image: Fram },
    { image: Fram },
    { image: Fram },
    { image: Fram },
    { image: Fram },
    { image: Fram },
    { image: Fram },
    { image: Fram },
    { image: Fram },

  ]


  return (
    <>
      <div className=' container1 flex w-full min-h-screen justify-center items-center ' style={{ backgroundImage: "url(" + Background + ")" }}>
        <div className='flex flex-col gap-20  md:flex-row  bg-[#101D2E]  text-white  h-[240px]'>
          <div className=' '>
            <h1 className='font-bold text-4xl tracking-wide'>Professional & Native<br /><span>Chinese Translation</span></h1>
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
      <br /><br />

      {/*2nd*/}
      <section class="text-gray-600 ">
        <div class="mx-auto  px-5 py-20">
          <div class="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center  ">
            <h1 class="title-font sm:text-4xl text-2xl mb-2 font-medium text-gray-900">超过80种语言的商务 电子商务，技术和个人  翻译服务 </h1>
            <p class="mb-2  leading-relaxed text-inline">
              Letter Crafts，我们知道生活和业务中可能充满无穷的挑战性，尤其是在诸如新加坡这样的多元文化枢纽中。这就是为什么我们提供了高达80多种语言的快速，优质和高效的翻译服务的原因。因此，无论您是想在新加坡工作和生活，还是想在新加坡开展业务，我们都可以满足您的商务翻译需求。当您搬到新加坡居住时，通常您需要把个人文件翻译成英文，Letter Crafts也能够为您提供这方面的帮助。最后，您可能希望将业务扩展到其他国家，例如中国。再一次，无论是基于电子商务的业务，技术业务还是传统业务，Letter Crafts都可以为您翻译所有业务和营销文件。为您提供高达80多种不同语言的快捷优质服务。
            </p>
            <div>
              <button class="text-white bg-[#3D65FF] border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded-full text-lg">Get a Quote in 30mins →</button>
            </div>
          </div>
        </div>
      </section>

      {/*3*/}
      <div className='container1'>
        <div className=" min-h-screen"  >
          <div className="  py-16 border-t "> {/* Added border-t border-blue-500 here */}
            <div className=" mx-auto px-4">
              <div className="">
                <h2 className="text-4xl text-white font-semibold mb-8">Samples of certified <br />translation</h2>
              </div>
              <div className="scroll-container scroll-smooth overflow-x-auto flex flex-row">
                {shopOptions &&
                  shopOptions.map((fram) => (
                    <div className="mx-2 text-left">
                      <img src={fram.image} className="max-w-[30vw] max-h-[20vw] md:max-w[20vw]" alt="" />
                      <p className='bg-[#101D2E] '>{fram.name}</p>
                    </div>
                  ))}
              </div>
            </div>
          </div>
        </div>
      </div>

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

       

      {/*7rd*/}
      <section class="container1 text-gray-600 body-font" style={{ backgroundImage: "url(" + Bgg + ")" }}>
        <div class=" px-5 py-24 mx-auto">
          <div class="flex flex-col text-center w-full mb-20">
            <h1 class="sm:text-4xl text-2xl font-medium title-font mb-4 text-white">Why LetterCrafts?</h1>
          </div>
          <div class="flex flex-wrap -m-4 text-center justify-center items-center">
            <div class="p-4 md:w-1/4 sm:w-1/2 w-full ">
              <div class="shadow-2xl px-4 py-6 rounded-2xl bg-white">
                <div class="items-center justify-center flex">
                  <img src={D1} alt="" class="mx-auto" />
                </div>
                <h2 class="font-bold  text-2xl text-gray-900">Best Rates</h2>
                <p class="leading-relaxed">
                  You are welcome to provide any<br /> feedback or ask for corrections.<br />
                  We assure 6 months post project <br />support to all our clients.
                </p>
              </div>
            </div>
            <div class="p-4 md:w-1/4 sm:w-1/2 w-full ">
              <div class="shadow-2xl px-4 py-6 rounded-2xl bg-white">
                <div class="items-center justify-center flex">
                  <img src={D2} alt="" class="mx-auto" />
                </div>
                <h2 class="font-bold  text-2xl text-gray-900">Best Quality</h2>
                <p class="leading-relaxed">
                  You are welcome to provide any<br /> feedback or ask for corrections.<br />
                  We assure 6 months post project <br />support to all our clients.
                </p>
              </div>
            </div>
            <div class="p-4 md:w-1/4 sm:w-1/2 w-full ">
              <div class="shadow-2xl px-4 py-6 rounded-2xl bg-white">
                <div class="items-center justify-center flex">
                  <img src={D3} alt="" class="mx-auto" />
                </div>
                <h2 class="font-bold  text-2xl text-gray-900">Speed</h2>
                <p class="leading-relaxed">
                  You are welcome to provide any<br /> feedback or ask for corrections.<br />
                  We assure 6 months post project <br />support to all our clients.
                </p>
              </div>
            </div>
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

export default Languages;

/*<div className=' container1 flex w-20px h-10 gap-5 min-h-screen justify-center items-center ' style={{ backgroundImage: "url(" + Bgg + ")" }}></div>*/
