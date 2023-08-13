import "./contact.scss";

export default function Contact() {
    return (
        <div className="contact-container">
            <h1 className="contact-heading">Fill in the form below</h1>
            <form className="form">
                <h3 className="form-heading">Let us know how we can assist you</h3>
                <div className="field-wrapper">
                    <h3>Enter your Email</h3>
                    <input type="email" placeholder="Enter your email..." required/>
                </div>

                <div className="field-wrapper">
                    <h3>Choose your Industry</h3>
                    <select className="select">
                        <option value="software">Software</option>
                        <option value="hardware">Hardware</option>
                        <option value="healthcare">Healthcare</option>
                        <option value="robotics">Robotics</option>
                        <option value="virtual-reality">Virtual Reality</option>
                    </select>
                </div>

                <div className="field-wrapper">
                    <h3>What's your problem</h3>
                    <textarea placeholder="Enter your message here..."></textarea>
                </div>

                <button className="btn-submit">Submit</button>
            </form>
        </div>
    );
}