import React, { useLayoutEffect, useState } from 'react';
import { Route, useHistory } from 'react-router-dom';
import { SignUp, SignIn } from '../../modules/Registration';


import './Registration.scss'
import Store from '../../store/store';
import { CircularProgress, makeStyles, createStyles, Theme } from '@material-ui/core';


const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    progress: {
        position: "absolute",
        left: "50%",
        top: "50%",
    }
  }),
);
  
const Auth = () => {
    const classes = useStyles()
    const [isChecked, setIsChecked] = useState(false)

    const store = new Store();
    const history = useHistory()
    useLayoutEffect(() => {
        if(localStorage.getItem('token')){
          store.checkAuth().then(resp => {
              if(resp?.user?.email){
                  history.push('/home')
              }
              else {
                  history.push('/login')
              }
          })
        }
            setIsChecked(true)
      }, [])

    return (
        <>
            {isChecked ? 
            (
                <>
                <Route exact path={['/', '/login']}component={SignIn} />
                <Route path="/register" component={SignUp} />
                </>
            ) : (
                <CircularProgress  className={classes.progress}/>
            )
            }
        </>
        
                
        
    )
}


export default Auth;