import React from 'react';
import {NavLink} from "react-router-dom";
import Squeegee_Embroidery from './Squeegee_Embroidery.png';

function NavBar() {
    
  return (
    <nav>
      <div>
        <img id="squeegee" src={Squeegee_Embroidery} alt="The Archive Logo" />
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