import React, { useState } from 'react';
import { Link } from 'gatsby';

const Navbar = () => {
    const [showMenu, setShowMenu] = useState(false);

    const toggleMenu = () => {
        setShowMenu(!showMenu);
    };

    return (
        <nav>
            <Link to="/" className="logo">FanPage: John Wick</Link>
            <button className="toggle" onClick={toggleMenu}>
                <span className="toggle-icon"></span>
            </button>
            <ul className={`nav-links ${showMenu ? 'show' : ''}`}>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/about">About</Link>
                </li>
                <li>
                    <Link to="/contact">Join</Link>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;
