import Certificate from "../../../assets/imgs/Frame 586.png";
import A2 from "../../../assets/images/Rectangle 18 (3).png";
import pana2 from "../../../assets/images/pana.png";
import Back2 from "../../../assets/images/Frame 619 (2).png";
import Background from "../../../assets/img/Vector 2.png";
import Ss1 from "../../../assets/img/Rectangle 6 (1).png";
import Ss2 from "../../../assets/img/Rectangle 10 (1).png";
import Ss3 from "../../../assets/img/Rectangle 9 (1).png";
import Ss4 from "../../../assets/img/Rectangle 11 (1).png";
import Ss5 from "../../../assets/img/Rectangle 10 (4).png";
import Ss6 from "../../../assets/img/Rectangle 8.png";
import Ss7 from "../../../assets/img/Rectangle 8 (1).png";
import Ss8 from "../../../assets/img/Rectangle 9.png";
import Ss9 from "../../../assets/img/Rectangle 11.png";
import L1 from "../../../assets/img/Rectangle 6.png";
import L2 from "../../../assets/img/Rectangle 7.png";
import L3 from "../../../assets/img/Rectangle 8.png";
import L6 from "../../../assets/img/Rectangle 9.png";
import L4 from "../../../assets/img/Rectangle 10.png";
import L5 from "../../../assets/img/Rectangle 10.png";
import Bgg from "../../../assets/imgs/Frame 619 (1).png";
import React from 'react'
import Ba from "../../../assets/images/logo-1 2.png";
import Frame1 from "../../../assets/images/team-goals/pana.png";
import Frame2 from "../../../assets/images/processing/pana.png";
import A from "../../../assets/images/Rectangle 18 (1).png";
const About = () => {
  const shopOptions = [
    { image: Certificate },
    { image: Certificate },
    { image: Certificate },
    { image: Certificate },
    { image: Certificate },

  ]

  return (
    <>
     
           
        {/*1*/}
      <section class="container1 " style={{ backgroundImage: "url(" + Background + ")" }} >
        <div class=" px-40  mx-auto py-20">
          <div class=" mx-auto flex px-5 py-20 md:flex-row flex-col items-center">
           
            <div class="lg:flex-grow md:w-1/2  md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
              <h1 class="title-font sm:text-4xl text-3xl mb-4 font-bold text-white">About us
              </h1>
              <p className=' text-sm text-white '>
              In mi nunc auctor eget a donec placerat. Enim turpis turpis sed eu eu.<br /> Neque duis orci nam in mauris a sed. Ac id leo posuere et mattis in cras <br />dapibus. Tortor sapien amet cursus at consequat faucibus laoreet eu at.<br /> Eu ac mattis risus augue. Ultricies adipiscing euismod id egestas lacus<br /> platea senectus mattis mattis. Erat sit amet non porttitor id elementum.<br />
              Et vel placerat eros risus molestie hac diam sed. Lectus fusce volutpat<br /> consequat augue. Tortor cras urna risus accumsan cursus. Molestie<br /> libero ut sapien ultrices amet nunc fusce.
            </p>
            </div>
            <img src={Ba} alt="" />
          </div>
        </div>
      </section>


      {/*2nd*/}
      <section className=' py-10'>
        <div className='mx-auto max-w-7xl md:px-6'>
          <h1 className='font-semibold justify-center items-center text-3xl'>The Team </h1><br />
          <p className='text-sm justify-center items-center  '>
            We are a passionate team of professional Translators. With years of experience in<br /> translating over 80 language pairs and handling complex projects - We can cater <br />to all your Translation needs.<br /><br />

            Our People: the diversity and rich experience they bring in is our biggest asset that<br /> has enabled us to move from strength to strength.<br />
            Founded in Singapore, we are now expanding our footprint into Hong Kong, Japan,<br /> India, UAE, and the UK.
          </p><br />
          <div className='grid gap-4 sm:grid-cols-2 md:grid-cols-4 lg:gap-10 '>
            { /* Loop through your images here */}
            <div className='w-full duration-200 hover:scale-95 shadow-2xl rounded-full '>
              <div className=''>
                <img src={A} alt="" className="h-full w-full object-cover" />
              </div>
              <div className='px-4 py-4 bg-white flex flex-col items-center justify-center'>
                <h1 className='font-semibold text-2xl'>Brooklyn Simmons</h1>
                <p className='text-sm justify-center items-center  '>
                  Dapibus eget mi et eu ut <br />tortor ipsum. Volutpat nec<br /> fusce mattis consectetur <br />velit sit nunc urna. Id massa.
                </p>
              </div>
            </div>
            <div className='w-full duration-200 hover:scale-95 shadow-2xl rounded-full'>
              <div className=''>
                <img src={A} alt="" className="h-full w-full object-cover" />
              </div>
              <div className='px-4 py-4 bg-white flex flex-col items-center justify-center'>
                <h1 className='font-semibold text-2xl'>Brooklyn Simmons</h1>
                <p className='text-sm justify-center items-center  '>
                  Dapibus eget mi et eu ut <br />tortor ipsum. Volutpat nec<br /> fusce mattis consectetur <br />velit sit nunc urna. Id massa.
                </p>
              </div>
            </div>
            <div className='w-full duration-200 hover:scale-95 shadow-2xl rounded-full'>
              <div className=''>
                <img src={A} alt="" className="h-full w-full object-cover" />
              </div>
              <div className='px-4 py-4 bg-white flex flex-col items-center justify-center'>
                <h1 className='font-semibold text-2xl'>Brooklyn Simmons</h1>
                <p className='text-sm justify-center items-center  '>
                  Dapibus eget mi et eu ut <br />tortor ipsum. Volutpat nec<br /> fusce mattis consectetur <br />velit sit nunc urna. Id massa.
                </p>
              </div>
            </div>
            <div className='w-full duration-200 hover:scale-95 shadow-2xl rounded-full'>
              <div className=''>
                <img src={A} alt="" className="h-full w-full object-cover" />
              </div>
              <div className='px-4 py-4 bg-white flex flex-col items-center justify-center'>
                <h1 className='font-semibold text-2xl'>Brooklyn Simmons</h1>
                <p className='text-sm justify-center items-center  '>
                  Dapibus eget mi et eu ut <br />tortor ipsum. Volutpat nec<br /> fusce mattis consectetur <br />velit sit nunc urna. Id massa.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section><br /><br />w

      {/*3rd*/}
      <section class=" " style={{ backgroundImage: "url(" + Bgg + ")" }}>
        <div class=" px-40  mx-auto py-20">
          <div class=" mx-auto flex px-5 py-20 md:flex-row flex-col items-center">
            <img src={Frame1} alt="" />
            <div class="lg:flex-grow md:w-1/2  md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
              <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">Our Mission
              </h1>
              <p class="mb-8 leading-relaxed text-white">
                We operate with a single-minded focus to deliver high quality, fast and an affordable Translation<br /> service.<br />

                As a translations company we are conscious of the value proposition we bring to our clients and <br />so we strive to do our best every-time a client engages us.<br />
                Providing customized solutions and being sensitive to client's requirements are <br />values that are ingrained in our ways of working.
              </p>
            </div>
          </div>
        </div>
      </section>
  
           {/*4rd*/}
      <section class=" " >
        <div class=" px-40  mx-auto py-10">
          <div class=" mx-auto flex px-5 py-20 md:flex-row flex-col items-center">
           
            <div class="lg:flex-grow md:w-1/2  md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
              <h1 class="title-font sm:text-4xl text-3xl mb-4 font-bold text-black">Our Process
              </h1>
              <p class="mb-8 leading-relaxed ">
            We continuously refine our processes to adapt to the latest technology and best project <br/>management practices.<br/>

            Projects are assigned only to Translators with the relevant language proficiency, industry <br/>background and qualifications. All large projects undergo a peer-peer review and QA checks to<br/>
             ensure consistency in tone and writing style.<br/>
            Initial assessment, drafting of the Translation, QA check, Customer Service and Client Feedback<br/> - Every stage of the translation project is logged and reviewed for continuous improvement.
            </p>
            </div>
            <img src={Frame2} alt="" />
          </div>
        </div>
      </section>

             {/*5th* Succes stories page*/}
      <div className="container1 text-gray-600 body-font"  >
        <div className=" min-h-screen" style={{ backgroundImage: "url(" + Back2 + ")" }} >
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

  
      {/* 6 th case studies*/}
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

        {/*7th*/}
      <div className="" style={{ backgroundImage: "url(" + Bgg + ")" }}>
      <div className="min-h-screen ">
        <div className="py-16 border-t border-blue-500">
          <div className="mx-auto px-4">
            <div className="justify-center items-center text-center">
              <h2 className="text-4xl text-white font-semibold mb-8 ">
                 Certification & Memberships 
              </h2>
            </div>
            <div className="croll-container scroll-smooth overflow-x-auto flex flex-row justify-center"> {/* Centered using justify-center */}
              {shopOptions &&
                shopOptions.map((certificate) => (
                  <div key={certificate.id} className="mx-5 ">
                    <img
                      src={certificate.image}
                      className="max-w-[30vw] max-h-[20vw] md:max-w[20vw]"
                      alt=""
                    />
                    <p className="bg-[#101D2E] p-2 text-white">{certificate.name}</p>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>
    </div>

     {/*8nd*/}
     <section className=' py-10'>
        <div className='mx-auto max-w-7xl md:px-6'>
          <h1 className='font-semibold justify-center items-center  text-center text-3xl'>Technology </h1><br />
         
          <div className='grid gap-4 sm:grid-cols-1 md:grid-cols-3 lg:gap-10 '>
            { /* Loop through your images here */}
            <div className='w-full duration-200 hover:scale-95 shadow-2xl rounded-full '>
              <div className=''>
                <img src={A2} alt="" className="h-full w-full object-cover" />
              </div>
              <div className='px-4 py-4 bg-white flex flex-col '>
                <h1 className='font-semibold text-2xl '>Translation management system (TMS)</h1>
                <p className='text-sm text-gray-600'>
                To record all project details <br/>systematically and assign jobs to in-<br/>house linguists or freelancers<br/> automatically.
                </p>
              </div>
            </div>
            { /* Loop through your images here */}
            <div className='w-full duration-200 hover:scale-95 shadow-2xl rounded-full '>
              <div className=''>
                <img src={A2} alt="" className="h-full w-full object-cover" />
              </div>
              <div className='px-4 py-4 bg-white flex flex-col '>
                <h1 className='font-semibold text-2xl '>Translation management system (TMS)</h1>
                <p className='text-sm text-gray-600'>
                To record all project details <br/>systematically and assign jobs to in-<br/>house linguists or freelancers<br/> automatically.
                </p>
              </div>
            </div>
            { /* Loop through your images here */}
            <div className='w-full duration-200 hover:scale-95 shadow-2xl rounded-full '>
              <div className=''>
                <img src={A2} alt="" className="h-full w-full object-cover" />
              </div>
              <div className='px-4 py-4 bg-white flex flex-col '>
                <h1 className='font-semibold text-2xl '>Translation management system (TMS)</h1>
                <p className='text-sm text-gray-600'>
                To record all project details <br/>systematically and assign jobs to in-<br/>house linguists or freelancers<br/> automatically.
                </p>
              </div>
            </div>
           
          </div>
        </div>
      </section><br /><br />
    </>
  )
}

export default About


{/* <img
        src={Ba}
        className="h-full w-full object-cover object-center"/>
    
*/}
/*
   <div class="">  {/*lg:max-w-lg lg:w-full*/
  // <img src={Frame1} alt="" />
  // </div> 7th code
