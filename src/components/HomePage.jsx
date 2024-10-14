import React from 'react'
import { Link } from 'react-router-dom'
import './homepage.css'

const HomePage = () => {
    return (
        <div className="addHomepage">
            <h1>WELCOME</h1>
           
             <button><Link to='/login
             '>Login</Link></button>
            <button><Link to='/sign-up'>Signup</Link></button>
           
        </div>
    )
}

export default HomePage
