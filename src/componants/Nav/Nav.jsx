import React, { useState } from 'react'

import './Nav.css';
import { NavLink } from 'react-router-dom';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'

import {navLinks} from "../../Data/Data"





const Nav = () => {
    const [showmenu,setShowmenu] = useState(false)
    
let handleMenu =() =>{
    setShowmenu(!showmenu)

}


  return (
   <nav>
    <ul  className={showmenu ? 'navlinks-show navlinks':'navlinks'} >
        {
            navLinks.map(({id,name,path,icon}) =>(
                <li className='nav-item' key={id} onClick={handleMenu}>
                    <NavLink to={path} className={({isActive}) => isActive?"nav-link navlinksActive": 'nav-link'} >
                        <span><FontAwesomeIcon icon={icon} /></span>
                        <h3>{name}</h3>
                    </NavLink>
                </li>
            ))
        }
    </ul>
    <div  className ={showmenu ? "nav-close  nav-toggle" :" nav-toggle"}
    onClick={handleMenu}
    >
        <span></span>
        <span></span>
        <span></span>
    </div>

   </nav>
  )
}

export default Nav