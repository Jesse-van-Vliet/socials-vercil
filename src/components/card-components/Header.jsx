import LinkList from "./LinkList";
import { FaTools } from "react-icons/fa";
import { IconContext } from "react-icons";

const Header = () => {
    return ( 
    <div className="w-full card-bg flex flex-col items-center p-2 mb-3">
        <div className="userInfo flex flex-col items-center p-5 ">
            <img className="rounded-full h-28" src="images/pfp.gif" alt="" />
            <IconContext.Provider value={{ className: 'wobble' }}>
            <div className="flex flex-row justify-center mt-2 w-full">
            <h2 className=" font-bold text-xl p-2">jitchu </h2>
            <FaTools />
            </div>
              </IconContext.Provider>
            <p className="p-2 text-center typing">Full stack web dev</p>
        </div>
        <LinkList/>
    </div>  );
}
 
export default Header;