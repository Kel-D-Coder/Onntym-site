import { NavLink, Link } from "react-router-dom"
import '../styles/Navbar.css'
import 'animate.css'
import ResponsiveNav from "./ResponsiveNav"
import React from "react"
import { FaUser } from 'react-icons/fa6'

const Navbar = () => {
    
    return (
        <React.Fragment>
            <div className="navContainer normal_nav">
                <div className="logo">
                    <Link>
                        <h2 className="logo-text">ONNTYM</h2>
                    </Link>
                </div>
                <div>
                    <NavLink to={'/'}>Home</NavLink>
                    <NavLink to={'/eveningvendors'}>Evening Vendors</NavLink>
                    <NavLink to={'/Cafeteria1'}>Cafeteria1</NavLink>
                    <NavLink to={'/contact'}>Cafeteria2</NavLink>
                </div>
                <div className="user">
                    <Link to={'welcome'}> <FaUser /> </Link>
                </div>
            </div>
            <hr />
            <ResponsiveNav/>
        </React.Fragment>
    )
}

export default Navbar