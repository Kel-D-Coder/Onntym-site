import React from 'react'
import '../styles/Cafeteria.css'
<<<<<<< HEAD
import CafeteriaLandingPic from '../imgs/cafetaria-landing-pic2.jpg'
=======
import CafeteriaLandingPic from '../imgs/Cafeteria-landing-pic2.jpg'
>>>>>>> ad491171283d74d4e43e10fb30355c8e93b3b388
import { NavLink, Outlet } from 'react-router-dom'
import Navbar from '../components/Navbar'

export const Cafeteria = () => {
    return (
        <React.Fragment>
            <Navbar/>
            <div className='MenuLanding_container'>
                <img src={CafeteriaLandingPic} alt=""  className='menuLandingPic'/>
                <div className='menu_overlay'></div>
                <p className='animate__animated animate__backInUp'>Our Cafeterias</p>
            </div>

            <div className="menuLinks_container animate__animated animate__slideInUp">
<<<<<<< HEAD
                <NavLink className={'menuLinks'} to={'breakfast'}>Manna Palace</NavLink>
                <NavLink className={'menuLinks'} to={'lunch'}>Double Portion</NavLink>
=======
                <NavLink className={'menuLinks'} to={'MannaPalace'}>Manna Palace</NavLink>
                <NavLink className={'menuLinks'} to={'DoublePortion'}>Double Portion</NavLink>
>>>>>>> ad491171283d74d4e43e10fb30355c8e93b3b388
                <NavLink className={'menuLinks'}>Mimi's</NavLink>
                <NavLink className={'menuLinks'}>National Kitchen</NavLink>
                <NavLink className={'menuLinks'}>Numbers</NavLink>
                <NavLink className={'menuLinks'}>Shalom</NavLink>
                <NavLink className={'menuLinks'}>Food Mart</NavLink>
            </div>
                <Outlet/>
        </React.Fragment>
    )
}