import React from "react";
import Navbar from "./components/Navbar";
import Main from "./components/Main";

function App() {
  const [darkMode, setDarkMode] = React.useState(true)
  
  function handleClick(){
      setDarkMode(prevState => !prevState)
  }
  return (
      <div className="container">
          <Navbar darkMode = {darkMode} toggleDarkMode = {handleClick}/>
          <Main darkMode = {darkMode}/>
      </div>
  )
}

export default App;
