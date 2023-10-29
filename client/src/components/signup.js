import React, { useState } from "react"
import {Link } from "react-router-dom"
const { useNavigate } = require('react-router-dom');
function Signup() {
    
    const [name,setName]=useState('')
    const [email,setEmail]=useState('')
    const [userName,setUserName]=useState('')
    const [password,setPassword]=useState('')
    const [cpassword,setCpassword]=useState('')
    const navigate = useNavigate();

    const navigateToHome = () => {
         navigate('/Home');
    };
    const submit = async (e) =>{
        e.preventDefault();
        // console.log(name , email , userName , password , cpassword) ;
        if(password !== cpassword){
             alert("Password Not matched");
        }
        // console.log(e);
        // console.log("data is sent");
        const res = await fetch('http://localhost:5000/signup',{
            method:"POST",
            headers : {
                "content-type" : "application/json"
            },
            body:JSON.stringify({
                name,email,userName,password,cpassword
            })
        });
        const names = await res.json();
        if(names === "exist"){
            alert("User is already exist");
        }
        else{
            // console.log("redirect to home");
            navigateToHome();
        }
    }

    return (
        <div className="signup">

            <h1>Signup</h1>

            <form method="POST">
                <input type="text" onChange={(e) => { setName(e.target.value) }} placeholder="Enter your Full-Name"  />
                <input name="email" type="email" onChange={(e) => { setEmail(e.target.value) }} placeholder="Email"  />
                <input type="text" onChange={(e) => { setUserName(e.target.value) }} placeholder="Enter User Name"  />
                <input type="password" onChange={(e) => { setPassword(e.target.value) }} placeholder="Password"  />
                <input type="password" onChange={(e) => { setCpassword(e.target.value) }} placeholder="Re-Enter Password"  />
                <input type="submit" onClick={submit} />
            </form>

            <br />
            <p>OR</p>
            <br />

            <Link to="/">Login Page</Link>

        </div>
    )
     
}

export default Signup;