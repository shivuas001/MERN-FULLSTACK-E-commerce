import React, { useState } from 'react'
import './css/LoginSignup.css'

const Loginsignup = () => {

const [state, setState] = useState("Login");

  return (
    <div className='loginsignup'>
      <div className="loginsignup-container">
        <h1>{state}</h1>
        <div className="logisignup-feilds">
          {state==="Sign Up"?<input type="text" placeholder='Username'/>:<></>}
          <input type="email" placeholder='Email Address' />
          <input type="password" placeholder='password' />
        </div>
        <button>Continue</button>
        <p className='loginsignup-login'>
          Already have an account? <span>Login here</span>
        </p>
         <p className='loginsignup-login'>
          Create an account, Click Here? <span>Sign Up</span>
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