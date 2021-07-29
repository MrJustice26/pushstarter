import React, { useLayoutEffect } from 'react'
import { useHistory } from 'react-router-dom';
import Store from '../../store/store';

const Home = () => {


    const store = new Store();
    const history = useHistory()
    useLayoutEffect(() => {
        if(localStorage.getItem('token')){
          store.checkAuth().then(resp => {
                if(!resp?.user?.email){
                    history.push('/')
                } else {
                    console.log(resp.user)
                }
          })
        }
      }, [])

    return (
        <div className="home">
            <div className="home__container">
                <div className="home__inner">

                </div>
            </div>
        </div>
        
    )
}

export default Home;

