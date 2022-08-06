import React,{useState} from "react";

function Login()
{
  const [user,setUser] = useState("");
  const [password,setPassword] = useState("");
  const [usererr,setUsererr] = useState(false);
  const [passerr,setPasserr] = useState(false);

  function loginHandel(e)
{
  if(user.length<3 || password.length<3)
  {
    alert("type Correct Values")
  }else{
    alert("all good")
  }
    e.preventDefault()
}

function userHandler(e){
    let item = e.target.value;
    if(item.length<3)
    {
      setUsererr(true)
    }else{
        setUsererr(false)
    }
    setUser(item)
}

function passHandler(e){
    let item = e.target.value;
    if(item.length<3)
    {
        setPasserr(true)
    }else{
        setPasserr(false)
    }
    setPassword(item)
}

  return(
    <div>
   <h1>Login</h1>
   <form onSubmit={loginHandel}>
   <input type="text" placeholder="Enter Name" name="" id="" onChange={userHandler} />{usererr?<span>user not valid</span>:""}
   <br/><br/>
   <input type="password" placeholder="Enter Password" name="" id="" onChange={passHandler} />{passerr?<span>Password not valid</span>:""}
   <br/><br/>
   <button type="submit">Submit</button>
   </form>
   </div>
  )
}


export default Login