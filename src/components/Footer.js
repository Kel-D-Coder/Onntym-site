import React from 'react';
import '../styles/Footer.css';
import { Link, Outlet } from 'react-router-dom';
import { FaWhatsapp, FaInstagram, FaTiktok } from 'react-icons/fa';

function Footer() {
  return (
    <React.Fragment>
      <footer>
        <div className="footer-links">
          <Link to={'/'}>Home</Link>
          <Link to={'about'}>About</Link>
          <Link to={'cafeteria'}>Cafeteria</Link>
          <Link to={'contact'}>Contact</Link>
        </div>

        <div className="footer-icons">
        <Link to={'https://wa.me/+234802146287'} className='whatsapp__icon'>
            <FaWhatsapp />
          </Link>
          <Link to={'https://www.tiktok.com/@onntym_?_t=8itmA3EJMU1&_r=1'} className='tiktok__icon'>
            <FaTiktok />
          </Link>
          <Link to={'https://instagram.com/onntym_?igsh=NGtyeWo5Z3pxYXVp&utm_source=qr'} className='instagram__icon'>
            <FaInstagram />
          </Link>
          <Outlet/>
        </div>
        <p> CopyRight &copy; {new Date().getFullYear()}</p>
      </footer>
    </React.Fragment>
  );
}

export default Footer;