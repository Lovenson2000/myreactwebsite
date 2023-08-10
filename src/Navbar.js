import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import ScrollReveal from "scrollreveal";
import './navbar.scss';

export default function Navbar() {

    const [hamburgerActive, setHamburgerActive] = useState(false);

    function handleHamburger() {
        setHamburgerActive(prevState => !prevState);
    }

    useEffect(() => {
        //Animating the nav bar items with scrollReveal()
        const sr = ScrollReveal();

        sr.reveal("li", {
            delay: 100,
            duration: 600,
            distance: "50px",
            origin: "top",
            interval: 200,
            mobile: false
        });
    }, []);

    return (
        <header className="header">
            <div className="logo-box">
                <h1>FreeAI</h1>
            </div>
            <ul onClick={handleHamburger} className={hamburgerActive ? "nav-container active" : "nav-container"}>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/services">Services</Link></li>
                <li><Link to="/contact">Contact</Link></li>
            </ul>
            <div className={hamburgerActive ? "hamburger active" : "hamburger"} onClick={handleHamburger}>
                <span className='line'></span>
                <span className='line'></span>

            </div>
        </header>
    );
}