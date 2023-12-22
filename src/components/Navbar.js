import { NavLink, Link } from "react-router-dom"
import '../styles/Navbar.css'
import { FaBars } from 'react-icons/fa6'
import { useState } from "react"
import 'animate.css'

const Navbar = () => {
    const [open, setOpen] = useState(false)

    function openNav(){
        setOpen(!open)
    }
    
    return (
        <>
            <div className="navContainer normal_nav">
                <div className="logo">
                    <Link to={'/'}>
                        <h2 className="logo-text">AWVIX</h2>
                    </Link>
                </div>
                <div>
                    <NavLink to={'/'}>Home</NavLink>
                    <NavLink to={'/about'}>About</NavLink>
                    <NavLink to={'/menu'}>Menu</NavLink>
                    <NavLink to={'/contact'}>Contact</NavLink>
                </div>
            </div>
            <hr />

            <div className="responsive_nav">
                <div className="responsive_logo">
                    <Link to={'/'}>
                        <h2 className="logo-text">AWVIX</h2>
                    </Link>
                    <div className="ham_menu">
                        <button className="menu_btn" onClick={openNav}><FaBars /></button>
                        <h1 className="menu_text">Menu</h1>
                    </div>
                </div>
                
                {open ? <div className={`responsive_links animate__animated animate__slideInDown`}>
                        <NavLink to={'/'}>Home</NavLink>
                        <NavLink to={'/about'}>About</NavLink>
                        <NavLink to={'/menu'}>Menu</NavLink>
                        <NavLink to={'/contact'}>Contact</NavLink>
                    </div> : <div className={`responsive_links  animate__animated animate__slideOutUp`}>
                        <NavLink to={'/'}>Home</NavLink>
                        <NavLink to={'/about'}>About</NavLink>
                        <NavLink to={'/menu'}>Menu</NavLink>
                        <NavLink to={'/contact'}>Contact</NavLink>
                    </div>
                }
            </div>
        </>
    )
}

export default Navbar