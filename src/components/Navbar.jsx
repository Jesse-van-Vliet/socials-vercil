import React from 'react'
import { useState, useEffect } from 'react';
import {Link, animateScroll as scroll } from 'react-scroll';
import "./Navbar.css"


export const Navbar = () => {
    const [showBack, setShowBack] = useState(false);

    const handleShowBack = () => {
        if (showBack) {
            setShowBack(false); // If showBack is true, set it to false
        } 
       else {
          setShowBack(true); // If showBack is false, set it to true
      }

    }


    const [scrolling, setScrolling] = useState(false);
    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
      }, []);
    
      const handleScroll = () => {
        if (window.scrollY > 20) {
          setScrolling(true);
        } else {
          setScrolling(false);
        }
      };



    return (
        <nav className={scrolling ? 'navbar-scroll text-white z-40' : 'text-white z-40'}>
            <div className='burger' onClick={handleShowBack}>
            <Link className='text-4xl' to='/Index'><div className='flex flex-row'><h1 className='text-yellow-300'>P</h1> <h1 className='text-blue-500'>C</h1> <h1 className='text-red-600'>7</h1> Client</div></Link>
            
            <div className="menu">
                <span></span>
                <span></span>
                <span></span>
            </div>
            </div>
            <ul className={showBack ? "open": "close"}>
            
                <li>
                    <a href="https://discord.com/invite/BxweEFyZFm" target='_blank'>Discord</a>
                    </li>
                <li>
                <a href="https://github.com/PC7-Client/PC7-Client#readme" target='_blank'>GitHub</a>
                    </li>
                <li>
                <a href="https://www.patreon.com/PC7Client" target='_blank'>Patreon</a>
                    </li>

                    
                </ul>

              
                
        </nav>

        
    )
}

export default Navbar;
