import React, { useLayoutEffect } from 'react'
import { useHistory } from 'react-router-dom';
import Store from '../../store/store';

export default function Home() {


    const store = new Store();
    const history = useHistory()
    useLayoutEffect(() => {
        if(localStorage.getItem('token')){
          store.checkAuth().then(resp => {
              if(!resp?.user?.email){
                  history.push('/')
              }
          })
        }
      }, [])

    return (
        <div>
            <h1>HOME WORKS!</h1>
        </div>
    )
}

