import './App.css';
import React,{useState} from 'react';
import Profile from './Profile';
import Login from './Login';
import User from './User';
import Members from './Members';

function App() {

  const [name,setName] = useState("");
  const [tnc,setTnc] = useState(false);
  const [interest,setInterest] = useState("");


  function getFormData(e){
    console.warn(name,tnc,interest)
    e.preventDefault()//its stop to submit the data of form
  }
  

  function getData(){
    alert('hello From app')
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
     <hr/>
     <Login/>
     <hr/>
     <User data={getData}/>
     <User data={getData}/>
     <User data={getData}/>
     <div style={{float:'right'}}>
      <Members data={getData}/>
     </div>
    </div>
  );
}

export default App;
