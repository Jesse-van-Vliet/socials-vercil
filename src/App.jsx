import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Index from './pages/Index';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { useState, useEffect } from 'react';

import { FaArrowUp } from "react-icons/fa";
import {Link, animateScroll as scroll } from 'react-scroll';



function App() {

  const [scrolling, setScrolling] = useState(false);
useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleScroll = () => {
    if (window.scrollY > 40) {
      setScrolling(true);
    } else {
      setScrolling(false);
    }
  };
  return (
    <div className='App w-full'>
      <BrowserRouter>
        <Navbar /> 
        <Routes>
          <Route path='/' element={<Index />} />
          <Route path='/index' element={<Index />} />
          <Route path='*' element={<Index />} />
        </Routes>
        <Footer/>

        {scrolling ? (
          <div className=' text-white fixed top-0 sm:flex hidden justify-end w-full -translate-x-10 translate-y-32 scrollTop'>
          <a href="#section1" className='scrollTop'><FaArrowUp /> back to top</a>
      </div>
        ) :
        ''} 
      </BrowserRouter>
    </div>
  );
}

export default App;
