import React, { useState } from "react";
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import '../App.css';
export const Register = (props) => {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [name, setName] = useState('');
    const [address,setAddress] = useState('');
    const [phone,setPhone] = useState();
    const navigate = useNavigate();

    // const handleSubmit = (e) => {
    //     e.preventDefault();
    //     console.log(email);
    // }
    const apiUrl='http://localhost:8080/api/customer/';
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
                await axios.post(`${apiUrl}savec`, {
                customername:name,
                email,
                password:pass,
                address,
                phone,
            },{
                timeout:5000,
            }).then((response)=>{
            alert("Registerd Successfully");
            navigate("/home")
            console.log(response.data)
            }); // Handle the response data as needed
        } catch (error) {
            alert(error);
            console.error('Error registering user:', error);
        }
    };
    

    return (
        <div className="App1">
        <div className="auth-form-container" >
            <h2>Register</h2>
        <form className="register-form" onSubmit={handleSubmit}>
            <label htmlFor="name">Full name</label>
            <input  value={name} name="name" onChange={(e) => setName(e.target.value)} required type="text" id="name" placeholder="Full Name" />
            <label htmlFor="email">email</label>
            <input value={email} onChange={(e) => setEmail(e.target.value)}type="email" required placeholder="youremail@gmail.com" id="email" name="email" />
            <label htmlFor="password">password</label>
            <input value={pass} onChange={(e) => setPass(e.target.value)} type="password" required placeholder="********" id="password" name="password" />
            <input value={address} onChange={(e) => setAddress(e.target.value)} type="text" required placeholder="address" id="address" name="address" />
            <input value={phone} onChange={(e) => setPhone(e.target.value)} type="int" required placeholder="Phone Number" id="phone" name="phone" />
            <button type="submit">Log In</button>
        </form>
        <button className="link-btn" onClick={()=>navigate("/")}>Already have an account? Login here.</button>
    </div>
    </div>
    )
}   