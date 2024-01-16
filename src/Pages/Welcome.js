import React from 'react';
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
            <a class="btn-1" href='Register'>Sign Up</a>
            <a class="btn-2" href='Login'>Login</a>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
