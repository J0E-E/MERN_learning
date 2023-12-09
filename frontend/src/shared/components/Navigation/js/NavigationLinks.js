import React from "react";

import '../scss/NavigationLinks.scss'
import {NavLink} from "react-router-dom";

const NavigationLinks = props => {
    return (
        <ul className='nav-links'>
            <li>
                <NavLink to='/' exact>ALL USERS</NavLink>
            </li>
            <li>
                <NavLink to='/u1/places'>MY PLACES</NavLink>
            </li>
            <li>
                <NavLink to='/places/new'>ADD PLACE</NavLink>
            </li>
            <li>
                <NavLink to='/auth'>AUTHENTICATION</NavLink>
            </li>
        </ul>
    )
};

export default NavigationLinks