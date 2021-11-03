import React from 'react'
import './logIn.css';

export default function LogIn() {
    return (
        <div className='logIn'>
            <span className="logInTitle">LogIn</span>
            <form action="" className="logInForm">
                <label htmlFor="">Email</label>
                <input className='logInInput' type="text" name="" id=""
                placeholder='Enter Your Email....' />
                <label>Password</label>
        <input className="logInInput" type="password" placeholder="Enter your password..." />
        <button className="loginButton">Login</button>

            </form>
            <button className="logInRegisterButton">Register</button>
            
        </div>
    )
}
