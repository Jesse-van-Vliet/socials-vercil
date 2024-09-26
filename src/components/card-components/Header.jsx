import LinkList from "./LinkList";
import { FaCross } from "react-icons/fa6";
import { IconContext } from "react-icons";




const Header = () => {
    return ( 
    <div className="w-full card-bg flex flex-col items-center p-2 mb-3">
        <div className="userInfo flex flex-col items-center p-5 ">
          <div className="flex">
          <img className="rounded-full h-28" src="images/pfp.jpg" alt="" />
          <div className=" rounded-full h-6 w-6 accent absolute translate-y-20 translate-x-20">

          </div>
          </div>
            <IconContext.Provider  value={{ size: '15', className: 'wobble' }}>
            <div className="flex flex-row justify-center mt-2 w-full">
           <div className="m-2 text-center">
           <h2 className=" font-bold text-2xl">Jesse</h2>
           <h2 className=" font-bold text-xs">(Jitchu)</h2>
           </div>
            <FaCross />
            </div>
              </IconContext.Provider>
              
            <p className="p-2 text-center typing">Full stack web developer</p>
        </div>
        <LinkList/>
    </div>  );
    
}
 
export default Header;