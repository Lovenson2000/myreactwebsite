import { Link } from "react-router-dom";
import './footer.scss'

export default function Footer() {

    return (
        <footer className="footer">
            <div className="footer-left">
                <h1>Free AI</h1>
                <p>Transformative AI solutions</p>
                <p>Unleashing possibilities</p>
                <p>Embracing innovation</p>
                <p>Making AI inclusive</p>

            </div>

            <div className="footer-links-container">
                <h2>Quick Links</h2>
                <ul>
                    <Link className="footer-link" to="/">Home</Link>
                    <Link className="footer-link" to="/About">About</Link>
                    <Link className="footer-link" to="/Services">Services</Link>
                    <Link className="footer-link" to="/Contact">Contact</Link>
                </ul>
            </div>

            <div className="footer-partners">
                <h2>Partners</h2>
                <div className="partners-wrapper">
                    <a href="https://stripe.com">Stripe</a>
                    <a href="https://apple.com">Apple Inc</a>
                    <a href="https://samsung.com">Samsung</a>
                    <a href="https://discord.com">Discord</a>
                    <a href="https://dropbox.com">Dropbox</a>
                    <a href="https://shazam.com">Shazam</a>
                </div>
            </div>

            <div className="suscribe">
                <input type="email" placeholder="Enter your Email.." />
                <button className="suscribe-btn">Suscribe</button>
            </div>
        </footer>
    );
}