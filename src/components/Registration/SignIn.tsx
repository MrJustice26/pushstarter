import React from 'react'
import './Registration.scss'

export default function SignIn() {
    return (
        <form className="login__container">
            <div className="login__inner">
                <h1 className="login__heading">Sign In</h1>
                <div className="login__input">
                    <label htmlFor="email">Email</label>
                    <input type="text" id="email"/>
                </div>
                <div className="login__input">
                    <label htmlFor="password">Password</label>
                    <input type="password" id="password" />
                </div>
                <button className="login__button btn-primary">Sign In</button>
                
            </div>
            
        </form>
    )
}
