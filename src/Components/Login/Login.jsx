import React, { useEffect, useRef, useState } from 'react';
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';

import "./styles.css";

function Login() {
    // Store the state of email and password for local Storage
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    // useNavigate hook to move to next page after submit 
    const navigate = useNavigate();


    // Destructure the data form the form inputs with name and value
    const handleInputChange = (event) => {
        // which name is triggring the handleInputChange event
        const { name, value } = event.target;
        name === 'email' ? setEmail(value) : setPassword(value);
    };

    // When user clicks on submit save the data to local storage and navigate to the next page
    function handleSubmit(event) {
        event.preventDefault();

        console.log("Welcome ", { email, password });
        alert(`Welcome  ${email}`);

        localStorage.setItem("UserEmail", email);
        localStorage.setItem("UserPassword", password);

        navigate("/src/Pages/Homepage/Homepage.jsx");
    }

    return (
        <div className="container">
            <div className="log-in-form">
                <h2 className='heading'>Log In</h2>
                <form onSubmit={handleSubmit}>
                    <label htmlFor="email"> Email</label>
                    <input
                        type="email"
                        name="email"
                        placeholder="Example@gmail.com"
                        onChange={handleInputChange}
                        value={email}
                        required
                    />

                    <label htmlFor="password"> Password</label>
                    <input
                        type="password"
                        name="password"
                        placeholder="Eg: 59gx5TY30"
                        onChange={handleInputChange}
                        value={password}
                        required
                    />
                    <input
                        type="checkbox"
                    />
                    <span>Remember Me</span>

                    <div className="actions">

                        <button type="submit">Submit</button>
                        <a href="#">Forget Password?</a>

                    </div>
                </form>

            </div>
        </div>
    );
}

export default Login;
