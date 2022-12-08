import React from 'react';
import {NavLink} from "react-router-dom"

function NavBar () {
    return (
        <nav>
            <div>
                <h1>THE ARCHIVE</h1>
                {/* insert logo here */}
            </div>
            <div className ="nav-links">
                <NavLink exact to="/">HOME</NavLink>
                <NavLink to="/artists">ARTISTS</NavLink>
                <NavLink to="/prints">GALLERY</NavLink>
            </div>
        </nav>
    )
}

export default NavBar;