
import React,{useState} from "react";
import './../styles/App.css';


const Comp = (props) => {

  const [showModal, setShowModal] = useState(false);

  return <div className="parent">
      <h1>{props.name}</h1>
      <div className="child">
          <h2>{props.child}</h2>
          <button onClick={()=>setShowModal(true)}>{props.btn}</button>
          {
          showModal && (
          <div className="modal">
              <h3>Modal Content</h3>
              <p>This is the modal content.</p>
          </div>
          )}
      </div>

  </div>
}

const App = () => {
  return (
    <div id="main">
        <Comp name="Parent Component" child="Child Componenet" btn="Show Modal"></Comp>
    </div>
  )
}

export default App
