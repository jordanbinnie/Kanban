import React from 'react'
import Logo from '../../assets/logo.png'
import './Navbar.css'

export default function Navbar() {
    
    return (
        <div className="Navbar">
            <div className="center-content">
                <img src={Logo}/>
                <h2>React App</h2>
            </div>
        </div>
    )
}