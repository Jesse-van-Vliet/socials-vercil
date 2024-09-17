import LinkList from "./LinkList";
import { FaCross } from "react-icons/fa6";
import { IconContext } from "react-icons";

const Header = () => {
    return ( 
    <div className="w-full card-bg flex flex-col items-center p-2 mb-3">
        <div className="userInfo flex flex-col items-center p-5 ">
            <img className="rounded-full h-28" src="images/pfp.gif" alt="" />
            <IconContext.Provider  value={{ size: '15', className: 'wobble' }}>
            <div className="flex flex-row justify-center mt-2 w-full">
            <h2 className=" font-bold text-2xl m-2">Jesse</h2>
            <FaCross />
            </div>
              </IconContext.Provider>
              
            <p className="p-2 text-center typing">Full stack web developer</p>
        </div>
        <LinkList/>
    </div>  );
    
}
 
export default Header;