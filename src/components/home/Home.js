import React, { useEffect } from 'react';
import myImage from './homeImages/ai3.jpg';
import samsung from './homeImages/samsung.png';
import apple from "./homeImages/apple.png";
import stripe from "./homeImages/stripe.png";
import discord from "./homeImages/discord.png";
import bbb from "./homeImages/bbb.png";
import dropbox from "./homeImages/dropbox.jpg";
import shazam from "./homeImages/shazam.jpg";
import { animateHome } from './homeAnimation';
import './home.scss';

export default function Home() {

    useEffect(() => {
        animateHome(".hero-left", "left");
        animateHome(".hero-img", "bottom");
        animateHome(".heading", "bottom");
    }, []);

    return (
        <>
            <div className="hero-container">
                <div className="hero-left">
                    <h1>Democratizing <span>AI</span></h1>
                    <h3>Making AI accessible to everyone</h3>
                    <p>Transforming Tomorrow with Cutting-edge AI Solutions: Unleash Possibilities, Embrace Innovation, and Excel in the Age of Intelligence with Us</p>
                    <button className='btn-primary'>Learn More</button>
                    <button className='btn-secondary'>Learn More</button>
                </div>
                <div className="hero-right">
                    <img className='hero-img' src={myImage} alt="ai" />
                </div>

            </div>
            <Partner />
        </>
    );

}

function Partner() {
    return (
        <div className='partners-container'>

            <h1 className='heading'>Our Partners  <span></span></h1>           
           
            <div className='slider'>
                <PartnerLogo />
                <PartnerLogo />
            </div>
        </div>
    );
}

function PartnerLogo() {
    return (
        <div className='slide'>
            <img src={stripe} alt="partner" />
            <img src={discord} alt="partner" />
            <img src={apple} alt="partner" />
            <img src={bbb} alt="partner" />
            <img src={samsung} alt="partner" />
            <img src={dropbox} alt="partner" />
            <img src={shazam} alt="partner" />
            <img src={discord} alt="partner" />
            <img src={apple} alt="partner" />
            <img src={bbb} alt="partner" />

        </div>
    );
}