import { IoBriefcaseSharp } from "react-icons/io5";
import { IconContext } from "react-icons";

const StaffMember = ({Name, Role, Url}) => {
    return ( <>
    <div>
    <IconContext.Provider value={{ color: "white", size: '12' }}>
        <img className="h-64 rounded-xl  " src={Url} alt="Profile picture" />
        <div className="border-2 rounded-2xl bgBlur2 text-white flex-col flex justify-center items-center h-28 w-72 absolute translate-x-5 -translate-y-8">
            <h3 className="text-xl">{Name}</h3>
            <div className="flex flex-row items-center"><p className="text-xs text-gray-300">{Role}</p></div>
            
        </div>
        </IconContext.Provider>;
    </div>
    </> );
}
 
export default StaffMember;