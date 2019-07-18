import React from "react";
import "./App.css";


import Data from './Components/dataComponent'
import Cards from './Components/Card/card'

function App() {

  return (
  
    <div className="App">
      <p>
        Read through the instructions in the README.md file to build your NASA
        app! Have fun !
      </p>
         <div>
           <Data />
           <Cards />
           </div>   
    </div>
  );
}

export default App;
