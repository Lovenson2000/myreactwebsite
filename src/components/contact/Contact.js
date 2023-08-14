import { useState } from "react";
import "./contact.scss";

export default function Contact() {

    const [userEmail, setUserEmail] = useState("");
    const [industry, setIndustry] = useState("");
    const [userMessage, setUserMessage] = useState("");
    const [isValid, setIsValid] = useState(false);

    function handleEmail(e) {
        setUserEmail(e.target.value);
    }

    function handleIndustry(e) {
        setIndustry(e.target.value)
    }

    function handleMessage(e) {
        setUserMessage(e.target.value);
    }
    function validateForm(e) {
        e.preventDefault();

        if (! /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(userEmail)) {
            alert("Enter a valid email address!");
            return false;
        }

        if (!userMessage.length > 0) {
            alert("You can't send an empty message");
            return false;
        }

        setIsValid(true);

    }

    return (
        <div className="contact-container">
            <h1 className="contact-heading">Fill in the form below</h1>
            <form className="form">
                <h3 className="form-heading">Let us know how we can assist you</h3>
                <div className="field-wrapper">
                    <h3>Enter your Email</h3>
                    <input
                        type="email"
                        name="email"
                        placeholder="Enter your email..."
                        required
                        onChange={handleEmail}
                    />
                </div>

                <div className="field-wrapper">
                    <h3>Choose your Industry</h3>
                    <select
                        className="select"
                        value={industry}
                        name="industry"
                        onChange={handleIndustry}>
                        <option value="software">Software</option>
                        <option value="hardware">Hardware</option>
                        <option value="healthcare">Healthcare</option>
                        <option value="robotics">Robotics</option>
                        <option value="virtual-reality">Virtual Reality</option>
                    </select>
                </div>

                <div className="field-wrapper">
                    <h3>What's your problem</h3>
                    <textarea
                        placeholder="Enter your message here..."
                        name="message"
                        onChange={handleMessage}>


                    </textarea>
                </div>

                <button
                    className="btn-submit"
                    onClick={validateForm}

                >Submit</button>
            </form>
            <AlertComponent
                email = {userEmail}
                industry = {industry}
                message = {userMessage}
                isValid={isValid}
                setIsValid={setIsValid}
                />
        </div>
    );
}

function AlertComponent({email, industry, message, isValid, setIsValid}){
    return(
        <div className={isValid ? "alert-container open" : "alert-container"}>

            <h3>Thanks for filling out our form</h3>
            <div className="details">
                <p>Email :{email}</p>
                <p>Industry: {industry}</p>
                <p>Message: {message}</p>
            </div>
            <span onClick={()=> setIsValid(false)}>X</span>
            
        </div>
    );
}