import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import sha256 from 'crypto-js/sha256';

import { Link } from 'react-router-dom';
import Hint from "../Components/Hint";
import Title from "../Components/Title";

function SignIn({ setUser, users }){
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [errorMessage, setErrorMessage] = useState("");
    const navigate = useNavigate();

    const handleSignIn = (e) => {
        e.preventDefault();
        console.log(users)
        if (!username || !password){
            setErrorMessage("Please enter a username and password.");
            return;
        }
        if (!users.find(user => user.username === username && user.password === sha256(password).toString())){
            setErrorMessage("Invalid username or password.");
            return;
        }
        setUser({username: username, password: sha256(password).toString()});
        navigate("/home");
    }

    return(
        <div className="container">
            <div>
                <Title title={'Log In'} />
            </div>
            <div>
                {errorMessage && <div className="error-message">{errorMessage}</div>}
                <form action="submit" method="post">
                    <label htmlFor="username" className="textfield">Username:
                        <input type="text" id="username" name="username" className="input-field" value={username} onChange={e => setUsername(e.target.value)} placeholder='username' required/>    
                    </label>
                    <br></br>
                    <label htmlFor="password" className="textfield">Password:
                        <input type="password" id="password" name="password" className="input-field" value={password} onChange={e => setPassword(e.target.value)} placeholder='password' required/>
                    </label>
                    <br></br>
                    <Link className="button" onClick={e => handleSignIn(e)}> Log In </Link>
                    <Link to='/forgot-password'>
                        <Hint style={{ marginTop: 'var(--spacing-3)' }}>Forgot Password?</Hint>
                    </Link>
                </form>
            </div>
        </div>
    )
}
export default SignIn;