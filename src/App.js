import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation} from 'react-router-dom';
import Navbar from './components/navbar/Navbar.js';
import Home from './components/home/Home.js';
import About from './components/about/About.js';
import Services from './components/services/Services.js';
import Contact from './components/contact/Contact.js';
import Footer from './components/footer/Footer.js'

export default function App() {

    return (
        <Router>
            <ScrollToTop />
            <div className='app'>
                <Navbar />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/services" element={<Services />} />
                    <Route path="/contact" element={<Contact />} />
                </Routes>
                <Footer />
            </div>
        </Router>
    );
}
//Function to scroll to top at every navigation change
function ScrollToTop () {
    const locations = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [locations]);

    return null;
}
