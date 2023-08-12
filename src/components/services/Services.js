import "./services.scss";
import { services } from "./cardData";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { animateService } from "./serviceAnimation";


export default function Services() {

    useEffect(()=>{
        animateService(".services-heading","left",400, "20px");
        animateService(".services-head-2","right",400, "20px");
        animateService(".card","bottom",400, "50px");

    }, [])

    return (

        <div className="services-container">

            <div className="services-top">
                <h1 className="services-heading">Leveraging the power of AI</h1>
                <h3 className="services-head-2">On a mission to making AI accessible to everyone no matter where you are</h3>

            </div>

            <div className="bottom">
                {services.map((service, ind) => (
                    <Service
                        
                        service={service}
                        key={ind} />
                ))}
            </div>

        </div>
    );
}

function Service({ service}) {

    const [isActive, setIsActive] = useState(false);

    function handleClick() {
        setIsActive(true);
    }

    return (
        <div className="card">

            <img src={service.photo} alt="ai" />
            {isActive && (
                <Popup isActive={isActive} setIsActive={setIsActive} />
            )}

            <h2>{service.title}</h2>

            <p>{service.details}</p>

            <button className="btn-primary"
                onClick={handleClick}
            >See more</button>

        </div>
    );
}

function Popup({ isActive, setIsActive }) {

    return (
        <div className={isActive ? "pop-up active" : "pop-up"}>
            <div>
                <p>Our products will be available soon</p>
                <Link className="popup-btn" to="/Contact">Stay in Touch</Link>
            </div>
            <span onClick={() => setIsActive(false)}>x</span>
        </div>
    );
}