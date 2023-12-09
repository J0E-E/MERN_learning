import React, {useState} from "react";

import '../scss/MainNavigation.scss'
import MainHeader from "./MainHeader";
import {Link} from "react-router-dom";
import NavigationLinks from "./NavigationLinks";
import SideDrawer from "./SideDrawer";
import Backdrop from "../../UIElements/js/Backdrop";

const MainNavigation = props => {
    const [isDrawerOpen, setIsDrawerOpen] = useState(false)

    const openDrawerHandler = () => {
        setIsDrawerOpen(true)
    }

    const closeDrawerHandler = () => {
        setIsDrawerOpen(false)
    }

    return (
        <React.Fragment>
            {isDrawerOpen && (
                <Backdrop onClick={closeDrawerHandler}/>
            )}
            <SideDrawer show={isDrawerOpen} onClick={closeDrawerHandler}>
                <nav className='main-navigation__drawer-nav'>
                    <NavigationLinks/>
                </nav>
            </SideDrawer>)
            <MainHeader>
                <button className='main-navigation__menu-btn' onClick={openDrawerHandler}>
                    <span/>
                    <span/>
                    <span/>
                </button>
                <h1 className='main-navigation__title'>
                    <Link to='/'>YourPlaces</Link>
                </h1>
                <nav className='main-navigation__header-nav'>
                    <NavigationLinks/>
                </nav>
            </MainHeader>
        </React.Fragment>
    )
};

export default MainNavigation