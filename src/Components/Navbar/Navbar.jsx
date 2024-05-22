import React from 'react'
import "./styles.css"
import { IoLogoElectron } from "react-icons/io5";

function Navbar() {
    return <>
        <nav className="container">

            {/* Company or brand logo logo  */}
            <div className="logo">
                <IoLogoElectron className='brand' />
            </div>

            {/* Navigation Links */}
            <div className="links">
                <ul>
                    <li><a href="">Help Center</a></li>
                    <li><a href="">My Library</a></li>
                    <li><a href="">Blog</a></li>
                    <li><a href="">About Us</a></li>
                    <img src="" alt="" />
                    <IoLogoElectron className='brand-2' />
                </ul>
            </div>

        </nav>

    </>
}

export default Navbar
