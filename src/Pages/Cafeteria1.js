import React from 'react'
import '../styles/Cafeteria.css'
import CafeteriaLandingPic from '../imgs/cafetaria-landing-pic2.jpg'
// import CafeteriaLandingPic from '../imgs/Cafeteria-landing-pic2.jpg'
import { NavLink, Outlet } from 'react-router-dom'
import Navbar from '../components/Navbar'
// import Footer from '../components/Footer'

export const Cafeteria1 = () => {
    return (
        <React.Fragment>
            <Navbar/>
            <div className='MenuLanding_container'>
                <img src={CafeteriaLandingPic} alt=""  className='menuLandingPic'/>
                <div className='menu_overlay'></div>
                <p className='animate__animated animate__backInUp'>Cafeteria One</p>
            </div>

            <div className="menuLinks_container animate__animated animate__slideInUp">
                <NavLink className={'menuLinks'} to={'MannaPalace'}>Manna Palace</NavLink>
                <NavLink className={'menuLinks'} to={'DoublePortion'}>Double Portion</NavLink>
                <NavLink className={'menuLinks'}>Mimi's</NavLink>
                <NavLink className={'menuLinks'}>National Kitchen</NavLink>
                <NavLink className={'menuLinks'}>Numbers</NavLink>
                <NavLink className={'menuLinks'}>Shalom</NavLink>
            </div>
            <div className="search-container"><input type="search" name="search" id="" className='search' placeholder="I'm Looking For..."/> <input type="submit" value="Search" className='searchBtn' /></div>
            <Outlet />
            {/* <Footer /> */}
        </React.Fragment>
    )
}