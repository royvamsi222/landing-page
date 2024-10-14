import React from 'react'
import './login.css'

const LoginPage = () => {
    return (
        <div className= "form-container">
                <h1>Login Form</h1>
                <div className="inputGroup">
                    <label htmlFor="name">Email/Username</label>
                    <input
                     type="text" 
                     id="username"
                     autoComplete="off"
                     placeholder="enter your username" 
                     />
                 </div>
                 <div className="inputGroup">
                    <label htmlFor="name">Password</label>
                    <input
                     type="password" 
                     id="password"
                     autoComplete="off"
                     placeholder="enter 8-10 characters" 
                     />
                 </div>
                 <button type="submit" className='submit-button'>LogIn</button>
                 <div className="remember-forgot">

                   <a href="#">having trouble login / Forgot Password?

                   </a>
                </div>
                {/* <form classname= "addUserForm">
                <div className="inputGroup">
                    <label htmlFor="name">Email/Username</label>
                    <input
                     type="text" 
                     id="username"
                     autoComplete="off"
                     placeholder="enter your username" 
                     />
                 </div>
                 <div className="inputGroup">
                 <label htmlFor="name">Password</label>
                    <input type="password" 
                    id="password"
                    autoComplete="off"
                    placeholder="enter 8-10 characters" 
                    />
                </div>
                <button type="submit">LogIn</button>
                <div className="remember-forgot">

                   <a href="#">having trouble login/Forgot Password?

                   </a>
                </div>
            </form> */}
        </div>
    )
}

export default LoginPage
