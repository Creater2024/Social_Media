import React, { useState } from "react";
import {  useLocation } from "react-router-dom";

import Landing from "./navbar";
import { useNavigate } from 'react-router-dom';
import { render } from "react-dom";
import ReactDOM from "react-dom"; 
function Home() {
    console.log("This is Home page");
    const location = useLocation();
    const navigate = useNavigate();
    const queryParams = new URLSearchParams(location.search);
    const Email = queryParams.get("email");
    console.log(Email);

    const navigateToCreatePost = () => {
        navigate(`/createpost?email=${Email}`);
    };

    const [status, setStatus] = useState('');

    const selfPost = async (e) => {
        e.preventDefault();
        console.log("selfPost is called");
        const res = await fetch(`http://localhost:5000/allPost?Email=${Email}`, {
            method: "GET",
            headers: {
                "content-type": "application/json"
            },
        });
        const names = await res.json();
        console.log(names);
        const  data = names.map((userPost1)=>
        <div className="card">
            <div className="nav">
                 <div>Email:{userPost1.Email}</div>
                 <div>Dob:{userPost1.Date}</div>
            </div>
            <div className="status">
                <div>Status:{userPost1.Status}</div>
            </div>
        </div>
   );
        const root = ReactDOM.createRoot(document.getElementById('content'));
        root.render(data);
    }

    const post = async (searchedUser) => {
        console.log("post is called");
        const res = await fetch(`http://localhost:5000/allPost?Email=${searchedUser}`, {
            method: "GET",
            headers: {
                "content-type": "application/json"
            },
        });
        const names = await res.json();
        console.log(names);
        const  data = names.map((userPost1)=>
        <div className="card">
            <div className="nav">
                 <div>Email:{userPost1.Email}</div>
                 <div>Dob:{userPost1.Date}</div>
            </div>
            <div className="status">
                <div>Status:{userPost1.Status}</div>
            </div>
        </div>
   );
        const root = ReactDOM.createRoot(document.getElementById('content'));
        root.render(data);
    }

    function createPost() {
        console.log("createPost is called");
        navigateToCreatePost();
    }

    return (
        <div className="home">
            <Landing url="xyz" name={Email} func1={selfPost} func2={post} func3={createPost} />
            <div id="content">
                {/* Content of your home page */}
            </div>
        </div>
    )
}

export default Home;
