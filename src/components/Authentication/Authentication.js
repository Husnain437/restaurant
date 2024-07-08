import React from 'react'
import SignInAuth from './SignInAuth/SignInAuth'
import SignUpAuth from './SignupAuth/SignUpAuth'
import './Auth.css'
const Authentication = () => {
  return (
    <div className='auth-main'>
        <div>
            <SignInAuth/>
        </div>
        
    </div>
  )
}

export default Authentication