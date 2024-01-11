import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../imgs/logo2.png';
import logo1 from '../imgs/logo1.png';
import '../styles/Welcome.css';

export default function Welcome() {
  return (
    <React.Fragment>
      <div class="back-ground">
        <div class="back-ground-2">
          <img src={logo} alt="" />
        </div>
        <div class="login">
          <img src={logo1} alt="" class="logo" />
          <p class="para-1">Always On Tym</p>
          <p class="para-2">Join Onntym Today.</p>
          <div className="login_buttons">
            <Link class="btn-1" to={'Register'}>Sign Up</Link>
            <Link class="btn-2">Login</Link>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
