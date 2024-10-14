import React from 'react'
import './signup.css'

const SignupPage = () => {
    return (
        <div className= "signgroup">
                <h1>Signup Form</h1>
                <div className="outputgroup">
                    <label htmlFor="name">Full Name</label>
                    <input
                     type="text" 
                     id="name"
                     autoComplete="off"
                     placeholder="enter your name" 
                     />
                 </div>
                 <div className="outputgroup">
                    <label htmlFor="name">Email Id</label>
                    <input
                     type="text" 
                     id="emailid"
                     autoComplete="off"
                     placeholder="enter your email id" 
                     />
                 </div>
                 <div className="outputgroup">
                    <label htmlFor="name">Password</label>
                    <input
                     type="password" 
                     id="password"
                     autoComplete="off"
                     placeholder="enter 8-10 characters" 
                     />
                 </div>
                 <div className="outputgroup">
                    <label htmlFor="name">Confirm Password</label>
                    <input
                     type="password" 
                     id="password"
                     autoComplete="off"
                     placeholder="enter the password " 
                     />
                 </div>
                 


                 <button type="submit" className='submit-button'>signup</button>
                 <div className="remember-forgot">

                   

                  
                </div>
        </div>
    )
}

export default SignupPage
