
import React,{useState} from "react";
import './../styles/App.css';

const App = () => {
  let [value,setvalue]=useState(0);
  function increase()
  {
    console.log(value);
    setvalue(value+1);
  }
  return (
    <div>
        <p>Button clicked {value} times</p>
        <button onClick={increase}>Click me</button>
    </div>
  )
}

export default App
