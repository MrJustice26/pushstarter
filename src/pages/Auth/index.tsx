import React from 'react';
import { Route } from 'react-router-dom';
import { SignUp, SignIn } from '../../modules/Registration';


import './Registration.scss'

const Auth = () => {
    
    return (
        <>
            <Route exact path={['/', '/signin']}component={SignIn} />
            <Route path="/signup" component={SignUp} />
        </>
                
        
    )
}


export default Auth;