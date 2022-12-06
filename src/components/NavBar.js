import React from 'react';
import {NavLink} from "react-router-dom"

function NavBar () {
    return (
        <nav>
            <div>
                {/* insert logo here */}
            </div>
            <div className ="nav-links">
                <NavLink to="/">Home</NavLink>
                <NavLink to="/artists">Artists</NavLink>
                <NavLink to="/prints">Prints</NavLink>
            </div>
        </nav>
    )
}

export default NavBar;