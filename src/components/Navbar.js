import { NavLink, Link } from "react-router-dom"
import '../styles/Navbar.css'
import 'animate.css'
import ResponsiveNav from "./ResponsiveNav"
import React from "react"

const Navbar = () => {
    
    return (
        <React.Fragment>
            <div className="navContainer normal_nav">
                <div className="logo">
<<<<<<< HEAD
                    <Link to={'/'}>
=======
                    <Link>
>>>>>>> ad491171283d74d4e43e10fb30355c8e93b3b388
                        <h2 className="logo-text">ONNTYM</h2>
                    </Link>
                </div>
                <div>
                    <NavLink to={'/'}>Home</NavLink>
                    <NavLink to={'/about'}>About</NavLink>
                    <NavLink to={'/cafeteria'}>Cafeterias</NavLink>
                    <NavLink to={'/contact'}>Contact</NavLink>
                </div>
            </div>
            <hr />
            <ResponsiveNav/>
        </React.Fragment>
    )
}

export default Navbar