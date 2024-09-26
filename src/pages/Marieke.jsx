import Message from "../components/card-components/Message";
import Flower from "../components/Flower";
import { useState } from "react";
  

const Marieke = () => {

    const [showBack, setShowBack] = useState(false);

  const handleShowBack = () => {
      if (showBack) {
          setShowBack(true); // If showBack is true, set it to false
      } 
     else {
        setShowBack(true); // If showBack is false, set it to true
    }

  }
    return ( 
    
            <main className=" flex flex-col h-screen bg-yellow-100  w-screen items-center justify-center " >
                {showBack ?
                    (
                        // answer card
                        <>
                     <Flower/>
                     <Message/>
                        </>

                    ) :
                    (
                        // question card
                        <div className="h-full w-full flex justify-center items-center bg-5 cursor-pointer text-white" onClick={handleShowBack}>
                        <div>
                            <p className="z-50 text-2xl  ">Click Anywhere test</p>
                        </div>
                     </div>
                    )}
                
            
           

        </main>

     );
}
 
export default Marieke;