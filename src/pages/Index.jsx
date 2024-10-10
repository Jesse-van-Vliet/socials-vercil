import React from "react";
import { useState } from "react";
import { Landing } from "../components/IndexContent/Landing";
import { Features } from "../components/IndexContent/Features";
import Staff from "../components/IndexContent/Staff";

  

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
    
     <div>
            <Landing/>
            <Features/>
            <Staff/>
     </div>

     );
}
 
export default Index;