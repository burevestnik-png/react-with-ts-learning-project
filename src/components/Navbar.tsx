import React from 'react';

const Navbar: React.FunctionComponent = () =>
    <nav>
        <div className="nav-wrapper purple darken-3" style={{padding: '0 1rem'}}>
            <span className="brand-logo">React + TypeScript</span>
            <ul className="right hide-on-med-and-down">
                <li><a href="/">TODO list</a></li>
                <li><a href="/">Information</a></li>
            </ul>
        </div>
    </nav>

export default Navbar;
