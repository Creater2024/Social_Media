import React, { useState } from "react"
import { useLocation } from "react-router-dom";
import {Link,useParams } from "react-router-dom";
const { useNavigate } = require('react-router-dom');
function CreatePost(){
    console.log("To the client createpost");
    const [status,setStatus] = useState();
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const Email = queryParams.get("email");
    console.log(Email);
    const navigate = useNavigate();

    const navigateToHome = () => {
        navigate(`/Home?email=${Email}`);
   };
    const submit = async (e) =>{
        e.preventDefault();
        const res = await fetch('http://localhost:5000/createpost',{
            method:"POST",
            headers : {
                "content-type" : "application/json"
            },
            body:JSON.stringify({
                Email,status
            })
        });
        const names = await res.json();
        console.log(names);
        if(names === "submit"){
            alert("Post is created Successfully");
        }
        else{
            alert("please try again later");
        }
    }
     return(
        <div className="card">
            <div className="nav">
                 <div>{Email}</div>
            </div>
            <div className="status">
                <form method="Post">
                    <input type="text" onChange={(e) => { setStatus(e.target.value) }} placeholder="Enter your status"  />
                    <input type="submit" onClick={submit} />
                </form>
            </div>
            <div className="bottom">
                <button onClick={navigateToHome}>Go To Home</button>
            </div>
        </div>
     )
}
export default CreatePost 