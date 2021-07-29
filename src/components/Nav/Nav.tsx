import React from 'react'
import { AppBar, Toolbar} from '@material-ui/core';
import { Link} from 'react-router-dom';

import './Nav.scss';
import DropDown from '../DropDown';
import CustomDropdown from "../CustomDropdown";

export default function Nav() {

    return (

        <AppBar position="static" className="nav">
            <div className="nav__container">
                <Toolbar className="nav__inner">
                    <div className="nav__item">
                        <Link to="/explore" className="nav__item-link"> Explore Projects</Link>
                    </div>
                    <div className="nav__item">
                        <CustomDropdown />
                    </div>

                </Toolbar>
            </div>

        </AppBar>
    )
}
