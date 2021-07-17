import React, { useLayoutEffect } from 'react';
import { Route, useHistory } from 'react-router-dom';
import { SignUp, SignIn } from '../../modules/Registration';


import './Registration.scss'
import Store from '../../store/store';

  
  
const Auth = () => {
    const store = new Store();
    const history = useHistory()
    useLayoutEffect(() => {
        if(localStorage.getItem('token')){
          store.checkAuth().then(resp => {
              if(resp?.user?.email){
                  history.push('/home')
              }
          })
        }
      }, [])

    return (
        <>
            <Route exact path={['/', '/login']}component={SignIn} />
            <Route path="/register" component={SignUp} />
        </>
                
        
    )
}


export default Auth;