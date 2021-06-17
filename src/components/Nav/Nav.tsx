import React from 'react'
import { AppBar, Toolbar, InputBase, Typography } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import SettingsIcon from '@material-ui/icons/Settings';
import { Link } from 'react-router-dom';

import './Nav.scss';

export default function Nav() {
    return (

        <AppBar position="static" className="nav">
            <div className="nav__container">
                <Toolbar className="nav__inner">

                    <div className="nav__item">
                        <Link to='/' >My Projects</Link>
                    </div>
                    <div className="nav__item">
                        <div className="nav__input">
                            <SearchIcon />
                            <InputBase
                                placeholder="Explore projects"
                                inputProps={{ 'aria-label': 'search' }}
                                className='nav__input-input'
                            />
                        </div>
                    </div>
                    <div className="nav__item"></div>


                </Toolbar>
            </div>

        </AppBar>
    )
}
