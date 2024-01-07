import React from 'react';
import { Link, NavLink, useLocation} from 'react-router-dom';
import { FaBars } from 'react-icons/fa6';
import { useState, useEffect } from "react"

export default function ResponsiveNav() {

    const [open, setOpen] = useState(false)
    const [show, setShow] = useState('')
    const location = useLocation()

    console.log(location)

    useEffect(() => {
<<<<<<< HEAD
      setShow("no_show")
    }, [])

    useEffect(() => {
      setOpen(false)
    }, [location])

    function openNav(){
      setOpen(!open)
      setShow("show")
=======
        setShow("no_show")
    }, [])

    useEffect(() => {
        setOpen(false)
    }, [location])

    function openNav(){
        setOpen(!open)
        setShow("show")
>>>>>>> ad491171283d74d4e43e10fb30355c8e93b3b388
    }
  return (
    <div className="responsive_nav">
      <div className="responsive_logo">
        <Link to={'/'}>
<<<<<<< HEAD
          <h2 className="logo-text">ONNTYM</h2>
=======
          <h2 className="logo-text">Onntym</h2>
>>>>>>> ad491171283d74d4e43e10fb30355c8e93b3b388
        </Link>
        <div className="ham_menu">
          <button className="menu_btn" onClick={openNav}>
            <FaBars />
          </button>
          <h1 className="menu_text">Menu</h1>
        </div>
      </div>

      {open ? (
        <div
          className={`responsive_links animate__animated animate__slideInDown`}
        >
          <NavLink to={'/'}>Home</NavLink>
          <NavLink to={'/about'}>About</NavLink>
          <NavLink to={'/menu'}>Menu</NavLink>
          <NavLink to={'/contact'}>Contact</NavLink>
        </div>
      ) : (
        <div
          className={`responsive_links  animate__animated animate__slideOutUp ${show} `}
        >
          <NavLink to={'/'}>Home</NavLink>
          <NavLink to={'/about'}>About</NavLink>
          <NavLink to={'/menu'}>Menu</NavLink>
          <NavLink to={'/contact'}>Contact</NavLink>
        </div>
      )}
    </div>
  );
}