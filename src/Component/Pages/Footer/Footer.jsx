import React from 'react'
//import Logo from "../../assets/img/logo-1 1.png";
import L from "../../../assets/img/logo-1 1.png";
import Fo from "../../../assets/images/image 5.png";

const Footer = () => {
  return (
    <>
    <footer class="text-gray-600 body-font bg-[#000000] justify-center items-center" style={{height:"250px"}}>
  <div class=" px-5 py-24 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
    <div class="w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left">
      <a class="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
      
        <img src={L} alt="" />
      </a>
      <p class="mt-2 text-white text-sm ">Elementum cras euismod sem in <br/>enim vel nunc nulla. At scelerisque<br/> tristique purus.</p>
      <br/>
      <span class="inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start">
        <a class="text-black bg-blue-600 rounded-2xl">
          <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
            <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
          </svg>
        </a>
        <a class="ml-3 text-white bg-blue-600  rounded-2xl">
          <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
            <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
          </svg>
        </a>
        <a class="ml-3 text-white bg-blue-600  rounded-2xl">
          <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
            <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
            <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
          </svg>
        </a>
        <a class="ml-3 text-blue bg-blue-600  rounded-2xl">
          <svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="0" class="w-5 h-5" viewBox="0 0 24 24">
            <path stroke="none" d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"></path>
            <circle cx="4" cy="4" r="2" stroke="none"></circle>
          </svg>
        </a>
      </span>
    </div>
      {/*2nd*/}
    <div class="flex-grow flex flex-wrap md:pl-20 -mb-10 md:mt-0 mt-10 md:text-left text-center">
      <div class="lg:w-1/4 md:w-1/2 w-full px-4">
        <h2 class="title-font font-bold text-1xl text-white tracking-widest  mb-3">Nam felis a</h2>
        <nav class="list-none mb-10">
          <p className='hover:text-gray-800 text-white text-sm'>
            Enim maecenas <br/>
            facilisi amet amet<br/>
             duis. Natoque <br/>
             massa urna vitae <br/>
             nullam fermentum.<br/>
              Posuere dis.</p>
        </nav>
      </div>
      <div class="lg:w-1/4 md:w-1/2 w-full px-4">
        <h2 class="title-font font-bold text-1xl text-white tracking-widest  mb-3">Volutpat</h2>
        <nav class="list-none mb-10 text-sm text-white">
       <p>
       Ultricies<br/> consequat tellus <br/>luctus viverra<br/> bibendum morbi<br/> mattis vulputate.<br/> Eleifend dui enim.
       </p>
        </nav>
      </div>
      <div class="lg:w-1/4 md:w-1/2 w-full px-4">
        <h2 class="title-font font-bold text-1xl text-white tracking-widest  mb-3">Adipiscing</h2>
        <nav class=" text-sm mb-10 text-white">
        <p>
        Amet diam aliquet<br/>
         eget posuere<br/>
          tincidunt. Sed nunc<br/>
         faucibus at<br/>
          pellentesque. Non<br/>
         tincidunt integer<br/>
          auctor feugiat<br/>
           in egestas in.
        </p>
        </nav>
      </div>
     
    </div>
    </div>
  
</footer>

<footer class="text-gray-600 body-font bg-[#000000]">
  <div class=" px-5 py-24 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
    <div class="w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left">
      <a class="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
      
        <img src={Fo} alt="" />
      </a>   
    </div>
      {/*2nd*/}
    <div class="flex-grow flex flex-wrap md:pl-20 -mb-10 md:mt-0 mt-10 md:text-left text-center">
      <div class="lg:w-1/4 md:w-1/2 w-full px-4">
        <h2 class="title-font font-bold text-1xl text-white tracking-widest  mb-3">Sit ut vitae</h2>
        <nav class="list-none mb-10">
          <p className='hover:text-gray-800 text-white '>
          Lectus sapien sem<br/> massa libero<br/> bibendum. Purus<br/> placerat arcu diam <br/>ultrices. Non aliquet<br/> quam arcu proin.
          </p>
        </nav>
      </div>
      <div class="lg:w-1/4 md:w-1/2 w-full px-4">
        <h2 class="title-font font-bold text-1xl text-white tracking-widest  mb-3">In libero enim</h2>
        <nav class="list-none mb-10 text-white">
       <p>
       In cursus tellus<br/> non etiam <br/>volutpat massa<br/> varius libero<br/> justo. Eu <br/>ultrices donec <br/>leo diam.
       </p>
        </nav>
      </div>
     
      <div class="lg:w-1/4 md:w-1/2 w-full px-4">
        <h2 class="title-font font-bold text-1xl text-white tracking-widest  mb-3">Congue Auctor</h2>
        <nav class="list-none mb-10 text-white">
        Lectus sapien sem<br/>
        massa libero<br/>
        bibendum. Purus<br/>
        placerat arcu diam <br/>
        ultrices. Non aliquet <br/>
        quam arcu proin.
        </nav>
      </div>
    </div>
    </div>
  <div class=" bg-black">
    <div class=" mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
      <p class="text-gray-500 text-sm text-center sm:text-left">© 2020 Tailblocks —
        <a href="https://twitter.com/knyttneve" rel="noopener noreferrer" class="text-gray-600 ml-1" target="_blank">@knyttneve</a>
      </p>
      
    </div>
  </div>
</footer>


   </>
  )
}

export default Footer
