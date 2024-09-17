import Card from "../components/Card";
import { useState } from "react";
  

const Index = () => {

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
    
            <main className="bg flex flex-col h-screen  w-screen items-center justify-center " >
                {showBack ?
                    (
                        // answer card
                        <>
                    
                     <Card/>
                        </>

                    ) :
                    (
                        // question card
                        <div className="h-full w-full flex justify-center items-center bg-5 cursor-pointer text-white" onClick={handleShowBack}>
                        <div>
                            <p className="z-50 text-2xl  ">Click Anywhere</p>
                        </div>
                     </div>
                    )}
                
            
           

        </main>

     );
}
 
export default Index;