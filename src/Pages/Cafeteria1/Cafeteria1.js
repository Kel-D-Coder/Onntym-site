import React from 'react'
import '../../styles/Cafeteria.css'
import CafeteriaLandingPic from '../../imgs/cafetaria-landing-pic2.jpg'
// import Footer from '../components/Footer'
import { NavLink, Outlet } from 'react-router-dom'
import Navbar from '../../components/Navbar'

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
                <NavLink className={'menuLinks'} to={"Mimi's"}>Mimi's</NavLink>
                <NavLink className={'menuLinks'} to={'NationalKitchen'}>National Kitchen</NavLink>
                <NavLink className={'menuLinks'} to={'Numbers'}>Numbers</NavLink>
                <NavLink className={'menuLinks'} to={'Shalom'}>Shalom</NavLink>
            </div>
            <div className="search-container"><input type="search" name="search" id="" className='search' placeholder="I'm Looking For..."/> <input type="submit" value="Search" className='searchBtn' /></div>
                <Outlet/>
        </React.Fragment>
    )
}