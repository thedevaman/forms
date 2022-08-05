import React,{useState} from "react"

function Profile()
{
    const [loggedIn,setLoggedin] = useState(3)
    //Not Recommended Method
    // if(loggedIn){
    //     return(
    //         <div>
    //             <h1>Welcome Aman</h1>
    //         </div>
    //     )
    // }
    // else{
    //     return(
    //         <div>
    //             <h1>Welcom Guest</h1>
    //         </div>
    //     )
    // }

    return(
                <div>
                   {loggedIn===1?<h1>Welcome User 1</h1>:loggedIn===2?<h1>Welcone User 2</h1>:<h1>Welcone User 3</h1>}
                </div>
            )
   
}
export default Profile