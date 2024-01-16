import React from "react"
import '../../styles/Cafeteria.css'
import CafeteriaLandingPic from '../../imgs/cafetaria-landing-pic2.jpg'
import { NavLink, Outlet } from 'react-router-dom'
import Navbar from '../../components/Navbar'

export const Cafeteria2 = () => {
    return (
        <React.Fragment>
            <Navbar/>
            <div className='MenuLanding_container'>
                <img src={CafeteriaLandingPic} alt=""  className='menuLandingPic'/>
                <div className='menu_overlay'></div>
                <p className='animate__animated animate__backInUp'>Cafeteria Two</p>
            </div>

            <div className="menuLinks_container animate__animated animate__slideInUp">
                <NavLink className={'menuLinks'} to={'Soomta'}>Soomta</NavLink>
                <NavLink className={'menuLinks'} to={'Obaf'}>Obaf</NavLink>
                <NavLink className={'menuLinks'} to={"BreadOfLife"}>Bread Of Life</NavLink>
                <NavLink className={'menuLinks'} to={'ExquisiteKitchen'}>Exquisite Kitchen</NavLink>
                <NavLink className={'menuLinks'} to={'DivineHands'}>Divine Hands</NavLink>
                <NavLink className={'menuLinks'} to={'HoneyCarol'}>Honey Carol</NavLink>
            </div>
            <div className="search-container"><input type="search" name="search" id="" className='search' placeholder="I'm Looking For..."/> <input type="submit" value="Search" className='searchBtn' /></div>
                <Outlet/>
                {/* <Footer/> */}
        </React.Fragment>
    )
}