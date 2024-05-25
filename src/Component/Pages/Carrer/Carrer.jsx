

import React from 'react';
import './Caerre.css';
import Background2 from "../../../assets/images/Frame 618 (1).png";
import Background from "../../../assets/img/Vector 2.png";
import T1 from "../../../assets/imgs/translator/pana.png";
import T4 from "../../../assets/imgs/influencer/pana.png";
import T3 from "../../../assets/imgs/mobile-marketing/pana.png";
import T2 from "../../../assets/imgs/online-article/pana.png";
import Ciecl from "../../../assets/img/Ellipse 12.png";
import { BsHeadset } from "react-icons/bs";


const Carrer = () => {
    return (
        <>
            {/*1st*/}
            <div className=' container11 flex w-full min-h-screen justify-center items-center '  style={{ backgroundImage: "url(" + Background + ")", opacity:"0.90" }}  >
                <div className='flex flex-col gap-20  md:flex-row md:space-x-6 space-y-6 md:space-y-0    w-full max-w-4xl  text-white'>
                    <div className='flex flex-col justify-between '>
                        <div className='' >
                            <h1 className='font-bold text-3xl tracking-wide'>We are always looking for <br /> the best of the best</h1><br />
                            <p className=' tracking-wide'>
                                Developers, designers, product managers, planners, creatives and operations<br /> specialists. Get in touch with us, tell us your interests and skills, and we’ll let you <br /> know when a position that fits you opens up
                            </p><br />
                            <h1 className='font-bold text-1xl tracking-wide'>Why work with us</h1>
                            <br />
                            <ul class="pl-5">
                                <li className='text-sm'><i className='text-gray-600 font-bold text-1xl '>&#10004;</i> Fair and Transparent</li>
                                <li className='text-sm'><i className='text-gray-600'>&#10004;</i> Work remotely and strike work life balance</li>
                                <li className='text-sm'><i className='text-gray-600'>&#10004;</i> Always open to pushing the limits and exploring new technology & ideas .</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            <section className='py-16'>
                <div className='mx-auto max-w-7xl md:px-6'>
                    <h1 className='font-semibold justify-center items-center text-3xl'>We are constantly looking for </h1><br /><br />
                    <div className='grid gap-4 sm:grid-cols-2 md:grid-cols-4 lg:gap-10 '>
                        { /* Loop through your images here */}
                        <div className='w-full duration-200 hover:scale-95 '>
                            <div className=''>
                                <img src={T1} alt="" className="h-full w-full object-cover" />
                            </div><br /><br />
                            <div className='px-4 py-4 bg-white flex flex-col items-center justify-center'>
                                <h1 className='font-semibold text-2xl'>Translators</h1>
                                <p className='text-sm justify-center items-center'>
                                    Dapibus eget mi et eu ut <br />tortor ipsum. Volutpat nec<br /> fusce mattis consectetur <br />velit sit nunc urna. Id massa.
                                </p>
                            </div>
                        </div>
                        {/* Add more article containers here using the same structure */}
                        { /* Loop through your images here */}
                        <div className='w-full duration-200 hover:scale-95 '>
                            <div className=''>
                                <img src={T2} alt="" className="h-30 w-full object-cover" />
                            </div><br /><br />
                            <div className='px-4 py-4 bg-white flex flex-col items-center justify-center'>
                                <h1 className='font-semibold text-2xl'>Industry Bloggers</h1>
                                <p className='text-sm justify-center items-center'>
                                    Dapibus eget mi et eu ut <br />tortor ipsum. Volutpat nec<br /> fusce mattis consectetur <br />velit sit nunc urna. Id massa.
                                </p>
                            </div>
                        </div>

                        { /* Loop through your images here */}
                        <div className='w-full duration-200 hover:scale-95 '>
                            <div className=''>
                                <img src={T3} alt="" className="h-30 w-full object-cover" />
                            </div><br />
                            <div className='px-4 py-4 bg-white flex flex-col items-center justify-center'>
                                <h1 className='font-semibold text-2xl'>Digital Marketing experts</h1>
                                <p className='text-sm justify-center items-center'>
                                    Dapibus eget mi et eu ut <br />tortor ipsum. Volutpat nec<br /> fusce mattis consectetur <br />velit sit nunc urna. Id massa.
                                </p>
                            </div>
                        </div>

                        { /* Loop through your images here */}
                        <div className='w-full duration-200 hover:scale-95 '>
                            <div className=''>
                                <img src={T4} alt="" className="h-30 w-full object-cover" />
                            </div><br />
                            <div className='px-4 py-4 bg-white flex flex-col items-center justify-center'>
                                <h1 className='font-semibold text-center text-2xl'>Social Media Influencers</h1>
                                <p className='text-sm  justify-center items-center'>
                                    Dapibus eget mi et eu ut <br />
                                    tortor ipsum. Volutpat nec <br />
                                    fusce mattis consectetur <br />velit sit nunc urna. Id massa.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section><br />

             {/*3rd*/}
             <div className='container1'>
            <div class="timeline ">
                <div class="container left">
                    <div class="content">
                        <h2>Inbox</h2>
                        <p> Email us your CV / Resume info <span class="text-blue-500 font-bold">@lettercrafts.org</span></p>
                    </div>
                </div>
                <div class="container right">
                    <div class="content">
                        <h2>Linkedin</h2>
                        <p>
                            Our project managers will then start contacting you on various projects / ideas.
                        </p>
                    </div>
                </div>
                <div class="container left">
                    <div class="content">
                        <h2>NDA</h2>
                        <p>Once you are short listed -  you will receive an NDA</p>
                    </div>
                </div>
                <div class="container right">
                    <div class="content">
                        <h2>Project</h2>
                        <p>
                            Our project managers will then start contacting you on various projects / ideas.
                        </p>
                    </div>
                </div>

            </div>
            </div>


           


        </>
    )
}

export default Carrer;
