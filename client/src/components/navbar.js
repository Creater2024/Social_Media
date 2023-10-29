import React, { useState } from "react"
const { useNavigate } = require('react-router-dom');

function Navbar(props) {
    const [searchedUser, setSearchedUser] = useState('') ;
    const navigate = useNavigate();
    const navigateToLogin = () => {
        navigate(`/`);
   };
    const {name , url,func1,func2,func3} = props ;
    const b1 = (<div className="imgAndName">
            <div><img url={url} ></img></div>
            <div>{name}</div>
        </div>
    )
    return (
        <div className="navbar ">
        <button onClick={func1} >{b1}</button>
        <div className="newPost">
            <button onClick={func3}>Create Post</button>
        </div>
        <div className="searchBar">
            <input type="text" onChange={(e) => setSearchedUser(e.target.value)}></input>
            <input type="submit" onClick={() => func2(searchedUser)}></input>
        </div>
        <div>
            <button onClick={navigateToLogin}>Logout</button>
        </div>
        </div>
    )
     
}

export default Navbar;