import React, { useState } from "react";
import axios from 'axios';

import { useNavigate } from "react-router-dom";
export const Login = (props) => {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const navigate = useNavigate();

    const apiUrl='http://localhost:8080/api/customer';
    // const handleSubmit = (e) => {
    //     e.preventDefault();
    //     console.log(email);
    // }
    const handleSubmit = async (e) => {
        e.preventDefault();
        
        try {
               await axios.post(`${apiUrl}/login`, {
                email,
                password: pass,
            }).then((response)=>
            {
            console.log(response.data); // Handle the response data as needed
            if(response.data.message === "Email not exits")
            {
                alert("Email not exists");
            }
            else if(response.data.message === "Login Success")
            {
                navigate("/home")
                // alert("Login success");
            }
            else if(response.data.message === "password Not Match"){
                alert("Email and Password does not match");
            }
            else if(response.data.message === "Login Failed")
            {
                alert("Login Failed");
            }
        },fail=>{
            console.error(fail);
        } );
    }
    catch (error) {
       alert(error);
       alert.error('Error logging in:', error);
        }
    };
    

    return (
        <div className="App1">
        <div className="auth-form-container"  >
            <h2>Login</h2>
            <form className="login-form" onSubmit={handleSubmit}>
                <label htmlFor="email">email</label>
                <input value={email} onChange={(e) => setEmail(e.target.value)}type="email" placeholder="youremail@gmail.com" id="email" name="email" />
                <label htmlFor="password">password</label>
                <input value={pass} onChange={(e) => setPass(e.target.value)} type="password" placeholder="********" id="password" name="password" />
                <button type="submit">Log In</button>
            </form>
            <button className="link-btn" onClick={() => navigate("/register")}>Don't have an account? Register here.</button>
        </div>
        </div>
    )
}