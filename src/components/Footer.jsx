import React from 'react'
import "./Footer.css"
import { FaDiscord, FaPatreon, FaGithub  } from "react-icons/fa";
import { IconContext } from "react-icons";


export default function Footer() {
  return (
    <div className='footerBg flex sm:flex-row text-white sm:justify-between justify-around p-8 sm:p-16'>
        <div className="branding flex flex-col justify-center">
            <h1>PC7 Client©</h1>
           <div className='flex flex-col mt-3'>
           <a href="https://github.com/AceSilentKill/PC7-Client/raw/main/docs/PC7%20-%20Terms%20Of%20Service.pdf">Terms of Service</a>
           <a href="https://github.com/AceSilentKill/PC7-Client/raw/main/docs/PC7%20-%20Privacy%20Policy.pdf">Privacy Policy</a>
           </div>

        </div>

        <div className="links flex items-center">
        <IconContext.Provider value={{ color: "white", className: "mr-2",  size: '18'}}>
        <div className='flex flex-col'>
       
           <a href="https://discord.com/invite/BxweEFyZFm"className='flex'><FaDiscord/>Support server</a>
           <a href="https://github.com/PC7-Client/PC7-Client#readme" className='flex'><FaGithub /> GitHub</a>
           <a href="https://www.patreon.com/PC7Client"className='flex'><FaPatreon />Patreon</a>
           </div>
           </IconContext.Provider>

        </div>


    </div>
  )
}
