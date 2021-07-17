import React from 'react'
import { AppBar, Toolbar} from '@material-ui/core';
import { Link} from 'react-router-dom';

import './Nav.scss';
import DropDown from '../DropDown';

export default function Nav() {

    return (

        <AppBar position="static" className="nav" style={{backgroundColor:"#fff"}}>
            <div className="nav__container">
                <Toolbar className="nav__inner">
                    <div className="nav__item">
                        <Link to='/my-projects' className="nav__item-link">My Projects</Link>
                        <Link to="/explore" className="nav__item-link"> Explore Projects</Link>
                    </div>
                    <div className="nav__item">
                    <DropDown title={'Account'} elementsList={['Settings', 'Exit']} />
                    <Link to="/logout" className="nav__item-link">Log out</Link>
                    </div>

                </Toolbar>
            </div>

        </AppBar>
    )
}
