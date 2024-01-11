import React from 'react'
import logo from '../imgs/logo2.png'
import '../styles/Register.css'

function Register() {
  return (
    <React.Fragment>
        <div className="registerFormContainer">
            <div className="registerFormLogo">
                <img src={logo} alt="" />
            </div>
            <div className="formContainer">
                <h3>REGISTER</h3>
            <form action="" method=''>
                <label htmlFor='name'>NAME</label>
                <input type="text" name="" id="name" placeholder='Name'/>
                <label htmlFor='username'>USERNAME</label>
                <input type="text" name="" id="username" placeholder='UserName'/>
                <label htmlFor='email'>EMAIL</label>
                <input type="email" name="" id="email" placeholder='Email'/>
                <label htmlFor='password'>PASSWORD</label>
                <input type="password" name="" id="password" placeholder='Password'/>
                <label htmlFor='comfirmPassword'>COMFIRM PASSWORD</label>
                <input type="password" name="" id="comfirmPassword" placeholder='Comfirm Password'/>
                <input type="submit" value="Register" />
            </form>
            </div>
        </div>
    </React.Fragment>
  )
}

export default Register
