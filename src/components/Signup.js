import React from 'react'
import "./signup.css"

function Signup() {
  return (
    <div>
      <div className='App'>
         <div className='upper'>
            <span className='welcome'>Welcome back!</span>
            <h2>Sign in to your account</h2>
            <span>Your email</span>
            <input type='email'/>
            <span>password</span>
            <input type='email'/>
            <button>Continue</button>
            <span className='forget'>Forget your password?</span>
         </div>

         <div className='lower'>
           <span>don't have an account? <span className='signup'>signup</span></span>
         </div>
      </div>
    </div>
  )
}

export default Signup