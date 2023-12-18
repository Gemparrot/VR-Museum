import React, {useEffect, useState} from "react";
import { Link } from 'react-router-dom';
// import {RiUserFill, RiLockPasswordFill} from 'react-icons/ri';
import UserService from "../../services/UserService.js";
// import { toast } from "react-toastify";
import { setLocalStorageUser} from "../../utils/localStorageUtils.js";
import "./loginpage.css";

const Login = ({ onLogin }) => {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    useEffect(()=>{
        
    })


    const handleLogin = async() =>{
        if(username !== '' && password !== ''){
            const user = {
                email: username,
                password
            }
            const result = await UserService.authenticate({user}).catch(error=>{
                //toast.error("WRONG USERNAME/PASSWORD");
                alert("Wrong username/password");
                reset();
            });
            if(result?.data?.message === "Successful"){
                let authenticatedUser = result?.data?.user;
                authenticatedUser.token = result?.data?.token;
                setLocalStorageUser(authenticatedUser);
                
                onLogin();   
            }
        }
    }

    const reset = () => {
        setUsername("");
        setPassword("");
    }

    return(
        <>
        <div className="container">
            <h2>Login</h2>
            <div>
                <input type="text" placeholder="Username" value={username} onChange={(e)=>setUsername(e.target.value)} />
            </div>
            <div>
                <input type="password" placeholder="Password" value={password} onChange={(e)=>setPassword(e.target.value)} />
            </div>
            <button className="btn btn-sm text-light fw-bold" style={{backgroundColor: "#3498db"}} onClick={handleLogin}>
                Login
            </button>
            <Link to="/signup">Don't have an account? Sign up</Link>
        </div>
        </>
    )
}

export default Login;
