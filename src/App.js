import './App.css';
import React,{useState} from 'react';
import Profile from './Profile';

function App() {

  const [name,setName] = useState("");
  const [tnc,setTnc] = useState(false);
  const [interest,setInterest] = useState("");


  function getFormData(e){
    console.warn(name,tnc,interest)
    e.preventDefault()//its stop to submit the data of form
  }
  return (
    <div className="App">
     <h1>Handle form</h1>
     <form onSubmit={getFormData}>
      <input type="text" name="" id="" onChange={(e)=>setName(e.target.value)}  placeholder='Enter Name'/><br/><br/>
      <select name="" id="" onChange={(e)=>setInterest(e.target.value)}>
        <option>Select Option</option>
        <option>Marvel</option>
        <option>Dc</option><br/><br/>
        </select>
        <input type="checkbox" name="" id="" onChange={(e)=>setTnc(e.target.checked)} /><span>Accept Terms and Condition</span>
        <br/>
        <button type="submit">Submit</button>
     
     </form>
     <hr/>
     <h1>Rendering</h1>
     <Profile/>
    </div>
  );
}

export default App;
