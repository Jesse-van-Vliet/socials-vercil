
import StaffMemberList from "./Staff/StaffMemberList";


const Staff = () => {
    return ( 
    <>
    <div className="min-h-screen w-screen bgStaff flex flex-col boxShadow   ">
     <div className=" min-h-screen w-full bgBlur flex flex-col justify-center">
     <div className="flex flex-row text-3xl font-bold w-full justify-center item">
<div className="text-center p-10">
<h2 className="text-white">PC7 Staff Team</h2>
<p className="text-white text-xs p-2">The people that make the magic happen at PC7</p>
</div>
     
      </div >
      <StaffMemberList/>
    </div>
     </div>
    </> );
}
 
export default Staff;