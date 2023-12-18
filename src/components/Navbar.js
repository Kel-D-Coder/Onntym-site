import { NavLink, Link } from "react-router-dom"
import '../styles/Navbar.css'
// import logo from '../imgs/logo1.jpg'

const Navbar = () => {
    return (
        <nav>
            <div className="navContainer">
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
        </nav>
    )
}

export default Navbar