
import React,{useState} from "react";
import './../styles/App.css';


const Child = ({showModel, handleButton}) => {
  
  return(
    <div className="child">
      <h2>Child Component</h2>
      <button onClick={handleButton}>Show Modal</button>
      {
        showModel && <>
          <h3>Modal Content</h3>
          <p>This is modal content</p>
        </>
      } 
    </div>
  )
}

const App = () => {

  const [showModel, setShowModel] = useState(false);

  function handleClick(){
    setShowModel(true);
  }

  return (
    <div id="main">
        <div className="parent">
          <h1>Parent Component</h1>
          <Child showModel={showModel} handleButton={handleClick} />
        </div>
    </div>
  )
}

export default App
