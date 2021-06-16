import React from 'react'
import './Registration.scss'

export default function SignIn() {
    return (
        <form className="login__container">
            <div className="login__inner">
                <h1 className="login__heading">Sign Up</h1>
                <div className="login__input">
                    <label htmlFor="email">Email</label>
                    <input type="text" id="email"/>
                </div>
                <div className="login__input">
                    <label htmlFor="password">Password</label>
                    <input type="password" id="password" />
                </div>
                <div className="login__input">
                    <label htmlFor="repeatPassword">Repeat password</label>
                    <input type="password" id="repeatPassword"/>
                </div>
                <button className="login__button btn-primary">Sign Up</button>
                
            </div>
            
        </form>
    )
}