import React from 'react'
import './css/LoginSignup.css'

const Loginsignup = () => {
  return (
    <div className='loginsignup'>
      <div className="loginsignup-container">
        <h1>Sign Up</h1>
        <div className="logisignup-feilds">
          <input type="text" placeholder='Username'/>
          <input type="email" placeholder='Email Address' />
          <input type="password" placeholder='password' />
        </div>
        <button>Continue</button>
        <p className='loginsignup-login'>
          Already have an account? <span>Login here</span>
        </p>
        <div className="loginsignup-agree">
          <input type="checkbox" name='' id='' />
          <p>By continuing, i agree to the terms of use & policy.</p>
        </div>
      </div>
    </div>
  )
}

export default Loginsignup