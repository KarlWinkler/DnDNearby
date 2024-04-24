import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import sha256 from 'crypto-js/sha256';

import { Link } from 'react-router-dom';
import Title from "../Components/Title";

function SignUp({ setUser, users, setUsers }){
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [errorMessage, setErrorMessage] = useState("");
    const navigate = useNavigate();

    const handleSignUp = (e) => {
        e.preventDefault();
        if (password !== confirmPassword){
            setErrorMessage("Passwords do not match. Please try again.");
            return;
        }
        if (!username){
            setErrorMessage("Please enter a username.");
            return;
        }

        setUser({username: username, password: sha256(password).toString()});
        setUsers([...users, {username: username, password: sha256(password).toString()}]);
        navigate("/home");
    }

    return(
        <div className="container">
            <div>
                <Title title={'Sign Up'} />
            </div>
            <div>
                {errorMessage && <div className="error-message">{errorMessage}</div>}
                <form action="submit" method="post">
                    <label for="username" className="textfield">Username:
                        <input type="text" id="username" name="username" className="input-field" value={username} onChange={e => setUsername(e.target.value)} required/>    
                    </label>

                    <br></br>
                        
                    <label for="password" className="textfield">Password:
                        <input type="password" id="password" name="password" className="input-field" value={password} onChange={e => setPassword(e.target.value)} required/>
                    </label>
                    <br></br>

                    <label for="confirm-password" className="textfield">Confirm Password:
                        <input type="password" id="confirm-password" name="confirm-password" className="input-field" value={confirmPassword} onChange={e => setConfirmPassword(e.target.value)} required/>
                    </label>
                    <br></br>

                    <Link className="button" onClick={e => handleSignUp(e)}> Sign Up </Link>
                </form>
            </div>
        </div>
    )
}
export default SignUp;