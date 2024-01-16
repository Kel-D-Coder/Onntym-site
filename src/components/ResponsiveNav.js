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
        setShow("no_show")
    }, [])

    useEffect(() => {
        setOpen(false)
    }, [location])

    function openNav(){
        setOpen(!open)
        setShow("show")
    }
  return (
    <div className="responsive_nav">
      <div className="responsive_logo">
        <Link to={'/'}>
          <h2 className="logo-text">Onntym</h2>
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
          <NavLink to={'/Cafeteria1'}>Cafeteria1</NavLink>
          <NavLink to={'/Cafeteria2'}>Cafeteria2</NavLink>
        </div>
      ) : (
        <div
          className={`responsive_links  animate__animated animate__slideOutUp ${show} `}
        >
          <NavLink to={'/'}>Home</NavLink>
          <NavLink to={'/about'}>About</NavLink>
          <NavLink to={'/cafeteria'}>Cafeteria1</NavLink>
          <NavLink to={'/Cafeteria2'}>Cafeteria2</NavLink>
        </div>
      )}
    </div>
  );
}