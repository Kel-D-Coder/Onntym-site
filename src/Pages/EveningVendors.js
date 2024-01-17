import React from "react"
import { NavLink, Outlet } from "react-router-dom"
import Navbar from "../components/Navbar"
import '../styles/EveningVendors.css'
import landingPic from '../imgs/EveningVendors/evening-vendors-landing-pic2.jpg'
import '../styles/Cafeteria.css'

export const EveningVendors = () => {
    return (
        <React.Fragment>
            <Navbar/>
            <div className='MenuLanding_container'>
                <img src={landingPic} alt=""  className='menuLandingPic'/>
                <div className='menu_overlay'></div>
                <p className='animate__animated animate__backInUp'>Evening Vendors</p>
            </div>

            <div className="menuLinks_container animate__animated animate__slideInUp">
                <NavLink className={'menuLinks'} to={'NarshPlace'}>Narsh Place</NavLink>
                <NavLink className={'menuLinks'} to={'LynPaul'}>Lyn Paul</NavLink>
                <NavLink className={'menuLinks'} to={'ErnalDelicacy'}>Ernal Delicacy</NavLink>
                <NavLink className={'menuLinks'} to={'NumbersSpag'}>Numbers Spag</NavLink>
                <NavLink className={'menuLinks'} to={'General'}>General</NavLink>
                <NavLink className={'menuLinks'} to={'IzzyBreadBox'}>Izzy's Bread Box</NavLink>
            </div>
            <div className="search-container"><input type="search" name="search" id="" className='search' placeholder="I'm Looking For..."/> <input type="submit" value="Search" className='searchBtn' /></div>
            <Outlet />
        </React.Fragment>
    )
}