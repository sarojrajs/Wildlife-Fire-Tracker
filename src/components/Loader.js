import React from 'react'
import logo from './91.gif'
import './Loader.css'
const Loader = () => {
    return (
        <div className="loader">
            <img src={logo} alt="Fetching"/>
        </div>
    )
}

export default Loader
