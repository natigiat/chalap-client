




 import React from "react";
import "./Screen1.css";
<<<<<<< HEAD
import Password from "./Password/Password";
=======
import NumPhon from "./component/NumPhone/NumPhoe";
>>>>>>> 8969c30fba511717c89f5ff19a2f0322c6afa7d7


function App() {
  {
    window.document.title = "Bootcamp";
  }
<<<<<<< HEAD
  return(

    <div className = 'test'>
        <div className = 'password'>
        
        <Password />
        </div>
    
    </div> 
  ) 
=======
  return (
    <div className="screen1">
      <NumPhon className="numPhone" />
      <Password className="Password" />
    </div>
  );
>>>>>>> 8969c30fba511717c89f5ff19a2f0322c6afa7d7
}

export default App;
