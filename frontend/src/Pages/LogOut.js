import React from "react";
import { useNavigate } from 'react-router-dom';
// import Community from "./Communities"
import logo from '../Art/DDN logo.png'
import { Link } from 'react-router-dom';
import '../Styles/logout.css'

function LogOut(){
    return(
        <div className="contents">
            <div id="loginlogo">
                <img src={logo} />
                <div className="name"><center><h1 id="title">D&D Nearby</h1></center></div>
            </div>
            <div id="buttons">
                <form action="submit" method="post">
                    <Link className="button" to='/login'> Log In </Link>
                    <Link className="button" to='/signup'> Sign Up </Link>
                </form>
            </div>
        </div>
    )
}
export default LogOut;