import React, { useEffect } from 'react';
import myImage from './ai3.jpg';
import { animateHome } from './homeAnimation';
import './home.scss';


export default function Home() {

    useEffect(() => {
        animateHome (".hero-left", "left");
        animateHome ("img", "bottom");
    }, []);

    return(
        <div className="hero-container">
            <div className="hero-left">
                <h1>Democratizing <span>AI</span></h1>
                <h3>Making AI accessible to everyone</h3>
                <p>Transforming Tomorrow with Cutting-edge AI Solutions: Unleash Possibilities, Embrace Innovation, and Excel in the Age of Intelligence with Us</p>
                <button className='btn-primary'>Learn More</button>
                <button className='btn-secondary'>Learn More</button>
            </div>
            <div className="hero-right">
                <img src={myImage} alt="ai"/>
            </div>

        </div>
    );

}