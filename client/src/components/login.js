import React, { useState } from "react"
import { Link } from "react-router-dom"
const { useNavigate } = require('react-router-dom');

function Login() {

    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')
    const navigate = useNavigate();

    const navigateToHome = () => {
        navigate(`/Home?email=${email}`);
   };
    const submit = async (e) =>{
        e.preventDefault();
        const res = await fetch('http://localhost:5000',{
            method:"POST",
            headers : {
                "content-type" : "application/json"
            },
            body:JSON.stringify({
                email,password
            })
        });
        // console.log("this is response :");
        const names = await res.json();
        // console.log(names);
        if(names === "exist"){
            // console.log("redirect to home");
            alert("Login ")
            navigateToHome();
        }
        else{
            alert("Invalid UserId or Password");
        }
    }

    return (
        <div className="login">

            <h1>Login</h1>

            <form method="POST">
                <input name='email' type="email" onChange={(e) => { setEmail(e.target.value) }} placeholder="Email"  />
                <input type="password" onChange={(e) => { setPassword(e.target.value) }} placeholder="Password"  />
                <input type="submit" onClick={submit} />
            </form>

            <br />
            <p>OR</p>
            <br />

            <Link to="/signup">Signup Page</Link>

        </div>
    )
     
}

export default Login;