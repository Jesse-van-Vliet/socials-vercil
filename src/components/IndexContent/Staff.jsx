import StaffMember from "./Staff/StaffMember";

const Staff = () => {
    return ( 
    <>
    <div className="h-screen w-screen bgStaff flex flex-col">
     <div className="h-full w-full bgBlur">
     <div className="flex flex-row text-3xl font-bold w-full justify-center">
     <h2 className="text-white">Staff Team </h2>
      </div>

    <StaffMember Name={'Jitchu'} Role={"Admin"} />

    </div>
     </div>
    </> );
}
 
export default Staff;