import React from 'react';
import { NavLink } from "react-router-dom";


const Navbar: React.FunctionComponent = () =>
    <nav>
        <div className="nav-wrapper purple darken-3" style={{padding: '0 1rem'}}>
            <span className="brand-logo">React + TypeScript</span>
            <ul className="right hide-on-med-and-down">
                <li><NavLink to="/">TODO list</NavLink></li>
                <li><NavLink to="/about">Information</NavLink></li>
            </ul>
        </div>
    </nav>

export default Navbar;
