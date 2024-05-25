
import './App.css'
import { BrowserRouter as Router, Routes , Route } from 'react-router-dom';
import Navbar from './Component/Navbar/Navbar'
import Home from "./Component/Pages/Home/Home";
import About from "./Component/Pages/About/About";
import Services from "./Component/Pages/Services/Services";
import Languages from "./Component/Pages/Languages/Languages";
import Contact from "./Component/Pages/Contact/Contact";
import Blog from "./Component/Pages/Blog/Blog";
//import { Footer } from 'flowbite-react';
import Footer from "./Component/Pages/Footer/Footer";
import Carrer from "./Component/Pages/Carrer/Carrer";
import ePayments from "./Component/Pages/ePayments/ePayments"
import Certificated from './Component/Pages/Certificated/Certificated';

function App() {


  return (
    <>
      <div  >

      <Router>
        <div className='overflow-x-hidden'>
      <Navbar />
      </div>
      <Routes>
      <Route path="/"  element={<Home />}></Route>
      <Route path="/services"  element={<Services />}></Route>
      <Route path="/about"  element={<About />}></Route>
      <Route path="/languages"  element={<Languages />}></Route>
      <Route path="/ePayments" element={<ePayments/>}></Route>
      <Route path="/blog"  element={<Blog />}></Route>
      <Route path="/contact"  element={<Contact />}></Route>
      <Route path="/carrer"  element={<Carrer />}></Route>
      <Route path="/certificated"  element={<Certificated />}></Route>
     </Routes>
     
     </Router>

    <Footer/>
    </div>
   
  </>
  )
}

export default App






