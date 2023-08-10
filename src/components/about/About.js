import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import "./about.scss"
import { animateAbout } from './aboutAnimation';
import aboutimage from "./business.jpg";

const faqs = [
    {
        question: "How do I get in touch with your team?",
        answer: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusantium, quaerat temporibus quas dolore provident nisi ut aliquid ratione beatae sequi aspernatur veniam repellendus."
    },
    {
        question: "How ethical are your business strategies?",
        answer: "Pariatur recusandae dignissimos fuga voluptas unde optio nesciunt commodi beatae, explicabo natus."
    },
    {
        question: "How do you handle personal data of users?",
        answer: "Excepturi velit laborum, perspiciatis nemo perferendis reiciendis aliquam possimus dolor sed! Dolore laborum ducimus veritatis facere molestias!"
    },
    {
        question: "Do you have any educational programs available now ?",
        answer: "Excepturi velit laborum, perspiciatis nemo perferendis reiciendis aliquam possimus dolor sed! Dolore laborum ducimus veritatis facere molestias!"
    }
];

export default function About() {

    useEffect(() => {
        animateAbout(".about-text", "left", 0);
        animateAbout("img", "bottom", 0);
        animateAbout(".faq-heading", "bottom", 0);
        animateAbout(".faq-container", "bottom", 400);

    });

    return (
        <div>
            <div className="about-container">

                <div className="about-text">
                    <h1>Revolutionizing the <span>AI</span> landscape</h1>
                    <h3>We believe good AI should be totally transparent, ethical and accessible to everyone</h3>
                    <Link className="btn-about" to="/Services">See our services</Link>
                </div>

                <div className="about-graphic">
                    <img src={aboutimage} alt="about" />
                    <img src={aboutimage} alt="about" />
                    <img src={aboutimage} alt="about" />
                </div>

            </div>
            <Faq />
        </div>
    );
}

// The FAQ

function Faq() {
    return (
        <div className='main-faq'>
            <h1 className='faq-heading'>See Our Frequently Asked Quetions</h1>
            {faqs.map((faq, ind)=> (
                <FaqItem faq={faq} key={faq.ind} />
            ))}

        </div>
    );

}

function FaqItem({faq}) {

    const [isOpen, setIsOpen] = useState(false);

    function handleToggle() {
        setIsOpen(!isOpen);
    }
    return (
        <div className='faq-container'>
            <div className={isOpen ? "faq-wrapper open" : "faq-wrapper"}
            onClick={handleToggle}>

                <div className='top'>
                    <p className={isOpen ? "question open" : "question"}>{faq.question}</p>
                    <p className='icon'>{isOpen ? "-": "+"}</p>

                </div>

                <div className={isOpen ? "bottom open" : "bottom"}>
                    <p className='answer'>{faq.answer}</p>
                </div>
            </div>
        </div>
    );
}